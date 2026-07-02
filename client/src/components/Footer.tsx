import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { language, setLanguage } = useLanguage();
  const legalLinks = language === "es"
    ? ["Aviso legal", "Política de privacidad", "Docs"]
    : language === "zh"
      ? ["法律声明", "隐私政策", "文档"]
      : ["Legal Notice", "Privacy Policy", "Docs"];

  return (
    <footer className="site-footer"
      style={{
        background: "#f8f8f6",
        borderTop: "1px solid var(--tm-gray-border)",
        padding: "3rem 2.5rem",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2" style={{ fontSize: "0.75rem" }}>
            <a href="https://x.com/trysuperpumped" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors" style={{ color: "var(--tm-black)" }}>
              X: @trysuperpumped
            </a>
            <a href="mailto:team@superpumped.pro" className="hover:text-red-600 transition-colors" style={{ color: "var(--tm-black)" }}>
              Mail: team@superpumped.pro
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2" style={{ fontSize: "0.6875rem", color: "var(--tm-gray-mid)" }}>
            {legalLinks.map((link) => (
              <a key={link} href="#" className="transition-colors duration-200 hover:text-black" style={{ color: "var(--tm-gray-mid)", letterSpacing: "0.03em" }}>
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2" style={{ borderTop: "1px solid var(--tm-gray-border)", paddingTop: "1.5rem" }}>
          <p style={{ fontSize: "0.6875rem", color: "var(--tm-gray-mid)", letterSpacing: "0.03em" }}>
            © 2026 Copyright by SuperPumped
          </p>
          <div className="flex items-center gap-3" style={{ fontSize: "0.6875rem", color: "var(--tm-gray-mid)" }}>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
              style={{ background: "none", border: 0, cursor: "pointer", color: language === "en" ? "var(--tm-black)" : "var(--tm-gray-mid)", fontWeight: language === "en" ? 600 : 400 }}
            >
              EN
            </button>
            <span>|</span>
            <button
              type="button"
              onClick={() => setLanguage("es")}
              aria-pressed={language === "es"}
              style={{ background: "none", border: 0, cursor: "pointer", color: language === "es" ? "var(--tm-black)" : "var(--tm-gray-mid)", fontWeight: language === "es" ? 600 : 400 }}
            >
              ES
            </button>
            <span>|</span>
            <button
              type="button"
              onClick={() => setLanguage("zh")}
              aria-pressed={language === "zh"}
              style={{ background: "none", border: 0, cursor: "pointer", color: language === "zh" ? "var(--tm-black)" : "var(--tm-gray-mid)", fontWeight: language === "zh" ? 600 : 400 }}
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
