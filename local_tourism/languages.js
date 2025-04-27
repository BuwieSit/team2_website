let translations = {};
let currentLang = 'en'; // Default

async function loadLanguage(lang) {
  try {
    const response = await fetch(`./lang/${lang}.json`);
    translations = await response.json();
    currentLang = lang;
    updateText();
  } catch (error) {
    console.error('Error loading language:', error);
  }
}

function updateText() {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });
}


loadLanguage('en');

