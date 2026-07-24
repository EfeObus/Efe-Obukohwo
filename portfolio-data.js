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
        portfolio: "efeobus.github.io/Efe-Obukohwo",
        summary: "Full Stack Developer with 5+ years of experience architecting production platforms across web, cloud, and native mobile. Shipped full-stack applications (FastAPI, Flask, Node.js/Express, React) with 500+ API routes and 88.3% ML prediction accuracy, plus cross-platform mobile apps (Kotlin Multiplatform, Capacitor) running natively on iOS, Android, and Web from a single codebase. Experienced across AWS and Google Cloud Run, integrating both OpenAI and Vertex AI (Gemini) into production features, with engineering practices spanning CI/CD pipelines, JWT/biometric authentication architecture, and observability (Prometheus, Sentry). Demonstrated ability to lead development teams, optimize database systems (25% efficiency improvements), and deploy scalable infrastructure with 99.9% uptime.",

        // Role-tailored headline + summary used by the Data Analyst resume variant
        dataAnalystTitle: "Data Analyst | Business Intelligence & Database Consultant",
        dataAnalystSummary: "Data Analyst with 5+ years of experience turning messy, high-volume datasets into stakeholder-ready business intelligence using advanced Excel, SQL, and Python. Engineered a 56,636-row municipal housing dataset into a verified $18.50B market analysis with a dynamic formula engine (VLOOKUP/XLOOKUP, SUMPRODUCT, 9 pivot tables) and a slicer-driven KPI dashboard. Background spans AML/fraud transaction monitoring (SQL, pivot tables, STR reporting), humanitarian database consulting (25% efficiency gains via Airtable/SQL optimization), and trend analysis with SPSS, Tableau, and Power BI. Comfortable owning a dataset from raw extract through cleaning, statistical analysis, and executive-facing visualization.",

        // Role-tailored headline + summary used by the Developer resume variant
        developerTitle: "Full Stack Developer | Python Developer | Data Engineer",
        developerSummary: "Full Stack Developer with 5+ years of experience architecting production platforms across web, cloud, and native mobile. Shipped full-stack applications (FastAPI, Flask, Node.js/Express, React) with 500+ API routes and 88.3% ML prediction accuracy, plus cross-platform mobile apps (Kotlin Multiplatform, Capacitor) running natively on iOS, Android, and Web from a single codebase. Experienced across AWS and Google Cloud Run, integrating both OpenAI and Vertex AI (Gemini) into production features, with engineering practices spanning CI/CD pipelines, JWT/biometric authentication architecture, and observability (Prometheus, Sentry). Demonstrated ability to lead development teams, optimize database systems (25% efficiency improvements), and deploy scalable infrastructure with 99.9% uptime."
    },

    // Work Experience
    experience: [
        {
            title: "Full Stack Developer Intern",
            company: "Zodiac Tech Toronto",
            date: "May 2025 – August 2025",
            location: "Toronto, ON",
            responsibilities: [
                "Architected an AI-powered real estate analytics platform processing 49,551+ Canadian properties, achieving 88.3% ML prediction accuracy with an ensemble of XGBoost, LightGBM, and Random Forest",
                "Led full-stack development of a production Flask application with MySQL and a 20+ endpoint REST API, shipping interactive property mapping and investment analytics",
                "Implemented a 5-tier API security system with ML-powered XSS/CSRF detection and behavioral analysis, achieving a 100% attack-prevention rate in testing",
                "Deployed a Dockerized CI/CD pipeline achieving 99.9% uptime, <400ms API response times, and 85% test coverage while leading a team of 5 developers"
            ]
        },
        {
            title: "Database Consultant",
            company: "Humanitarian Outcomes",
            date: "May 2023 – Dec 2025",
            location: "Remote",
            responsibilities: [
                "Resolved data-integrity issues across the GDHO Airtable and database while designing optimized schemas with the team lead, driving a 25% increase in operational efficiency",
                "Conducted trend analysis using SPSS and SQL, then visualized findings in Tableau and Power BI to drive data-informed decisions for humanitarian stakeholders worldwide",
                "Built and segmented 1,200+ partner and audience lists using Airtable and SQL, increasing campaign engagement by 30%",
                "Qualified 350+ leads from events and surveys using structured frameworks, converting 120 into high-priority partnership opportunities"
            ]
        },
        {
            title: "Customer Service Representative",
            company: "IGNITE Student Life, Humber College",
            date: "Aug 2024 – May 2025",
            location: "Toronto, ON",
            responsibilities: [
                "Resolved billing issues and account discrepancies across a high volume of inbound student inquiries via phone, email, and live chat",
                "Advised students on IGNITE services, wellness resources, and campus events while consistently meeting call-resolution and satisfaction targets"
            ]
        },
        {
            title: "Compliance Officer - AML/Fraud",
            company: "United Bank for Africa (UBA)",
            date: "Nov 2019 – Aug 2022",
            location: "Sapele, Nigeria",
            responsibilities: [
                "Monitored and analyzed daily transactions across a retail and corporate client portfolio, detecting and preventing money laundering, terrorist financing, and fraud",
                "Investigated 30+ system-generated alerts weekly using SQL queries and advanced Excel (VLOOKUP, Pivot Tables) to identify and escalate suspicious activity",
                "Conducted Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) for high-risk clients, ensuring full regulatory compliance",
                "Drafted Suspicious Transaction Reports (STRs) for the Nigerian Financial Intelligence Unit, contributing to a 10% increase in branch reporting accuracy"
            ]
        },
        {
            title: "IT Consultant",
            company: "Finecare Diagnostic Limited",
            date: "Oct 2020 – Oct 2021",
            location: "Sapele, Nigeria",
            responsibilities: [
                "Devised and executed IT infrastructure solutions, including network setup and maintenance, boosting operational efficiency",
                "Achieved a 65% increase in accounting accuracy by introducing invoicing software for receipts generation",
                "Conducted market research and customer surveys to identify business expansion opportunities"
            ]
        },
        {
            title: "IT Support Specialist",
            company: "Delta State College of Education, Nigeria",
            date: "Nov 2018 – Oct 2020",
            location: "Mosogar, Nigeria",
            responsibilities: [
                "Led the installation and configuration of 40 workstations, ensuring optimal performance and 100% user satisfaction",
                "Resolved technical issues for 65+ end-users promptly and accurately while strengthening antivirus and cybersecurity protocols across all systems",
                "Implemented a remote support system, streamlining registration and payment assistance for students"
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
            title: "TEKVWA Money",
            description: "TEKVWA Money is a full-stack personal finance tracking application solving financial leakage — the silent loss of money through small, unnoticed expenses. Built with React, Express.js, PostgreSQL, Zustand, and Tailwind CSS, and shipped as a website plus native Android and iOS apps (Capacitor) from a single codebase. Features real bank-account linking via Plaid (live in Production on web, Android, and iOS), Gemini/Vertex AI-narrated spending insights, automated PDF/CSV/XLSX bank statement import with self-learning auto-categorization across 24+ Canadian banks and credit unions, budget-driven spending alerts, biometric app lock (Face ID/fingerprint), push notifications, and exportable PDF/Excel/CSV reports. Includes a full RBAC system (Customer/Staff/Admin/Super Admin) with a Super Admin operations dashboard for audit logging, security history, and maintenance mode, backed by a real automated test suite and 16 tracked database migrations.",
            shortDescription: "Built and launched a full-stack personal finance platform (web, Android, iOS) from a single Capacitor/React codebase, integrating live Plaid bank-linking, Gemini AI-narrated insights, and automated statement import across 24+ Canadian banks",
            date: "April 2026 – Present",
            technologies: ["React", "Express.js", "PostgreSQL", "Zustand", "Tailwind CSS", "Capacitor (Android/iOS)", "Plaid API", "Gemini (Vertex AI)", "Firebase Cloud Messaging"],
            github: "https://github.com/EfeObus/Tekvwa-Money",
            live: "https://tekvwamoney.com/",
            caseStudy: "case-study-tekvwa-money.html",
            image: "images/Tekvwa Money.png",
            featured: true,
            category: ["developer"]
        },
        {
            title: "VwaTek Apply",
            description: "Professional AI career suite built with Kotlin Multiplatform, delivering native experiences for iOS, Android, and Web from a single codebase with Koin dependency injection and a clean data/domain/presentation architecture shared across all three targets. Powered by Gemini 2.0 Flash, it provides comprehensive job search optimization including ATS resume scoring with keyword gap analysis, AI-powered contextual resume rewriting using X-Y-Z impact framework, tailored cover letter generation, and full resume version control. Features tough AI recruiter mock interviews with STAR method coaching, Canadian salary intelligence with NOC code matching and negotiation strategies, and LinkedIn profile optimization. Built production-grade: encrypted on-device persistence (SQLDelight), offline-first support with automatic cross-device sync and conflict resolution, and observability via Firebase Crashlytics, Sentry, and Prometheus/Micrometer metrics on the Ktor backend. Built for the Canadian market with full PIPEDA compliance and Canadian data residency (Montreal), with subscription tiers (Free/Pro/Premium) via Stripe, Apple IAP, and Google Play Billing, plus enterprise SSO support (SAML, OIDC, Azure AD, Okta).",
            shortDescription: "Architected a Kotlin Multiplatform AI career suite (iOS, Android, Web) from one codebase with Koin DI, offline-first sync with conflict resolution, and Prometheus/Sentry observability, powered by Gemini 2.0 Flash",
            date: "Feb 2026 – Present",
            technologies: ["Kotlin Multiplatform", "Compose Multiplatform", "Gemini 2.0 Flash", "Ktor", "Koin", "PostgreSQL", "SQLDelight", "Firebase", "Sentry", "Stripe", "Railway"],
            github: "https://github.com/EfeObus/VwaTek-Apply",
            live: "https://vwatek-apply-production.up.railway.app",
            image: "images/Vwatek Apply.png",
            featured: true,
            category: ["developer"]
        },
        {
            title: "JTOV Network",
            description: "An advanced AI-powered mentorship platform that connects professionals through intelligent matching, skill development, and interactive networking tools. Features include AI-powered smart matching for mentors/mentees based on compatible skills and goals, real-time messaging and WebRTC video calling, gamification elements with achievements and leveling, AI-generated career roadmaps, structured learning paths, and an analytics dashboard for tracking progress. Includes an AI Learning Hub with personalized tutoring, skill gap analysis, and smart recommendations. Features a complete video learning platform with course management, interactive quizzes, and progress tracking. Built with comprehensive admin/staff dashboards, audit logging, and support ticket system. Implements enterprise security including CSRF protection, rate limiting, secure sessions, and Helmet security headers.",
            shortDescription: "Engineered an AI-powered mentorship platform with intelligent matching, WebRTC video calling, and gamification, plus a full video-learning system with course management and progress tracking",
            date: "Jan 2026 – Present",
            technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "WebSockets", "WebRTC", "OpenAI API", "TailwindCSS", "Framer Motion"],
            github: "https://github.com/EfeObus/JTOV-Network",
            live: null,
            image: "images/JTOV Network.png",
            featured: true,
            category: ["developer"]
        },
        {
            title: "TekVwarho ProAudit",
            description: "Nigeria's premier enterprise-grade tax compliance, payroll, and forensic audit platform built for the 2026 Nigerian Tax Reform. Automates complex statutory obligations—PAYE, VAT, CIT, WHT, pension, and NRS e-invoicing—while providing audit-ready records, immutable evidence, and regulator-friendly reports for FIRS and external auditors. Features include a 2026-compliant tax engine, full Nigerian payroll system with progressive PAYE bands, world-class forensic audit capabilities (Benford's Law fraud detection, Z-Score anomaly analysis, 3-way matching, hash-chain immutable ledger), and NDPA 2023 security compliance with AES-256-GCM encryption. Built with 500+ API routes, 80+ database models, and 400+ automated tests.",
            shortDescription: "Built an enterprise Nigerian tax-compliance and forensic-audit platform spanning 500+ API routes and 400+ automated tests, featuring Benford's Law fraud detection and a hash-chain immutable ledger",
            date: "Oct 2025 – Present",
            technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "HTMX", "TailwindCSS", "Celery", "Redis", "Cryptography"],
            github: "https://github.com/EfeObus/TekVwarho-ProAudit",
            live: "https://ingenious-emotion-production-c3c3.up.railway.app/",
            caseStudy: "case-study-proaudit.html",
            image: "images/Tekvwarho Pro Audit.png",
            featured: true,
            category: ["developer", "data-analyst"]
        },
        {
            title: "WonderWorld Learning Adventure",
            description: "Research-driven adaptive early-childhood learning platform for ages 2–8, blending cognitive science, early-years pedagogy, and game design. Features a multi-domain curriculum covering literacy (letter formation, phonemic awareness, reading fluency), numeracy (subitizing, counting, early arithmetic), and social-emotional learning. Uses Item Response Theory (Rasch Model) for real-time personalization maintaining ~75% success probability. Includes multi-sensory SVG stroke tracing, on-device offline speech recognition, narrative game worlds with mascot-guided progression, and a parent dashboard with progress tracking. COPPA and GDPR-K compliant with offline-first architecture for low-connectivity environments. Achieves 60 FPS across mobile and web.",
            shortDescription: "Designed an adaptive early-childhood learning platform (ages 2-8) applying Item Response Theory to personalize difficulty in real time, sustaining 60 FPS with offline speech recognition and COPPA/GDPR-K compliance",
            date: "Dec 2025 – Present",
            technologies: ["Flutter", "Dart", "Flame Engine", "Python", "FastAPI", "PostgreSQL", "Redis", "NumPy", "Speech-to-Text", "Adaptive Learning"],
            github: "https://github.com/EfeObus/WonderWorld-Learning-Adventure",
            live: null,
            image: "images/Wonderworld learning adventure.png",
            featured: true,
            category: ["developer"]
        },
        {
            title: "TekVwa Life",
            description: "Secure digital autobiography and legacy-preservation platform that enables users to write, organize, and protect their life stories using a professionally structured 28-chapter framework. TekVwa Life combines narrative creation, life-event and achievement tracking, and post-death legacy access into a single privacy-first system. Built with enterprise-grade security, Canadian data residency, and professional PDF/DOCX export, the platform transforms personal history into a permanent, transferable digital asset for families, historians, and estate planning purposes.",
            shortDescription: "Built a digital autobiography and legacy-preservation platform around a 28-chapter framework, with enterprise-grade security, Canadian data residency, and professional PDF/DOCX export",
            date: "Dec 2025 – Present",
            technologies: ["Node.js", "Express.js", "PostgreSQL (AWS RDS)", "Prisma ORM", "React", "Material UI", "JWT Authentication"],
            github: "https://github.com/EfeObus/TekVwa-Life",
            live: "https://tekvwa-life-production.up.railway.app/",
            image: "images/TekVwa Life.png",
            featured: true,
            category: ["developer"]
        },
        {
            title: "Tekvwa Analysis Platform",
            description: "Tekvwa Analysis (v4.4.0, rebranded from TekVwarho Analysis) is a comprehensive statistical analysis platform with AI-powered reporting, migrated from Railway to Google Cloud Run (Cloud SQL, Secret Manager, Artifact Registry) with AI generation moved from the OpenAI API to Vertex AI (Gemini) authenticated via Application Default Credentials, eliminating any API key to store or rotate. Built around five core capabilities: an Excel-like data-entry grid for direct spreadsheet input, a deterministic auto-analysis engine that profiles uploaded data and recommends the statistically appropriate test with a plain-language rationale, plain-language interpretation panels (headline, key findings, caveats, glossary) on every one of 17 analysis pages, interactive drag/resize dashboards with per-chart pinning that persist per user, and AI reports that embed real chart images alongside Gemini-narrated analysis with a deterministic fallback so reports are never empty. Hardened app-wide login enforcement across every page and API call, and debugged a real data-type-detection bug that crashed the upload pipeline on fully-populated numeric columns, reproduced and fixed against a live 536,000-row dataset.",
            shortDescription: "Migrated a 17-module statistical analysis platform from Railway to Google Cloud Run and OpenAI to Vertex AI (Gemini via Application Default Credentials), shipping an auto-analysis recommendation engine, interactive drag/resize dashboards, and app-wide security hardening",
            date: "Jan 2025 – Present",
            technologies: ["Flask", "PostgreSQL", "Google Cloud Run", "Vertex AI (Gemini)", "Cloud SQL", "Plotly.js", "Bootstrap", "Python"],
            github: "https://github.com/EfeObus/TekVwarho-Analysis",
            live: "https://tekvwarho-analysis-551794668026.northamerica-northeast1.run.app/",
            caseStudy: "case-study-analysis.html",
            image: "images/TekVwarho Analysis.png",
            featured: true,
            category: ["developer", "data-analyst"]
        },
        {
            title: "TK Reports - AI-Powered Data Analysis",
            description: "Advanced AI-powered data analytics platform that transforms datasets into comprehensive, professional-grade analytical reports. Built with Flask and OpenAI GPT-4 Turbo, it combines statistical analysis (mean, median, mode, standard deviation, skewness, kurtosis, outlier detection), machine learning insights, correlation analysis, and natural language generation to produce executive-ready reports in DOCX and PDF formats. Features research objective-driven analysis, 5 professional visualizations with detailed interpretations, handles up to 100MB file uploads, supports CSV/XLSX/XLS/TSV formats, and delivers 15+ page comprehensive reports with AI-generated executive summaries, key findings, insights, and actionable recommendations.",
            shortDescription: "Built a GPT-4-powered analytics platform that transforms raw datasets into 15+ page executive reports, automating statistical analysis, outlier detection, and visualization generation",
            date: "Oct 2024",
            technologies: ["Python", "Flask", "OpenAI GPT-4", "Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"],
            github: "https://github.com/EfeObus/TK-Reports",
            live: null,
            image: "images/TK Reports.png",
            featured: true,
            category: ["developer", "data-analyst"]
        },
        {
            title: "Zodiac Real Estate AI",
            description: "Production-ready real estate analytics platform with 88.3% accuracy machine learning, combining real-time economic data for property valuations and market analysis across 49,551+ Canadian properties.",
            shortDescription: "Delivered a real estate analytics platform achieving 88.3% ML prediction accuracy across 49,551+ Canadian properties, integrating real-time economic data feeds",
            date: "May 2025 – Aug 2025",
            technologies: ["Python", "Flask", "MySQL", "Scikit-learn", "XGBoost", "Docker", "JavaScript"],
            github: "https://github.com/EfeObus/NextProperty",
            live: null,
            caseStudy: "case-study-zodiac.html",
            image: "images/Zodiac Real Estate.png",
            featured: true,
            category: ["developer", "data-analyst"]
        },
        {
            title: "IGNITE Sleep Lounge Automation",
            description: "Digital check-in and waiver system for Humber College's IGNITE facilities, automating student registration, time tracking, and staff oversight with real-time functionality and admin dashboard.",
            shortDescription: "Automated student check-in for Humber College's IGNITE facilities, replacing manual sign-in with real-time registration tracking and an admin dashboard",
            date: "Sep 2024 – May 2025",
            technologies: ["Node.js", "Express", "PostgreSQL", "JavaScript", "JWT", "HTML/CSS"],
            github: "https://github.com/EfeObus/IGNITE-Sleep-Lounge-and-Zenzone",
            live: null,
            image: "images/Ignite Sleep Lounge.png",
            featured: true,
            category: ["developer"]
        },
        {
            title: "Tekevwe LegalEagleAI",
            description: "Web application designed to streamline legal document management and analysis. Provides features such as document generation, editing, and summarization, leveraging AI to assist users with legal research, contract creation, and risk analysis. The platform includes dashboards for activity tracking, quick actions, and recent documents, as well as collaboration tools with an AI chat assistant for insights and support.",
            shortDescription: "Developed an AI-powered legal document platform automating contract generation, drafting, and risk analysis, with an integrated AI chat assistant for legal research",
            date: "Oct 2024 – Present",
            technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "PostgreSQL", "OpenAI API", "Drizzle ORM"],
            github: "https://github.com/EfeObus/LegalEagleAI",
            live: null,
            image: "images/Tekevwe LegalEagleAI .png",
            featured: true,
            category: ["developer"]
        },
        {
            title: "TekVwarho Properties",
            description: "Nigerian property rental platform connecting landlords and tenants directly, eliminating middlemen to ensure transparency, security, and automation in rentals. Features ID verification, fraud detection, secure lease storage, and real-time communication. Landlords pay ₦10,000/year for unlimited listings and auto-generated legal agreements, while tenants pay ₦5,000/year for advanced search and agreement management.",
            shortDescription: "Launched a Nigerian property rental marketplace connecting landlords and tenants directly, automating ID verification, fraud detection, and legal agreement generation",
            date: "Feb 2025 – Present",
            technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "Paystack", "WebSocket"],
            github: "https://github.com/EfeObus/TekVwarho-Properties",
            live: "https://tekvwarho-properties-production.up.railway.app/",
            image: "images/tekvwarho properties 2.png",
            featured: true,
            category: ["developer"]
        },
        {
            title: "Agho Hospital Management System",
            description: "Comprehensive desktop and web application to streamline hospital operations with role-based access control. Features patient management, appointment scheduling, doctor management, and user administration. Includes both web interface (port 5140) and console mode with security features like password hashing, SQL injection prevention, and role-based permissions for administrators, doctors, receptionists, and nurses.",
            shortDescription: "Built a hospital management system with role-based access control across 4 staff roles, securing patient data with SHA-256 hashing and SQL-injection prevention",
            date: "2025",
            technologies: ["Java", "Java Swing", "PostgreSQL", "JDBC", "SHA-256", "Web Server"],
            github: "https://github.com/EfeObus/Agho-Hospital-Management",
            live: null,
            image: "images/Agho Hospital Managaemtn.png",
            featured: true,
            category: ["developer"]
        },
        {
            title: "Online Retail SQL Analysis",
            description: "Designed a normalized PostgreSQL database (5 tables + 1 staging table, 3NF, indexed foreign keys) for a 500,000+ row UK e-commerce transaction dataset, then wrote 30 production-ready SQL queries covering customer segmentation (RFM, LTV, cohort retention), product performance and cross-sell analysis, temporal trends, and anomaly detection using window functions (RANK, LAG, SUM OVER, NTILE, PERCENTILE_CONT), CTEs, and statistical aggregation. Surfaced that £8.91M in revenue from 4,339 customers is 82% UK-concentrated, that the top 10% of customers drive 61% of revenue, and that sub-£5 budget products generate 71% of revenue despite being a volume rather than margin business. Went further than reporting results: audited the query outputs themselves and documented real data-quality findings, including a CURRENT_DATE bug that silently mislabeled 100% of customers as \"Inactive\" and a cohort query that only ever returned month zero — the kind of self-auditing that separates production analysis from a one-off script.",
            shortDescription: "Designed a normalized PostgreSQL schema and wrote 30 production SQL queries analyzing 500K+ e-commerce transactions, uncovering revenue concentration and segmentation insights while auditing and documenting real bugs in the analysis itself",
            date: "Jul 2026",
            technologies: ["PostgreSQL", "SQL", "Window Functions", "CTEs", "RFM Segmentation", "Cohort Analysis", "Database Design"],
            github: "https://github.com/EfeObus/Online-Retail-SQL-Analysis",
            live: null,
            caseStudy: "case-study-online-retail-sql.html",
            image: "images/Online Retail SQL Analysis.png",
            featured: true,
            category: ["data-analyst", "developer"]
        },
        {
            title: "Nashville Housing Market Analysis",
            description: "Engineered a raw, unstructured municipal housing dataset of 56,636 rows into a verified, stakeholder-ready business intelligence solution using advanced Excel. De-duplicated 168 exact-duplicate sales records, designed defensive null-value routing that classified 30,619 unvalued records as \"N/A\" instead of zero to prevent market-tier skew, and engineered derived time-dimension and boolean flag columns. Built a dynamic formula engine combining VLOOKUP, XLOOKUP, and INDEX/MATCH for record retrieval with SUMIFS/COUNTIFS/AVERAGEIFS for localized statistics, and replaced standard aggregations with SUBTOTAL and SUMPRODUCT logic so every metric recalculates safely under live filters. Delivered a BI dashboard with 9 pivot tables, 5 KPI indicators, and a slicer-driven 2x3 matrix chart layout. Uncovered $18.50B in verified transaction value across 56,468 sales — a $327,581 average against a $205,838 median sale price, flagging significant high-value outlier skew — progressing from 11,338 sales ($2.78B) in 2013 to a 16,794-sale, $6.71B peak in 2015 (52% dollar-volume growth) before cooling to 14,055 sales ($4.23B) in 2016. Also surfaced ~80% capital concentration in Nashville proper and an 8.6% vacant-property sale rate — insights translated into geographic allocation, seasonal listing timing, and risk-monitoring recommendations for stakeholders.",
            shortDescription: "Transformed 56,636 messy municipal housing records (2013-2016) into a verified $18.50B market analysis — surfacing a $327,581 average vs. $205,838 median sale price to flag outlier skew — via an Excel formula engine (VLOOKUP/XLOOKUP/SUMPRODUCT) and a 9-pivot-table KPI dashboard",
            date: "Jul 2026",
            technologies: ["Microsoft Excel", "VLOOKUP/XLOOKUP", "INDEX/MATCH", "Pivot Tables", "SUMPRODUCT", "Data Cleaning", "Business Intelligence"],
            github: "https://github.com/EfeObus/Nashville-Housing",
            live: null,
            caseStudy: "case-study-nashville-housing.html",
            image: "images/Nashville Housing Market Analysis.png",
            featured: true,
            category: ["data-analyst"]
        }
    ],

    // Skills organized by category
    skills: {
        "Programming Languages": ["Python", "JavaScript", "TypeScript", "Kotlin", "HTML5", "CSS3", "SQL", "Java"],
        "Frontend Technologies": ["React", "Zustand", "Tailwind CSS", "Bootstrap", "Vite", "Responsive Design"],
        "Backend & APIs": ["Flask", "FastAPI", "Node.js", "Express.js", "Ktor", "RESTful APIs", "JWT", "Plaid API", "Docker", "Git"],
        "Mobile Development": ["Kotlin Multiplatform", "Compose Multiplatform", "Capacitor (Android/iOS)", "SQLDelight", "Koin (DI)", "Biometric Auth", "Push Notifications (FCM/APNs)"],
        "Cloud & DevOps": ["Google Cloud Run", "Cloud SQL", "Secret Manager", "AWS", "GitHub Actions (CI/CD)", "Firebase", "Prometheus/Micrometer", "Sentry"],
        "Machine Learning & AI": ["Scikit-learn", "XGBoost", "LightGBM", "Random Forest", "AutoML", "OpenAI API", "Gemini (Vertex AI)"],
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
