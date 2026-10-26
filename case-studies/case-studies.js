(() => {
  'use strict';
  const root = document.documentElement;
  const languageSelect = document.getElementById('language-select');
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle?.querySelector('.theme-icon');
  const caseId = root.dataset.case || (location.pathname.includes('securecloud') ? 'securecloud' : location.pathname.includes('aws-infrastructure') ? 'aws' : 'eks');
  const langLabel = { en: 'Switch to French', fr: 'Passer en anglais' };
  let language = 'en';
  let activeStep = 0;
  const stepButtons = Array.from(document.querySelectorAll('.walkthrough-step'));
  const stepTitle = document.getElementById('walkthrough-title');
  const stepDescription = document.getElementById('walkthrough-description');
  const stepIndex = document.getElementById('walkthrough-index');
  const previousButton = document.querySelector('[data-walk-prev]');
  const nextButton = document.querySelector('[data-walk-next]');
  const diagramNodes = Array.from(document.querySelectorAll('.diagram-node'));

  function safeStorageGet(key, fallback) {
    try { return localStorage.getItem(key) || fallback; } catch (_) { return fallback; }
  }
  function safeStorageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (_) { /* Storage is optional. */ }
  }
  function setTheme(theme) {
    const chosen = theme === 'light' ? 'light' : 'dark';
    root.dataset.theme = chosen;
    if (themeIcon) themeIcon.textContent = chosen === 'dark' ? '☼' : '☾';
    if (themeToggle) {
      const text = chosen === 'dark' ? (language === 'fr' ? 'Passer au thème clair' : 'Switch to light mode') : (language === 'fr' ? 'Passer au thème sombre' : 'Switch to dark mode');
      themeToggle.setAttribute('aria-label', text);
      themeToggle.title = text;
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', chosen === 'dark' ? '#08140f' : '#f1f4ec');
    safeStorageSet('portfolio-theme', chosen);
  }
  function applyLanguage(nextLanguage) {
    language = nextLanguage === 'fr' ? 'fr' : 'en';
    root.lang = language;
    if (languageSelect) languageSelect.value = language;
    document.querySelectorAll('[data-en][data-fr]').forEach((element) => {
      const value = element.dataset[language];
      if (typeof value === 'string') element.textContent = value;
    });
    safeStorageSet('portfolio-language', language);
    updateStep(activeStep);
    setTheme(root.dataset.theme || 'dark');
  }
  function highlightedIndexes(index) {
    if (caseId === 'securecloud') {
      return [[0], [1, 2], [3], [4, 5], [6, 7], [8, 9, 10]][index] || [index];
    }
    if (caseId === 'aws') {
      return [[0], [0, 1], [1, 2], [3], [0, 1, 2, 3]][index] || [index];
    }
    return [[0], [1], [2], [3]][index] || [index];
  }
  function updateStep(index) {
    if (!stepButtons.length) return;
    activeStep = Math.max(0, Math.min(index, stepButtons.length - 1));
    const button = stepButtons[activeStep];
    stepButtons.forEach((item, itemIndex) => {
      const active = itemIndex === activeStep;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    const title = button.dataset[language === 'fr' ? 'titleFr' : 'titleEn'];
    const description = button.dataset[language === 'fr' ? 'descFr' : 'descEn'];
    if (stepTitle) stepTitle.textContent = title || '';
    if (stepDescription) stepDescription.textContent = description || '';
    if (stepIndex) stepIndex.textContent = `${String(activeStep + 1).padStart(2, '0')} / ${String(stepButtons.length).padStart(2, '0')}`;
    if (previousButton) previousButton.disabled = activeStep === 0;
    if (nextButton) nextButton.disabled = activeStep === stepButtons.length - 1;
    const highlighted = highlightedIndexes(activeStep);
    diagramNodes.forEach((node) => {
      const itemIndex = Number(node.dataset.stepIndex);
      node.classList.toggle('active', highlighted.includes(itemIndex));
    });
  }

  stepButtons.forEach((button, index) => button.addEventListener('click', () => updateStep(index)));
  previousButton?.addEventListener('click', () => updateStep(activeStep - 1));
  nextButton?.addEventListener('click', () => updateStep(activeStep + 1));
  themeToggle?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
  languageSelect?.addEventListener('change', (event) => applyLanguage(event.target.value));

  const storedLanguage = safeStorageGet('portfolio-language', 'en');
  const storedTheme = safeStorageGet('portfolio-theme', 'dark');
  applyLanguage(storedLanguage);
  setTheme(storedTheme);
  updateStep(0);
})();
