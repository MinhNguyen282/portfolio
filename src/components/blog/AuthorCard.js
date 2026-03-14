import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope } from 'react-icons/fa';
import LazyImage from '../LazyImage';
import { getStrapiMediaUrl } from '../../services/strapi';

const FALLBACK_AUTHOR = {
  name: 'Nguyễn Hữu Hoàng Minh',
  bio: 'Computer Science student passionate about full-stack development, AI, and building things that matter.',
  github: 'https://github.com/nhhminh',
  linkedin: 'https://linkedin.com/in/nhhminh',
};

const AuthorCard = ({ author }) => {
  const data = author || FALLBACK_AUTHOR;
  const avatarUrl = author ? getStrapiMediaUrl(author.avatar) : null;

  const socials = [
    { url: data.github,   icon: FaGithub,   label: 'GitHub' },
    { url: data.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
    { url: data.website,  icon: FaGlobe,    label: 'Website' },
    { url: data.email ? `mailto:${data.email}` : null, icon: FaEnvelope, label: 'Email' },
  ].filter((s) => s.url);

  return (
    <div
      className="relative mt-16 opacity-0 animate-fadeIn"
      style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
    >
      {/* Gradient border glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-px rounded-3xl"
        style={{
          background:
            'linear-gradient(135deg, rgba(249,115,22,0.5) 0%, rgba(249,115,22,0.08) 40%, transparent 70%)',
        }}
      />

      {/* Card body */}
      <div className="relative rounded-3xl overflow-hidden bg-ink-900 dark:bg-ink-950 border border-ink-800/60 dark:border-ink-800">

        {/* Subtle grid texture overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg,transparent,transparent 23px,rgba(255,255,255,.5) 23px,rgba(255,255,255,.5) 24px),repeating-linear-gradient(90deg,transparent,transparent 23px,rgba(255,255,255,.5) 23px,rgba(255,255,255,.5) 24px)',
          }}
        />

        {/* Accent corner glow */}
        <div
          aria-hidden="true"
          className="absolute -top-12 -left-12 w-40 h-40 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'rgba(249,115,22,0.12)' }}
        />

        <div className="relative px-8 py-8 md:px-10 md:py-9">
          {/* "Written by" eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-[10px] font-mono uppercase tracking-[0.2em] font-semibold"
              style={{ color: '#f97316' }}
            >
              Written by
            </span>
            <span
              aria-hidden="true"
              className="flex-1 h-px max-w-[4rem]"
              style={{ background: 'linear-gradient(90deg,rgba(249,115,22,0.6),transparent)' }}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              {/* Outer glow ring */}
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-full blur-md pointer-events-none"
                style={{ background: 'rgba(249,115,22,0.25)' }}
              />
              <div
                className="relative w-20 h-20 rounded-full overflow-hidden"
                style={{
                  boxShadow: '0 0 0 2px rgba(249,115,22,0.5), 0 0 0 4px rgba(249,115,22,0.1)',
                }}
              >
                {avatarUrl ? (
                  <LazyImage
                    src={avatarUrl}
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Monogram fallback */
                  <div
                    className="w-full h-full flex items-center justify-center font-display font-bold text-2xl text-white"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(249,115,22,0.8) 0%, rgba(234,88,12,0.9) 100%)',
                    }}
                  >
                    {data.name
                      .split(' ')
                      .map((w) => w[0])
                      .slice(-2)
                      .join('')
                      .toUpperCase()}
                  </div>
                )}
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-xl font-bold text-white leading-tight mb-2 tracking-tight">
                {data.name}
              </h3>

              {data.bio && (
                <p className="text-ink-400 text-sm leading-relaxed mb-5 font-body">
                  {data.bio}
                </p>
              )}

              {/* Social links */}
              {socials.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {socials.map(({ url, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={url}
                      target={url.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium font-mono transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.55)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(249,115,22,0.15)';
                        e.currentTarget.style.borderColor = 'rgba(249,115,22,0.5)';
                        e.currentTarget.style.color = '#f97316';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                      }}
                      aria-label={`${data.name} on ${label}`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
