import React, { useState, ReactNode, useEffect } from 'react';
import enTranslations from '../locales/en.json';
import koTranslations from '../locales/ko.json';
import { LanguageContext } from '../contexts/LanguageContext';

interface LanguageProviderProps {
  children: ReactNode;
}

type TranslationValue = string | { [key: string]: TranslationValue };

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const translations: Record<string, TranslationValue> = {
    en: enTranslations,
    ko: koTranslations,
  };

  const [language, setLanguage] = useState<string>(() => {
    const storedLang = localStorage.getItem('language');
    return storedLang || 'ko'; // Default to Korean
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let currentTranslation: TranslationValue = translations[language];

    for (let i = 0; i < keys.length; i++) {
      if (currentTranslation && typeof currentTranslation === 'object' && keys[i] in currentTranslation) {
        currentTranslation = currentTranslation[keys[i]];
      } else {
        return key;
      }
    }
    return typeof currentTranslation === 'string' ? currentTranslation : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

