const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle, TabStopType, Tab } = require('docx');
const fs = require('fs');
const path = require('path');

const data = require('./portfolio-data.js');
const { generatePortfolioDOCX } = require('./generate-portfolio-docx.js');

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

const RESUME_VARIANTS = {
    'data-analyst': {
        title: () => data.personal.dataAnalystTitle || data.personal.title,
        summary: () => data.personal.dataAnalystSummary || data.personal.summary,
        skills: {
            'Data Analysis & Visualization': ['Pandas', 'Tableau', 'Power BI', 'Excel', 'SPSS', 'Apache Spark', 'Apache Hive'],
            'Programming Languages': ['Python', 'SQL'],
            'Databases': ['PostgreSQL', 'MySQL', 'Oracle', 'Airtable'],
            'Machine Learning & AI': ['Scikit-learn', 'XGBoost', 'LightGBM', 'Random Forest', 'AutoML']
        },
        projectCategory: 'data-analyst',
        projectsTitle: 'Key Data Analytics Projects',
        keyProjects: ['GDHO Dataset Analysis', 'Northwind Traders Tableau Analysis', 'Nashville Housing Market Analysis', 'Online Retail SQL Analysis']
    },
    developer: {
        title: () => data.personal.developerTitle || data.personal.title,
        summary: () => data.personal.developerSummary || data.personal.summary,
        skills: {
            'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'Kotlin', 'HTML5', 'CSS3', 'SQL', 'Java'],
            'Frontend Technologies': ['React', 'Zustand', 'Tailwind CSS', 'Bootstrap', 'Vite', 'Responsive Design'],
            'Backend & APIs': ['Flask', 'FastAPI', 'Node.js', 'Express.js', 'Ktor', 'RESTful APIs', 'JWT', 'Plaid API', 'Docker', 'Git'],
            'Mobile Development': ['Kotlin Multiplatform', 'Compose Multiplatform', 'Capacitor (Android/iOS)', 'SQLDelight', 'Koin (DI)', 'Biometric Auth', 'Push Notifications (FCM/APNs)'],
            'Cloud & DevOps': ['Google Cloud Run', 'Cloud SQL', 'Secret Manager', 'AWS', 'GitHub Actions (CI/CD)', 'Firebase', 'Prometheus/Micrometer', 'Sentry'],
            'Machine Learning & AI': ['Scikit-learn', 'XGBoost', 'LightGBM', 'Random Forest', 'AutoML', 'OpenAI API', 'Gemini (Vertex AI)'],
            'Databases & ORMs': ['PostgreSQL', 'MySQL', 'SQLAlchemy', 'Sequelize', 'Drizzle ORM', 'Prisma']
        },
        projectCategory: 'developer',
        projectsTitle: 'Key Projects',
        keyProjects: ['Zodiac Real Estate AI', 'TEKVWA Money', 'VwaTek Apply', 'Tekvwa Pro Audit']
    },
    teacher: {
        title: () => data.personal.teacherTitle || data.personal.title,
        summary: () => data.personal.teacherSummary || data.personal.summary,
        skills: {
            'Teaching & Education': ['Curriculum Design', 'Classroom Instruction', 'Data-Driven Instruction', 'Lesson-Plan Digitization', 'Student Coaching & Mentorship', 'Instructional Technology'],
            'Data Analysis & Visualization': ['Excel', 'Power BI'],
            'Programming Languages': ['Python', 'SQL']
        },
        projectCategory: 'teacher',
        projectsTitle: 'Key Education & Curriculum Projects'
    }
};

