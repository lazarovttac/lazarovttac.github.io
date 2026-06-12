/* =========================================================
   i18n — Bilingual Support (EN / ES)
   ========================================================= */
(function () {
  const STORAGE_KEY = "portfolio_lang";

  /**
   * Apply a language to the page.
   * Special handling for `about_prose`: the stored translation uses \n\n as
   * paragraph separators, so we convert those into <br><br> in the DOM.
   */
  function setLanguage(lang) {
    const dict = TRANSLATIONS[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (value === undefined) return;

      if (key === "about_prose") {
        // Replace \n\n with <br><br> to preserve paragraph breaks
        el.innerHTML = value
          .split("\n\n")
          .map(function (p) {
            return p.trim();
          })
          .join("<br /><br />");
      } else {
        el.textContent = value;
      }
    });

    // Update <html lang="…">
    document.documentElement.lang = lang;

    // Persist
    localStorage.setItem(STORAGE_KEY, lang);

    // Update toggle button label (show the OPPOSITE language)
    const toggleBtn = document.getElementById("lang-toggle-btn");
    if (toggleBtn) {
      const icon = lang === "en" ? "🇪🇸" : "🇺🇸";
      const label = lang === "en" ? "ES" : "EN";
      toggleBtn.innerHTML = `<span class="lang-icon">${icon}</span> ${label}`;
    }
  }

  function getCurrentLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") return saved;
    // Auto-detect from browser
    return navigator.language && navigator.language.startsWith("es")
      ? "es"
      : "en";
  }

  function initI18n() {
    // Wire up the toggle button
    const toggleBtn = document.getElementById("lang-toggle-btn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        const current = localStorage.getItem(STORAGE_KEY) || getCurrentLang();
        setLanguage(current === "en" ? "es" : "en");
      });
    }

    // Apply language on load
    setLanguage(getCurrentLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initI18n);
  } else {
    initI18n();
  }
})();

/* =========================================================
   Burger Menu — Mobile Nav Toggle
   ========================================================= */
