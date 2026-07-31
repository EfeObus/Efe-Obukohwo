const puppeteer = require('puppeteer');
const path = require('path');
const { buildPortfolioHTML } = require('./generate-portfolio-html.js');
const portfolioData = require('./portfolio-data.js');

// Resume PDFs are rendered directly from their live HTML page (not from the DOCX),
// so the downloaded PDF is pixel-identical to what the page itself looks like.
async function renderResumeFromHTML(htmlFile, outputPdfPath) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        await page.goto(`file://${path.join(__dirname, htmlFile)}`, { waitUntil: 'networkidle0' });
        await page.emulateMediaType('print');
        await page.pdf({
            path: outputPdfPath,
            format: 'Letter',
            printBackground: true,
            margin: { top: '0.35in', right: '0.35in', bottom: '0.35in', left: '0.35in' },
            displayHeaderFooter: false
        });
        return outputPdfPath;
    } finally {
        await browser.close();
    }
}

async function generateResumePDF() {
    const outputPath = path.join(__dirname, 'documents', 'Efe_Obukohwo_Resume.pdf');
    console.log('Generating resume PDF from resume.html...');
    const resultPath = await renderResumeFromHTML('resume.html', outputPath);
    console.log(`Resume PDF generated successfully: ${resultPath}`);
    return resultPath;
}

async function generateDataAnalystResumePDF() {
    const outputPath = path.join(__dirname, 'documents', 'Efe_Obukohwo_Resume_DataAnalyst.pdf');
    console.log('Generating Data Analyst resume PDF from resume-data-analyst.html...');
    const resultPath = await renderResumeFromHTML('resume-data-analyst.html', outputPath);
    console.log(`Data Analyst resume PDF generated successfully: ${resultPath}`);
    return resultPath;
}

async function generateDeveloperResumePDF() {
    const outputPath = path.join(__dirname, 'documents', 'Efe_Obukohwo_Resume_Developer.pdf');
    console.log('Generating Developer resume PDF from resume-developer.html...');
    const resultPath = await renderResumeFromHTML('resume-developer.html', outputPath);
    console.log(`Developer resume PDF generated successfully: ${resultPath}`);
    return resultPath;
}

async function generateTeacherResumePDF() {
    const outputPath = path.join(__dirname, 'documents', 'Efe_Obukohwo_Resume_Teacher.pdf');
    console.log('Generating Teacher resume PDF from resume-teacher.html...');
    const resultPath = await renderResumeFromHTML('resume-teacher.html', outputPath);
    console.log(`Teacher resume PDF generated successfully: ${resultPath}`);
    return resultPath;
}

async function generatePortfolioPDF() {
    const outputPath = path.join(__dirname, 'documents', 'Efe_Obukohwo_Portfolio.pdf');

    console.log('Generating portfolio PDF from brand-styled HTML template...');
    const html = buildPortfolioHTML(portfolioData);

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        await page.pdf({
            path: outputPath,
            format: 'A4',
            printBackground: true,
            margin: { top: '0in', right: '0in', bottom: '0in', left: '0in' },
            displayHeaderFooter: false
        });
    } finally {
        await browser.close();
    }

    console.log(`Portfolio PDF generated successfully: ${outputPath}`);
    return outputPath;
}

module.exports = {
    generateResumePDF,
    generateDataAnalystResumePDF,
    generateDeveloperResumePDF,
    generateTeacherResumePDF,
    generatePortfolioPDF
};

if (require.main === module) {
    (async () => {
        const outputs = [];
        outputs.push(await generateResumePDF());
        outputs.push(await generateDataAnalystResumePDF());
        outputs.push(await generateDeveloperResumePDF());
        outputs.push(await generateTeacherResumePDF());

        const portfolioOutput = await generatePortfolioPDF();
        if (portfolioOutput) {
            outputs.push(portfolioOutput);
        }

        console.log('PDF generation complete:', outputs);
        process.exit(0);
    })().catch(error => {
        console.error('Failed to generate PDF:', error);
        process.exit(1);
    });
}
