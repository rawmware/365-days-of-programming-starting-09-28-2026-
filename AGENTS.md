# Instructions for the next bot

Read [CHALLENGE.md](CHALLENGE.md) before working. Roman's challenge is **365 Days of Showing Up**, September 28, 2026 through September 27, 2027, inclusive. This is the public challenge repository. The existing RawmWare website source is private and stays separate.

- The challenge launch is infrastructure, not Day 1's project. Day 1 now contains Virtual iPhone Studio; read its README and the current handoff in CHALLENGE.md before continuing.
- Work with Roman on the requested day. A new program, an improvement to existing software, digital art, or a machine-learning experiment can all count.
- Use `days/day-NNN/` for a day's public source and notes. Preserve past work. Do not invent completed days, projects, results, tests, streaks, or model names.
- Update the root `challenge.json` so RawmWare.com can display the entry. Dates are fixed calendar dates: Day 1 = 2026-09-28; Day 365 = 2027-09-27. They do not shift if a session happens later. Use `in-progress` until the work and its verification are finished; use `published` only for real, documented work.
- Run `node scripts/validate-challenge.cjs` before publishing. Check source paths and every demo, artifact, and write-up link. The validator checks structure, not whether a URL is deployed.
- Publish only the challenge's intended public code and notes. Never copy private website source, credentials, personal files, private handoffs, or local filesystem paths here. Do not change repository visibility.
- A push updates the public record. The website reads the manifest on page load; allow for GitHub's cache and verify the public page before claiming it reflects the update. Publishing code to GitHub does not host a live demo automatically.
- Follow the user's authorization for commits and publishing. Record what changed, how it was checked, and any limitations. Do not claim a project is live based only on local output.
