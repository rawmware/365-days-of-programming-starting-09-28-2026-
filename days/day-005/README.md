# Day 5 — github.fetch

**Challenge date:** October 2, 2026  
**Kind:** Website / GitHub automation

## What I made

[github.fetch](https://rawmware.com/365-days/projects/day-005) is a living discovery feed for open-source projects. It finds fresh public GitHub repositories, works out what each project is, and gives visitors the quickest useful next step: run it in a browser, read it, open a cloud workspace, or fork it.

The source and automation live in [rawmware/github.fetch](https://github.com/rawmware/github.fetch). The Day 5 application is hosted on RawmWare now, while its portable static frontend can move to a standalone domain later.

## What is included

- A live, searchable feed with browser-access filters and sorting.
- Stack detection, one-click launch links, setup commands, license context, and a make-it-yours AI prompt for every repository.
- A visible proof meter that counts real `scout:` commits on the repository's default branch for the current UTC day.
- A GitHub Actions pulse that runs every 15 minutes, catches up after delayed runs, and targets at least 60 authored commits per UTC day.

## The 60-a-day requirement

The pulse creates one commit per generated or refreshed guide on `main`. Its pacing logic has a hard minimum target of 60, and the production interface checks GitHub's public commit history rather than displaying a hard-coded success claim. Commits use the repository owner's verified GitHub no-reply address so they can qualify for that account's contribution graph, subject to GitHub's own contribution-processing rules.

## Verification

- The pulse unit tests pass, including the catch-up and minimum-60 pacing cases.
- A real workflow dispatch successfully created 20 distinct guide commits before the remaining batches were queued.
- The app was checked with live feed and commit API responses, search/filter/sort interactions, copy controls, external launch links, and a 390px mobile viewport.
- The challenge manifest validator passes with Day 5 included.

## Limitations

- GitHub Actions schedules may start late, so the workflow catches up in later runs rather than assuming every cron fires exactly on time.
- GitHub decides when qualifying commits appear on a profile contribution graph. The app proves authored commits on `main`; it does not impersonate GitHub's contribution graph.
- Launcher availability and third-party repository behavior can change. Visitors should review licenses and project documentation before reusing code.
