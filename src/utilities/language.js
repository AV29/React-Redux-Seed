import en from '../translations/en';
import ru from '../translations/ru';

export const languages = {
  en,
  ru
};

export const getDefaultLocaleName = language => {
  const currentLanguage = language || window.navigator.language || window.navigator.userLanguage;
  const isDialecticalIndex = currentLanguage.indexOf('-');
  return isDialecticalIndex !== -1 ? currentLanguage.slice(0, isDialecticalIndex) : currentLanguage;
};