function addHeader(children, variant) {
    const config = RESUME_VARIANTS[variant];
    const title = config ? config.title() : data.personal.title;

    children.push(
        new Paragraph({
            children: [new TextRun({ text: data.personal.name, bold: true, size: 36, font: 'Times New Roman', allCaps: true })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
        })
    );

    children.push(
        new Paragraph({
            children: [new TextRun({ text: title, size: 24, font: 'Times New Roman' })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
        })
    );

    children.push(
        new Paragraph({
            children: [
                new TextRun({ text: 'Email: ', bold: true, size: 20, font: 'Times New Roman' }),
                new TextRun({ text: `${data.personal.email}    `, size: 20, font: 'Times New Roman' }),
                new TextRun({ text: 'Phone: ', bold: true, size: 20, font: 'Times New Roman' }),
                new TextRun({ text: `${data.personal.phone}    `, size: 20, font: 'Times New Roman' }),
                new TextRun({ text: 'Address: ', bold: true, size: 20, font: 'Times New Roman' }),
                new TextRun({ text: data.personal.location, size: 20, font: 'Times New Roman' })
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 }
        })
    );

    children.push(
        new Paragraph({
            children: [
                new TextRun({
                    text: `Portfolio: ${data.personal.portfolio} | LinkedIn: ${data.personal.linkedin} | GitHub: ${data.personal.github}`,
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

function addSummary(children, variant) {
    const config = RESUME_VARIANTS[variant];
    const summary = config ? config.summary() : data.personal.summary;

    children.push(createSectionHeader('Professional Summary'));
    children.push(
        new Paragraph({
            children: [new TextRun({ text: summary, size: 22, font: 'Times New Roman' })],
            spacing: { after: 200 }
        })
    );
}

function addSkills(children, variant) {
    const config = RESUME_VARIANTS[variant];
    const skillMap = config && config.skills ? config.skills : data.skills;
    const allSkills = Object.values(skillMap).flat();

    children.push(createSectionHeader('Core Competencies'));
    children.push(
        new Paragraph({
            children: [new TextRun({ text: allSkills.join(' • '), size: 20, font: 'Times New Roman' })],
            spacing: { after: 200 }
        })
    );
}

function addExperience(children, variant) {
    children.push(createSectionHeader('Professional Experience'));

    const config = RESUME_VARIANTS[variant];
    const experience = config
        ? data.experience.filter((exp) => (exp.relevantTo || []).includes(config.projectCategory))
        : data.experience;

    experience.forEach((exp) => {
        children.push(
            new Paragraph({
                tabStops: [{ type: TabStopType.RIGHT, position: 10800 }],
                children: [
                    new TextRun({ text: exp.title, bold: true, size: 22, font: 'Times New Roman' }),
                    new Tab(),
                    new TextRun({ text: exp.date, italics: true, size: 20, font: 'Times New Roman' })
                ],
                spacing: { before: 150, after: 20 }
            })
        );

        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: `${exp.company} — ${exp.location}`, bold: true, size: 20, font: 'Times New Roman' })
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
                tabStops: [{ type: TabStopType.RIGHT, position: 10800 }],
                children: [
                    new TextRun({ text: edu.degree, bold: true, size: 22, font: 'Times New Roman' }),
                    new Tab(),
                    new TextRun({ text: edu.date, italics: true, size: 20, font: 'Times New Roman' })
                ],
                spacing: { before: 150, after: 20 }
            })
        );
        children.push(
            new Paragraph({
                children: [new TextRun({ text: edu.institution, bold: true, size: 20, font: 'Times New Roman' })]
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

function addProjects(children, variant) {
    const config = RESUME_VARIANTS[variant];
    let projects;
    if (config && config.keyProjects) {
        projects = config.keyProjects.map((title) => data.projects.find((p) => p.title === title)).filter(Boolean);
    } else if (config) {
        projects = data.projects.filter((p) => (p.category || []).includes(config.projectCategory)).slice(0, 4);
    } else {
        projects = data.projects.filter((p) => p.featured).slice(0, 4);
    }

    children.push(createSectionHeader(config && config.projectsTitle ? config.projectsTitle : 'Key Projects'));

    projects.forEach((project) => {
        const links = [];
        if (project.live) links.push(`Live: ${project.live}`);
        if (project.github) links.push(`GitHub: ${project.github}`);

        children.push(
            new Paragraph({
                tabStops: [{ type: TabStopType.RIGHT, position: 10800 }],
                children: [
                    new TextRun({ text: project.title, bold: true, size: 22, font: 'Times New Roman' }),
                    new Tab(),
                    new TextRun({ text: project.date, italics: true, size: 20, font: 'Times New Roman' })
                ],
                spacing: { before: 150, after: 20 }
            })
        );

        children.push(
            new Paragraph({
                children: [new TextRun({ text: `• ${project.shortDescription}`, size: 20, font: 'Times New Roman' })],
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
    addProjects(children);
    addCertifications(children);

    const outputPath = await writeDocx(children, 'documents/Efe_Obukohwo_Resume.docx');
    console.log(`Resume DOCX generated successfully: ${outputPath}`);
    return outputPath;
}

async function generateDataAnalystResumeDOCX() {
    console.log('Generating Data Analyst resume DOCX from portfolio-data.js...');
    const children = [];
    addHeader(children, 'data-analyst');
    addSummary(children, 'data-analyst');
    addSkills(children, 'data-analyst');
    addExperience(children, 'data-analyst');
    addEducation(children);
    addProjects(children, 'data-analyst');
    addCertifications(children);

    const outputPath = await writeDocx(children, 'documents/Efe_Obukohwo_Resume_DataAnalyst.docx');
    console.log(`Data Analyst resume DOCX generated successfully: ${outputPath}`);
    return outputPath;
}

async function generateDeveloperResumeDOCX() {
    console.log('Generating Developer resume DOCX from portfolio-data.js...');
    const children = [];
    addHeader(children, 'developer');
    addSummary(children, 'developer');
    addSkills(children, 'developer');
    addExperience(children, 'developer');
    addEducation(children);
    addProjects(children, 'developer');
    addCertifications(children);

    const outputPath = await writeDocx(children, 'documents/Efe_Obukohwo_Resume_Developer.docx');
    console.log(`Developer resume DOCX generated successfully: ${outputPath}`);
    return outputPath;
}

async function generateTeacherResumeDOCX() {
    console.log('Generating Teacher resume DOCX from portfolio-data.js...');
    const children = [];
    addHeader(children, 'teacher');
    addSummary(children, 'teacher');
    addSkills(children, 'teacher');
    addExperience(children, 'teacher');
    addEducation(children);
    addProjects(children, 'teacher');
    addCertifications(children);

    const outputPath = await writeDocx(children, 'documents/Efe_Obukohwo_Resume_Teacher.docx');
    console.log(`Teacher resume DOCX generated successfully: ${outputPath}`);
    return outputPath;
}

module.exports = {
    generateResumeDOCX,
    generateDataAnalystResumeDOCX,
    generateDeveloperResumeDOCX,
    generateTeacherResumeDOCX,
    generatePortfolioDOCX
};

if (require.main === module) {
    (async () => {
        const outputs = [];
        outputs.push(await generateResumeDOCX());
        outputs.push(await generateDataAnalystResumeDOCX());
        outputs.push(await generateDeveloperResumeDOCX());
        outputs.push(await generateTeacherResumeDOCX());
        outputs.push(await generatePortfolioDOCX());
        console.log('DOCX generation complete:', outputs);
        process.exit(0);
    })().catch((error) => {
        console.error('Failed to generate DOCX files:', error);
        process.exit(1);
    });
}
