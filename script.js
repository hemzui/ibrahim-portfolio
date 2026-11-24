const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Add a Projects link to the existing navigation.
const projectNav = document.createElement("a");
projectNav.href = "#projects";
projectNav.textContent = "Projects";
const contactNav = navLinks.querySelector('a[href="#contact"]');
if (contactNav && !navLinks.querySelector('a[href="#projects"]')) {
  navLinks.insertBefore(projectNav, contactNav);
}

// Render both model-portfolio projects on the homepage.
const projectsSection = document.createElement("section");
projectsSection.className = "section section-muted";
projectsSection.id = "projects";
projectsSection.innerHTML = `
  <div class="container">
    <p class="section-label">05 / Selected Projects</p>
    <h2 class="section-title">Projects</h2>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:20px">
      <article style="background:#fff;border:1px solid #dde5ef;border-radius:16px;padding:clamp(22px,4vw,36px);box-shadow:0 12px 32px rgba(16,27,56,.08)">
        <p style="color:#1d4ed8;font-size:.8rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin:0 0 10px">FinTech · Portfolio Analytics · Quantitative Investing</p>
        <h3 style="font-size:clamp(1.25rem,3vw,1.8rem);color:#101b38;margin:0 0 12px">Sigma 0.1 — Egyptian High-Risk Model Portfolio</h3>
        <p style="color:#475569;line-height:1.75;margin:0 0 16px">Interactive dashboard demonstrating an illustrative Egyptian high-risk model portfolio, including allocation bubbles, a 3D risk/return landscape, simulated EGX30 comparison, drawdown analysis, and adjustable assumptions.</p>
        <p style="color:#64748b;font-size:.9rem;margin:0 0 20px"><strong>Tools:</strong> HTML, JavaScript, SVG, Canvas, jsPDF</p>
        <div style="display:flex;flex-wrap:wrap;gap:12px">
          <a href="/ibrahim-portfolio/projects/sigma-01/" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#1d4ed8;color:#fff;text-decoration:none;padding:11px 18px;border-radius:8px;font-weight:700">Live Demo</a>
          <a href="/ibrahim-portfolio/Sigma-0.1-Allocation-Rationale.pdf" target="_blank" rel="noopener noreferrer" style="display:inline-block;border:1px solid #1d4ed8;color:#1d4ed8;text-decoration:none;padding:10px 17px;border-radius:8px;font-weight:700">View PDF Report</a>
        </div>
        <p style="color:#8a5a00;background:#fff8e6;border:1px solid #f1d48b;border-radius:8px;padding:10px 12px;font-size:.82rem;line-height:1.55;margin:20px 0 0">Disclaimer: All portfolio performance values are simulated and illustrative, not live EGX data, investment advice, forecasts, or guarantees.</p>
      </article>
      <article style="background:#fff;border:1px solid #dde5ef;border-radius:16px;padding:clamp(22px,4vw,36px);box-shadow:0 12px 32px rgba(16,27,56,.08)">
        <p style="color:#1d4ed8;font-size:.8rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin:0 0 10px">FinTech · Portfolio Analytics · Capital Preservation</p>
        <h3 style="font-size:clamp(1.25rem,3vw,1.8rem);color:#101b38;margin:0 0 12px">Alpha 0.1 — Egyptian Conservative Model Portfolio</h3>
        <p style="color:#475569;line-height:1.75;margin:0 0 16px">Interactive dashboard demonstrating an illustrative conservative Egyptian model portfolio, with a larger Treasury-bill and gold allocation alongside limited equity exposure.</p>
        <p style="color:#64748b;font-size:.9rem;margin:0 0 20px"><strong>Tools:</strong> HTML, JavaScript, SVG, Canvas, jsPDF</p>
        <div style="display:flex;flex-wrap:wrap;gap:12px">
          <a href="/ibrahim-portfolio/projects/alpha-01/" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#1d4ed8;color:#fff;text-decoration:none;padding:11px 18px;border-radius:8px;font-weight:700">Live Demo</a>
          <a href="/ibrahim-portfolio/Alpha-0.1-Allocation-Rationale.pdf" target="_blank" rel="noopener noreferrer" style="display:inline-block;border:1px solid #1d4ed8;color:#1d4ed8;text-decoration:none;padding:10px 17px;border-radius:8px;font-weight:700">View PDF Report</a>
        </div>
        <p style="color:#8a5a00;background:#fff8e6;border:1px solid #f1d48b;border-radius:8px;padding:10px 12px;font-size:.82rem;line-height:1.55;margin:20px 0 0">Disclaimer: All portfolio performance values are simulated and illustrative, not live EGX data, investment advice, forecasts, or guarantees.</p>
      </article>
    </div>
  </div>`;

const contactSection = document.querySelector(".contact-section");
if (contactSection && !document.getElementById("projects")) {
  contactSection.parentNode.insertBefore(projectsSection, contactSection);
}
