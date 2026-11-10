(function () {
  const STORAGE_KEY = "portfolio-lang";
  const data = SITE_DATA;

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;
    return navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  let lang = detectLang();

  const t = (obj) => (obj && typeof obj === "object" ? obj[lang] ?? obj.zh : obj ?? "");
  const ui = (key) => t(data.ui[key]);

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function formatMonth(ym) {
    if (!ym) return ui("exp.present");
    const [y, m] = ym.split("-");
    return lang === "zh" ? `${y}.${m}` : new Date(+y, +m - 1).toLocaleString("en", { month: "short", year: "numeric" });
  }

  function renderStatic() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = ui(node.dataset.i18n);
    });
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.getElementById("lang-toggle").textContent = lang === "zh" ? "EN" : "中文";
  }

  function renderSkills() {
    const root = document.getElementById("skills-list");
    root.replaceChildren(
      ...data.skills.map((group) => {
        const card = el("div", "skill-card");
        card.append(el("h3", "skill-card__title", t(group.category)));
        const tags = el("ul", "tags");
        group.items.forEach((item) => tags.append(el("li", "tag", item)));
        card.append(tags);
        return card;
      })
    );
  }

  function renderExperience() {
    const root = document.getElementById("experience-list");
    root.replaceChildren(
      ...data.experience.map((exp) => {
        const li = el("li", "timeline__item");
        const head = el("div", "timeline__head");
        head.append(el("span", `badge badge--${exp.type}`, ui(`exp.${exp.type}`)));
        head.append(el("span", "timeline__date", `${formatMonth(exp.start)} – ${formatMonth(exp.end)}`));
        li.append(head);

        const title = el("h3", "timeline__title");
        if (exp.link) {
          const a = el("a", null, t(exp.title));
          a.href = exp.link;
          a.target = "_blank";
          a.rel = "noopener";
          title.append(a);
        } else {
          title.textContent = t(exp.title);
        }
        li.append(title);
        li.append(el("p", "timeline__org", t(exp.org)));
        if (exp.summary) li.append(el("p", "timeline__summary", t(exp.summary)));

        if (exp.highlights && exp.highlights.length) {
          const ul = el("ul", "timeline__highlights");
          exp.highlights.forEach((h) => ul.append(el("li", null, t(h))));
          li.append(ul);
        }
        if (exp.tech && exp.tech.length) {
          const tags = el("ul", "tags tags--small");
          exp.tech.forEach((x) => tags.append(el("li", "tag", x)));
          li.append(tags);
        }
        return li;
      })
    );
  }

  function renderEducation() {
    const root = document.getElementById("education-list");
    root.replaceChildren(
      ...data.education.map((e) => {
        const li = el("li", "edu__item");
        const info = el("div");
        info.append(el("strong", null, t(e.school)), el("span", "edu__degree", t(e.degree)));
        li.append(info, el("span", "edu__period", t(e.period)));
        return li;
      })
    );
  }

  function renderProjects() {
    const root = document.getElementById("projects-list");
    root.replaceChildren(
      ...data.projects.map((p) => {
        const card = el("article", "project");
        const title = el("h3", "project__title");
        if (p.link) {
          const a = el("a", null, t(p.title));
          a.href = p.link;
          a.target = "_blank";
          a.rel = "noopener";
          title.append(a);
        } else {
          title.textContent = t(p.title);
        }
        card.append(title);
        card.append(el("p", "project__meta", t(p.period)));
        if (p.award) card.append(el("p", "project__award", t(p.award)));
        if (p.role) card.append(el("p", "project__role", t(p.role)));
        card.append(el("p", "project__desc", t(p.desc)));
        if (p.tech && p.tech.length) {
          const tags = el("ul", "tags tags--small");
          p.tech.forEach((x) => tags.append(el("li", "tag", x)));
          card.append(tags);
        }
        return card;
      })
    );
  }

  function renderContracts() {
    const root = document.getElementById("contracts-list");
    if (!data.contracts.length) {
      root.replaceChildren(el("li", "contracts__empty", ui("contracts.empty")));
      return;
    }
    root.replaceChildren(
      ...data.contracts.map((c) => {
        const li = el("li", "contract");
        const info = el("div");
        info.append(el("h3", "contract__name", t(c.name)));
        if (c.desc) info.append(el("p", "contract__desc", t(c.desc)));
        const a = el("a", "btn btn--small", ui("contracts.download"));
        a.href = c.file;
        a.setAttribute("download", "");
        li.append(info, a);
        return li;
      })
    );
  }

  function renderContact() {
    const root = document.getElementById("contact-list");
    root.replaceChildren(
      ...data.contact.map((c) => {
        const li = el("li", "contact__item");
        li.append(el("span", "contact__label", t(c.label)));
        const a = el("a", null, c.value);
        a.href = c.href;
        if (c.href.startsWith("http")) {
          a.target = "_blank";
          a.rel = "noopener";
        }
        li.append(a);
        return li;
      })
    );
  }

  function render() {
    renderStatic();
    renderSkills();
    renderEducation();
    renderExperience();
    renderProjects();
    renderContracts();
    renderContact();
  }

  document.getElementById("lang-toggle").addEventListener("click", () => {
    lang = lang === "zh" ? "en" : "zh";
    localStorage.setItem(STORAGE_KEY, lang);
    render();
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  render();
})();
