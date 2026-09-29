const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const validate = require('./challenge-data.cjs');
const data = validate(JSON.parse(fs.readFileSync(path.join(root, 'challenge.json'), 'utf8')));
for (const entry of data.entries) {
  const folder = path.join(root, entry.sourcePath);
  if (!fs.statSync(folder).isDirectory() || !fs.existsSync(path.join(folder, 'README.md'))) {
    throw new Error(`Day ${entry.day}: sourcePath needs a directory with README.md`);
  }
}
console.log(`Valid challenge: ${data.entries.length} started entries, ${data.entries.filter(e => e.status === 'published').length} published, 365 calendar days.`);
