async function loadLanguage(lang) {
    try {
      const response = await fetch(`./${lang}.json`);
      translations = await response.json();
      updateText();
      localStorage.setItem('preferredLanguage', lang); 
    } catch (error) {
      console.error('Could not load language file', error);
    }
  }

  function updateText() {
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    loadLanguage(savedLang);
  });