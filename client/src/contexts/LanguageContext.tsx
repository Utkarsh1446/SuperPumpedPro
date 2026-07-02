import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "es" | "zh";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  pick: <T,>(values: Record<Language, T>) => T;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("superpumped-language");
    return saved === "es" || saved === "zh" ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("superpumped-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, pick: <T,>(values: Record<Language, T>) => values[language] }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
