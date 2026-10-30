document.addEventListener('DOMContentLoaded', function() {
    const data = window.portfolioData;
    if (!data) {
        console.error('Portfolio data not loaded!');
        return;
    }

    const ICONS = {
        // Programming Languages
        'Python': 'fab fa-python',
        'JavaScript': 'fab fa-js-square',
        'TypeScript': 'fas fa-code',
        'Kotlin': 'fab fa-android',
        'HTML5': 'fab fa-html5',
        'CSS3': 'fab fa-css3-alt',
        'SQL': 'fas fa-database',
        'Java': 'fab fa-java',
        // Frontend Technologies
        'React': 'fab fa-react',
        'Zustand': 'fas fa-cubes',
        'Tailwind CSS': 'fas fa-wind',
        'Bootstrap': 'fab fa-bootstrap',
        'Vite': 'fas fa-bolt',
        'Responsive Design': 'fas fa-mobile-screen',
        // Backend & APIs
        'Flask': 'fas fa-fire',
        'FastAPI': 'fas fa-gauge-high',
        'Node.js': 'fab fa-node-js',
        'Express.js': 'fas fa-route',
        'Ktor': 'fas fa-server',
        'RESTful APIs': 'fas fa-exchange-alt',
        'JWT': 'fas fa-key',
        'Plaid API': 'fas fa-university',
        'Docker': 'fab fa-docker',
        'Git': 'fab fa-git-alt',
        // Mobile Development
        'Kotlin Multiplatform': 'fab fa-android',
        'Compose Multiplatform': 'fas fa-layer-group',
        'Capacitor (Android/iOS)': 'fas fa-mobile-screen-button',
        'SQLDelight': 'fas fa-database',
        'Koin (DI)': 'fas fa-syringe',
        'Biometric Auth': 'fas fa-fingerprint',
        'Push Notifications (FCM/APNs)': 'fas fa-bell',
        // Cloud & DevOps
        'Google Cloud Run': 'fab fa-google',
        'Cloud SQL': 'fas fa-database',
        'Secret Manager': 'fas fa-lock',
        'AWS': 'fab fa-aws',
        'GitHub Actions (CI/CD)': 'fab fa-github',
        'Firebase': 'fas fa-fire',
        'Prometheus/Micrometer': 'fas fa-chart-line',
        'Sentry': 'fas fa-shield-alt',
        // Machine Learning & AI
        'Scikit-learn': 'fas fa-chart-line',
        'XGBoost': 'fas fa-bolt',
        'LightGBM': 'fas fa-seedling',
        'Random Forest': 'fas fa-sitemap',
        'AutoML': 'fas fa-robot',
        'OpenAI API': 'fas fa-lightbulb',
        'Gemini (Vertex AI)': 'fab fa-google',
        // Data Analysis & Visualization
        'Pandas': 'fas fa-table',
        'Tableau': 'fas fa-chart-bar',
        'Power BI': 'fas fa-chart-pie',
        'Excel': 'fas fa-file-excel',
        'SPSS': 'fas fa-calculator',
        'Apache Spark': 'fas fa-fire',
        'Apache Hive': 'fas fa-warehouse',
        // Databases & ORMs
        'PostgreSQL': 'fas fa-database',
        'MySQL': 'fas fa-database',
        'Oracle': 'fas fa-database',
        'SQLAlchemy': 'fas fa-layer-group',
        'Sequelize': 'fas fa-cubes',
        'Drizzle ORM': 'fas fa-water',
        'Prisma': 'fas fa-gem',
        'Airtable': 'fas fa-table',
        // Teaching & Education
        'Curriculum Design': 'fas fa-chalkboard',
        'Classroom Instruction': 'fas fa-chalkboard-teacher',
        'Data-Driven Instruction': 'fas fa-chart-line',
        'Lesson-Plan Digitization': 'fas fa-laptop-code',
        'Student Coaching & Mentorship': 'fas fa-people-arrows',
        'Instructional Technology': 'fas fa-desktop'
    };
    const DEFAULT_ICON = 'fas fa-check-circle';

    const grid = document.getElementById('skills-grid');
    grid.innerHTML = Object.entries(data.skills).map(([category, items]) => `
        <div class="skill-category">
            <h3>${esc(category)}</h3>
            <div class="skill-items">
                ${items.map(skill => `
                    <div class="skill-item">
                        <i class="${esc(ICONS[skill] || DEFAULT_ICON)}"></i>
                        <span>${esc(skill)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
});
