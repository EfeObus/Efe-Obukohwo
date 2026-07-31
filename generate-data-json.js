// Exports portfolio-data.js as valid JSON so external clients (the companion mobile app)
// can fetch it directly, since portfolio-data.js itself is JS (const + module.exports),
// not parseable JSON.

const fs = require('fs');
const path = require('path');

const data = require('./portfolio-data.js');

function generateDataJSON() {
    console.log('Generating portfolio-data.json from portfolio-data.js...');
    const outputPath = path.join(__dirname, 'portfolio-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`portfolio-data.json generated successfully: ${outputPath}`);
    return outputPath;
}

module.exports = { generateDataJSON };

if (require.main === module) {
    try {
        generateDataJSON();
        process.exit(0);
    } catch (error) {
        console.error('Failed to generate portfolio-data.json:', error);
        process.exit(1);
    }
}
