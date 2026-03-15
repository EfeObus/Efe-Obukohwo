const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawnSync } = require('child_process');

function convertDocxToHtml(docxPath) {
    const htmlPath = path.join(os.tmpdir(), `${path.basename(docxPath, '.docx')}-${Date.now()}.html`);
    const result = spawnSync('textutil', ['-convert', 'html', '-output', htmlPath, docxPath], {
        encoding: 'utf8'
    });

    if (result.status !== 0) {
        throw new Error(`textutil conversion failed: ${result.stderr || result.stdout || 'unknown error'}`);
    }

    return htmlPath;
}

async function convertDocxFileToPdf(docxPath, outputPdfPath) {
    if (!fs.existsSync(docxPath)) {
        throw new Error(`DOCX file not found: ${docxPath}`);
    }

    const htmlPath = convertDocxToHtml(docxPath);
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

        await page.pdf({
            path: outputPdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0.5in',
                right: '0.5in',
                bottom: '0.5in',
                left: '0.5in'
            },
            displayHeaderFooter: false
        });

        return outputPdfPath;
    } finally {
        await browser.close();
        if (fs.existsSync(htmlPath)) {
            fs.unlinkSync(htmlPath);
        }
    }
}

async function generateResumePDF() {
    const docxPath = path.join(__dirname, 'Efe_Obukohwo_Resume.docx');
    const outputPath = path.join(__dirname, 'Efe_Obukohwo_Resume.pdf');

    console.log('Generating resume PDF from DOCX source...');
    const resultPath = await convertDocxFileToPdf(docxPath, outputPath);
    console.log(`Resume PDF generated successfully: ${resultPath}`);

    return resultPath;
}

async function generatePortfolioPDF() {
    const docxPath = path.join(__dirname, 'Efe_Obukohwo_Portfolio.docx');
    const outputPath = path.join(__dirname, 'Efe_Obukohwo_Portfolio.pdf');

    if (!fs.existsSync(docxPath)) {
        return null;
    }

    console.log('Generating portfolio PDF from DOCX source...');
    const resultPath = await convertDocxFileToPdf(docxPath, outputPath);
    console.log(`Portfolio PDF generated successfully: ${resultPath}`);

    return resultPath;
}

module.exports = { generateResumePDF, generatePortfolioPDF };

if (require.main === module) {
    (async () => {
        const outputs = [];
        outputs.push(await generateResumePDF());

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
