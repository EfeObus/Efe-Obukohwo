const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle } = require('docx');
const fs = require('fs');
const path = require('path');

// Import portfolio data
const data = require('./portfolio-data.js');

async function generateResumeDOCX() {
    try {
        console.log('Starting DOCX generation...');

        const children = [];

        // Header - Name
        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: data.personal.name,
                        bold: true,
                        size: 36,
                        font: "Times New Roman"
                    })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 100 }
            })
        );

        // Title
        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: data.personal.title,
                        size: 24,
                        font: "Times New Roman"
                    })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 100 }
            })
        );

        // Contact Info
        const contactText = `${data.personal.location} | ${data.personal.phone} | ${data.personal.email}`;
        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: contactText,
                        size: 20,
                        font: "Times New Roman"
                    })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 100 }
            })
        );

        // Links
        const linksText = `LinkedIn: ${data.personal.linkedin} | GitHub: ${data.personal.github}`;
        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: linksText,
                        size: 18,
                        font: "Times New Roman"
                    })
                ],
                alignment: AlignmentType.CENTER,
                spacing: { after: 200 },
                border: {
                    bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" }
                }
            })
        );

        // Professional Summary
        children.push(createSectionHeader("Professional Summary"));
        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: data.personal.summary,
                        size: 22,
                        font: "Times New Roman"
                    })
                ],
                spacing: { after: 200 }
            })
        );

        // Core Competencies
        children.push(createSectionHeader("Core Competencies"));
        const allSkills = Object.values(data.skills).flat();
        children.push(
            new Paragraph({
                children: [
                    new TextRun({
                        text: allSkills.join(" • "),
                        size: 20,
                        font: "Times New Roman"
                    })
                ],
                spacing: { after: 200 }
            })
        );

        // Professional Experience
        children.push(createSectionHeader("Professional Experience"));
        data.experience.forEach(exp => {
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: exp.title,
                            bold: true,
                            size: 22,
                            font: "Times New Roman"
                        }),
                        new TextRun({
                            text: ` | ${exp.company}`,
                            size: 22,
                            font: "Times New Roman"
                        })
                    ],
                    spacing: { before: 150 }
                })
            );
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `${exp.location} | ${exp.date}`,
                            italics: true,
                            size: 20,
                            font: "Times New Roman"
                        })
                    ],
                    spacing: { after: 100 }
                })
            );
            // Use responsibilities field from the data
            if (exp.responsibilities) {
                exp.responsibilities.forEach(responsibility => {
                    children.push(
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `• ${responsibility}`,
                                    size: 20,
                                    font: "Times New Roman"
                                })
                            ],
                            indent: { left: 360 },
                            spacing: { after: 50 }
                        })
                    );
                });
            }
        });

        // Education
        children.push(createSectionHeader("Education"));
        data.education.forEach(edu => {
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: edu.degree,
                            bold: true,
                            size: 22,
                            font: "Times New Roman"
                        })
                    ],
                    spacing: { before: 150 }
                })
            );
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `${edu.institution} | ${edu.date}`,
                            italics: true,
                            size: 20,
                            font: "Times New Roman"
                        })
                    ]
                })
            );
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `GPA: ${edu.gpa}${edu.honors ? ' | ' + edu.honors : ''}`,
                            size: 20,
                            font: "Times New Roman"
                        })
                    ],
                    spacing: { after: 100 }
                })
            );
        });

        // Key Projects
        children.push(createSectionHeader("Key Projects"));
        const featuredProjects = data.projects.filter(p => p.featured).slice(0, 6);
        featuredProjects.forEach(project => {
            const links = [];
            if (project.live) links.push(`Live: ${project.live}`);
            if (project.github) links.push(`GitHub: ${project.github}`);
            
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: project.title,
                            bold: true,
                            size: 22,
                            font: "Times New Roman"
                        }),
                        new TextRun({
                            text: ` (${project.date})`,
                            italics: true,
                            size: 20,
                            font: "Times New Roman"
                        })
                    ],
                    spacing: { before: 150 }
                })
            );
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `• ${project.shortDescription}`,
                            size: 20,
                            font: "Times New Roman"
                        })
                    ],
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
                                font: "Times New Roman",
                                color: "0066CC"
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
                            text: `  Technologies: ${project.technologies.slice(0, 6).join(', ')}`,
                            size: 18,
                            italics: true,
                            font: "Times New Roman"
                        })
                    ],
                    indent: { left: 360 },
                    spacing: { after: 100 }
                })
            );
        });

        // Certifications
        children.push(createSectionHeader("Certifications"));
        data.certifications.forEach(cert => {
            children.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: `• ${cert.title}`,
                            bold: true,
                            size: 20,
                            font: "Times New Roman"
                        }),
                        new TextRun({
                            text: ` - ${cert.issuer} (${cert.date})`,
                            size: 20,
                            font: "Times New Roman"
                        })
                    ],
                    spacing: { after: 50 }
                })
            );
        });

        const doc = new Document({
            sections: [{
                properties: {
                    page: {
                        margin: {
                            top: 720,
                            right: 720,
                            bottom: 720,
                            left: 720
                        }
                    }
                },
                children: children
            }]
        });

        const buffer = await Packer.toBuffer(doc);
        const outputPath = path.join(__dirname, 'Efe_Obukohwo_Resume.docx');
        fs.writeFileSync(outputPath, buffer);

        console.log(`DOCX generated successfully: ${outputPath}`);
        return outputPath;
    } catch (error) {
        console.error('Error generating DOCX:', error);
        throw error;
    }
}

function createSectionHeader(title) {
    return new Paragraph({
        children: [
            new TextRun({
                text: title,
                bold: true,
                size: 26,
                font: "Times New Roman",
                allCaps: true
            })
        ],
        spacing: { before: 300, after: 100 },
        border: {
            bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" }
        }
    });
}

module.exports = { generateResumeDOCX };

if (require.main === module) {
    generateResumeDOCX()
        .then(outputPath => {
            console.log('Resume DOCX generation complete!');
            process.exit(0);
        })
        .catch(error => {
            console.error('Failed to generate resume DOCX:', error);
            process.exit(1);
        });
}
