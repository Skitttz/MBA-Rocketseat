const LANGUAGE_KEY = 'languageValue';

function checkLanguage() {
  const existingLanguage = getCurrentLanguage();
  if (!existingLanguage) {
    return updateLanguageStorage('ptbr');
  }
  return;
}

export function updateLanguageStorage(language) {
  localStorage.setItem(LANGUAGE_KEY, language);
}

export function getCurrentLanguage() {
  return localStorage.getItem(LANGUAGE_KEY);
}

checkLanguage();
