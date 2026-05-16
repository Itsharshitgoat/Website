const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const file = '/Users/xlr-01/Downloads/Website/index.html';
const content = fs.readFileSync(file, 'utf8');
const dom = new JSDOM(content);
const npPill = dom.window.document.getElementById('now-playing-pill');
if (!npPill) console.log("Not found");
else console.log(npPill.className);
