/* ============================================================================
   MAIN.JS — renders every section from js/data.js and powers all effects.
   Plain vanilla JavaScript. No frameworks, no libraries.

   CONTENTS
   01. Helpers
   02. Renderers (everything you see comes from PORTFOLIO_DATA in data.js)
   03. Effects:
       noise overlay, scroll progress, custom cursor, sticky navbar,
       mobile menu, hero particle canvas, typing effect, scroll reveal,
       animated counters, 3D tilt, back-to-top, toast, contact form,
       scrollspy, footer year
   04. Boot
   ============================================================================ */
(function () {
  "use strict";

  /* ==========================================================================
     01. HELPERS
     ========================================================================== */
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* Read the globals from data.js. (Top-level const/let do not appear on
     window, so we check the binding itself first, then window as fallback.) */
  var DATA = (typeof PORTFOLIO_DATA !== "undefined" && PORTFOLIO_DATA) || window.PORTFOLIO_DATA || {};
  var ICONS = (typeof PORTFOLIO_ICONS !== "undefined" && PORTFOLIO_ICONS) || window.PORTFOLIO_ICONS || {};

  var REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var FINE_POINTER = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* Escape user data before injecting it into HTML */
  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  /* Inline SVG icon by name (see PORTFOLIO_ICONS in data.js) */
  function icon(name) {
    return ICONS[name] || ICONS.folder || "";
  }

  /* Cycle the 3 icon-tile color variants */
  function tileVariant(i) {
    return ["indigo", "cyan", "purple"][i % 3];
  }

  /* Cyclic stagger class for scroll-reveal (1..5) */
  function delayClass(i) {
    return "reveal-delay-" + ((i % 5) + 1);
  }

  function debounce(fn, wait) {
    var t;
    return function () {
      var args = arguments, self = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(self, args); }, wait);
    };
  }

  /* Run a module but never let one failure break the rest of the page */
  function safe(label, fn) {
    try { fn(); } catch (err) { console.warn("[portfolio] " + label + " failed:", err); }
  }

  /* ==========================================================================
     02. RENDERERS — one per section, all reading PORTFOLIO_DATA
     ========================================================================== */

  /* Social icon links (shared by hero, contact and footer) */
  function socialLinksHtml() {
    return (DATA.socials || []).map(function (s) {
      return '<a class="social-link" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer" ' +
        'aria-label="' + esc(s.name) + ' profile" title="' + esc(s.name) + '">' + icon(s.icon) + "</a>";
    }).join("");
  }

  function renderNav() {
    var desktop = $("#navLinks");
    var cta = $("#navCta");
    var mobile = $("#mobileLinks");
    if (desktop) {
      desktop.innerHTML = (DATA.nav || []).map(function (l, i) {
        return '<li><a class="nav-link' + (i === 0 ? " active" : "") + '" href="' + esc(l.href) + '">' + esc(l.label) + "</a></li>";
      }).join("");
    }
    if (cta && DATA.navCta) {
      cta.href = esc(DATA.navCta.href);
      cta.textContent = DATA.navCta.label;
    }
    if (mobile) {
      var links = (DATA.nav || []).map(function (l) {
        return '<li><a class="mobile-link" href="' + esc(l.href) + '">' + esc(l.label) + "</a></li>";
      });
      if (DATA.navCta) {
        links.push('<li><a class="btn btn--primary mobile-cta" href="' + esc(DATA.navCta.href) + '">' + esc(DATA.navCta.label) + "</a></li>");
      }
      mobile.innerHTML = links.join("");
    }
    var mobileSocials = $("#mobileSocials");
    if (mobileSocials) mobileSocials.innerHTML = socialLinksHtml();
    var mobileLoc = $(".mobile-menu-location");
    if (mobileLoc && DATA.hero) mobileLoc.textContent = DATA.hero.location || "";
  }

  function renderHero() {
    var host = $("#heroContent");
    if (!host || !DATA.hero) return;
    var h = DATA.hero;
    var firstPhrase = (h.typingPhrases && h.typingPhrases[0]) || "";
    host.innerHTML =
      '<p class="hero-greeting reveal">' + esc(h.greeting) + "</p>" +
      '<h1 class="hero-name gradient-text reveal reveal-delay-1">' + esc(h.name) + "</h1>" +
      '<p class="hero-typing reveal reveal-delay-2">' + esc(h.typingPrefix) +
        ' <span class="typing-text" id="typingText">' + esc(firstPhrase) + "</span>" +
        '<span class="type-cursor" aria-hidden="true"></span></p>' +
      '<p class="hero-tagline reveal reveal-delay-2">' + esc(h.tagline) + "</p>" +
      '<div class="hero-actions reveal reveal-delay-3">' +
        '<a class="btn btn--primary" href="' + esc(h.primaryButton && h.primaryButton.href) + '">' + esc(h.primaryButton && h.primaryButton.label) + "</a>" +
        '<a class="btn btn--secondary" href="' + esc(h.secondaryButton && h.secondaryButton.href) + '">' + esc(h.secondaryButton && h.secondaryButton.label) + "</a>" +
      "</div>" +
      '<div class="hero-meta reveal reveal-delay-4">' +
        '<div class="hero-socials">' + socialLinksHtml() + "</div>" +
        '<span class="hero-location">' + icon("pin") + esc(h.location || "") + "</span>" +
      "</div>";
  }

  /* Fill the small label + big heading of each section */
  function renderSectionHeads() {
    var sections = DATA.sections || {};
    $$("section[data-section]").forEach(function (sec) {
      var conf = sections[sec.getAttribute("data-section")];
      if (!conf) return;
      var label = $(".section-label", sec);
      var title = $(".section-title", sec);
      if (label) label.textContent = conf.label;
      if (title) title.textContent = conf.title;
      var head = $(".section-head", sec);
      if (head) head.classList.add("reveal");
    });
  }

  function renderAbout() {
    var grid = $(".about-grid");
    if (!grid || !DATA.about) return;
    var a = DATA.about;
    var cvConfigured = a.cvUrl && String(a.cvUrl).indexOf("[FILL ME]") === -1;

    grid.innerHTML =
      '<div class="about-photo reveal reveal-scale">' +
        '<div class="photo-glow" aria-hidden="true"></div>' +
        '<div class="photo-frame glass-card">' +
          '<img src="' + esc(a.photo) + '" alt="' + esc(a.photoAlt) + '" width="400" height="400" loading="lazy">' +
        "</div>" +
        '<span class="photo-badge">' + icon("graduation") + esc(a.photoBadge || "") + "</span>" +
      "</div>" +
      '<div class="about-text reveal reveal-delay-1">' +
        (a.paragraphs || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
        ((a.facts && a.facts.length) ? '<ul class="about-facts">' +
          a.facts.map(function (f) {
            return "<li>" + icon(f.icon) + "<span><strong>" + esc(f.label) + ":</strong> " + esc(f.value) + "</span></li>";
          }).join("") +
        "</ul>" : "") +
        '<div class="about-actions">' +
          '<a class="btn btn--secondary' + (cvConfigured ? "" : " is-placeholder") + '" id="cvButton" ' +
            'href="' + esc(cvConfigured ? a.cvUrl : "#") + '"' + (cvConfigured ? ' download' : "") +
            (cvConfigured ? "" : ' title="Add your CV path in js/data.js (about.cvUrl)"') + ">" +
            icon("download") + "Download CV</a>" +
        "</div>" +
      "</div>";
  }

  function renderStats() {
    var host = $("#statsGrid");
    if (!host) return;
    host.innerHTML = (DATA.stats || []).map(function (s, i) {
      var isNumber = typeof s.value === "number";
      var valueHtml = isNumber
        ? '<span class="stat-value gradient-text" data-counter="' + s.value + '" data-suffix="' + esc(s.suffix || "") + '">0' + esc(s.suffix || "") + "</span>"
        : '<span class="stat-value stat-value--placeholder">' + esc(s.value) + "</span>";
      return (
        '<div class="stat-item reveal ' + delayClass(i) + '">' +
          '<div class="stat-card glass-card">' +
            '<div class="icon-tile icon-tile--' + tileVariant(i) + '">' + icon(s.icon) + "</div>" +
            valueHtml +
            '<p class="stat-label">' + esc(s.label) + "</p>" +
          "</div>" +
        "</div>"
      );
    }).join("");
  }

  function renderSkills() {
    var host = $("#skillsGrid");
    if (!host) return;
    host.innerHTML = (DATA.skills || []).map(function (g, i) {
      return (
        '<div class="skill-item reveal ' + delayClass(i) + '">' +
          '<div class="skill-card glass-card">' +
            '<div class="skill-head">' +
              '<div class="icon-tile icon-tile--' + tileVariant(i) + '">' + icon(g.icon) + "</div>" +
              '<div class="skill-head-text"><h3>' + esc(g.title) + "</h3><p>" + esc(g.description || "") + "</p></div>" +
            "</div>" +
            '<ul class="badges">' +
              (g.items || []).map(function (item) { return '<li class="badge">' + esc(item) + "</li>"; }).join("") +
            "</ul>" +
          "</div>" +
        "</div>"
      );
    }).join("");
  }

  function renderEducation() {
    var host = $("#timeline");
    if (!host) return;
    host.innerHTML = (DATA.education || []).map(function (e, i) {
      return (
        '<article class="timeline-item reveal ' + delayClass(i) + '">' +
          '<span class="timeline-dot' + (e.isCurrent ? " is-current" : "") + '" aria-hidden="true"></span>' +
          '<div class="timeline-card glass-card">' +
            '<div class="timeline-top">' +
              '<span class="chip chip--period">' + icon("calendar") + esc(e.period) + "</span>" +
              (e.result ? '<span class="chip chip--result">' + esc(e.result) + "</span>" : "") +
            "</div>" +
            "<h3>" + esc(e.title) + "</h3>" +
            '<p class="timeline-org">' + icon("graduation") + esc(e.institution) + "</p>" +
            (e.description ? '<p class="timeline-desc">' + esc(e.description) + "</p>" : "") +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  function renderProjects() {
    var host = $("#projectsGrid");
    if (!host) return;
    host.innerHTML = (DATA.projects || []).map(function (p, i) {
      var banner = p.image
        ? '<div class="project-banner project-banner--image">' +
            '<img src="' + esc(p.image) + '" alt="' + esc(p.imageAlt || p.title) + '" loading="lazy">' +
            '<span class="project-category">' + esc(p.category || "") + "</span></div>"
        : '<div class="project-banner project-banner--v' + ((i % 3) + 1) + '">' +
            '<span class="project-category">' + esc(p.category || "") + "</span>" +
            icon(p.icon || "folder") +
          "</div>";
      return (
        '<div class="project-item reveal ' + delayClass(i) + '">' +
          '<article class="project-card glass-card">' +
            banner +
            '<div class="project-body">' +
              '<h3 class="project-title">' + esc(p.title) + "</h3>" +
              '<p class="project-desc">' + esc(p.description) + "</p>" +
              '<ul class="project-tech">' +
                (p.tech || []).map(function (t, j) {
                  return '<li class="tech-tag tech-tag--' + ((j % 3) + 1) + '">' + esc(t) + "</li>";
                }).join("") +
              "</ul>" +
              '<div class="project-links">' +
                '<a class="project-link" href="' + esc(p.demoUrl || "#") + '" target="_blank" rel="noopener noreferrer">' + icon("external") + "Live Demo</a>" +
                '<a class="project-link project-link--code" href="' + esc(p.codeUrl || "#") + '" target="_blank" rel="noopener noreferrer">' + icon("github") + "Code</a>" +
              "</div>" +
            "</div>" +
          "</article>" +
        "</div>"
      );
    }).join("");
  }

  /* Shared renderer for the simple card lists */
  function renderSimpleCards(hostId, list, buildCard) {
    var host = document.getElementById(hostId);
    if (!host) return;
    host.innerHTML = (list || []).map(function (item, i) {
      return '<div class="card-item reveal ' + delayClass(i) + '">' + buildCard(item, i) + "</div>";
    }).join("");
  }

  function renderCertifications() {
    renderSimpleCards("certificationsGrid", DATA.certifications, function (c, i) {
      var link = c.link && String(c.link).indexOf("[FILL ME]") === -1 && c.link !== "#"
        ? '<a class="text-link" href="' + esc(c.link) + '" target="_blank" rel="noopener noreferrer">View Certificate ' + icon("external") + "</a>"
        : "";
      return (
        '<div class="simple-card glass-card">' +
          '<div class="icon-tile icon-tile--' + tileVariant(i) + '">' + icon(c.icon || "award") + "</div>" +
          '<div class="simple-card-body">' +
            "<h3>" + esc(c.title) + "</h3>" +
            '<p class="simple-card-meta">' + esc(c.issuer || "") + "</p>" +
            '<div class="simple-card-foot">' + (c.year ? '<span class="chip">' + esc(c.year) + "</span>" : "") + link + "</div>" +
          "</div>" +
        "</div>"
      );
    });
  }

  function renderAchievements() {
    renderSimpleCards("achievementsGrid", DATA.achievements, function (a, i) {
      return (
        '<div class="simple-card glass-card">' +
          '<div class="icon-tile icon-tile--' + tileVariant(i) + '">' + icon(a.icon || "trophy") + "</div>" +
          '<div class="simple-card-body">' +
            "<h3>" + esc(a.title) + "</h3>" +
            '<p class="simple-card-meta">' + esc(a.description || "") + "</p>" +
            '<div class="simple-card-foot">' + (a.year ? '<span class="chip">' + esc(a.year) + "</span>" : "") + "</div>" +
          "</div>" +
        "</div>"
      );
    });
  }

  function renderRoles() {
    renderSimpleCards("rolesGrid", DATA.roles, function (r, i) {
      return (
        '<div class="simple-card glass-card">' +
          '<div class="icon-tile icon-tile--' + tileVariant(i) + '">' + icon(r.icon || "users") + "</div>" +
          '<div class="simple-card-body">' +
            "<h3>" + esc(r.title) + "</h3>" +
            '<p class="simple-card-meta">' + esc(r.org || "") + "</p>" +
            '<div class="simple-card-foot"><p class="simple-card-desc">' + esc(r.description || "") + "</p></div>" +
          "</div>" +
        "</div>"
      );
    });
  }

  function renderExperience() {
    renderSimpleCards("experienceGrid", DATA.experience, function (e, i) {
      return (
        '<div class="simple-card glass-card">' +
          '<div class="icon-tile icon-tile--' + tileVariant(i) + '">' + icon(e.icon || "briefcase") + "</div>" +
          '<div class="simple-card-body">' +
            "<h3>" + esc(e.title) + "</h3>" +
            '<p class="simple-card-meta">' + esc(e.org || "") + "</p>" +
            '<div class="simple-card-foot">' +
              (e.period ? '<span class="chip chip--period">' + esc(e.period) + "</span>" : "") +
              '<p class="simple-card-desc">' + esc(e.description || "") + "</p>" +
            "</div>" +
          "</div>" +
        "</div>"
      );
    });
  }

  function renderInterests() {
    var host = $("#interestsGrid");
    if (!host) return;
    host.innerHTML = (DATA.interests || []).map(function (it, i) {
      return (
        '<div class="interest-item reveal reveal-scale ' + delayClass(i) + '">' +
          '<div class="interest-card glass-card">' +
            '<div class="icon-tile icon-tile--' + tileVariant(i) + '">' + icon(it.icon || "heart") + "</div>" +
            "<h3>" + esc(it.title) + "</h3>" +
            "<p>" + esc(it.description || "") + "</p>" +
          "</div>" +
        "</div>"
      );
    }).join("");
  }

  function renderContact() {
    var c = DATA.contact || {};
    var intro = $("#contactIntro");
    if (intro) intro.textContent = c.intro || "";
    var host = $("#contactInfo");
    if (!host) return;

    var emailConfigured = c.email && String(c.email).indexOf("[FILL ME]") === -1;
    var emailHtml = emailConfigured
      ? '<a class="contact-line-value" href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>"
      : '<p class="contact-line-value">' + esc(c.email) + "</p>";

    host.innerHTML =
      "<h3>Contact Information</h3>" +
      '<div class="contact-line">' +
        '<div class="icon-tile icon-tile--indigo">' + icon("mail") + "</div>" +
        '<div><p class="contact-line-label">Email</p>' + emailHtml + "</div>" +
      "</div>" +
      '<div class="contact-line">' +
        '<div class="icon-tile icon-tile--cyan">' + icon("pin") + "</div>" +
        '<div><p class="contact-line-label">Location</p><p class="contact-line-value">' + esc(c.location || "") + "</p></div>" +
      "</div>" +
      (c.university
        ? '<div class="contact-line">' +
            '<div class="icon-tile icon-tile--purple">' + icon("graduation") + "</div>" +
            '<div><p class="contact-line-label">University</p><p class="contact-line-value">' + esc(c.university) + "</p></div>" +
          "</div>"
        : "") +
      '<div class="contact-socials">' + socialLinksHtml() + "</div>";
  }

  function renderFooter() {
    var links = $("#footerLinks");
    if (links) {
      var items = (DATA.nav || []).slice();
      if (DATA.navCta) items.push(DATA.navCta);
      links.innerHTML = items.map(function (l) {
        return '<li><a href="' + esc(l.href) + '">' + esc(l.label) + "</a></li>";
      }).join("");
    }
    var socials = $("#footerSocials");
    if (socials) socials.innerHTML = socialLinksHtml();
    var tagline = $(".footer-tagline");
    if (tagline && DATA.hero) tagline.textContent = DATA.hero.tagline || "";
    var built = $("#footerBuilt");
    if (built && DATA.footer) built.textContent = DATA.footer.builtWith || "";
  }

  function renderAll() {
    safe("renderNav", renderNav);
    safe("renderHero", renderHero);
    safe("renderSectionHeads", renderSectionHeads);
    safe("renderAbout", renderAbout);
    safe("renderStats", renderStats);
    safe("renderSkills", renderSkills);
    safe("renderEducation", renderEducation);
    safe("renderProjects", renderProjects);
    safe("renderCertifications", renderCertifications);
    safe("renderAchievements", renderAchievements);
    safe("renderRoles", renderRoles);
    safe("renderExperience", renderExperience);
    safe("renderInterests", renderInterests);
    safe("renderContact", renderContact);
    safe("renderFooter", renderFooter);
  }

  /* ==========================================================================
     03. EFFECTS
     ========================================================================== */

  /* --- 3.1 Noise overlay: random-noise canvas -> data URL -> fixed layer --- */
  function initNoise() {
    var el = $("#noiseOverlay");
    if (!el) return;
    var size = 128;
    var canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    var ctx = canvas.getContext("2d");
    var img = ctx.createImageData(size, size);
    for (var i = 0; i < img.data.length; i += 4) {
      var v = Math.floor(Math.random() * 255);
      img.data[i] = v;
      img.data[i + 1] = v;
      img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    el.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
  }

  /* --- 3.2 Scroll progress bar + 3.4 sticky navbar + 3.12 back-to-top ---
         One rAF-throttled scroll listener drives all three. */
  function initScrollUI() {
    var bar = $("#scrollProgressBar");
    var navbar = $("#navbar");
    var backToTop = $("#backToTop");
    var ticking = false;

    function frame() {
      var y = window.scrollY || window.pageYOffset;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
      if (navbar) navbar.classList.toggle("scrolled", y > 80);
      if (backToTop) backToTop.classList.toggle("visible", y > 600);
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(frame);
      }
    }, { passive: true });
    frame();

    if (backToTop) {
      backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: REDUCED_MOTION ? "auto" : "smooth" });
      });
    }
  }

  /* --- 3.3 Custom cursor: dot + easing ring, grows over interactive items --- */
  function initCursor() {
    if (!FINE_POINTER || REDUCED_MOTION || window.innerWidth < 768) return;
    var dot = $("#cursorDot");
    var ring = $("#cursorRing");
    if (!dot || !ring) return;

    document.body.classList.add("has-custom-cursor");

    var x = -100, y = -100, rx = -100, ry = -100, shown = false;
    var HOVERABLE = "a, button, input, textarea, select, .glass-card, .badge";

    document.addEventListener("mousemove", function (e) {
      x = e.clientX;
      y = e.clientY;
      if (!shown) {
        shown = true;
        rx = x;
        ry = y;
        dot.classList.add("is-visible");
        ring.classList.add("is-visible");
      }
    }, { passive: true });

    document.addEventListener("mouseover", function (e) {
      if (e.target.closest && e.target.closest(HOVERABLE)) ring.classList.add("is-hover");
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest && e.target.closest(HOVERABLE)) ring.classList.remove("is-hover");
    });
    document.documentElement.addEventListener("mouseleave", function () {
      dot.classList.remove("is-visible");
      ring.classList.remove("is-visible");
    });
    document.documentElement.addEventListener("mouseenter", function () {
      if (shown) {
        dot.classList.add("is-visible");
        ring.classList.add("is-visible");
      }
    });

    (function loop() {
      /* lerp: the ring trails behind the dot with smooth easing */
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      dot.style.transform = "translate(" + x + "px," + y + "px) translate(-50%,-50%)";
      ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
      requestAnimationFrame(loop);
    })();
  }

  /* --- 3.5 Mobile menu: hamburger -> X, overlay slides from the right --- */
  function initMobileMenu() {
    var toggle = $("#menuToggle");
    var menu = $("#mobileMenu");
    if (!toggle || !menu) return;

    function setOpen(open) {
      menu.classList.toggle("open", open);
      toggle.classList.toggle("active", open);
      document.body.classList.toggle("menu-open", open);   /* locks body scroll */
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }

    toggle.addEventListener("click", function () {
      setOpen(!menu.classList.contains("open"));
    });
    /* Close when any link (or the CTA) inside the menu is clicked */
    $$(".mobile-link, .mobile-cta", menu).forEach(function (link) {
      link.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    /* If the window grows to desktop size, close the menu */
    window.addEventListener("resize", debounce(function () {
      if (window.innerWidth >= 768) setOpen(false);
    }, 150));
  }

  /* --- 3.6 Hero particle canvas (replaces Three.js) ---
         ~120 glowing particles, faint connecting lines, mouse parallax.
         Paused when the hero is off-screen or the tab is hidden. */
  function initHeroCanvas() {
    var canvas = $("#heroCanvas");
    if (!canvas || REDUCED_MOTION) return;
    var hero = canvas.closest(".hero");
    var ctx = canvas.getContext("2d");
    var COLORS = ["#6366f1", "#06b6d4", "#8b5cf6"];
    var LINK_DIST = 120;

    var particles = [];
    var width = 0, height = 0, rafId = null, running = false, heroVisible = true;
    var parallax = { x: 0, y: 0, tx: 0, ty: 0 };
    var COUNT = window.innerWidth < 768 ? 55 : 120;

    function buildParticles() {
      particles = [];
      for (var i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 0.7,
          color: COLORS[(Math.random() * COLORS.length) | 0],
          a: Math.random() * 0.5 + 0.35
        });
      }
    }

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    }

    function drawFrame() {
      ctx.clearRect(0, 0, width, height);
      parallax.x += (parallax.tx - parallax.x) * 0.05;
      parallax.y += (parallax.ty - parallax.y) * 0.05;
      ctx.save();
      ctx.translate(parallax.x, parallax.y);

      /* faint lines between close particles */
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        for (var j = i + 1; j < particles.length; j++) {
          var q = particles[j];
          var dx = p.x - q.x, dy = p.y - q.y;
          var d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            var alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.16;
            ctx.strokeStyle = "rgba(154,163,255," + alpha.toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      /* glowing dots */
      for (var k = 0; k < particles.length; k++) {
        var pt = particles[k];
        ctx.globalAlpha = pt.a;
        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.restore();
    }

    function step() {
      if (!running) return;
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = width + 20; else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20; else if (p.y > height + 20) p.y = -20;
      }
      drawFrame();
      rafId = requestAnimationFrame(step);
    }

    function start() {
      if (running || !heroVisible || document.hidden) return;
      running = true;
      rafId = requestAnimationFrame(step);
    }
    function stop() {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    }

    if (hero) {
      hero.addEventListener("mousemove", function (e) {
        var rect = hero.getBoundingClientRect();
        parallax.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 24;
        parallax.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 24;
      }, { passive: true });
      hero.addEventListener("mouseleave", function () {
        parallax.tx = 0;
        parallax.ty = 0;
      });
      /* Pause when the hero scrolls out of view */
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(function (entries) {
          heroVisible = entries[0].isIntersecting;
          if (heroVisible) start(); else stop();
        }, { threshold: 0.02 }).observe(hero);
      }
    }
    /* Pause when the tab is hidden */
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop(); else start();
    });
    window.addEventListener("resize", debounce(resize, 200), { passive: true });

    resize();
    start();
  }

  /* --- 3.7 Typing effect: 80ms type / 40ms delete / 2s pause --- */
  function initTyping() {
    var el = $("#typingText");
    var phrases = (DATA.hero && DATA.hero.typingPhrases) || [];
    if (!el || !phrases.length) return;
    var cursor = $(".type-cursor");

    if (REDUCED_MOTION) {
      el.textContent = phrases[0];
      if (cursor) cursor.style.display = "none";
      return;
    }

    var TYPE_MS = 80, DELETE_MS = 40, HOLD_MS = 2000, NEXT_MS = 350;
    var phraseIdx = 0, charIdx = 0, deleting = false, heroVisible = true;

    var hero = $("#home");
    if (hero && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        heroVisible = entries[0].isIntersecting;
      }, { threshold: 0 }).observe(hero);
    }

    function tick() {
      if (!heroVisible) {           /* hero off-screen: idle, don't type */
        setTimeout(tick, 800);
        return;
      }
      var word = phrases[phraseIdx];
      if (!deleting) {
        charIdx++;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) {
          deleting = true;
          setTimeout(tick, HOLD_MS);   /* full phrase: pause 2s */
          return;
        }
        setTimeout(tick, TYPE_MS);
      } else {
        charIdx--;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(tick, NEXT_MS);
          return;
        }
        setTimeout(tick, DELETE_MS);
      }
    }
    setTimeout(tick, 700);
  }

  /* --- 3.8 Scroll reveal: fade + slide up 40px, staggered, + scale variant --- */
  function initReveal() {
    var els = $$(".reveal, .reveal-scale");
    if (REDUCED_MOTION || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("revealed"); });
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);   /* reveal once, then stop watching */
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* --- 3.9 Animated counters: 0 -> target, ease-out quart over 2s --- */
  function initCounters() {
    var counters = $$("[data-counter]");
    if (!counters.length) return;

    function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        obs.unobserve(el);
        var target = parseFloat(el.getAttribute("data-counter"));
        var suffix = el.getAttribute("data-suffix") || "";
        if (isNaN(target)) { el.textContent = suffix; return; }
        if (REDUCED_MOTION) { el.textContent = target + suffix; return; }

        var DURATION = 2000;
        var start = null;
        function frameNow(now) {
          if (start === null) start = now;
          var p = Math.min((now - start) / DURATION, 1);
          el.textContent = Math.round(easeOutQuart(p) * target) + suffix;
          if (p < 1) requestAnimationFrame(frameNow);
        }
        requestAnimationFrame(frameNow);
      });
    }, { threshold: 0.3 });
    counters.forEach(function (c) { io.observe(c); });
  }

  /* --- 3.11 3D tilt on project cards (~8deg, smooth reset, no touch) --- */
  function initTilt() {
    if (!FINE_POINTER || REDUCED_MOTION) return;
    var MAX_DEG = 8;
    $$(".project-card").forEach(function (card) {
      card.addEventListener("mouseenter", function () {
        card.classList.add("is-tilting");
      });
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform =
          "perspective(900px) rotateX(" + (-py * MAX_DEG).toFixed(2) +
          "deg) rotateY(" + (px * MAX_DEG).toFixed(2) + "deg) translateY(-4px)";
      });
      card.addEventListener("mouseleave", function () {
        card.classList.remove("is-tilting");
        card.style.transform = "";          /* smooth reset via CSS transition */
      });
    });
  }

  /* --- 3.13 Toast notification (success / error) --- */
  var toastTimer = null;
  function showToast(message, type) {
    var toast = $("#toast");
    if (!toast) return;
    $("#toastMessage").textContent = message;
    $("#toastIcon").innerHTML = icon(type === "error" ? "x" : "check");
    toast.classList.remove("toast--success", "toast--error");
    toast.classList.add("toast--" + (type === "error" ? "error" : "success"), "show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 5000);
  }

  /* --- 3.14 Contact form: validation, Formspree fetch, honeypot, mailto --- */
  function initContactForm() {
    var form = $("#contactForm");
    if (!form) return;

    var FIELDS = {
      name: {
        el: $("#name"), error: $("#nameError"),
        validate: function (v) { return v.trim().length >= 2 || "Please enter your name (at least 2 characters)."; }
      },
      email: {
        el: $("#email"), error: $("#emailError"),
        validate: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Please enter a valid email address."; }
      },
      message: {
        el: $("#message"), error: $("#messageError"),
        validate: function (v) { return v.trim().length >= 10 || "Please write a message of at least 10 characters."; }
      }
    };

    /* Clear an error as soon as the user fixes the field */
    Object.keys(FIELDS).forEach(function (key) {
      var f = FIELDS[key];
      f.el.addEventListener("input", function () {
        if (f.error.textContent) {
          var res = f.validate(f.el.value);
          f.error.textContent = res === true ? "" : res;
          f.el.closest(".form-field").classList.toggle("field-invalid", res !== true);
        }
      });
    });

    function showMailtoFallback() {
      var fb = $("#formFallback");
      var link = $("#mailtoLink");
      if (!fb || !link) return;
      var email = String((DATA.contact || {}).email || "");
      if (email && email.indexOf("[FILL ME]") === -1) {
        link.href = "mailto:" + email +
          "?subject=" + encodeURIComponent("Message from your portfolio site") +
          "&body=" + encodeURIComponent("Hi Abdullah,\n\n");
        link.textContent = "Send me an email directly";
      } else {
        link.href = "#";
        link.textContent = "add your email in js/data.js first (contact.email)";
      }
      fb.hidden = false;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      /* Honeypot: if the invisible field was filled, a bot did it — ignore */
      var gotcha = form.querySelector('[name="_gotcha"]');
      if (gotcha && gotcha.value) return;

      /* Validate all fields, show inline errors */
      var valid = true;
      Object.keys(FIELDS).forEach(function (key) {
        var f = FIELDS[key];
        var res = f.validate(f.el.value);
        var ok = res === true;
        f.error.textContent = ok ? "" : res;
        f.el.closest(".form-field").classList.toggle("field-invalid", !ok);
        f.el.setAttribute("aria-invalid", String(!ok));
        if (!ok) valid = false;
      });
      if (!valid) {
        showToast("Please fix the highlighted fields and try again.", "error");
        return;
      }

      /* Formspree endpoint comes from js/data.js */
      var formspreeId = String((DATA.contact || {}).formspreeId || "").trim();
      var configured = formspreeId && formspreeId.indexOf("[FILL ME]") === -1;
      if (!configured) {
        showToast("The contact form is not set up yet — add your Formspree ID in js/data.js (see SETUP.md).", "error");
        showMailtoFallback();
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = icon("send") + "Sending…";

      fetch("https://formspree.io/f/" + encodeURIComponent(formspreeId), {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: FIELDS.name.el.value.trim(),
          email: FIELDS.email.el.value.trim(),
          message: FIELDS.message.el.value.trim()
        })
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Formspree responded with status " + res.status);
          showToast("Message sent successfully! I will get back to you soon.", "success");
          form.reset();
          var fb = $("#formFallback");
          if (fb) fb.hidden = true;
        })
        .catch(function (err) {
          console.warn("[portfolio] contact form error:", err);
          showToast("Something went wrong while sending. Please email me directly.", "error");
          showMailtoFallback();
        })
        .then(function () {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalHtml;
        });
    });
  }

  /* --- 3.16 Scrollspy: highlight the nav link of the section in view --- */
  function initScrollSpy() {
    var links = $$(".nav-link[href^='#'], .mobile-link[href^='#']");
    if (!links.length || !("IntersectionObserver" in window)) return;

    var ids = {};
    links.forEach(function (l) {
      var id = (l.getAttribute("href") || "").slice(1);
      if (id) ids[id] = true;
    });
    var sections = Object.keys(ids)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    if (!sections.length) return;

    function setActive(id) {
      links.forEach(function (l) {
        l.classList.toggle("active", l.getAttribute("href") === "#" + id);
      });
    }

    /* A section counts as "in view" while it crosses the middle band */
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* --- 3.15 Footer year updates itself --- */
  function initFooterYear() {
    var y = $("#footerYear");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  /* ==========================================================================
     04. BOOT
     ========================================================================== */
  function init() {
    /* Swap no-js -> js so the CSS fallbacks for disabled JS go away */
    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");
    if (DATA.site && DATA.site.title) document.title = DATA.site.title;

    renderAll();          /* 1. build every section from data.js            */
    safe("initReveal", initReveal);       /* 2. then observe reveal targets  */
    safe("initNoise", initNoise);
    safe("initScrollUI", initScrollUI);
    safe("initMobileMenu", initMobileMenu);
    safe("initScrollSpy", initScrollSpy);
    safe("initTyping", initTyping);
    safe("initHeroCanvas", initHeroCanvas);
    safe("initCounters", initCounters);
    safe("initTilt", initTilt);
    safe("initCursor", initCursor);
    safe("initContactForm", initContactForm);
    safe("initFooterYear", initFooterYear);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
