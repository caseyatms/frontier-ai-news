#!/usr/bin/env python3
"""Validate a data.js dashboard snapshot before it ships to the live page.

data.js is plain JavaScript (an assignment to window.DASHBOARD_DATA), not
strict JSON, so parsing is delegated to node; every schema check happens here.

Usage: python3 tools/validate_data.py [path-to-data.js]   (default: data.js)
Exit:  0 = valid, 1 = invalid (every problem printed to stderr)
"""
import json
import os
import re
import subprocess
import sys
from datetime import datetime

REQUIRED_PROVIDERS = ("anthropic", "openai", "google", "xai")

# Evaluates the file with a stub window and prints the data object as JSON.
NODE_PARSE = (
    "const fs=require('fs');"
    "global.window={};"
    "try{eval(fs.readFileSync(process.argv[1],'utf8'))}"
    "catch(e){console.error(e.message);process.exit(2)}"
    "process.stdout.write(JSON.stringify("
    "window.DASHBOARD_DATA===undefined?null:window.DASHBOARD_DATA));"
)


def _iso_ok(value):
    try:
        datetime.fromisoformat(value.replace("Z", "+00:00"))
        return True
    except (AttributeError, ValueError):
        return False


def _check_items(items, where, errors):
    for i, n in enumerate(items):
        if not isinstance(n, dict):
            errors.append("%s[%d] is not an object" % (where, i))
            continue
        url = n.get("url")
        if not isinstance(url, str) or not re.match(r"^https?://", url, re.I):
            errors.append("%s[%d] has no http(s) url" % (where, i))
        title = n.get("title")
        if not isinstance(title, str) or not title.strip():
            errors.append("%s[%d] has no title" % (where, i))
        date = n.get("date")
        if (not isinstance(date, str)
                or not re.match(r"^\d{4}-\d{2}-\d{2}$", date)
                or not _iso_ok(date)):
            errors.append("%s[%d] has no valid YYYY-MM-DD date" % (where, i))


def validate(path):
    """Return a list of problems with the snapshot; empty list means valid."""
    try:
        proc = subprocess.run(
            ["node", "-e", NODE_PARSE, os.path.abspath(path)],
            capture_output=True, text=True, timeout=30)
    except FileNotFoundError:
        return ["node is required to parse data.js but was not found on PATH"]
    except subprocess.TimeoutExpired:
        return ["node timed out while parsing the file"]
    if proc.returncode != 0:
        detail = proc.stderr.strip() or "unknown parse error"
        return ["does not parse as JavaScript: %s" % detail]
    try:
        data = json.loads(proc.stdout)
    except ValueError:
        return ["window.DASHBOARD_DATA could not be serialized to JSON"]
    if not isinstance(data, dict):
        return ["window.DASHBOARD_DATA is missing or is not an object"]

    errors = []

    last_updated = data.get("lastUpdated")
    if not isinstance(last_updated, str) or not _iso_ok(last_updated):
        errors.append("lastUpdated is missing or not an ISO timestamp: %r"
                      % (last_updated,))

    frontier = data.get("frontier")
    if not isinstance(frontier, list) or not frontier:
        errors.append("frontier is missing, not an array, or empty")
    else:
        _check_items(frontier, "frontier", errors)

    providers = data.get("providers")
    if not isinstance(providers, dict):
        errors.append("providers is missing or not an object")
    else:
        for name in REQUIRED_PROVIDERS:
            p = providers.get(name)
            if not isinstance(p, dict):
                errors.append("providers.%s is missing or not an object" % name)
                continue
            if not isinstance(p.get("label"), str) or not p["label"].strip():
                errors.append("providers.%s.label is missing or empty" % name)
            if not isinstance(p.get("models"), list):
                errors.append("providers.%s.models is missing or not an array"
                              % name)
            news = p.get("news")
            if not isinstance(news, list):
                errors.append("providers.%s.news is missing or not an array"
                              % name)
            else:
                _check_items(news, "providers.%s.news" % name, errors)

    return errors


def main(argv):
    path = argv[1] if len(argv) > 1 else "data.js"
    if not os.path.isfile(path):
        print("validate_data: no such file: %s" % path, file=sys.stderr)
        return 1
    errors = validate(path)
    if errors:
        for e in errors:
            print("validate_data: %s: %s" % (path, e), file=sys.stderr)
        return 1
    print("validate_data: %s OK" % path)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