(function () {
  function initBurger() {
    const btn = document.getElementById("burger-btn");
    const dock = btn && btn.closest(".floating-dock");
    if (!btn || !dock) return;

    function toggle() {
      const isOpen = dock.classList.toggle("nav-open");
      btn.classList.toggle("open", isOpen);
      btn.setAttribute("aria-expanded", isOpen);
    }

    btn.addEventListener("click", toggle);

    // Close menu when a nav link is clicked
    dock.querySelectorAll(".dock-link, .dock-cta").forEach((link) => {
      link.addEventListener("click", () => {
        dock.classList.remove("nav-open");
        btn.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBurger);
  } else {
    initBurger();
  }
})();

/* =========================================================
   Terminal Animation — Portfolio
   ========================================================= */

(function () {
  // ── Helpers ──────────────────────────────────────────────
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  // ── Script definition ─────────────────────────────────────
  // Each entry is either a COMMAND block or an OUTPUT block.
  //
  // COMMAND: { cmd: "text to type" }
  // OUTPUT:  { lines: [ { text, cls } ] }
  //          cls → "" | "success"
  //
  // Special token in text: "[PROGRESS:filled/total]"
  // e.g. "[PROGRESS:8/10]" → ████████░░

  const SCRIPT = [
    { cmd: "whoami" },
    {
      lines: [{ text: "lazaro ventancor cressatti", cls: "success" }],
    },

    { cmd: "cat current_role.txt" },
    {
      lines: [
        { text: "AI Engineer @ TradeSpark", cls: "" },
        { text: "building the AI area from scratch", cls: "" },
      ],
    },

    { cmd: "ls projects/" },
    {
      lines: [
        {
          text: "cea-network/   semillero/   my-automata/   tradespark-ai/   games/",
          cls: "",
        },
      ],
    },

    { cmd: "cd tradespark-ai && cat status.txt" },
    {
      lines: [
        { text: "leading the AI area", cls: "" },
        { text: "turning financial-domain problems into ML", cls: "" },
        { text: "the hard part isn't the model — it's the domain", cls: "" },
        { text: "status: [PROGRESS:8/10] shipping", cls: "success" },
      ],
    },

    { cmd: "cd ../cea-network && git log --oneline -3" },
    {
      lines: [
        { text: "a3f91c2 feat: multi-tenant admin panel", cls: "" },
        { text: "b82e441 fix: lifecycle state transitions", cls: "" },
        {
          text: "c19d330 deploy: ceabragado.com → production ✓",
          cls: "success",
        },
      ],
    },

    { cmd: "cd .. && cat about.txt" },
    {
      lines: [
        { text: "builder. researcher. teacher.", cls: "" },
        { text: "turning ideas into shipped products", cls: "" },
        { text: "since 2020.", cls: "" },
      ],
    },
  ];

  // ── Progress bar renderer ─────────────────────────────────
  const TOTAL_BARS = 10;

  function buildProgressSpan(filled, total) {
    const filledCount = Math.round((filled / total) * TOTAL_BARS);
    const emptyCount = TOTAL_BARS - filledCount;
    const span = document.createElement("span");
    span.innerHTML =
      `[<span class="bar-filled">${"█".repeat(filledCount)}</span>` +
      `<span class="bar-empty">${"░".repeat(emptyCount)}</span>]`;
    span.className = "term-progress-track";
    return span;
  }

  /** Parses a text string and returns a DocumentFragment
   *  replacing [PROGRESS:filled/total] with the animated bar. */
  function parseLineText(text) {
    const frag = document.createDocumentFragment();
    const re = /\[PROGRESS:(\d+)\/(\d+)\]/;
    const m = text.match(re);
    if (!m) {
      frag.appendChild(document.createTextNode(text));
      return { frag, progressSpan: null, filled: 0, total: 0 };
    }
    const before = text.slice(0, m.index);
    const after = text.slice(m.index + m[0].length);
    const filled = parseInt(m[1], 10);
    const total = parseInt(m[2], 10);

    if (before) frag.appendChild(document.createTextNode(before));
    const ps = buildProgressSpan(0, total); // starts empty
    frag.appendChild(ps);
    if (after) frag.appendChild(document.createTextNode(after));

    return { frag, progressSpan: ps, filled, total };
  }

  /** Animates the progress bar from 0 → filled over ~800ms */
  async function animateProgress(progressSpan, filled, total) {
    const steps = filled;
    const delay = 800 / steps;
    for (let i = 1; i <= steps; i++) {
      await sleep(delay);
      const newBar = buildProgressSpan(i, total);
      progressSpan.replaceWith(newBar);
      progressSpan = newBar;
    }
  }

  // ── DOM helpers ───────────────────────────────────────────
  function getBody() {
    return document.getElementById("terminal-body");
  }

  function scrollBottom() {
    const body = getBody();
    body.scrollTop = body.scrollHeight;
  }

  /** Creates a command line row with prompt + empty cmd span + inline cursor */
  function createCmdRow() {
    const row = document.createElement("div");
    row.className = "term-line";

    const prompt = document.createElement("span");
    prompt.className = "prompt-symbol";
    prompt.textContent = "~";

    const dollar = document.createElement("span");
    dollar.className = "prompt-symbol";
    dollar.style.marginLeft = "2px";
    dollar.textContent = "$";

    const cmdSpan = document.createElement("span");
    cmdSpan.className = "term-cmd";

    const cursor = document.createElement("span");
    cursor.className = "term-cursor";

    row.appendChild(prompt);
    row.appendChild(dollar);
    row.appendChild(cmdSpan);
    row.appendChild(cursor);

    getBody().appendChild(row);
    scrollBottom();

    return { cmdSpan, cursor };
  }

  /** Creates an output-line row (fade-in). Returns { progressSpan, filled, total } if it has a progress bar. */
  function createOutputRow(text, cls) {
    const row = document.createElement("div");
    row.className =
      "term-line output-line fade-in" +
      (cls === "success" ? " output-success" : "");

    const { frag, progressSpan, filled, total } = parseLineText(text);
    row.appendChild(frag);
    getBody().appendChild(row);
    scrollBottom();

    return { progressSpan, filled, total };
  }

  /** Final idle cursor row (the standalone blinking `_` ) */
  function createIdleRow() {
    const row = document.createElement("div");
    row.className = "term-line";

    const prompt = document.createElement("span");
    prompt.className = "prompt-symbol";
    prompt.textContent = "~";

    const dollar = document.createElement("span");
    dollar.className = "prompt-symbol";
    dollar.style.marginLeft = "2px";
    dollar.textContent = "$";

    const cursor = document.createElement("span");
    cursor.className = "term-cursor";
    cursor.id = "idle-cursor";

    row.appendChild(prompt);
    row.appendChild(dollar);
    row.appendChild(cursor);
    getBody().appendChild(row);
    scrollBottom();

    return cursor;
  }

  // ── Typewriter ────────────────────────────────────────────
  const CHAR_DELAY_MS = 50;

  async function typeText(span, text) {
    for (const ch of text) {
      span.textContent += ch;
      scrollBottom();
      await sleep(CHAR_DELAY_MS);
    }
  }

  // ── Main animation loop ───────────────────────────────────
  let animationRunning = false;

  async function runAnimation() {
    animationRunning = true;
    const body = getBody();
    body.innerHTML = ""; // clear

    for (const entry of SCRIPT) {
      if ("cmd" in entry) {
        // Type out the command
        const { cmdSpan, cursor } = createCmdRow();
        await typeText(cmdSpan, entry.cmd);
        // Remove the inline typing cursor after command finishes
        cursor.remove();
        await sleep(400); // pause before output
      } else {
        // Show output lines
        const progressAnimations = [];

        for (const { text, cls } of entry.lines) {
          const { progressSpan, filled, total } = createOutputRow(text, cls);
          if (progressSpan) {
            // Animate progress bars after all lines appear
            progressAnimations.push({ progressSpan, filled, total });
          }
          await sleep(60); // small gap between output lines
        }

        // Animate any progress bars
        for (const { progressSpan, filled, total } of progressAnimations) {
          await animateProgress(progressSpan, filled, total);
        }

        await sleep(120); // brief breath between blocks
      }
    }

    // Show idle blinking cursor
    createIdleRow();

    // Pause 4 seconds then restart loop
    await sleep(3000);
    animationRunning = false;
    runAnimation();
  }

  // ── Kick off when DOM is ready ────────────────────────────
  function init() {
    const body = document.getElementById("terminal-body");
    if (!body) return;
    if (!animationRunning) runAnimation();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* =========================================================
   Lightbox — Case study galleries
   Clicking a gallery image opens it full-size over a darkened
   overlay. Closes on outside click, the × button, or Escape.
   The CSS lives in main.css under "LIGHTBOX".
   ========================================================= */
(function () {
  function buildLightbox() {
    const overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("aria-hidden", "true");

    const img = document.createElement("img");
    img.className = "lightbox__img";

    const closeBtn = document.createElement("button");
    closeBtn.className = "lightbox__close";
    closeBtn.setAttribute("aria-label", "Close image");
    closeBtn.textContent = "×";

    overlay.appendChild(img);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
    return { overlay, img };
  }

  function initLightbox() {
    const galleryImages = document.querySelectorAll(".case-gallery__item img");
    if (!galleryImages.length) return;

    const { overlay, img } = buildLightbox();

    function open(thumb) {
      img.src = thumb.src;
      img.alt = thumb.alt;
      overlay.classList.add("lightbox--open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden"; // lock page scroll behind the overlay
    }

    function close() {
      overlay.classList.remove("lightbox--open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    galleryImages.forEach((thumb) => {
      thumb.addEventListener("click", () => open(thumb));
    });

    // Anything that isn't the image itself counts as "outside" (× included).
    overlay.addEventListener("click", (e) => {
      if (e.target !== img) close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLightbox);
  } else {
    initLightbox();
  }
})();

/* =========================================================
   Email protection
   The address is never written into the static HTML. It lives here
   base64-encoded and is only decoded into a mailto: link the first time
   the user actually interacts with a [data-email] button (hover, focus,
   touch, or click) — so crawlers and email harvesters never see it.
   ========================================================= */
(function () {
  const ENCODED = "bGF6YXJvdnR0YWNAZ21haWwuY29t"; // contact email, base64

  function initEmailButtons() {
    const buttons = document.querySelectorAll("[data-email]");
    if (!buttons.length) return;

    buttons.forEach((btn) => {
      // Build the real mailto once, lazily, on first interaction.
      const reveal = () => {
        if (btn.dataset.revealed) return;
        btn.setAttribute("href", "mailto:" + atob(ENCODED));
        btn.dataset.revealed = "1";
      };

      ["pointerenter", "focus", "touchstart"].forEach((evt) =>
        btn.addEventListener(evt, reveal, { passive: true }),
      );

      // Fallback: if a click lands before any hover/focus, build and follow it.
      btn.addEventListener("click", (e) => {
        if (!btn.dataset.revealed) {
          e.preventDefault();
          reveal();
          window.location.href = "mailto:" + atob(ENCODED);
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEmailButtons);
  } else {
    initEmailButtons();
  }
})();
