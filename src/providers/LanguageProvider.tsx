import React, { useState, ReactNode, useEffect } from 'react';
import enTranslations from '../locales/en.json';
import koTranslations from '../locales/ko.json';
import { LanguageContext } from '../contexts/LanguageContext';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const translations: { [key: string]: { [key: string]: string } } = {
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
    return translations[language]?.[key] || key; // Fallback to key if translation not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

