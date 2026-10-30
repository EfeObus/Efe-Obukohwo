#!/usr/bin/env bash
# Blocks commits that would publish something private. This repo deploys to a public
# GitHub Pages site, so anything committed is downloadable forever (git history is permanent).
#
#   scripts/check-repo-safety.sh          check staged files (pre-commit hook)
#   scripts/check-repo-safety.sh --all    check every tracked file (CI)
set -euo pipefail

if [[ "${1:-}" == "--all" ]]; then
    files=$(git ls-files)
else
    files=$(git diff --cached --name-only --diff-filter=ACMR)
fi

fail=0
report() { echo "  ✗ $1"; fail=1; }

while IFS= read -r f; do
    [[ -z "$f" ]] && continue
    case "$f" in
        # The vault only ever holds ciphertext.
        vault/*.enc) ;;
        vault/*) report "$f: only encrypted *.enc files belong in vault/ (run scripts/build-vault.js)" ;;
        # Environment/secret files.
        .env|*/.env|.env.*|*.pem|*.key|*.p12|*.pfx|*id_rsa*) report "$f: looks like a secret/key file" ;;
        # Documents and images are only allowed in the folders the site serves on purpose.
        documents/*|images/*|vendor/*|Docs/*) ;;
        *.pdf|*.PDF|*.doc|*.docx|*.xls|*.xlsx|*.csv|*.jpg|*.jpeg|*.JPG|*.JPEG|*.png|*.PNG|*.heic|*.HEIC|*.zip)
            report "$f: documents/images must live in documents/, images/ or Docs/ (or be encrypted into vault/)" ;;
    esac
done <<< "$files"

if command -v gitleaks >/dev/null 2>&1; then
    if [[ "${1:-}" == "--all" ]]; then
        gitleaks detect --no-banner --redact || fail=1
    else
        gitleaks protect --staged --no-banner --redact || fail=1
    fi
fi

if [[ $fail -ne 0 ]]; then
    echo "Repo safety check failed. Nothing was committed."
    exit 1
fi
