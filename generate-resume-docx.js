const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle } = require('docx');
const fs = require('fs');
const path = require('path');

const data = require('./portfolio-data.js');

function createSectionHeader(title) {
    return new Paragraph({
        children: [
            new TextRun({
                text: title,
                bold: true,
                size: 26,
                font: 'Times New Roman',
                allCaps: true
            })
        ],
        spacing: { before: 300, after: 100 },
        border: {
            bottom: { style: BorderStyle.SINGLE, size: 6, color: '000000' }
        }
    });
}

function addHeader(children) {
    children.push(
        new Paragraph({
            children: [new TextRun({ text: data.personal.name, bold: true, size: 36, font: 'Times New Roman' })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
        })
    );

    children.push(
        new Paragraph({
            children: [new TextRun({ text: data.personal.title, size: 24, font: 'Times New Roman' })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
        })
    );

    children.push(
        new Paragraph({
            children: [
                new TextRun({
                    text: `${data.personal.location} | ${data.personal.phone} | ${data.personal.email}`,
                    size: 20,
                    font: 'Times New Roman'
                })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
        })
    );

    children.push(
        new Paragraph({
            children: [
                new TextRun({
                    text: `LinkedIn: ${data.personal.linkedin} | GitHub: ${data.personal.github}`,
                    size: 18,
                    font: 'Times New Roman'
                })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            border: {
                bottom: { style: BorderStyle.SINGLE, size: 12, color: '000000' }
            }
        })
    );
}

function addSummary(children) {
    children.push(createSectionHeader('Professional Summary'));
    children.push(
        new Paragraph({
            children: [new TextRun({ text: data.personal.summary, size: 22, font: 'Times New Roman' })],
            spacing: { after: 200 }
        })
    );
}

function addSkills(children) {
    children.push(createSectionHeader('Core Competencies'));
    const allSkills = Object.values(data.skills).flat();
    children.push(
        new Paragraph({
            children: [new TextRun({ text: allSkills.join(' • '), size: 20, font: 'Times New Roman' })],
            spacing: { after: 200 }
        })
    );
}

function addExperience(children) {
    children.push(createSectionHeader('Professional Experience'));

    data.experience.forEach((exp) => {
        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: exp.title, bold: true, size: 22, font: 'Times New Roman' }),
                    new TextRun({ text: ` | ${exp.company}`, size: 22, font: 'Times New Roman' })
                ],
                spacing: { before: 150 }
            })
        );

        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: `${exp.location} | ${exp.date}`, italics: true, size: 20, font: 'Times New Roman' })
                ],
                spacing: { after: 100 }
            })
        );

        (exp.responsibilities || []).forEach((responsibility) => {
            children.push(
                new Paragraph({
                    children: [new TextRun({ text: `• ${responsibility}`, size: 20, font: 'Times New Roman' })],
                    indent: { left: 360 },
                    spacing: { after: 50 }
                })
            );
        });
    });
}

function addEducation(children) {
    children.push(createSectionHeader('Education'));

    data.education.forEach((edu) => {
        children.push(
            new Paragraph({
                children: [new TextRun({ text: edu.degree, bold: true, size: 22, font: 'Times New Roman' })],
                spacing: { before: 150 }
            })
        );
        children.push(
            new Paragraph({
                children: [new TextRun({ text: `${edu.institution} | ${edu.date}`, italics: true, size: 20, font: 'Times New Roman' })]
            })
        );
        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: `GPA: ${edu.gpa}${edu.honors ? ' | ' + edu.honors : ''}`,
                        size: 20,
                        font: 'Times New Roman'
                    })
                ],
                spacing: { after: 100 }
            })
        );
    });
}

function addProjects(children, includeAllProjects) {
    const sectionTitle = includeAllProjects ? 'Portfolio Projects' : 'Key Projects';
    const projects = includeAllProjects ? data.projects : data.projects.filter((p) => p.featured).slice(0, 6);

    children.push(createSectionHeader(sectionTitle));

    projects.forEach((project) => {
        const links = [];
        if (project.live) links.push(`Live: ${project.live}`);
        if (project.github) links.push(`GitHub: ${project.github}`);

        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: project.title, bold: true, size: 22, font: 'Times New Roman' }),
                    new TextRun({ text: ` (${project.date})`, italics: true, size: 20, font: 'Times New Roman' })
                ],
                spacing: { before: 150 }
            })
        );

        const descriptionText = includeAllProjects ? project.description : project.shortDescription;
        children.push(
            new Paragraph({
                children: [new TextRun({ text: `• ${descriptionText}`, size: 20, font: 'Times New Roman' })],
                indent: { left: 360 },
                spacing: { after: 50 }
            })
        );

        if (links.length > 0) {
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `  ${links.join(' | ')}`,
                            size: 18,
                            font: 'Times New Roman',
                            color: '0066CC'
                        })
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
                        font: 'Times New Roman'
                    })
                ],
                indent: { left: 360 },
                spacing: { after: 100 }
            })
        );
    });
}

function addCertifications(children) {
    children.push(createSectionHeader('Certifications'));
    data.certifications.forEach((cert) => {
        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: `• ${cert.title}`, bold: true, size: 20, font: 'Times New Roman' }),
                    new TextRun({ text: ` - ${cert.issuer} (${cert.date})`, size: 20, font: 'Times New Roman' })
                ],
                spacing: { after: 50 }
            })
        );
    });
}

function addAchievements(children) {
    children.push(createSectionHeader('Key Achievements'));
    (data.achievements || []).forEach((achievement) => {
        children.push(
            new Paragraph({
                children: [new TextRun({ text: `• ${achievement}`, size: 20, font: 'Times New Roman' })],
                spacing: { after: 50 }
            })
        );
    });
}

async function writeDocx(children, outputName) {
    const doc = new Document({
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
    const outputPath = path.join(__dirname, outputName);
    fs.writeFileSync(outputPath, buffer);

    return outputPath;
}

async function generateResumeDOCX() {
    console.log('Generating resume DOCX from portfolio-data.js...');
    const children = [];
    addHeader(children);
    addSummary(children);
    addSkills(children);
    addExperience(children);
    addEducation(children);
    addProjects(children, false);
    addCertifications(children);

    const outputPath = await writeDocx(children, 'Efe_Obukohwo_Resume.docx');
    console.log(`Resume DOCX generated successfully: ${outputPath}`);
    return outputPath;
}

async function generatePortfolioDOCX() {
    console.log('Generating portfolio DOCX from portfolio-data.js...');
    const children = [];
    addHeader(children);
    addSummary(children);
    addSkills(children);
    addExperience(children);
    addEducation(children);
    addProjects(children, true);
    addCertifications(children);
    addAchievements(children);

    const outputPath = await writeDocx(children, 'Efe_Obukohwo_Portfolio.docx');
    console.log(`Portfolio DOCX generated successfully: ${outputPath}`);
    return outputPath;
}

module.exports = { generateResumeDOCX, generatePortfolioDOCX };

if (require.main === module) {
    (async () => {
        const outputs = [];
        outputs.push(await generateResumeDOCX());
        outputs.push(await generatePortfolioDOCX());
        console.log('DOCX generation complete:', outputs);
        process.exit(0);
    })().catch((error) => {
        console.error('Failed to generate DOCX files:', error);
        process.exit(1);
    });
}
