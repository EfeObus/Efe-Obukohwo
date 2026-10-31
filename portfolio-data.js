// Portfolio Data - Single Source of Truth
// Update this file to automatically update all pages including the resume

const portfolioData = {
    // Personal Information
    personal: {
        name: "Efe Obukohwo",
        title: "Data Analyst | Business Intelligence & Database Consultant",
        email: "efe.obukohwo@outlook.com",
        phone: "+1 (905) 781-9825",
        location: "North York, Toronto, ON, Canada",
        linkedin: "linkedin.com/in/efe-obukohwo",
        github: "github.com/EfeObus",
        portfolio: "efeobus.github.io/Efe-Obukohwo",
        summary: "Data Analyst with 5+ years of experience turning messy, high-volume data into stakeholder-ready insight with SQL, Python, and advanced Excel. Background spans AML/fraud transaction monitoring at a commercial bank, database consulting for a global humanitarian research organization (a 25% efficiency gain through schema and data-integrity work), and research analysis in SPSS, Tableau, and Power BI. Recent work includes turning a 56,636-row municipal housing dataset into a verified $18.50B market analysis with a slicer-driven KPI dashboard, and modeling 500,000+ e-commerce transactions in PostgreSQL with 30 production SQL queries. Comfortable owning a dataset from raw extract to executive-ready visualization, with full-stack development skills to build the tools around it.",

        // Role-tailored headline + summary used by the Data Analyst resume variant
        dataAnalystTitle: "Data Analyst | Business Intelligence & Database Consultant",
        dataAnalystSummary: "Data Analyst with 5+ years of experience turning messy, high-volume data into stakeholder-ready insight with SQL, Python, and advanced Excel. Background spans AML/fraud transaction monitoring at a commercial bank, database consulting for a global humanitarian research organization (a 25% efficiency gain through schema and data-integrity work), and research analysis in SPSS, Tableau, and Power BI. Recent work includes turning a 56,636-row municipal housing dataset into a verified $18.50B market analysis with a slicer-driven KPI dashboard, and modeling 500,000+ e-commerce transactions in PostgreSQL with 30 production SQL queries. Comfortable owning a dataset from raw extract to executive-ready visualization, with full-stack development skills to build the tools around it.",

        // Role-tailored headline + summary used by the Developer resume variant
        developerTitle: "Full Stack Developer | Python Developer | Data Engineer",
        developerSummary: "Full Stack Developer who designs, builds, and ships production applications across web, cloud, and native mobile. At Zodiac Tech Toronto, led a team of 5 interns on a Flask/MySQL real estate analytics platform covering 49,551+ properties, with 88.3% prediction accuracy, a 20+ endpoint REST API, and a Dockerized CI/CD pipeline at 99.9% staging uptime. Independently built and launched TEKVWA Money, a personal finance platform live on web, Android, and iOS in Canada and Nigeria with Plaid and Mono bank linking and SOC 2-style security, alongside a FastAPI tax-compliance platform with 500+ API routes and a statistical analysis platform on Google Cloud Run with Vertex AI (Gemini). Works across Python, TypeScript, and Kotlin with CI/CD, authentication, and security architecture, and brings a data analyst's rigor for clean data and measurable outcomes.",

        // Role-tailored headline + summary used by the Teacher/Educator resume variant
        teacherTitle: "Computer Science & IT Educator | Technology & Data Instructor",
        teacherSummary: "Computer science and IT educator with five years of secondary-school teaching and IT leadership in Nigeria across computer science, data processing, and digital literacy. Designed a project-based computer science curriculum that grew STEM extracurricular enrollment by 30%, and coached the school's coding team to first place at a regional competition. Moved a school from manual to digital result computation (75% faster processing), used student performance data to raise average grades by 20%, and, as IT Department Lead, digitized lesson-plan approval to increase teacher collaboration and efficiency by 50%. Holds a B.Sc. in Computer Science and a National Certificate in Education in Computer Science and Physics, and brings current data and software experience into the classroom."
    },

    // Work Experience
    experience: [
        {
            title: "Full Stack Developer Intern",
            company: "Zodiac Tech Toronto",
            date: "May 2025 – August 2025",
            location: "Toronto, ON",
            relevantTo: ["developer", "data-analyst"],
            responsibilities: [
                "Architected an AI-powered real estate analytics platform covering 49,551+ Canadian properties, reaching 88.3% prediction accuracy with an XGBoost, LightGBM, and Random Forest ensemble",
                "Led full-stack development of a production Flask and MySQL application with a 20+ endpoint REST API, delivering interactive property mapping and investment analytics",
                "Built a 5-tier API security layer combining ML-based XSS/CSRF detection with behavioral analysis, blocking 100% of attacks in internal penetration testing",
                "Led a team of 5 interns in deploying a Dockerized CI/CD pipeline that sustained 99.9% staging uptime, sub-400ms API responses, and 85% test coverage"
            ]
        },
        {
            title: "Customer Service Representative",
            company: "IGNITE Student Life, Humber College",
            date: "Aug 2024 – May 2025",
            location: "Toronto, ON",
            relevantTo: ["developer", "data-analyst"],
            responsibilities: [
                "Automated the IGNITE Sleep Lounge's manual registration and check-in workflow for 20,000+ students, eliminating manual processing and cutting processing time by 90%",
                "Led a root-cause analysis of the student insurance opt-in process and redesigned the workflow, cutting processing time by 15%",
                "Resolved billing issues and account discrepancies for a high volume of student inquiries across phone, email, and live chat"
            ]
        },
        {
            title: "Database Consultant",
            company: "Humanitarian Outcomes",
            date: "May 2023 – Dec 2025",
            location: "Remote",
            relevantTo: ["data-analyst", "developer"],
            responsibilities: [
                "Fixed data-integrity issues across the GDHO Airtable base and database and co-designed optimized schemas with the team lead, increasing operational efficiency by 25%",
                "Analyzed trends in SPSS and SQL and presented them in Tableau and Power BI visualizations that informed decisions for humanitarian stakeholders worldwide",
                "Built and segmented 1,200+ partner and audience lists in Airtable and SQL, lifting campaign engagement by 30%",
                "Qualified 350+ leads from events and surveys with structured frameworks and converted 120 into high-priority partnership opportunities"
            ]
        },
        {
            title: "Research Analyst Intern",
            company: "Flip Foundation, Inc.",
            date: "May 2023 – Aug 2023 (Concurrent)",
            location: "Canada",
            relevantTo: ["data-analyst"],
            responsibilities: [
                "Investigated leadership barriers facing LGBTQ+ and BIPOC youth through quantitative and qualitative analysis in SPSS, SQL, and Excel, visualizing findings in Power BI and Infogram for stakeholders",
                "Wrote research reports synthesizing key trends and statistical findings and presented them directly to stakeholders to guide program decisions"
            ]
        },
        {
            title: "IT Department Lead",
            company: "Our Lady of Nigeria Secondary School",
            date: "Jan 2021 – Aug 2021 (Full-time)",
            location: "Oghara, Delta State, Nigeria",
            relevantTo: ["teacher"],
            responsibilities: [
                "Led the department's move from paper-based to digital lesson-plan creation and approval through the school website",
                "Shortened lesson-plan review and approval turnaround, increasing teacher collaboration and departmental efficiency by 50%"
            ]
        },
        {
            title: "Compliance Officer - AML/Fraud",
            company: "United Bank for Africa (UBA)",
            date: "Nov 2019 – Aug 2022 (Third-Party Contract, Full-Time)",
            location: "Sapele, Nigeria",
            relevantTo: ["data-analyst"],
            responsibilities: [
                "Monitored daily transactions across a retail and corporate client portfolio to detect and prevent money laundering, terrorist financing, and fraud",
                "Investigated 30+ system-generated alerts weekly with SQL queries and advanced Excel (VLOOKUP, pivot tables), escalating suspicious activity",
                "Performed Customer Due Diligence (CDD) and Enhanced Due Diligence (EDD) on high-risk clients to meet regulatory requirements",
                "Drafted Suspicious Transaction Reports (STRs) for the Nigerian Financial Intelligence Unit, contributing to a 10% gain in branch reporting accuracy"
            ]
        },
        {
            title: "Data Processing Teacher",
            company: "Our Lady of Nigeria Secondary School",
            date: "Sep 2019 – Aug 2021 (Full-time)",
            location: "Oghara, Delta State, Nigeria",
            relevantTo: ["teacher", "data-analyst"],
            responsibilities: [
                "Moved the school from manual to digital result computation, improving grading accuracy and cutting processing time by 75%",
                "Used student performance trends to target teaching strategies, raising average student grades by 20%"
            ]
        },
        {
            title: "IT Support Specialist",
            company: "Delta State College of Education, Nigeria",
            date: "Nov 2017 – Oct 2019 (Part-time)",
            location: "Mosogar, Nigeria",
            relevantTo: ["teacher"],
            responsibilities: [
                "Led the installation and configuration of 40 workstations, with zero issues reported after installation",
                "Resolved technical issues for 65+ end users and strengthened antivirus and cybersecurity protections across all systems",
                "Set up a remote support system that streamlined course registration and payment help for students"
            ]
        },
        {
            title: "Computer Science Teacher",
            company: "Mosogar Model Secondary School",
            date: "Sep 2016 – Aug 2018 (Part-time)",
            location: "Mosogar, Delta State, Nigeria",
            relevantTo: ["teacher"],
            responsibilities: [
                "Designed and taught a project-based computer science curriculum aligned with industry trends, increasing STEM extracurricular enrollment by 30%",
                "Coached the school's coding team through a competitive programming curriculum to first place at a regional competition"
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
            gpa: "86.5%",
            honors: "graduated with Honours"
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
            gpa: "3.75 in a 5-point grading system",
            honors: "graduated with Second Class Upper Division honours"
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
    // Ordering: ongoing projects first (most recent start date first), then
    // completed projects last (also most recent start date first within that group)
    projects: [
        {
            title: "TEKVWA Money",
            description: "TEKVWA Money is a full-stack personal finance platform solving financial leakage: the silent loss of money through small, unnoticed expenses. One React/Express/PostgreSQL codebase ships as a website plus native Android and iOS apps (Capacitor), live in Canada and Nigeria. Bank accounts link through Plaid and Mono, statement import with self-learning auto-categorization covers 24+ Canadian banks and credit unions plus Nigerian banks, and Gemini (Vertex AI) narrates spending insights with period-over-period comparisons, spike detection and budget alerts. Home-screen widgets show a live balance on Android and iOS. Security follows SOC 2-style controls: mandatory MFA, device-held refresh tokens, per-device session revocation, tamper-evident audit logs and static analysis in CI, with every green push deploying to production automatically.",
            shortDescription: "Built and launched a full-stack personal finance platform (web, Android, iOS) live in Canada and Nigeria, with Plaid and Mono bank-linking, Gemini AI insights, home-screen widgets, and SOC 2-style security (mandatory MFA, device session control, tamper-evident audit logs)",
            date: "April 2026 – Present",
            technologies: ["React", "Express.js", "PostgreSQL", "Zustand", "Tailwind CSS", "Capacitor (Android/iOS)", "Plaid API", "Mono API", "Gemini (Vertex AI)", "Google Cloud", "Firebase Cloud Messaging", "Semgrep"],
            github: "",
            live: "https://tekvwamoney.com/",
            caseStudy: "case-study-tekvwa-money.html",
            image: "images/Tekvwa Money.png",
            featured: true,
            category: ["developer"],
            privateRepo: true
        },
        {
            title: "TekVwa Life",
            description: "Secure digital autobiography and legacy-preservation platform that enables users to write, organize, and protect their life stories using a professionally structured 28-chapter framework. TekVwa Life combines narrative creation, life-event and achievement tracking, and post-death legacy access into a single privacy-first system. Built with enterprise-grade security, Canadian data residency, and professional PDF/DOCX export, the platform transforms personal history into a permanent, transferable digital asset for families, historians, and estate planning purposes.",
            shortDescription: "Built a digital autobiography and legacy-preservation platform around a 28-chapter framework, with enterprise-grade security, Canadian data residency, and professional PDF/DOCX export",
            date: "Dec 2025 – Present",
            technologies: ["Node.js", "Express.js", "PostgreSQL (AWS RDS)", "Prisma ORM", "React", "Material UI", "JWT Authentication"],
            github: "",
            live: "",
            image: "images/TekVwa Life.png",
            featured: true,
            category: ["developer"],
            privateRepo: true
        },
        {
            title: "Tekvwa Pro Audit",
            description: "Tekvwa Pro Audit (formerly TekVwarho ProAudit) is an enterprise tax compliance, payroll and forensic audit platform for Nigeria's 2026 tax reform. It automates PAYE, VAT, CIT, WHT, pension and NRS e-invoicing, runs Nigerian payroll with progressive PAYE bands, and detects irregularities with Benford's Law, Z-score analysis, 3-way matching and a hash-chain immutable ledger, alongside multi-currency FX, budgeting, consolidation and Paystack subscription billing. In 2026 I moved it to Google Cloud (Cloud Run, Cloud SQL, Memorystore) and led a security and data-integrity remediation: all 164 entity-scoped endpoints now pass through one central access check with a cross-tenant test suite, model-to-database drift was fixed across 66 tables, and a CI gate blocks enum mismatches. Built with 500+ API routes and 400+ automated tests.",
            shortDescription: "Built a Nigerian tax compliance, payroll and forensic audit platform (Benford's Law, Z-score, 3-way matching), migrated it to Google Cloud, and closed cross-tenant access risk across 164 endpoints with a central access check and cross-tenant test suite",
            date: "Oct 2025 – Present",
            technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "HTMX", "TailwindCSS", "Celery", "Redis", "Google Cloud Run", "Cloud SQL", "Paystack"],
            github: "https://github.com/EfeObus/Tekvwa-Pro-Audit",
            live: "",
            caseStudy: "case-study-proaudit.html",
            image: "images/Tekvwarho Pro Audit.png",
            featured: true,
            category: ["developer", "data-analyst"]
        },
        {
            title: "Tekvwa Analysis Platform",
            description: "Tekvwa Analysis (v5.109) is a statistical analysis and reporting platform for non-statisticians, on the web and as a Windows/macOS desktop app. Users state their question, then a guided workbook takes them through data, analysis, pivot tables, dashboards and a report. An analysis-intelligence engine profiles every column, runs the tests that answer the question and ranks findings with Benjamini-Hochberg false-discovery-rate correction, producing a brief of three pages or fewer that exports to PDF, Word or PowerPoint. Data arrives by spreadsheet grid, 500 MB uploads or scheduled connectors (Google Sheets, PostgreSQL, MySQL, Snowflake, BigQuery, Redshift), and leaves through a REST API with Python and R SDKs. Teams get workspaces, roles, SSO and MFA. It runs on Google Cloud Run with Vertex AI (Gemini) and deterministic fallbacks.",
            shortDescription: "Built a guided statistical analysis platform (web and Windows/macOS desktop, v5.109) with an FDR-corrected analysis-intelligence engine, executive PDF/Word/PowerPoint reports, warehouse connectors (Snowflake, BigQuery, Redshift), Python and R SDKs, and team workspaces with SSO and MFA",
            date: "Jan 2025 – Present",
            technologies: ["Python", "Flask", "PostgreSQL", "Google Cloud Run", "Cloud SQL", "Vertex AI (Gemini)", "Redis", "Plotly.js", "Electron", "Snowflake / BigQuery / Redshift connectors"],
            github: "",
            live: "",
            caseStudy: "case-study-analysis.html",
            image: "images/TekVwarho Analysis.png",
            featured: true,
            category: ["developer", "data-analyst"],
            privateRepo: true
        },
        {
            title: "VwaTek Apply",
            description: "Professional AI career suite built with Kotlin Multiplatform, delivering native experiences for iOS, Android, and Web from a single codebase with Koin dependency injection and a clean data/domain/presentation architecture shared across all three targets. Powered by Gemini 2.0 Flash, it provides comprehensive job search optimization including ATS resume scoring with keyword gap analysis, AI-powered contextual resume rewriting using X-Y-Z impact framework, tailored cover letter generation, and full resume version control. Features tough AI recruiter mock interviews with STAR method coaching, Canadian salary intelligence with NOC code matching and negotiation strategies, and LinkedIn profile optimization. Built production-grade: encrypted on-device persistence (SQLDelight), offline-first support with automatic cross-device sync and conflict resolution, and observability via Firebase Crashlytics, Sentry, and Prometheus/Micrometer metrics on the Ktor backend. Built for the Canadian market with full PIPEDA compliance and Canadian data residency (Montreal), with subscription tiers (Free/Pro/Premium) via Stripe, Apple IAP, and Google Play Billing, plus enterprise SSO support (SAML, OIDC, Azure AD, Okta).",
            shortDescription: "Architected a Kotlin Multiplatform AI career suite (iOS, Android, Web) from one codebase with Koin DI, offline-first sync with conflict resolution, and Prometheus/Sentry observability, powered by Gemini 2.0 Flash",
            date: "Nov 2024 – Present",
            technologies: ["Kotlin Multiplatform", "Compose Multiplatform", "Gemini 2.0 Flash", "Ktor", "Koin", "PostgreSQL", "SQLDelight", "Firebase", "Sentry", "Stripe", "Railway"],
            github: "https://github.com/EfeObus/VwaTek-Apply",
            live: "",
            image: "images/Vwatek Apply.png",
            featured: true,
            category: ["developer"]
        },
        {
            title: "JTOV Network",
            description: "An advanced AI-powered mentorship platform that connects professionals through intelligent matching, skill development, and interactive networking tools. Features include AI-powered smart matching for mentors/mentees based on compatible skills and goals, real-time messaging and WebRTC video calling, gamification elements with achievements and leveling, AI-generated career roadmaps, structured learning paths, and an analytics dashboard for tracking progress. Includes an AI Learning Hub with personalized tutoring, skill gap analysis, and smart recommendations. Features a complete video learning platform with course management, interactive quizzes, and progress tracking. Built with comprehensive admin/staff dashboards, audit logging, and support ticket system. Implements enterprise security including CSRF protection, rate limiting, secure sessions, and Helmet security headers.",
            shortDescription: "Engineered an AI-powered mentorship platform with intelligent matching, WebRTC video calling, and gamification, plus a full video-learning system with course management and progress tracking",
            date: "Jan 2024 – Present",
            technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "WebSockets", "WebRTC", "OpenAI API", "TailwindCSS", "Framer Motion"],
            github: "",
            live: null,
            image: "images/JTOV Network.png",
            featured: true,
            category: ["developer"],
            privateRepo: true
        },
        {
            title: "Tekevwe LegalEagleAI",
            description: "Web application designed to streamline legal document management and analysis. Provides features such as document generation, editing, and summarization, leveraging AI to assist users with legal research, contract creation, and risk analysis. The platform includes dashboards for activity tracking, quick actions, and recent documents, as well as collaboration tools with an AI chat assistant for insights and support.",
            shortDescription: "Developed an AI-powered legal document platform automating contract generation, drafting, and risk analysis, with an integrated AI chat assistant for legal research",
            date: "Nov 2022 – Present",
            technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "PostgreSQL", "OpenAI API", "Drizzle ORM"],
            github: "",
            live: null,
            image: "images/Tekevwe LegalEagleAI .png",
            featured: true,
            category: ["developer"],
            privateRepo: true
        },
        {
            title: "TekVwa Properties",
            description: "TekVwa Properties is a Nigerian rental marketplace that connects landlords and tenants directly, cutting out broker markups. It runs on the web and as native Android and iOS apps over a Flask and PostgreSQL backend on Google Cloud. Trust is built into every step: NIN identity verification with strict name matching across ID, bank and ownership documents; proof-of-ownership checks before a listing is approved; OTP-verified viewings; and generated tenancy agreements with move-in photos and key handover. Rent can be paid in-app through Paystack split payments straight to the landlord. Landlords choose Starter (free), Pro (₦10,000/month) or Portfolio (₦25,000/month) plans with boosts and portfolio analytics, tenants can add a Tenant Pass, and accounts are protected by optional two-factor authentication and a security-event audit log.",
            shortDescription: "Built a Nigerian rental marketplace (web, Android, iOS) with NIN identity verification, proof-of-ownership gating, verified viewings, generated tenancy agreements and Paystack split payments, on Flask and Google Cloud",
            date: "Feb 2022 – Present",
            technologies: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "JavaScript", "Capacitor (Android/iOS)", "Google Cloud Run", "Cloud SQL", "Firebase", "Paystack", "Dojah (NIN)"],
            github: "",
            live: "https://tekvwaproperties.com/",
            image: "images/tekvwarho properties 2.png",
            featured: true,
            category: ["developer"],
            privateRepo: true
        },
        {
            title: "VOP Trading",
            description: "VOP Trading is a paper-trading platform covering stocks and crypto behind one login and one combined portfolio, where every trade is simulated and no real money moves. I built the Next.js web app, a Fastify/TypeScript gateway that holds sessions in httpOnly cookies and proxies every backend, and a .NET REST-to-FIX adapter (QuickFIX/n), and integrated three open-source engines around them: the pseudomarkets-ng brokerage services (.NET), the quantreplay C++ FIX matching engine, used as the execution venue for five pilot symbols, and voptrade, my rebrand of freqtrade, which runs an RSI/Bollinger/TEMA strategy against live Kraken prices in dry-run mode. Stock quotes come live from Finnhub/Yahoo, and positions are marked to market everywhere they appear. A Google Cloud deployment plan is written; it is not deployed yet.",
            shortDescription: "Integrated a stocks-and-crypto paper-trading platform: built the Next.js web app, Fastify session gateway and a REST-to-FIX adapter around open-source brokerage, FIX matching and trading-bot engines",
            date: "Aug 2026",
            technologies: ["Next.js", "React", "TypeScript", "Fastify", ".NET", "QuickFIX/n (FIX protocol)", "Python", "PostgreSQL", "Docker"],
            github: "https://github.com/EfeObus/VopTrading",
            live: "",
            image: "images/VOP Trading.png",
            featured: true,
            category: ["developer"]
        },
        {
            title: "Efe Portfolio App",
            description: "A companion mobile app for this portfolio, built with React, TypeScript and Vite and shipped to iOS and Android with Capacitor. It loads the same portfolio-data.json this site publishes, so projects, research, blog posts and recommendations update without an app release; the data is cached on the device, and a bundled copy keeps the app working offline. Screens include a home landing page, filterable projects, research work, skills grouped by role with brand logos, an interview-prep section for each track, a contact form, and Data Analyst, Developer and Teacher resumes that download and open natively on the phone.",
            shortDescription: "Built a React/TypeScript companion app for iOS and Android (Capacitor) that syncs live with this portfolio's published data, works offline, and opens role-specific resumes natively",
            date: "Jul 2026 – Present",
            technologies: ["React", "TypeScript", "Vite", "Capacitor (Android/iOS)", "Capacitor Preferences", "Oxlint"],
            github: "https://github.com/EfeObus/Efe-Obukohwo-Mobile",
            live: "",
            image: "images/Efe Portfolio App.png",
            featured: true,
            category: ["developer"]
        },
        {
            title: "NaijaVote (System Design)",
            description: "A full system-design specification for a hybrid electronic voting system for Nigeria; the design is written, but the system is not built. Voters can cast ballots online from a personal device or in person on hardened polling-unit terminals. The design borrows Brazil's isolated voting machines and Estonia's verifiable online voting: a single Rust cryptography core compiled for web (WASM), Android and iOS, terminals on a read-only, signed-boot Linux, Go microservices over mutual TLS, a Verificatum mix-net with threshold keys held in FIPS 140-3 hardware security modules, and a signed public bulletin board whose hash roots are also published offline. The specification covers voter identity, the vote lifecycle, tallying and result transmission, auditability, a threat model, deployment, legal requirements and known limitations.",
            shortDescription: "Wrote a full system design for a hybrid online and polling-unit e-voting system for Nigeria, covering cryptography (mix-net, threshold HSM keys), identity, auditability and a threat model",
            date: "Jul 2026",
            technologies: ["System Design", "Threat Modeling", "Applied Cryptography", "Rust", "Go", "gRPC / mTLS"],
            github: "https://github.com/EfeObus/NaijaVote",
            live: "",
            image: "images/NaijaVote.png",
            featured: false,
            category: ["developer"]
        },
        {
            title: "Tekvwa Mortgage AI",
            description: "A FastAPI platform for mortgage risk analytics aimed at the Canadian and US markets, trained on Freddie Mac loan-level data (HARP and CRT releases). It predicts default, late payment, foreclosure and 90+ day delinquency, comparing LightGBM, XGBoost, Random Forest and histogram gradient boosting for each target, and explains every prediction with SHAP. Around the models it adds OSFI B-20 affordability checks (GDS/TDS with the stress-test rate), eight macroeconomic stress scenarios, Fairlearn bias analysis, Isolation Forest fraud screening, portfolio metrics (VaR, expected loss, HHI concentration), PSI drift monitoring, and JWT role-based access with audit logging. Validation is still in progress, so model accuracy figures are not reported here.",
            shortDescription: "Built a FastAPI mortgage risk platform on Freddie Mac loan data with multi-target default models, SHAP explanations, OSFI B-20 stress testing, Fairlearn bias checks and portfolio risk metrics",
            date: "Mar 2026",
            technologies: ["Python", "FastAPI", "PostgreSQL", "LightGBM", "XGBoost", "scikit-learn", "SHAP", "Fairlearn"],
            github: "https://github.com/EfeObus/Tekvwa-Mortgage-AI",
            live: "",
            image: "images/Tekvwa Mortgage AI.png",
            featured: true,
            category: ["data-analyst", "developer"]
        },
        {
            title: "Tekvwa IT Solutions Website",
            description: "The website and internal operations platform for Tekvwa IT Solutions Ltd, my registered Nigerian technology company. The public site covers services, team, careers and legal pages, with a contact form, a WebSocket live-chat widget and a three-step consultation booking flow. Behind it, an admin dashboard runs the business: message and live-chat inboxes, consultation scheduling, visitor analytics, staff management with role-based permissions, naira payroll, an internal helpdesk, an employee handbook with acknowledgment tracking, branded letterhead generation (PDF and Word), a compliance deadline tracker with a document vault, and full audit logs. It is built on Node.js and PostgreSQL with JWT authentication, refresh tokens and 60+ REST endpoints.",
            shortDescription: "Built my company's website and internal operations platform: live chat, consultation booking, staff and payroll management, helpdesk, compliance tracking and audit logs on Node.js and PostgreSQL",
            date: "Jan 2026 – Present",
            technologies: ["Node.js", "Express.js", "PostgreSQL", "WebSocket", "JavaScript", "JWT", "Docker", "Google Cloud Storage"],
            github: "https://github.com/EfeObus/Tekvwarho-IT-Solutions-Ltd",
            live: "",
            image: "images/Tekvwa IT Solutions.png",
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
        },
        {
            title: "GDHO Dataset Analysis",
            description: "Extended real-world database consulting experience gained as a contract Database Consultant at Humanitarian Outcomes (May 2023 – Dec 2025), working directly with the GDHO Airtable and database, into a full independent analysis and machine-learning pipeline on Humanitarian Outcomes' own published Global Database of Humanitarian Organisations (GDHO) 2025 release — 125,125 org-year rows across 7,301 unique humanitarian organizations (national NGOs, international NGOs, Red Cross/Crescent societies, UN agencies) tracked from 2006 to 2024. Cleaned and typed the raw export, then computed 20 statistically-backed insights covering sector composition, budget concentration, geography, and data-quality limitations: national NGOs are 81% of organizations but only 3.4% of reported budget (a ~6,780x median-budget gap to UN agencies), only ~7% of reported budgets carry an \"Actual\" provenance flag versus GDHO's own imputation, and hundreds of organizations share identical imputed budget figures — evidence GDHO imputes by bucket rather than per organization. Built a LightGBM budget-estimator pipeline as an independent cross-check, deliberately excluding every field derived from or co-dependent with the target to avoid leakage, and evaluated with an organization-level (not row-level) train/test split since the same organization repeats across up to 19 years — achieving a 0.796 held-out R² and 2.8% median absolute percentage error on organizations never seen in training. Documented an honest limitation: because most training labels are themselves GDHO-imputed, a meaningful share of the model's accuracy reflects re-deriving GDHO's own imputation formula rather than discovering independently verified ground truth. Delivered as a technical insights report, an ML methodology report, and a plain-language business report for non-technical stakeholders.",
            shortDescription: "Cleaned and analyzed 125,125 org-year rows covering 7,301 humanitarian organizations (GDHO 2025, 2006-2024), surfacing a 6,780x median-budget gap between national NGOs and UN agencies, then built a LightGBM budget estimator (0.796 held-out R², org-grouped train/test split) with an honest audit of its own imputation limitations",
            date: "Nov 2025",
            technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "LightGBM", "Matplotlib", "Feature Engineering", "Data Cleaning"],
            github: "https://github.com/EfeObus/Global-Database-of-Humanitarian-Organizations-Analysis",
            live: null,
            caseStudy: "case-study-gdho.html",
            image: "images/GDHO Dataset Analysis.png",
            featured: true,
            category: ["data-analyst", "developer"]
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
            title: "Zodiac Real Estate AI",
            description: "Production-ready real estate analytics platform with 88.3% accuracy machine learning, combining real-time economic data for property valuations and market analysis across 49,551+ Canadian properties.",
            shortDescription: "Delivered a real estate analytics platform achieving 88.3% ML prediction accuracy across 49,551+ Canadian properties, integrating real-time economic data feeds",
            date: "May 2025 – Aug 2025",
            technologies: ["Python", "Flask", "MySQL", "Scikit-learn", "XGBoost", "Docker", "JavaScript"],
            github: "",
            live: null,
            caseStudy: "case-study-zodiac.html",
            image: "images/Zodiac Real Estate.png",
            featured: true,
            category: ["developer", "data-analyst"],
            privateRepo: true
        },
        {
            title: "Northwind Traders Tableau Analysis",
            description: "Built an executive performance and commercial analytics workbook in Tableau on the classic Northwind Traders sample database, directly joining seven relational tables (customers, orders, order details, products, categories, employees, shippers) to analyze 3 years of sales data (2013-2015) across 21 countries. Designed an interactive dashboard with Top N, Start Date, and End Date parameters driving dynamic filtering across revenue, order, and customer trend worksheets. Uncovered $1.35M in total revenue across 830 orders and 89 unique customers, with the top 3 customers (Horst Kloss, Jose Pavarotti, Roland Mendel) generating $346.4K — 25.6% of total revenue. Identified Côte de Blaye as the top revenue product at $150.0K, Beverages and Dairy Products as the highest-volume categories (over 42% of units shipped), and a consistent seasonal pattern with revenue peaking in April and December around a May-June dip. Delivered strategic recommendations covering key-account management, inventory seasonality smoothing, and carrier consolidation to reduce the $78.24 average per-order freight cost, published as both an interactive Tableau Public dashboard and an executive PDF report.",
            shortDescription: "Analyzed 3 years of Northwind Traders sales data (2013-2015) across 21 countries in Tableau, surfacing $1.35M revenue, 25.6% customer-concentration risk in the top 3 accounts, and seasonal demand peaks via a parameter-driven interactive dashboard",
            date: "Apr 2025",
            technologies: ["Tableau", "Tableau Public", "Data Visualization", "Business Intelligence", "Data Modeling", "Dashboard Design"],
            github: "https://github.com/EfeObus/North-Wind-Traders-Tableau-Analysis",
            live: "https://public.tableau.com/app/profile/efe.obukohwo2950/viz/EfeObukohwoNorthwindTraders/NorthWindTradersDashboard",
            caseStudy: "case-study-northwind-traders.html",
            image: "images/Northwind Traders Tableau Analysis.png",
            featured: true,
            category: ["data-analyst"]
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
            title: "WonderWorld Learning Adventure",
            description: "Research-driven adaptive early-childhood learning platform for ages 2–8, blending cognitive science, early-years pedagogy, and game design. Features a multi-domain curriculum covering literacy (letter formation, phonemic awareness, reading fluency), numeracy (subitizing, counting, early arithmetic), and social-emotional learning. Uses Item Response Theory (Rasch Model) for real-time personalization maintaining ~75% success probability. Includes multi-sensory SVG stroke tracing, on-device offline speech recognition, narrative game worlds with mascot-guided progression, and a parent dashboard with progress tracking. COPPA and GDPR-K compliant with offline-first architecture for low-connectivity environments. Achieves 60 FPS across mobile and web.",
            shortDescription: "Designed an adaptive early-childhood learning platform (ages 2-8) applying Item Response Theory to personalize difficulty in real time, sustaining 60 FPS with offline speech recognition and COPPA/GDPR-K compliance",
            date: "Jan 2023 – Nov 2023",
            technologies: ["Flutter", "Dart", "Flame Engine", "Python", "FastAPI", "PostgreSQL", "Redis", "NumPy", "Speech-to-Text", "Adaptive Learning"],
            github: "https://github.com/EfeObus/WonderWorld-Learning-Adventure",
            live: null,
            image: "images/Wonderworld learning adventure.png",
            featured: true,
            category: ["developer", "teacher"]
        },
        {
            title: "Superstore Sales Analysis",
            description: "Performed exploratory analysis and built a 12-month sales forecast for the Superstore retail dataset (9,994 order lines, Jan 2014 - Dec 2017) across Region, Category, Sub-Category, Segment, and Ship Mode. Found that discount rate and profit margin correlate at -0.86 — unprofitable orders carry a 48% average discount versus 8% on profitable ones — and that 1,871 of 9,994 order lines (18.7%) post negative profit, giving back $156,131 total. Identified Tables as the single largest profit drag (-$17,725) despite being a top-6 product by sales volume, and Texas as the #3 state by revenue but the single biggest loss-maker (-$25,729), pointing to a discounting problem rather than a demand problem in both cases. Built a 12-month sales forecast by splitting 48 months of aggregated monthly sales into a 42-month training window and 6-month holdout, then compared Prophet against auto-ARIMA (SARIMA): Prophet won on the holdout (20.7% MAPE vs. 27.8%) and was refit on the full series to project 12 months forward, forecasting $778,333 in sales — 6.2% above the trailing 12 months — consistent with the recurring Q4 seasonal peak found in the historical data. Delivered as a full EDA and forecasting results document plus an executive-level business report.",
            shortDescription: "Analyzed 9,994 Superstore order lines (2014-2017), finding an 18.7% loss-making order rate driven by deep discounting (-0.86 margin correlation) and a $17,725 loss-making Tables sub-category, then built a Prophet vs. SARIMA sales forecast (20.7% MAPE) projecting 6.2% revenue growth over the next 12 months",
            date: "Apr 2023",
            technologies: ["Python", "Pandas", "Prophet", "SARIMA", "Matplotlib", "Time Series Forecasting", "Statistical Analysis"],
            github: "https://github.com/EfeObus/Superstore-Sales-Prediction",
            live: null,
            caseStudy: "case-study-superstore.html",
            image: "images/Superstore Sales Analysis.png",
            featured: true,
            category: ["data-analyst", "developer"]
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
        "Databases & ORMs": ["PostgreSQL", "MySQL", "Oracle", "SQLAlchemy", "Sequelize", "Drizzle ORM", "Prisma", "Airtable"],
        "Teaching & Education": ["Curriculum Design", "Classroom Instruction", "Data-Driven Instruction", "Lesson-Plan Digitization", "Student Coaching & Mentorship", "Instructional Technology"]
    },

    // Certifications
    certifications: [
        {
            title: "Programming Foundations: Fundamentals",
            issuer: "LinkedIn Learning",
            date: "Jan 2025",
            icon: "fa-code"
        },
        {
            title: "Customer Service: Working in a Customer Contact Center",
            issuer: "LinkedIn Learning",
            date: "Apr 2023",
            icon: "fa-headset"
        },
        {
            title: "Phone-Based Customer Service",
            issuer: "LinkedIn Learning",
            date: "Apr 2023",
            icon: "fa-phone"
        },
        {
            title: "Learning C++",
            issuer: "LinkedIn Learning",
            date: "Mar 2023",
            icon: "fa-laptop-code"
        },
        {
            title: "NVivo 2018 Essential Training",
            issuer: "LinkedIn Learning",
            date: "Feb 2023",
            icon: "fa-chart-pie"
        },
        {
            title: "Hands-On Introduction SQL",
            issuer: "LinkedIn Learning",
            date: "Dec 2022",
            icon: "fa-database"
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
            date: "Mar 2022",
            icon: "fa-users"
        }
    ],

    // Research Work (rendered by research.html; see Docs/ADDING_RESEARCH.md)
    // type: "article" | "issue" (journal issue contributed to) | "thesis"
    // Optional per entry: venue, status, journal { name, volume, issue, pages }, role, authors,
    // links { pdf, doi, url, code, data }. `page` is the on-site write-up, if there is one.
    research: [
        {
            type: "article",
            title: "Building a Forensic Audit Engine: Benford's Law in Practice",
            date: "Jan 2026",
            readTime: "12 min read",
            authors: ["Efe Obukohwo"],
            abstract: "How I implemented statistical fraud detection using Benford's Law, Z-Score anomaly analysis, and 3-way matching in TekVwarho ProAudit to catch financial irregularities.",
            tags: ["Python", "FastAPI", "Statistics", "Fraud Detection"],
            icon: "fa-search-dollar",
            page: "research-forensic-audit.html"
        },
        {
            type: "article",
            title: "Adaptive Learning with Item Response Theory: The Math Behind WonderWorld",
            date: "Jan 2026",
            readTime: "10 min read",
            authors: ["Efe Obukohwo"],
            abstract: "Deep dive into implementing the Rasch Model for real-time difficulty adjustment in educational software, maintaining 75% success probability for optimal learning.",
            tags: ["Machine Learning", "EdTech", "Python", "NumPy"],
            icon: "fa-brain",
            page: "research-adaptive-learning.html"
        },
        {
            type: "article",
            title: "88.3% ML Accuracy: Lessons from Predicting Canadian Property Values",
            date: "Jan 2026",
            readTime: "15 min read",
            authors: ["Efe Obukohwo"],
            abstract: "A technical walkthrough of the ensemble model architecture (XGBoost + LightGBM + Random Forest) and feature engineering that achieved 88.3% prediction accuracy on 49,551+ properties.",
            tags: ["XGBoost", "Scikit-learn", "Feature Engineering", "Real Estate"],
            icon: "fa-home",
            page: "research-ml-accuracy.html"
        },
        {
            type: "article",
            title: "Designing Multi-Tier API Security: Rate Limiting, Keys, and ML Attack Detection",
            date: "Jan 2026",
            readTime: "12 min read",
            authors: ["Efe Obukohwo"],
            abstract: "How I built a 5-tier API key system with behavioral analysis and ML-powered attack detection that achieved 100% prevention rate during penetration testing.",
            tags: ["Security", "API Design", "Flask", "Python"],
            icon: "fa-shield-alt",
            page: "research-api-security.html"
        },
        {
            type: "article",
            title: "Nigeria's 2026 Tax Reform: What Developers Need to Know",
            date: "Jan 2026",
            readTime: "18 min read",
            authors: ["Efe Obukohwo"],
            abstract: "A comprehensive guide to the upcoming Nigerian tax reforms and how I built a compliant tax calculation engine handling PAYE, VAT, CIT, WHT, and NRS e-invoicing.",
            tags: ["FinTech", "Nigeria", "Tax Compliance", "PostgreSQL"],
            icon: "fa-file-invoice-dollar",
            page: "research-nigeria-tax-reform.html"
        },
        {
            type: "article",
            title: "From Airtable to Data-Driven Insights: Scaling Humanitarian Outcomes",
            date: "Jan 2026",
            readTime: "10 min read",
            authors: ["Efe Obukohwo"],
            abstract: "Lessons learned from optimizing database systems for Humanitarian Outcomes, achieving a 25% efficiency increase through strategic schema design and query optimization.",
            tags: ["PostgreSQL", "Database Design", "SQL", "Data Engineering"],
            icon: "fa-database",
            page: "research-humanitarian-data.html"
        }
    ],

    // Key Achievements
    achievements: [
        "Achieved 88.3% ML prediction accuracy in real estate analytics platform processing 49,551+ properties",
        "Improved database system efficiency by 25% through optimization and error resolution strategies",
        "Deployed scalable infrastructure with 99.9% staging uptime and <400ms API response times",
        "Consecutive Dean's Honors List Award with 85.6% cumulative GPA in Research Analyst program",
        "Led installation and configuration of 40 workstations with zero reported post-installation issues"
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
