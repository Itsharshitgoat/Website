const fs = require('fs');
const file = '/Users/xlr-01/Downloads/Website/index.html';
const content = fs.readFileSync(file, 'utf8');

// Extract all content inside <script> tags
const scriptMatches = content.match(/<script[\s\S]*?>([\s\S]*?)<\/script>/gi);

if (scriptMatches) {
    scriptMatches.forEach((script, index) => {
        // Strip out the tags for checking syntax
        const code = script.replace(/<script[\s\S]*?>/, '').replace(/<\/script>/, '');
        fs.writeFileSync(`temp_script_${index}.js`, code);
        try {
            require('child_process').execSync(`node -c temp_script_${index}.js`);
            console.log(`Script ${index}: OK`);
        } catch (e) {
            console.log(`Script ${index}: Syntax Error!`);
            console.log(e.stderr ? e.stderr.toString() : e.message);
        }
        fs.unlinkSync(`temp_script_${index}.js`);
    });
} else {
    console.log("No scripts found.");
}