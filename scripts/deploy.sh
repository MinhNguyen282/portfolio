#!/bin/bash
# ─────────────────────────────────────────────────────────────
#  Deploy portfolio frontend to VPS
#  Run from your local machine:  ./scripts/deploy.sh
#
#  Strategy: Build locally, rsync build/ to VPS.
#  Caddy serves the static files directly — no process restart.
#
#  This script is idempotent — safe to run repeatedly.
# ─────────────────────────────────────────────────────────────

set -euo pipefail

VPS_USER="root"
VPS_HOST="160.191.50.220"
VPS_SSH="${VPS_USER}@${VPS_HOST}"
REMOTE_DIR="/var/www/nhhminh.dev"
DOMAIN="https://nhhminh.dev"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/id_ed25519}"
SSH_OPTS="-o StrictHostKeyChecking=accept-new -T -q"
LOCAL_DIR="$(cd "$(dirname "$0")/.." && pwd)"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m'

echo ""
echo -e "${CYAN}═══════════════════════════════════════════${NC}"
echo -e "${CYAN}  Portfolio — Deploy to VPS${NC}"
echo -e "${CYAN}═══════════════════════════════════════════${NC}"
echo ""
echo -e "  Source:  ${LOCAL_DIR}/build"
echo -e "  Target:  ${VPS_SSH}:${REMOTE_DIR}"
echo ""

SSH_CMD="ssh ${SSH_OPTS}"
if [ -f "${SSH_KEY}" ]; then
  SSH_CMD="ssh -i ${SSH_KEY} ${SSH_OPTS}"
fi

# ── 1. Build locally ─────────────────────────────────────────
echo -e "${YELLOW}▸ [1/3] Building portfolio locally...${NC}"

cd "${LOCAL_DIR}"
npm run build 2>&1 | tail -8

if [ ! -d "${LOCAL_DIR}/build" ]; then
  echo -e "${RED}✗ Build failed — build/ directory not found${NC}"
  exit 1
fi

echo -e "${GREEN}✓ Local build successful${NC}"

# ── 2. Sync build/ to VPS ────────────────────────────────────
echo ""
echo -e "${YELLOW}▸ [2/3] Syncing build output to VPS...${NC}"

rsync -avz --progress \
  -e "${SSH_CMD}" \
  --delete \
  "${LOCAL_DIR}/build/" \
  "${VPS_SSH}:${REMOTE_DIR}/"

echo -e "${GREEN}✓ Files synced${NC}"

# ── 3. Health check ──────────────────────────────────────────
echo ""
echo -e "${YELLOW}▸ [3/3] Verifying site is live...${NC}"

HTTP_STATUS=$(curl -sI "${DOMAIN}" | head -1 | awk '{print $2}')

if [ "${HTTP_STATUS}" = "200" ]; then
  echo -e "${GREEN}✓ Site is live — HTTP ${HTTP_STATUS}${NC}"
else
  echo -e "${RED}⚠ Unexpected status: HTTP ${HTTP_STATUS} — check Caddy logs on VPS${NC}"
fi

echo ""
echo -e "${GREEN}═══════════════════════════════════════════${NC}"
echo -e "${GREEN}  ✓ Deployment complete!${NC}"
echo ""
echo -e "  Site:  ${DOMAIN}"
echo ""
echo -e "  Useful commands:"
echo -e "    ssh ${VPS_SSH} 'systemctl status caddy'  ${CYAN}# Check Caddy${NC}"
echo -e "    ssh ${VPS_SSH} 'journalctl -u caddy -f'  ${CYAN}# Caddy logs${NC}"
echo -e "${GREEN}═══════════════════════════════════════════${NC}"
