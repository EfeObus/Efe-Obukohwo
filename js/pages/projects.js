document.addEventListener('DOMContentLoaded', function() {
    const data = window.portfolioData;
    if (!data || !data.projects) {
        console.error('Portfolio data not loaded!');
        return;
    }

    const container = document.getElementById('projects-container');
    
    const projectsHTML = data.projects.map(project => {
        // Build project links
        let linksHTML = '';
        if (project.caseStudy) {
            linksHTML += `
                <a href="${safeUrl(project.caseStudy)}" class="project-link case-study-link">
                    <i class="fas fa-book-open"></i> Case Study
                </a>
            `;
        }
        if (project.live) {
            linksHTML += `
                <a href="${safeUrl(project.live)}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            `;
        }
        if (project.github) {
            linksHTML += `
                <a href="${safeUrl(project.github)}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            `;
        }

        // Build tech tags
        const techHTML = project.technologies.map(tech => 
            `<span class="tech-tag">${esc(tech)}</span>`
        ).join('');

        return `
            <div class="project-card">
                <div class="project-image">
                    <img src="${safeUrl(project.image)}" alt="${esc(project.title)}" loading="lazy">
                </div>
                <div class="project-content">
                    <h3>${esc(project.title)}</h3>
                    <p>${esc(project.description)}</p>
                    <div class="project-info">
                        <span class="project-date">${esc(project.date)}</span>
                    </div>
                    <div class="project-tech">
                        ${techHTML}
                    </div>
                    <div class="project-links">
                        ${linksHTML}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = projectsHTML;
});
