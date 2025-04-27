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

    document.querySelectorAll('[data-placeholder-translate]').forEach(el => {
      const key = el.getAttribute('data-placeholder-translate');
      if (translations[key]) {
        el.placeholder = translations[key];
      }
    });

  }

  window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    const langSelect = document.getElementById('lang-selector');    
  
    loadLanguage(savedLang);
  

    switch (savedLang) {
      case 'en':
        localStorage.setItem('selectedLang', 'English');
        break;
      case 'fl':
        localStorage.setItem('selectedLang', 'Filipino');
        break;
      case 'es':
        localStorage.setItem('selectedLang', 'Español');
        break;
      case 'srg':
        localStorage.setItem('selectedLang', 'Surigaonon');
        break;
      default:
        console.log('not working');
        break;
    } 
  
    const selectedLangText = localStorage.getItem('selectedLang');
    const options = langSelect.querySelectorAll('option');

    options.forEach(option => {
      if (option.value === savedLang) {
        option.selected = true;
        option.textContent = selectedLangText;
      }
    });
  });