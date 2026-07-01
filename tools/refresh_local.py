#!/usr/bin/env python3
"""
Optional local helper for the Frontier AI & Agentic News dashboard.

Most people never need this — the ⚡ Refresh now button in the page (bring your
own API key) covers everyone. This is for folks who regenerate data.js from a
script or from Claude Code and want timestamped local backups.

  python3 tools/refresh_local.py archive           # snapshot the current data.js
  python3 tools/refresh_local.py archive --note "…" # snapshot + label

No secrets, no network, no database. Archives go to ./archive/ (gitignored).
"""
import argparse, datetime, os, shutil

ROOT    = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA    = os.path.join(ROOT, "data.js")
ARCHIVE = os.path.join(ROOT, "archive")

def archive(args):
    if not os.path.exists(DATA):
        raise SystemExit("data.js not found next to the repo root.")
    os.makedirs(ARCHIVE, exist_ok=True)
    ts = datetime.datetime.now().strftime("%Y-%m-%dT%H%M%S")
    dest = os.path.join(ARCHIVE, f"data.{ts}.js")
    shutil.copy2(DATA, dest)
    print(f"[archived] {dest}")
    if args.note:
        with open(os.path.join(ARCHIVE, "notes.log"), "a") as f:
            f.write(f"{ts}\t{args.note}\n")
        print(f"[note] {args.note}")

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    a = sub.add_parser("archive"); a.add_argument("--note", default="")
    args = ap.parse_args()
    {"archive": archive}[args.cmd](args)
