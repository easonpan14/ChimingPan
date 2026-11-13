/*
 * Portfolio content lives here. Edit this file to update the site.
 * Every user-facing string has a `zh` and `en` version.
 */
const SITE_DATA = {
  // Hero background effect. Switch any time:
  //   "none"     original plain hero
  //   "gradient" slowly moving color gradient (CSS only)
  //   "network"  drifting nodes that link up and follow the mouse (canvas)
  //   "both"     gradient + network
  heroEffect: "both",

  ui: {
    name: { zh: "潘啟明", en: "Chi-Ming Pan" },
    "nav.about": { zh: "關於我", en: "About" },
    "nav.skills": { zh: "技術能力", en: "Skills" },
    "nav.experience": { zh: "經歷", en: "Experience" },
    "nav.projects": { zh: "專題作品", en: "Projects" },
    "nav.services": { zh: "服務項目", en: "Services" },
    "nav.contracts": { zh: "合約範本", en: "Contract Templates" },
    "nav.contact": { zh: "聯絡我", en: "Contact" },
    "hero.eyebrow": { zh: "你好，我是", en: "Hi, I'm" },
    "hero.role": { zh: "全端工程師｜接案開發", en: "Full-Stack Developer | Freelance" },
    "hero.tagline": {
      zh: "把報價、出貨、採購等業務流程變成好用的系統，讓團隊少做重複的人工作業。",
      en: "I turn business workflows such as quoting, shipping and purchasing into reliable systems, so teams spend less time on manual work."
    },
    "hero.cta": { zh: "洽談合作", en: "Work with me" },
    "hero.cta2": { zh: "查看經歷", en: "See experience" },
    about: {
      zh: "元智大學資訊工程學系碩士生。實習期間在貿易公司開發 20 項業務自動化功能，服務 5 個部門、48 位使用者，累計使用逾 6 萬次。目前以兩人團隊接案，負責全端開發、資料庫遷移與效能優化。擅長直接與業務端溝通需求，並將需求落實成系統功能。",
      en: "M.S. student in Computer Science and Engineering at Yuan Ze University. As an IT intern at a trading company, I built 20 automation features used by 48 employees across 5 departments, with more than 60,000 total uses. I now take freelance projects in a two-person team, covering full-stack development, database migration and performance tuning. I work directly with business users and turn their needs into working features."
    },
    "services.desc": {
      zh: "主要承接網站開發，也能協助業務流程系統化與資料庫優化。",
      en: "I mainly build websites, and also help turn business workflows into systems and speed up databases."
    },
    "edu.title": { zh: "學歷", en: "Education" },
    "contracts.desc": {
      zh: "以下範本供合作前參考，實際條款依專案內容調整。",
      en: "Templates for reference before we start. Final terms are adjusted per project."
    },
    "contracts.empty": { zh: "範本整理中，敬請期待。", en: "Templates coming soon." },
    "contracts.download": { zh: "下載", en: "Download" },
    "contact.desc": {
      zh: "有專案想討論嗎？歡迎透過以下方式聯繫。",
      en: "Have a project in mind? Reach out through any of the channels below."
    },
    "exp.intern": { zh: "實習", en: "Internship" },
    "exp.freelance": { zh: "接案", en: "Freelance" },
    "exp.fulltime": { zh: "正職", en: "Full-time" },
    "exp.present": { zh: "至今", en: "Present" },
    "project.more": { zh: "查看詳情", en: "View details" },
    "project.back": { zh: "返回作品列表", en: "Back to projects" },
    "project.details": { zh: "專案細節", en: "Details" },
    "project.gallery": { zh: "圖片", en: "Gallery" },
    "project.galleryEmpty": { zh: "圖片整理中。", en: "Images coming soon." },
    "project.link": { zh: "前往專案", en: "Visit project" },
    "project.notFound": { zh: "找不到這個專案。", en: "Project not found." }
  },

  // Skills grouped by category. `items` are tech names (not translated).
  skills: [
    { category: { zh: "程式語言", en: "Languages" }, items: ["Python", "C++", "SQL", "JavaScript", "HTML/CSS", "R", "Java"] },
    { category: { zh: "框架與函式庫", en: "Frameworks & Libraries" }, items: ["Flask", "PyQt", "OpenCV", "PyTorch"] },
    { category: { zh: "資料庫與工具", en: "Databases & Tools" }, items: ["SQL Server", "SQLite", "Git", "Windows Server", "Socket"] }
  ],

  // Services offered. Main service first.
  services: [
    {
      title: { zh: "網站開發", en: "Website Development" },
      desc: {
        zh: "形象網站、企業網站與客製化網頁功能。",
        en: "Brand sites, company websites and custom web features."
      }
    },
    {
      title: { zh: "業務系統開發", en: "Business Systems" },
      desc: {
        zh: "把報價、出貨、採購等流程做成內部系統，減少人工作業。",
        en: "Internal systems for quoting, shipping and purchasing workflows that cut manual work."
      }
    },
    {
      title: { zh: "資料庫遷移與效能優化", en: "Database Migration & Performance" },
      desc: {
        zh: "舊系統對接新資料庫，並加快報表查詢，例如由 27 分鐘降至 6 秒。",
        en: "Move existing systems to a new database and speed up reports, e.g. from 27 minutes to 6 seconds."
      }
    }
  ],

  // Work experience, newest first. type: "intern" | "freelance" | "fulltime".
  // end: null means ongoing. Empty `tech` hides the tag row.
  experience: [
    {
      type: "freelance",
      title: { zh: "全端開發（兩人團隊）", en: "Full-Stack Developer (two-person team)" },
      org: { zh: "貿易業客戶專案", en: "Client project, trading industry" },
      start: "2026-09",
      end: null,
      summary: null,
      highlights: [
        {
          zh: "調整 26 支貿易業務相關程式，使內部系統對接新版資料庫結構。",
          en: "Migrated 26 trade-operations programs to the client's new database schema, keeping internal systems compatible."
        },
        {
          zh: "將報表查詢改寫為批次查詢，執行時間由 27 分鐘降至 6 秒（約 270 倍）。",
          en: "Cut report runtime from 27 minutes to 6 seconds (~270x faster) with batch queries."
        },
        {
          zh: "配合業務需求重構整體系統，涵蓋前後端、路由、權限管理與測試。",
          en: "Re-architected the full system for new business requirements, spanning front end, back end, routing, access control and testing."
        }
      ],
      tech: ["Python", "Flask", "SQL Server", "JavaScript", "HTML/CSS"],
      link: null
    },
    {
      type: "intern",
      title: { zh: "IT 實習生", en: "IT Intern" },
      org: { zh: "鋐泰汽車零件股份有限公司", en: "Hong Tai Auto Parts Co., Ltd." },
      start: "2025-01",
      end: "2026-06",
      summary: null,
      highlights: [
        {
          zh: "開發 20 項貿易業務自動化功能，服務 5 個部門、48 位使用者，累計使用逾 6 萬次。",
          en: "Built 20 trade-operations automation features used by 48 employees across 5 departments, with 60,000+ total uses."
        },
        {
          zh: "直接與業務端訪談需求，將報價、出貨、採購流程轉化為系統功能，降低人工作業。",
          en: "Worked directly with business stakeholders to turn quotation, shipping and purchasing workflows into system features, reducing manual work."
        }
      ],
      tech: ["Python", "Flask", "SQL Server", "JavaScript", "Windows Server"],
      link: null
    }
  ],

  // Academic / side projects.
  // `id` creates a detail page at project.html?id=<id>.
  // `details`: extra paragraphs shown only on the detail page.
  // `gallery`: images under assets/images/. `half: true` makes the image half width.
  //   { src: "assets/images/gin-study-1.jpg", caption: { zh: "...", en: "..." }, half: true }
  projects: [
    {
      id: "gin-study",
      title: { zh: "智慧學習機系統「專注你的薑來 Gin Study」", en: "Gin Study – Smart Learning System" },
      period: { zh: "2024.05 – 2024.11", en: "May 2024 – Nov 2024" },
      role: { zh: "負責 PyQt GUI 與 LLM 解題模組", en: "Role: PyQt GUI and LLM problem-solving module" },
      award: {
        zh: "第 29 屆大專校院資訊應用服務創新競賽 全國決賽入圍",
        en: "National Finalist, 29th InnoServe Awards"
      },
      desc: {
        zh: "針對自主學習場景，打造整合「視覺專注檢測」與「AI 輔助解題」的智慧學習終端。",
        en: "A self-study terminal combining vision-based focus detection with AI-assisted problem solving."
      },
      tech: ["Python", "PyQt", "OpenCV", "LLM"],
      link: null,
      details: [],
      gallery: []
    },
    {
      id: "magic-mirror",
      title: { zh: "「魔鏡」RPi 詩歌相機", en: "\"Magic Mirror\" RPi Poetry Camera" },
      period: { zh: "計算機網路概論期末專題", en: "Computer Networks course project" },
      role: null,
      award: { zh: "全班綜合評分第一名", en: "Ranked 1st in class" },
      desc: {
        zh: "整合 IoT、OpenCV 與 LLM，實作「拍照、後端處理、AI 生成詩詞、螢幕顯示」完整流程。以 socket 串接裝置與後端，並以 Prompt Engineering 支援現代詩、古風、幽默等風格。",
        en: "An end-to-end Raspberry Pi pipeline integrating IoT, OpenCV and an LLM: photo capture, backend processing, AI poem generation and on-screen display. Sockets link the device and backend; prompt design supports modern, classical and humorous styles."
      },
      tech: ["Raspberry Pi", "Python", "OpenCV", "Socket", "LLM"],
      link: null,
      details: [],
      gallery: []
    }
  ],

  education: [
    {
      school: { zh: "元智大學", en: "Yuan Ze University" },
      degree: { zh: "資訊工程學系 碩士班", en: "M.S. in Computer Science and Engineering" },
      period: { zh: "2026.09 – 至今", en: "Sep 2026 – Present" }
    },
    {
      school: { zh: "元智大學", en: "Yuan Ze University" },
      degree: { zh: "資訊工程學系 學士班", en: "B.S. in Computer Science and Engineering" },
      period: { zh: "2022.09 – 2026.06", en: "Sep 2022 – Jun 2026" }
    }
  ],

  // Put files under assets/contracts/ and list them here.
  contracts: [
    // {
    //   name: { zh: "網站開發委託合約", en: "Web Development Agreement" },
    //   desc: { zh: "適用一般網站接案", en: "For typical website projects" },
    //   file: "assets/contracts/web-dev-agreement.pdf"
    // }
  ],

  // Contact channels. `label` is shown; `href` is the link.
  contact: [
    { label: "Email", value: "chimingpan14@gmail.com", href: "mailto:chimingpan14@gmail.com" },
    { label: { zh: "電話", en: "Phone" }, value: "0905-137-377", href: "tel:+886905137377" },
    { label: "GitHub", value: "easonpan14", href: "https://github.com/easonpan14" }
  ]
};
