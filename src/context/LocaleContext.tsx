import React, { createContext, useContext, useState, useEffect } from 'react';

type Region = 'global' | 'france' | 'germany' | 'spain' | 'italy' | 'uk' | 'usa' | 'china';

interface Locale {
  region: Region;
  language: string;
}

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  availableRegions: Array<{
    code: Region;
    name: string;
    flag: string;
    language: string;
  }>;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const regions = [
  { code: 'global' as Region, name: 'Global', flag: '🌍', language: 'en' },
  { code: 'france' as Region, name: 'France', flag: '🇫🇷', language: 'fr' },
  { code: 'germany' as Region, name: 'Deutschland', flag: '🇩🇪', language: 'de' },
  { code: 'spain' as Region, name: 'España', flag: '🇪🇸', language: 'es' },
  { code: 'italy' as Region, name: 'Italia', flag: '🇮🇹', language: 'it' },
  { code: 'uk' as Region, name: 'United Kingdom', flag: '🇬🇧', language: 'en' },
  { code: 'usa' as Region, name: 'United States', flag: '🇺🇸', language: 'en' },
  { code: 'china' as Region, name: '中国', flag: '🇨🇳', language: 'zh' },
];

// Détection automatique de la langue du navigateur
const detectBrowserLocale = (): Locale => {
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('fr')) {
    return { region: 'france', language: 'fr' };
  } else if (browserLang.startsWith('de')) {
    return { region: 'germany', language: 'de' };
  } else if (browserLang.startsWith('es')) {
    return { region: 'spain', language: 'es' };
  } else if (browserLang.startsWith('it')) {
    return { region: 'italy', language: 'it' };
  } else if (browserLang.startsWith('zh')) {
    return { region: 'china', language: 'zh' };
  } else if (browserLang.startsWith('en-gb')) {
    return { region: 'uk', language: 'en' };
  } else if (browserLang.startsWith('en-us')) {
    return { region: 'usa', language: 'en' };
  }
  
  return { region: 'global', language: 'en' };
};

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Charger depuis localStorage ou détecter automatiquement
    const saved = localStorage.getItem('xpeng_locale');
    if (saved) {
      return JSON.parse(saved);
    }
    return detectBrowserLocale();
  });

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('xpeng_locale', JSON.stringify(locale));
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, availableRegions: regions }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
