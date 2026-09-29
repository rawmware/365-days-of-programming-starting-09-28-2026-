# 365 Days of Showing Up — bot handoff

## Roman's intent

Starting on his birthday, September 28, 2026, Roman is spending 365 days making things with AI. A day might be a new website, an art project, a machine-learning experiment, or a meaningful improvement to an existing program. The point is consistent, visible work and learning in public. It is not a promise of 365 separate polished applications.

RawmWare.com is the front door. Its existing desktop, experiments, clock, and other features stay in place. A desktop icon and menu item open [the challenge archive](https://rawmware.com/365-days). The [AI Blog announcement](https://rawmware.com/ai-blog/365-days-of-showing-up) explains the challenge.

## Current handoff

**Day 1's first project milestone is published: [Virtual iPhone Studio](days/day-001).** It includes the interactive 3D hardware and usable simulated screen. The production build and desktop/mobile browser checks passed, and the archive and Day 1 page were verified to show the published entry. A playable Vercel deployment and its `demoUrl` are still pending Vercel authentication. Live AI integration is intentionally deferred. Do not count the earlier archive launch work as a separate completed day.

- Day 1: September 28, 2026.
- Day 365: September 27, 2027.
- Calendar context: America/New_York. Dates in the manifest are date-only strings, not timestamps.
- Public repository: https://github.com/rawmware/365-days-of-programming-starting-09-28-2026-
- Archive: https://rawmware.com/365-days
- Day 1 page: https://rawmware.com/365-days/day?day=1
- Existing website source remains private. Public-repository contributors do not need access to it to publish a daily entry.

## How the site reads this repository

The archive fetches `challenge.json` from this repository's `main` branch when loaded. It lists all 365 calendar days, and fills in the title, status, summary, notes, and links for entries present in the manifest. Only entries marked `published` count as published work. Empty days do not count as completed or missed. No streak is inferred from the date.

The website keeps a saved manifest snapshot for times when GitHub cannot be reached, and labels it as a saved snapshot if refresh fails. Changes can take a few minutes to appear because of upstream caching. Refresh and verify both the archive and that day's page after publishing.

The site does not execute repository code or automatically deploy projects. Choose suitable hosting for an actual demo and add its verified HTTPS URL. Non-web projects can link to a public artifact or write-up. Do not put runnable daily code into the private website merely to make an entry appear.

## Daily workflow

1. Confirm the intended day and what Roman wants to build. Continuing a project's next milestone does not automatically start a new day.
2. Create `days/day-001/` (or the matching zero-padded day) and build the project there. Improvements to another project should include public-safe changes, a link to the relevant public commit, and an explanation of the work.
3. Write its `README.md` using `templates/DAY.md`: describe the idea, work, AI involvement, how to run or view it, checks, and limitations.
4. Add or update one entry in `challenge.json`. Do not remove previous entries. Keep entries ordered by day.
5. Run the validator and the project's relevant checks. Verify demo/artifact links if supplied.
6. When authorized, commit and push the public files to `main`, then verify the GitHub entry and RawmWare page. Report actual results and hand off remaining work.

## Manifest contract (version 1)

Keep the root `schemaVersion`, `title`, `startDate`, and `totalDays` values as supplied. `entries` is an array containing only actual started or published work. Omit a day until work starts.

Each entry requires `day` (integer 1–365), `date` (YYYY-MM-DD matching its calendar day), `title`, `kind`, `summary`, `status` (`in-progress` or `published`), `sourcePath` (existing directory under `days/day-NNN/`), and `notes` (array of plain-text strings). Optional `demoUrl`, `artifactUrl`, and `writeupUrl` must be public HTTPS URLs. Omit unused optional fields. Text renders as plain text, not HTML or Markdown. Put longer Markdown explanations in the day's README.

Example structure only — this is not a completed project and must not be copied into the live index without replacing its contents:

```json
{
  "day": 1,
  "date": "2026-09-28",
  "title": "Replace with the actual project title",
  "kind": "Website",
  "summary": "Describe the actual work in one or two sentences.",
  "status": "in-progress",
  "sourcePath": "days/day-001",
  "notes": ["Record a real change, result, or limitation."]
}
```

Suggested kinds include Website, Program, Improvement, Art, and Machine learning. The validator accepts other descriptive text. Add multiple changes from the same day to that day's notes and folder; keep one manifest entry per day.

## Continuing Day 1

After Vercel authentication, deploy `days/day-001` as a Vite project, verify the public demo, and add its HTTPS URL as Day 1's `demoUrl` in `challenge.json`. Re-run the validator, publish the manifest update, and verify the new demo link on RawmWare. Do not claim the playable demo is hosted until this is verified. The existing RawmWare website source stays separate.
