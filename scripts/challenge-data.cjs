(function (root) {
  'use strict';
  function validateChallenge(data) {
    const fail = message => { throw new Error('Invalid challenge: ' + message); };
    if (!data || data.schemaVersion !== 1 || data.title !== '365 Days of Showing Up' || data.startDate !== '2026-09-28' || data.totalDays !== 365 || !Array.isArray(data.entries)) fail('header');
    const seen = new Set();
    for (const e of data.entries) {
      if (!e || !Number.isInteger(e.day) || e.day < 1 || e.day > 365 || seen.has(e.day)) fail('day number');
      seen.add(e.day);
      const expected = new Date(Date.UTC(2026, 8, 28) + (e.day - 1) * 86400000).toISOString().slice(0, 10);
      if (e.date !== expected) fail('date for day ' + e.day);
      for (const field of ['title', 'kind', 'summary']) if (typeof e[field] !== 'string' || !e[field].trim() || e[field].length > (field === 'summary' ? 1200 : 180)) fail(field);
      if (!['in-progress', 'published'].includes(e.status)) fail('status');
      const prefix = 'days/day-' + String(e.day).padStart(3, '0');
      if (typeof e.sourcePath !== 'string' || !new RegExp('^' + prefix + '(?:/[a-zA-Z0-9_-]+)*$').test(e.sourcePath)) fail('sourcePath');
      if (!Array.isArray(e.notes) || e.notes.length > 30 || e.notes.some(n => typeof n !== 'string' || !n.trim() || n.length > 2000)) fail('notes');
      for (const field of ['demoUrl', 'artifactUrl', 'writeupUrl']) {
        if (e[field] === undefined) continue;
        if (typeof e[field] !== 'string' || e[field].length > 2048) fail(field);
        let url;
        try { url = new URL(e[field]); } catch { fail(field); }
        if (url.protocol !== 'https:' || url.username || url.password) fail(field);
      }
    }
    return data;
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = validateChallenge;
  else root.validateChallenge = validateChallenge;
})(typeof globalThis !== 'undefined' ? globalThis : this);
