// Portfolio Data - Single Source of Truth
// Update this file to automatically update all pages including the resume

const portfolioData = {
    // Personal Information
    personal: {
        name: "Efe Obukohwo",
        title: "Full Stack Developer | Python Developer | Data Engineer",
        email: "efe.obukohwo@outlook.com",
        phone: "+1 (905) 781-9825",
        location: "North York, Toronto, ON, Canada",
        linkedin: "linkedin.com/in/efe-obukohwo",
        github: "github.com/EfeObus",
        summary: "Full Stack Developer and Python Developer with 5+ years of expertise in backend development, database engineering, and machine learning. Proven track record of architecting production-ready platforms (FastAPI, Flask, Node.js, React) with 88.3% ML prediction accuracy and 500+ API routes. Specialized in Python, PostgreSQL, JavaScript/TypeScript, and cloud technologies (AWS, Docker). Strong experience building enterprise-grade systems with XGBoost, Scikit-learn, and real-time data pipelines. Demonstrated ability to lead development teams, optimize database systems (25% efficiency improvements), and deploy scalable infrastructure with 99.9% uptime."
    },

    // Work Experience
    experience: [
        {
            title: "Full Stack Developer Intern",
            company: "Zodiac Tech Toronto",
            date: "May 2025 – August 2025",
            location: "Toronto, ON",
            responsibilities: [
                "Architected AI-powered real estate analytics platform processing 49,551+ Canadian properties with 88.3% ML prediction accuracy using ensemble models (XGBoost, LightGBM, Random Forest) and real-time economic data integration",
                "Led full-stack development of production-ready Flask application with MySQL database, RESTful API ecosystem (20+ endpoints), and responsive web interface featuring interactive property mapping and investment analytics",
                "Implemented enterprise-grade security infrastructure including 5-tier API key system, advanced rate limiting, ML-powered XSS/CSRF protection, and behavioral analysis achieving 100% attack prevention rate",
                "Built comprehensive investment intelligence platform with automated undervalued property detection (85% accuracy), portfolio optimization tools, and real-time market trend analysis using Bank of Canada/Statistics Canada APIs",
                "Deployed scalable Docker infrastructure with 99.9% uptime, <400ms API response times, and CI/CD pipeline achieving 85% test coverage while leading team of 5 developers in agile environment"
            ]
        },
        {
            title: "Database Consultant",
            company: "Humanitarian Outcomes",
            date: "May 2023 – Dec 2025",
            location: "Remote",
            responsibilities: [
                "Documented and resolved inaccuracies in the GDHO Airtable and Database, leading to a 25% increase in efficiency for the Humanitarian Outcomes database system",
                "Worked with team lead for database management and optimization strategies, designing complex databases with Global Database for Humanitarian Outcomes to ensure seamless data flow for humanitarian organizations",
                "Utilized Airtable and SQL extensively to streamline data collection, entry, and analysis processes, improving overall database efficiency and user experience",
                "Conducted trend analysis using SPSS and SQL, providing actionable insights to enhance humanitarian efforts",
                "Leveraged data visualization tools like Tableau and Power BI to present data insights to stakeholders, enabling data-driven decision-making",
                "Conducted surveys and interviews and analyzed results giving actionable insights on the state of humanitarian organizations around the world",
                "Built and segmented 1,200+ partner and audience lists using Airtable and SQL, increasing campaign engagement by 30%",
                "Followed up and qualified 350+ leads from events and surveys using structured frameworks, converting 120 high-priority opportunities",
                "Coordinated logistics for 6 global partner events, managing registrations, materials, and follow-ups with zero operational delays"
            ]
        },
        {
            title: "Customer Service Representative",
            company: "IGNITE Student Life, Humber College",
            date: "Aug 2024 – May 2025",
            location: "Toronto, ON",
            responsibilities: [
                "Provided administrative and clerical support to all full-time and part-time staff through distributing mail, submitting work orders, and performing all other duties as requested",
                "Managed a high volume of inbound student inquiries, resolving billing issues and account discrepancies efficiently",
                "Advised students about all IGNITE services, wellness resources, and events through in-person office visits, emails, phone calls, and live chat with utmost professionalism",
                "Delivered excellent service while adhering to performance metrics, including call resolution time and customer satisfaction"
            ]
        },
        {
            title: "Compliance Officer - AML/Fraud",
            company: "United Bank for Africa (UBA)",
            date: "Nov 2019 – Aug 2022",
            location: "Sapele, Nigeria",
            responsibilities: [
                "Monitored and analyzed daily transactions for a portfolio of retail and corporate clients to detect and prevent potential money laundering, terrorist financing, and fraud",
                "Investigated over 30 system-generated alerts weekly, conducting in-depth analysis using SQL queries and advanced Excel functions (VLOOKUP, Pivot Tables) to identify and escalate suspicious activity",
                "Conducted Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) for high-risk clients, ensuring compliance with bank policies and national regulatory requirements",
                "Prepared and drafted detailed Suspicious Transaction Reports (STRs) for submission to the Nigerian Financial Intelligence Unit (NFIU), contributing to a 10% increase in reporting accuracy from the branch"
            ]
        },
        {
            title: "IT Consultant",
            company: "Finecare Diagnostic Limited",
            date: "Oct 2020 – Oct 2021",
            location: "Sapele, Nigeria",
            responsibilities: [
                "Devised and executed comprehensive IT solutions, including network setup and maintenance, boosting operational efficiency",
                "Achieved a 65% increase in accounting accuracy by introducing invoicing software for receipts generation",
                "Conducted market research and customer surveys to identify opportunities for business expansion",
                "Translated technical concepts into business-oriented language during team meetings"
            ]
        },
        {
            title: "IT Support Specialist",
            company: "Delta State College of Education, Nigeria",
            date: "Nov 2018 – Oct 2020",
            location: "Mosogar, Nigeria",
            responsibilities: [
                "Led the installation and configuration of 40 workstations, ensuring optimal performance and user satisfaction",
                "Resolved technical issues for over 65 end-users promptly and with accuracy",
                "Implemented a remote support system, streamlining assistance for students during course registration and payment processes",
                "Strengthened cybersecurity protocols by implementing and managing antivirus software across all systems"
            ]
        }
    ],

    // Education
    education: [
        {
            degree: "Ontario Graduate Certificate, Information Technology Solutions",
            institution: "Humber College, Toronto, ON",
            date: "Jan 2024 – Aug 2025",
            courses: "Machine Learning, Big Data Analytics, Database Design and Administration, Java Programming, SQL Server, and Database Development",
            gpa: "86.5%"
        },
        {
            degree: "Ontario Graduate Certificate, Research Analyst",
            institution: "Humber College, Toronto, ON",
            date: "May 2022 – Aug 2023",
            courses: "Quantitative and Qualitative Designs, Spreadsheet Management, Research Survey and Design, Career Management Skills",
            gpa: "85.6%",
            honors: "consecutive Dean's Honors List Award"
        },
        {
            degree: "Bachelor of Science, Computer Science",
            institution: "Delta State University, Abraka, Nigeria",
            date: "Dec 2016 – Oct 2019",
            courses: "Java Programming, Data Structures and Algorithms, Human Computer Interactions, Database Management and Design",
            gpa: "3.75 in a 5-point grading system"
        },
        {
            degree: "National Certificate in Education, Computer Science and Physics",
            institution: "Delta State College Of Education, Mosogar, Nigeria",
            date: "Dec 2013 – Nov 2016",
            courses: "MS Office, System Analysis and Design, Computer Networks, Operating Systems",
            gpa: "3.92 in a 5-point grading system"
        }
    ],

    // Projects - Add new projects here and they will appear on both projects.html and resume.html
    projects: [
        {
            title: "JTOV Network",
            description: "An advanced AI-powered mentorship platform that connects professionals through intelligent matching, skill development, and interactive networking tools. Features include AI-powered smart matching for mentors/mentees based on compatible skills and goals, real-time messaging and WebRTC video calling, gamification elements with achievements and leveling, AI-generated career roadmaps, structured learning paths, and an analytics dashboard for tracking progress. Includes an AI Learning Hub with personalized tutoring, skill gap analysis, and smart recommendations. Features a complete video learning platform with course management, interactive quizzes, and progress tracking. Built with comprehensive admin/staff dashboards, audit logging, and support ticket system. Implements enterprise security including CSRF protection, rate limiting, secure sessions, and Helmet security headers.",
            shortDescription: "AI-powered mentorship platform with intelligent matching, WebRTC video calling, gamification, career roadmaps, and a complete video learning system",
            date: "Jan 2026 – Present",
            technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "WebSockets", "WebRTC", "OpenAI API", "TailwindCSS", "Framer Motion"],
            github: "https://github.com/EfeObus/JTOV-Network",
            live: null,
            image: "images/JTOV Network.png",
            featured: true
        },
        {
            title: "TekVwarho ProAudit",
            description: "Nigeria's premier enterprise-grade tax compliance, payroll, and forensic audit platform built for the 2026 Nigerian Tax Reform. Automates complex statutory obligations—PAYE, VAT, CIT, WHT, pension, and NRS e-invoicing—while providing audit-ready records, immutable evidence, and regulator-friendly reports for FIRS and external auditors. Features include a 2026-compliant tax engine, full Nigerian payroll system with progressive PAYE bands, world-class forensic audit capabilities (Benford's Law fraud detection, Z-Score anomaly analysis, 3-way matching, hash-chain immutable ledger), and NDPA 2023 security compliance with AES-256-GCM encryption. Built with 500+ API routes, 80+ database models, and 400+ automated tests.",
            shortDescription: "Enterprise-grade Nigerian tax compliance and forensic audit platform with 2026 tax reform support, featuring Benford's Law fraud detection, hash-chain immutable ledger, and NDPA 2023 security compliance",
            date: "Oct 2025 – Present",
            technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "HTMX", "TailwindCSS", "Celery", "Redis", "Cryptography"],
            github: "https://github.com/EfeObus/TekVwarho-ProAudit",
            live: "https://ingenious-emotion-production-c3c3.up.railway.app/",
            caseStudy: "case-study-proaudit.html",
            image: "images/Tekvwarho Pro Audit.png",
            featured: true
        },
        {
            title: "WonderWorld Learning Adventure",
            description: "Research-driven adaptive early-childhood learning platform for ages 2–8, blending cognitive science, early-years pedagogy, and game design. Features a multi-domain curriculum covering literacy (letter formation, phonemic awareness, reading fluency), numeracy (subitizing, counting, early arithmetic), and social-emotional learning. Uses Item Response Theory (Rasch Model) for real-time personalization maintaining ~75% success probability. Includes multi-sensory SVG stroke tracing, on-device offline speech recognition, narrative game worlds with mascot-guided progression, and a parent dashboard with progress tracking. COPPA and GDPR-K compliant with offline-first architecture for low-connectivity environments. Achieves 60 FPS across mobile and web.",
            shortDescription: "Adaptive early-childhood learning platform (ages 2-8) using Item Response Theory for personalization, with offline speech recognition and COPPA/GDPR-K compliance",
            date: "Dec 2025 – Present",
            technologies: ["Flutter", "Dart", "Flame Engine", "Python", "FastAPI", "PostgreSQL", "Redis", "NumPy", "Speech-to-Text", "Adaptive Learning"],
            github: "https://github.com/EfeObus/WonderWorld-Learning-Adventure",
            live: null,
            image: "images/Wonderworld learning adventure.png",
            featured: true
        },
        {
            title: "TekVwa Life",
            description: "Secure digital autobiography and legacy-preservation platform that enables users to write, organize, and protect their life stories using a professionally structured 28-chapter framework. TekVwa Life combines narrative creation, life-event and achievement tracking, and post-death legacy access into a single privacy-first system. Built with enterprise-grade security, Canadian data residency, and professional PDF/DOCX export, the platform transforms personal history into a permanent, transferable digital asset for families, historians, and estate planning purposes.",
            shortDescription: "Digital autobiography and legacy-preservation platform with 28-chapter framework, enterprise security, and professional document export",
            date: "Dec 2025 – Present",
            technologies: ["Node.js", "Express.js", "PostgreSQL (AWS RDS)", "Prisma ORM", "React", "Material UI", "JWT Authentication"],
            github: "https://github.com/EfeObus/TekVwa-Life",
            live: "https://tekvwa-life-production.up.railway.app/",
            image: "images/TekVwa Life.png",
            featured: true
        },
        {
            title: "TekVwarho Analysis Platform",
            description: "Comprehensive web-based statistical analysis platform (v4.2.1) with AI-powered report generation. Features 17 analysis types including Bayesian analysis, survival analysis, power analysis, and time series forecasting. Includes complete data management tools (merge, append, split, filter, sort, transform), WCAG 2.1 AA accessibility compliance, GDPR-compliant user authentication, and multi-format export (SPSS, Stata, SAS). Built with Flask, PostgreSQL, and OpenAI GPT-4 integration for intelligent result interpretation. Features health endpoints for container orchestration, keyboard shortcuts for power users, and professional report generation in DOCX/PDF formats. Available globally with Canadian PIPEDA compliance.",
            shortDescription: "No-code analytics platform with 17 analysis types, AI-powered report generation, WCAG 2.1 accessibility, and SPSS/Stata/SAS export",
            date: "Jan 2025 – Present",
            technologies: ["Flask", "PostgreSQL", "OpenAI API", "Plotly.js", "Bootstrap", "Python"],
            github: "https://github.com/EfeObus/TekVwarho-Analysis",
            live: "https://tekvwarho-analysis-production.up.railway.app/",
            caseStudy: "case-study-analysis.html",
            image: "images/TekVwarho Analysis.png",
            featured: true
        },
        {
            title: "TK Reports - AI-Powered Data Analysis",
            description: "Advanced AI-powered data analytics platform that transforms datasets into comprehensive, professional-grade analytical reports. Built with Flask and OpenAI GPT-4 Turbo, it combines statistical analysis (mean, median, mode, standard deviation, skewness, kurtosis, outlier detection), machine learning insights, correlation analysis, and natural language generation to produce executive-ready reports in DOCX and PDF formats. Features research objective-driven analysis, 5 professional visualizations with detailed interpretations, handles up to 100MB file uploads, supports CSV/XLSX/XLS/TSV formats, and delivers 15+ page comprehensive reports with AI-generated executive summaries, key findings, insights, and actionable recommendations.",
            shortDescription: "AI-powered analytics platform using GPT-4 to transform datasets into 15+ page executive reports with statistical analysis and visualizations",
            date: "Oct 2024",
            technologies: ["Python", "Flask", "OpenAI GPT-4", "Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"],
            github: "https://github.com/EfeObus/TK-Reports",
            live: null,
            image: "images/TK Reports.png",
            featured: true
        },
        {
            title: "Zodiac Real Estate AI",
            description: "Production-ready real estate analytics platform with 88.3% accuracy machine learning, combining real-time economic data for property valuations and market analysis across 49,551+ Canadian properties.",
            shortDescription: "Real estate analytics platform with 88.3% ML accuracy processing 49,551+ Canadian properties with real-time economic data integration",
            date: "May 2025 – Aug 2025",
            technologies: ["Python", "Flask", "MySQL", "Scikit-learn", "XGBoost", "Docker", "JavaScript"],
            github: "https://github.com/EfeObus/NextProperty",
            live: null,
            caseStudy: "case-study-zodiac.html",
            image: "images/Zodiac Real Estate.png",
            featured: true
        },
        {
            title: "IGNITE Sleep Lounge Automation",
            description: "Digital check-in and waiver system for Humber College's IGNITE facilities, automating student registration, time tracking, and staff oversight with real-time functionality and admin dashboard.",
            shortDescription: "Digital check-in system for Humber College with automated registration, time tracking, and real-time admin dashboard",
            date: "Sep 2024 – May 2025",
            technologies: ["Node.js", "Express", "PostgreSQL", "JavaScript", "JWT", "HTML/CSS"],
            github: "https://github.com/EfeObus/IGNITE-Sleep-Lounge-and-Zenzone",
            live: null,
            image: "images/Ignite Sleep Lounge.png",
            featured: true
        },
        {
            title: "Tekevwe LegalEagleAI",
            description: "Web application designed to streamline legal document management and analysis. Provides features such as document generation, editing, and summarization, leveraging AI to assist users with legal research, contract creation, and risk analysis. The platform includes dashboards for activity tracking, quick actions, and recent documents, as well as collaboration tools with an AI chat assistant for insights and support.",
            shortDescription: "AI-powered legal document management platform with document generation, contract creation, and risk analysis capabilities",
            date: "Oct 2024 – Present",
            technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "PostgreSQL", "OpenAI API", "Drizzle ORM"],
            github: "https://github.com/EfeObus/LegalEagleAI",
            live: null,
            image: "images/Tekevwe LegalEagleAI .png",
            featured: true
        },
        {
            title: "TekVwarho Properties",
            description: "Nigerian property rental platform connecting landlords and tenants directly, eliminating middlemen to ensure transparency, security, and automation in rentals. Features ID verification, fraud detection, secure lease storage, and real-time communication. Landlords pay ₦10,000/year for unlimited listings and auto-generated legal agreements, while tenants pay ₦5,000/year for advanced search and agreement management.",
            shortDescription: "Nigerian property rental platform with ID verification, fraud detection, and automated legal agreement generation",
            date: "Feb 2025 – Present",
            technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "Paystack", "WebSocket"],
            github: "https://github.com/EfeObus/TekVwarho-Properties",
            live: "https://tekvwarho-properties-production.up.railway.app/",
            image: "images/tekvwarho properties 2.png",
            featured: true
        },
        {
            title: "Agho Hospital Management System",
            description: "Comprehensive desktop and web application to streamline hospital operations with role-based access control. Features patient management, appointment scheduling, doctor management, and user administration. Includes both web interface (port 5140) and console mode with security features like password hashing, SQL injection prevention, and role-based permissions for administrators, doctors, receptionists, and nurses.",
            shortDescription: "Hospital management system with role-based access control, patient management, and enterprise security features",
            date: "2025",
            technologies: ["Java", "Java Swing", "PostgreSQL", "JDBC", "SHA-256", "Web Server"],
            github: "https://github.com/EfeObus/Agho-Hospital-Management",
            live: null,
            image: "images/Agho Hospital Managaemtn.png",
            featured: true
        }
    ],

    // Skills organized by category
    skills: {
        "Programming Languages": ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL", "Java"],
        "Frontend Technologies": ["React", "Tailwind CSS", "Bootstrap", "Vite", "Responsive Design"],
        "Backend & APIs": ["Flask", "FastAPI", "Node.js", "Express.js", "RESTful APIs", "JWT", "Docker", "Git"],
        "Machine Learning & AI": ["Scikit-learn", "XGBoost", "LightGBM", "Random Forest", "AutoML", "OpenAI API"],
        "Data Analysis & Visualization": ["Pandas", "Tableau", "Power BI", "Excel", "SPSS", "Apache Spark", "Apache Hive"],
        "Databases & ORMs": ["PostgreSQL", "MySQL", "Oracle", "SQLAlchemy", "Sequelize", "Drizzle ORM", "Prisma", "Airtable"]
    },

    // Certifications
    certifications: [
        {
            title: "Hands-On Introduction SQL",
            issuer: "LinkedIn Learning",
            date: "Dec 2023",
            icon: "fa-database"
        },
        {
            title: "NVivo 2018 Essential Training",
            issuer: "LinkedIn Learning",
            date: "Feb 2023",
            icon: "fa-chart-pie"
        },
        {
            title: "Intermediate SQL for Data Scientists",
            issuer: "LinkedIn Learning",
            date: "Dec 2022",
            icon: "fa-chart-line"
        },
        {
            title: "TCPS 2: Core 2022 Certificate",
            issuer: "Panel on Research and Ethics Canada",
            date: "May 2022",
            icon: "fa-shield-alt"
        },
        {
            title: "Jobberman Soft-Skills Training",
            issuer: "Jobberman",
            date: "Feb 2022",
            icon: "fa-users"
        }
    ],

    // Key Achievements
    achievements: [
        "Achieved 88.3% ML prediction accuracy in real estate analytics platform processing 49,551+ properties",
        "Improved database system efficiency by 25% through optimization and error resolution strategies",
        "Deployed scalable infrastructure with 99.9% uptime and <400ms API response times",
        "Consecutive Dean's Honors List Award with 85.6% cumulative GPA in Research Analyst program",
        "Led installation and configuration of 40 workstations with 100% user satisfaction"
    ]
};

// Make data available globally
if (typeof window !== 'undefined') {
    window.portfolioData = portfolioData;
}

// Export for Node.js environments if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
