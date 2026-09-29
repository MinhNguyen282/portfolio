#!/usr/bin/env python3
"""Regenerate the responsive image derivatives served from public/.

Full-resolution sources live in assets/originals/ and are never served. This
script produces the width variants that the components actually reference, so
the public/ set can always be rebuilt from source:

    python3 scripts/optimize-images.py

Requires Pillow (WebP/JPEG) and ImageMagick's `convert` (palette PNG).

Note on the PNG: ImageMagick's quantiser produces a far smaller 16-colour PNG
than Pillow's (19KB vs 262KB for the EduSmart logo), so that one output is
delegated to `convert`.
"""

import os
import shutil
import subprocess
import sys

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "assets", "originals")
OUT = os.path.join(ROOT, "public")

# Hero avatar renders in a square object-cover box at 288/320/384 CSS px,
# so 384 covers 1x and 768 covers 2x DPR.
AVATAR_WIDTHS = (384, 768)
# Project card art renders at roughly a third of a 1440px viewport.
LOGO_WIDTHS = (600, 1200)


def cover_square(path, size):
    """Centre-crop to a square at `size` px, matching CSS object-cover."""
    im = Image.open(path).convert("RGB")
    w, h = im.size
    scale = max(size / w, size / h)
    im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    w, h = im.size
    left, top = (w - size) // 2, (h - size) // 2
    return im.crop((left, top, left + size, top + size))


def kb(path):
    return os.path.getsize(path) / 1024


def build_avatar():
    src = os.path.join(SRC, "avatar.jpg")
    for size in AVATAR_WIDTHS:
        im = cover_square(src, size)
        im.save(os.path.join(OUT, f"avatar-{size}.webp"), "WEBP", quality=72, method=6)
        im.save(os.path.join(OUT, f"avatar-{size}.jpg"), "JPEG",
                quality=82, optimize=True, progressive=True)
    # Canonical fallback, also used as the Open Graph image.
    cover_square(src, max(AVATAR_WIDTHS)).save(
        os.path.join(OUT, "avatar.jpg"), "JPEG",
        quality=82, optimize=True, progressive=True)


def build_logo():
    src = os.path.join(SRC, "edusmart-logo.png")
    im = Image.open(src).convert("RGB")
    for w in LOGO_WIDTHS:
        im.resize((w, round(im.height * w / im.width)), Image.LANCZOS).save(
            os.path.join(OUT, f"edusmart-logo-{w}.webp"), "WEBP", quality=85, method=6)

    if not shutil.which("convert"):
        print("! ImageMagick `convert` not found - skipping palette PNG fallback",
              file=sys.stderr)
        return
    subprocess.run(
        ["convert", src, "-resize", f"{max(LOGO_WIDTHS)}x", "-strip",
         "-colors", "16", "-define", "png:compression-level=9",
         os.path.join(OUT, "edusmart-logo.png")],
        check=True,
    )


def main():
    if not os.path.isdir(SRC):
        sys.exit(f"missing source directory: {SRC}")
    build_avatar()
    build_logo()

    print("Regenerated:")
    for name in sorted(os.listdir(OUT)):
        if name.startswith(("avatar", "edusmart-logo")):
            print(f"  {name:<28} {kb(os.path.join(OUT, name)):7.1f} KB")


if __name__ == "__main__":
    main()
