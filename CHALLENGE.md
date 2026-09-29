# 365 Days of Showing Up — bot handoff

## Roman's intent

Starting on his birthday, September 28, 2026, Roman is spending 365 days making things with AI. A day might be a new website, an art project, a machine-learning experiment, or a meaningful improvement to an existing program. The point is consistent, visible work and learning in public. It is not a promise of 365 separate polished applications.

RawmWare.com is the front door. Its existing desktop, experiments, clock, and other features stay in place. A desktop icon and menu item open [the challenge archive](https://rawmware.com/365-days). The [AI Blog announcement](https://rawmware.com/ai-blog/365-days-of-showing-up) explains the challenge.

## Current handoff

**Day 1's first project milestone is published: [Virtual iPhone Studio](https://rawmware.com/365-days/projects/day-001).** It includes the interactive 3D hardware and usable simulated screen. The production build and desktop/mobile browser checks passed. The playable build is now hosted on RawmWare through its existing GitHub-to-Vercel deployment, and Day 1 has a `demoUrl`. Roman clarified that every day should open the actual project immediately; notes and source are secondary. Live AI integration is intentionally deferred. Do not count the earlier archive launch work as a separate completed day.

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

The archive is project-first: clicking a published day opens its `demoUrl` directly, or `artifactUrl` for a non-web result. Notes and source are available through a separate secondary link. The site does not automatically deploy repository code. Host and verify each result before adding its HTTPS URL. Reviewed static builds may be hosted on RawmWare; keep their editable public source here and keep private website source separate. Do not publish a placeholder URL or direct visitors to GitHub as a substitute for a working project.

## Daily workflow

1. Confirm the intended day and what Roman wants to build. Continuing a project's next milestone does not automatically start a new day.
2. Create `days/day-001/` (or the matching zero-padded day) and build the project there. Improvements to another project should include public-safe changes, a link to the relevant public commit, and an explanation of the work.
3. Write its `README.md` using `templates/DAY.md`: describe the idea, work, AI involvement, how to run or view it, checks, and limitations.
4. Add or update one entry in `challenge.json`. Do not remove previous entries. Keep entries ordered by day.
5. Run the validator and the project's relevant checks. Verify the public demo/artifact link, then confirm clicking the day in the archive opens the actual result on desktop and mobile. Synopsis pages are secondary (`view=notes`), not the default project destination.
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

Editable source is in `days/day-001`. `npm run build:rawmware` builds with the asset base `/365-days/projects/day-001/`. The website deployment serves the generated index at `/365-days/projects/day-001` and its assets beneath that path. Publish future reviewed builds through the existing website deployment, verify the public URL, and keep the manifest current. The earlier separate CLI sign-in is not required for this GitHub deployment path. AI integration remains deferred until Roman chooses to continue it.
