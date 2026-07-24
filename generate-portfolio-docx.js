// Generates the Portfolio DOCX in the site's dark brand theme (black background, gold accents).
// Deliberately separate from generate-resume-docx.js so resume generation is never affected by this file.

const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle } = require('docx');
const fs = require('fs');
const path = require('path');

const data = require('./portfolio-data.js');

const GOLD = 'FFD700';
const WHITE = 'FFFFFF';
const GRAY = 'CCCCCC';
const FONT = 'Calibri';

function sectionHeader(title) {
    return new Paragraph({
        children: [
            new TextRun({ text: title, bold: true, size: 26, font: FONT, allCaps: true, color: GOLD })
        ],
        spacing: { before: 300, after: 100 },
        border: {
            bottom: { style: BorderStyle.SINGLE, size: 6, color: GOLD }
        }
    });
}

function addHeader(children) {
    children.push(
        new Paragraph({
            children: [new TextRun({ text: data.personal.name, bold: true, size: 36, font: FONT, color: GOLD })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
        }),
        new Paragraph({
            children: [new TextRun({ text: data.personal.title, size: 24, font: FONT, color: WHITE })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
        }),
        new Paragraph({
            children: [
                new TextRun({
                    text: `${data.personal.location} | ${data.personal.phone} | ${data.personal.email}`,
                    size: 20,
                    font: FONT,
                    color: GRAY
                })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
        }),
        new Paragraph({
            children: [
                new TextRun({
                    text: `Portfolio: ${data.personal.portfolio} | LinkedIn: ${data.personal.linkedin} | GitHub: ${data.personal.github}`,
                    size: 18,
                    font: FONT,
                    color: GOLD
                })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            border: {
                bottom: { style: BorderStyle.SINGLE, size: 12, color: GOLD }
            }
        })
    );
}

function addSummary(children) {
    children.push(sectionHeader('Professional Summary'));
    children.push(
        new Paragraph({
            children: [new TextRun({ text: data.personal.summary, size: 22, font: FONT, color: WHITE })],
            spacing: { after: 200 }
        })
    );
}

function addSkills(children) {
    children.push(sectionHeader('Core Competencies'));
    Object.entries(data.skills).forEach(([category, skills]) => {
        children.push(
            new Paragraph({
                children: [new TextRun({ text: category, bold: true, size: 20, font: FONT, color: GOLD })],
                spacing: { before: 100, after: 40 }
            })
        );
        children.push(
            new Paragraph({
                children: [new TextRun({ text: skills.join(' • '), size: 19, font: FONT, color: WHITE })],
                spacing: { after: 100 }
            })
        );
    });
}

function addExperience(children) {
    children.push(sectionHeader('Professional Experience'));

    data.experience.forEach((exp) => {
        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: exp.title, bold: true, size: 22, font: FONT, color: WHITE }),
                    new TextRun({ text: ` | ${exp.company}`, size: 22, font: FONT, color: GOLD })
                ],
                spacing: { before: 150 }
            })
        );

        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: `${exp.location} | ${exp.date}`, italics: true, size: 20, font: FONT, color: GRAY })
                ],
                spacing: { after: 100 }
            })
        );

        (exp.responsibilities || []).forEach((responsibility) => {
            children.push(
                new Paragraph({
                    children: [new TextRun({ text: `• ${responsibility}`, size: 20, font: FONT, color: WHITE })],
                    indent: { left: 360 },
                    spacing: { after: 50 }
                })
            );
        });
    });
}

function addEducation(children) {
    children.push(sectionHeader('Education'));

    data.education.forEach((edu) => {
        children.push(
            new Paragraph({
                children: [new TextRun({ text: edu.degree, bold: true, size: 22, font: FONT, color: WHITE })],
                spacing: { before: 150 }
            })
        );
        children.push(
            new Paragraph({
                children: [new TextRun({ text: `${edu.institution} | ${edu.date}`, italics: true, size: 20, font: FONT, color: GOLD })]
            })
        );
        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: `GPA: ${edu.gpa}${edu.honors ? ' | ' + edu.honors : ''}`,
                        size: 20,
                        font: FONT,
                        color: GRAY
                    })
                ],
                spacing: { after: 100 }
            })
        );
    });
}

function addProjects(children) {
    children.push(sectionHeader('Portfolio Projects'));

    data.projects.forEach((project) => {
        const links = [];
        if (project.live) links.push(`Live: ${project.live}`);
        if (project.github) links.push(`GitHub: ${project.github}`);

        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: project.title, bold: true, size: 22, font: FONT, color: WHITE }),
                    new TextRun({ text: ` (${project.date})`, italics: true, size: 20, font: FONT, color: GRAY })
                ],
                spacing: { before: 150 }
            })
        );

        children.push(
            new Paragraph({
                children: [new TextRun({ text: `• ${project.shortDescription}`, size: 20, font: FONT, color: WHITE })],
                indent: { left: 360 },
                spacing: { after: 50 }
            })
        );

        if (links.length > 0) {
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({ text: `  ${links.join(' | ')}`, size: 18, font: FONT, color: GOLD })
                    ],
                    indent: { left: 360 },
                    spacing: { after: 50 }
                })
            );
        }

        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: `  Technologies: ${project.technologies.join(', ')}`,
                        size: 18,
                        italics: true,
                        font: FONT,
                        color: GRAY
                    })
                ],
                indent: { left: 360 },
                spacing: { after: 100 }
            })
        );
    });
}

function addCertifications(children) {
    children.push(sectionHeader('Certifications'));
    data.certifications.forEach((cert) => {
        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: `• ${cert.title}`, bold: true, size: 20, font: FONT, color: WHITE }),
                    new TextRun({ text: ` - ${cert.issuer} (${cert.date})`, size: 20, font: FONT, color: GRAY })
                ],
                spacing: { after: 50 }
            })
        );
    });
}

function addAchievements(children) {
    children.push(sectionHeader('Key Achievements'));
    (data.achievements || []).forEach((achievement) => {
        children.push(
            new Paragraph({
                children: [new TextRun({ text: `★ ${achievement}`, size: 20, font: FONT, color: WHITE })],
                spacing: { after: 50 }
            })
        );
    });
}

async function generatePortfolioDOCX() {
    console.log('Generating portfolio DOCX (dark brand theme) from portfolio-data.js...');
    const children = [];
    addHeader(children);
    addSummary(children);
    addSkills(children);
    addExperience(children);
    addEducation(children);
    addProjects(children);
    addCertifications(children);
    addAchievements(children);

    const doc = new Document({
        background: { color: '000000' },
        sections: [
            {
                properties: {
                    page: {
                        margin: { top: 720, right: 720, bottom: 720, left: 720 }
                    }
                },
                children
            }
        ]
    });

    const buffer = await Packer.toBuffer(doc);
    const outputPath = path.join(__dirname, 'documents/Efe_Obukohwo_Portfolio.docx');
    fs.writeFileSync(outputPath, buffer);

    console.log(`Portfolio DOCX generated successfully: ${outputPath}`);
    return outputPath;
}

module.exports = { generatePortfolioDOCX };

if (require.main === module) {
    generatePortfolioDOCX()
        .then((p) => {
            console.log('Done:', p);
            process.exit(0);
        })
        .catch((error) => {
            console.error('Failed to generate Portfolio DOCX:', error);
            process.exit(1);
        });
}
