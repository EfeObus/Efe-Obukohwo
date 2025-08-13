const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateResumePDF() {
    try {
        console.log('Starting PDF generation...');
        
        // Launch browser
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // Set the HTML content
        const htmlPath = path.join(__dirname, 'resume.html');
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        
        await page.setContent(htmlContent, { 
            waitUntil: 'networkidle0' 
        });
        
        // Generate PDF
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0.5in',
                right: '0.5in',
                bottom: '0.5in',
                left: '0.5in'
            },
            displayHeaderFooter: false,
            preferCSSPageSize: true
        });
        
        // Save PDF
        const outputPath = path.join(__dirname, 'Efe_Obukohwo_Resume.pdf');
        fs.writeFileSync(outputPath, pdfBuffer);
        
        console.log(`PDF generated successfully: ${outputPath}`);
        
        await browser.close();
        
        return outputPath;
    } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
    }
}

// Export the function for use in other modules
module.exports = { generateResumePDF };

// Run if called directly
if (require.main === module) {
    generateResumePDF()
        .then(path => {
            console.log('Resume PDF generated at:', path);
            process.exit(0);
        })
        .catch(error => {
            console.error('Failed to generate PDF:', error);
            process.exit(1);
        });
}
