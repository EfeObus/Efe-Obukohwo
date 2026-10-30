document.addEventListener('DOMContentLoaded', function() {
    const data = window.portfolioData;
    if (!data) {
        console.error('Portfolio data not loaded!');
        return;
    }

    // Populate Header
    document.getElementById('resume-name').textContent = data.personal.name;
    document.getElementById('resume-title').textContent = data.personal.title;
    
    const contactHTML = `
        <div class="contact-item">
            <span>Email:</span>
            <span>${esc(data.personal.email)}</span>
        </div>
        <div class="contact-item">
            <span>Phone:</span>
            <span>${esc(data.personal.phone)}</span>
        </div>
        <div class="contact-item">
            <span>Address:</span>
            <span>${esc(data.personal.location)}</span>
        </div>
        <div class="contact-item">
            <span>Portfolio:</span>
            <span>${esc(data.personal.portfolio)}</span>
        </div>
        <div class="contact-item">
            <span>LinkedIn:</span>
            <span>${esc(data.personal.linkedin)}</span>
        </div>
        <div class="contact-item">
            <span>GitHub:</span>
            <span>${esc(data.personal.github)}</span>
        </div>
    `;
    document.getElementById('resume-contact').innerHTML = contactHTML;

    // Populate Summary
    document.getElementById('resume-summary').textContent = data.personal.summary;

    // Populate Experience
    const experienceHTML = data.experience.map(job => `
        <div class="experience-item">
            <div class="job-header">
                <div>
                    <div class="job-title">${esc(job.title)}</div>
                    <div class="company">${esc(job.company)}</div>
                </div>
                <div class="date">${esc(job.date)}</div>
            </div>
            <div class="job-description">
                <ul>
                    ${job.responsibilities.map(r => `<li>${esc(r)}</li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');
    document.getElementById('resume-experience').innerHTML = experienceHTML;

    // Populate Education
    const educationHTML = data.education.map(edu => `
        <div class="education-item">
            <div class="job-header">
                <div>
                    <div class="job-title">${esc(edu.degree)}</div>
                    <div class="company">${esc(edu.institution)}</div>
                </div>
                <div class="date">${esc(edu.date)}</div>
            </div>
            <div style="font-size: 10px;">
                <strong>Key Courses:</strong> ${esc(edu.courses)}<br>
                <strong>Cumulative GPA:</strong> <span class="gpa">${esc(edu.gpa)}</span>${esc(edu.honors ? ' and ' + edu.honors : '')}
            </div>
        </div>
    `).join('');
    document.getElementById('resume-education').innerHTML = educationHTML;

    // Populate Projects (limit to 4 featured projects for resume)
    const featuredProjects = data.projects.filter(p => p.featured).slice(0, 4);
    const projectsHTML = featuredProjects.map(project => {
        const links = [];
        if (project.live) {
            links.push(`<a href="${safeUrl(project.live)}" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>`);
        }
        if (project.github) {
            links.push(`<a href="${safeUrl(project.github)}" target="_blank" rel="noopener noreferrer" class="project-link"><i class="fab fa-github"></i> GitHub</a>`);
        }
        const linksHTML = links.length > 0 ? `<div class="project-links">${links.join(' ')}</div>` : '';
        
        return `
        <div class="project-item">
            <div class="project-header">
                <div class="project-title">${esc(project.title)}</div>
                <div class="date">${esc(project.date)}</div>
            </div>
            <div class="project-description">
                <ul>
                    <li>${esc(project.shortDescription)}</li>
                </ul>
                ${linksHTML}
                <div class="tech-stack">
                    ${project.technologies.slice(0, 6).map(tech => `<span class="tech-tag">${esc(tech)}</span>`).join('')}
                </div>
            </div>
        </div>
    `}).join('');
    document.getElementById('resume-projects').innerHTML = projectsHTML;

    // Populate Skills
    const skillsHTML = Object.entries(data.skills).map(([category, skills]) => `
        <div class="skill-category">
            <h4>${esc(category)}</h4>
            <div class="skill-list">${esc(skills.join(', '))}</div>
        </div>
    `).join('');
    document.getElementById('resume-skills').innerHTML = skillsHTML;

    // Populate Certifications
    const certificationsHTML = data.certifications.map(cert => `
        <div class="cert-item">
            <div class="cert-title">${esc(cert.title)}</div>
            <div class="cert-issuer">${esc(cert.issuer)}</div>
            <div class="cert-date">${esc(cert.date)}</div>
        </div>
    `).join('');
    document.getElementById('resume-certifications').innerHTML = certificationsHTML;

    // Populate Achievements
    const achievementsHTML = `
        <ul class="achievements-list">
            ${data.achievements.map(a => `<li>${esc(a)}</li>`).join('')}
        </ul>
    `;
    document.getElementById('resume-achievements').innerHTML = achievementsHTML;
});
