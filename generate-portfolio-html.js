// Builds the dark, brand-matched HTML used to render the Portfolio PDF.
// Colors mirror styles.css :root (--primary-black, --secondary-black, --gold, --white, --gray, --gray-light).

function escapeHTML(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function buildPortfolioHTML(data) {
    const p = data.personal;

    const skillsHTML = Object.entries(data.skills).map(([category, items]) => `
        <div class="skill-category">
            <h3>${escapeHTML(category)}</h3>
            <div class="skill-chips">
                ${items.map((s) => `<span class="chip">${escapeHTML(s)}</span>`).join('')}
            </div>
        </div>
    `).join('');

    const experienceHTML = data.experience.map((exp) => `
        <div class="card exp-item">
            <div class="card-header">
                <div>
                    <div class="card-title">${escapeHTML(exp.title)}</div>
                    <div class="card-subtitle">${escapeHTML(exp.company)}</div>
                </div>
                <div class="card-meta">${escapeHTML(exp.location)}<br>${escapeHTML(exp.date)}</div>
            </div>
            <ul>
                ${(exp.responsibilities || []).map((r) => `<li>${escapeHTML(r)}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    const educationHTML = data.education.map((edu) => `
        <div class="card edu-item">
            <div class="card-header">
                <div>
                    <div class="card-title">${escapeHTML(edu.degree)}</div>
                    <div class="card-subtitle">${escapeHTML(edu.institution)}</div>
                </div>
                <div class="card-meta">${escapeHTML(edu.date)}</div>
            </div>
            <div class="edu-detail">GPA: ${escapeHTML(edu.gpa)}${edu.honors ? ' | ' + escapeHTML(edu.honors) : ''}</div>
        </div>
    `).join('');

    const projectsHTML = data.projects.map((project) => {
        const links = [];
        if (project.live) links.push(`<a href="${escapeHTML(project.live)}">Live</a>`);
        if (project.github) links.push(`<a href="${escapeHTML(project.github)}">GitHub</a>`);
        return `
        <div class="card project-item">
            <div class="card-header">
                <div class="card-title">${escapeHTML(project.title)}</div>
                <div class="card-meta">${escapeHTML(project.date)}</div>
            </div>
            <p class="project-desc">${escapeHTML(project.shortDescription)}</p>
            ${links.length ? `<div class="project-links">${links.join(' &nbsp;|&nbsp; ')}</div>` : ''}
            <div class="tech-tags">${project.technologies.map((t) => `<span class="tag">${escapeHTML(t)}</span>`).join('')}</div>
        </div>
    `;
    }).join('');

    const certsHTML = data.certifications.map((cert) => `
        <div class="cert-card">
            <div class="cert-title">${escapeHTML(cert.title)}</div>
            <div class="cert-meta">${escapeHTML(cert.issuer)} &middot; ${escapeHTML(cert.date)}</div>
        </div>
    `).join('');

    const achievementsHTML = (data.achievements || []).map((a) => `<li>${escapeHTML(a)}</li>`).join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${escapeHTML(p.name)} - Portfolio</title>
<style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    @page { size: A4; margin: 0; }
    body {
        background: #000000;
        color: #ffffff;
        font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif;
        font-size: 10.5px;
        line-height: 1.5;
    }
    .page { padding: 0.45in 0.55in; }
    .header { text-align: center; padding-bottom: 14px; margin-bottom: 18px; border-bottom: 2px solid #ffd700; }
    .name { font-size: 26px; font-weight: 700; color: #ffd700; letter-spacing: 1px; margin-bottom: 4px; }
    .title { font-size: 13px; color: #ffffff; margin-bottom: 8px; }
    .contact { font-size: 9.5px; color: #cccccc; }
    .contact a { color: #ffd700; text-decoration: none; }

    .section { margin-bottom: 16px; }
    .section-title {
        font-size: 13px; font-weight: 700; color: #ffd700; text-transform: uppercase;
        letter-spacing: 1px; border-bottom: 1px solid rgba(255, 215, 0, 0.4);
        padding-bottom: 4px; margin-bottom: 10px;
    }
    .summary { color: #e6e6e6; text-align: justify; font-size: 10px; }

    .skill-category { display: inline-block; vertical-align: top; width: 49%; margin-bottom: 10px; }
    .skill-category h3 { font-size: 10px; color: #ffd700; margin-bottom: 5px; }
    .skill-chips { display: flex; flex-wrap: wrap; gap: 4px; }
    .chip {
        background: #1a1a1a; color: #ffffff; border: 1px solid rgba(255, 215, 0, 0.4);
        border-radius: 10px; padding: 2px 8px; font-size: 8.5px;
    }

    .card {
        background: #1a1a1a; border-radius: 10px; padding: 10px 12px; margin-bottom: 8px;
        border: 1px solid rgba(255, 215, 0, 0.15); page-break-inside: avoid;
    }
    .card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px; }
    .card-title { font-size: 11px; font-weight: 700; color: #ffffff; }
    .card-subtitle { font-size: 10px; color: #ffd700; margin-top: 1px; }
    .card-meta { font-size: 8.5px; color: #999999; text-align: right; white-space: nowrap; margin-left: 10px; }
    .card ul { list-style: none; margin-top: 4px; }
    .card li { position: relative; padding-left: 12px; font-size: 9px; color: #dcdcdc; margin-bottom: 3px; }
    .card li::before { content: '\\2022'; color: #ffd700; position: absolute; left: 0; }
    .edu-detail { font-size: 9px; color: #cccccc; margin-top: 2px; }

    .project-desc { font-size: 9px; color: #dcdcdc; margin: 3px 0; }
    .project-links { font-size: 8.5px; margin-bottom: 4px; }
    .project-links a { color: #ffd700; text-decoration: none; }
    .tech-tags { display: flex; flex-wrap: wrap; gap: 4px; }
    .tag { background: #000000; border: 1px solid rgba(255, 215, 0, 0.3); color: #cccccc; border-radius: 8px; padding: 1px 6px; font-size: 8px; }

    .certs-grid { display: flex; flex-wrap: wrap; gap: 8px; }
    .cert-card {
        background: #1a1a1a; border-left: 3px solid #ffd700; border-radius: 6px;
        padding: 6px 10px; width: 31%; page-break-inside: avoid;
    }
    .cert-title { font-size: 9px; font-weight: 600; color: #ffffff; }
    .cert-meta { font-size: 8px; color: #999999; margin-top: 2px; }

    .achievements { list-style: none; }
    .achievements li { position: relative; padding-left: 14px; font-size: 9.5px; color: #dcdcdc; margin-bottom: 5px; }
    .achievements li::before { content: '\\2605'; color: #ffd700; position: absolute; left: 0; font-size: 8px; top: 2px; }
</style>
</head>
<body>
<div class="page">
    <div class="header">
        <div class="name">${escapeHTML(p.name)}</div>
        <div class="title">${escapeHTML(p.title)}</div>
        <div class="contact">
            ${escapeHTML(p.location)} &nbsp;|&nbsp; ${escapeHTML(p.phone)} &nbsp;|&nbsp; ${escapeHTML(p.email)}<br>
            Portfolio: <a href="https://${escapeHTML(p.portfolio)}">${escapeHTML(p.portfolio)}</a> &nbsp;|&nbsp;
            LinkedIn: <a href="https://${escapeHTML(p.linkedin)}">${escapeHTML(p.linkedin)}</a> &nbsp;|&nbsp;
            GitHub: <a href="https://${escapeHTML(p.github)}">${escapeHTML(p.github)}</a>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Professional Summary</div>
        <div class="summary">${escapeHTML(p.summary)}</div>
    </div>

    <div class="section">
        <div class="section-title">Core Competencies</div>
        ${skillsHTML}
    </div>

    <div class="section">
        <div class="section-title">Professional Experience</div>
        ${experienceHTML}
    </div>

    <div class="section">
        <div class="section-title">Education</div>
        ${educationHTML}
    </div>

    <div class="section">
        <div class="section-title">Portfolio Projects</div>
        ${projectsHTML}
    </div>

    <div class="section">
        <div class="section-title">Certifications</div>
        <div class="certs-grid">${certsHTML}</div>
    </div>

    <div class="section">
        <div class="section-title">Key Achievements</div>
        <ul class="achievements">${achievementsHTML}</ul>
    </div>
</div>
</body>
</html>`;
}

module.exports = { buildPortfolioHTML };
