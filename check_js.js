const fs = require('fs');
const file = '/Users/xlr-01/Downloads/Website/index.html';
const content = fs.readFileSync(file, 'utf8');

const jsMatch = content.match(/const LASTFM_USERNAME[\s\S]*?setInterval\(fetchNowPlaying, 15000\);\n    \}/);
if (jsMatch) {
    console.log(jsMatch[0]);
} else {
    console.log('Not found');
}
