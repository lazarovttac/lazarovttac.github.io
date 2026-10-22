import {
  splitLinks,
  splitParagraphs,
  translations,
  type Language,
  type TranslationKey,
} from "../i18n/translations";

const STORAGE_KEY = "portfolio_lang";

function renderLinks(paragraph: string): (string | Node)[] {
  return splitLinks(paragraph).map((segment) => {
    if (typeof segment === "string") return segment;
    const link = document.createElement("a");
    link.href = segment.href;
    link.target = "_blank";
    link.textContent = segment.text;
    return link;
  });
}

function renderTranslation(element: HTMLElement, value: string) {
  const nodes = splitParagraphs(value).flatMap((paragraph, index) =>
    index === 0
      ? renderLinks(paragraph)
      : [document.createElement("br"), document.createElement("br"), ...renderLinks(paragraph)],
  );
  element.replaceChildren(...nodes);
}

/** The toggle offers the language you would switch TO. */
function updateToggle(button: HTMLElement, language: Language) {
  const offersSpanish = language === "en";
  button.querySelector(".lang-icon")!.textContent = offersSpanish ? "🇪🇸" : "🇺🇸";
  button.querySelector(".lang-label")!.textContent = offersSpanish ? "ES" : "EN";
}

function setLanguage(language: Language, toggle: HTMLElement) {
  const dictionary = translations[language];
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
    renderTranslation(element, dictionary[element.dataset.i18n as TranslationKey]);
  });
  document.documentElement.lang = language;
  localStorage.setItem(STORAGE_KEY, language);
  updateToggle(toggle, language);
}

function initialLanguage(): Language {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "es") return saved;
  return navigator.language?.startsWith("es") ? "es" : "en";
}

const toggle = document.getElementById("lang-toggle-btn")!;
toggle.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "en" ? "es" : "en", toggle);
});
setLanguage(initialLanguage(), toggle);
