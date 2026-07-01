import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CookieBanner() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("tm_cookies_accepted");
    if (!accepted) {
      setTimeout(() => setVisible(true), 1200);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("tm_cookies_accepted", "true");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("tm_cookies_accepted", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: "#ffffff",
        borderTop: "1px solid var(--tm-gray-border)",
        padding: "1.25rem 2.5rem",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--tm-black)",
              lineHeight: 1.6,
              maxWidth: "800px",
            }}
          >
            {language === "es"
              ? "Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrar publicidad relacionada con tus preferencias mediante el análisis de tus hábitos de navegación. Si continúas navegando, consideramos que aceptas su uso. "
              : "We use our own and third-party cookies to improve our services and show you advertising related to your preferences by analyzing your browsing habits. If you continue browsing, we consider that you accept their use. "}
            <a
              href="#"
              style={{
                color: "var(--tm-black)",
                textDecoration: "underline",
                fontSize: "0.8125rem",
              }}
            >
              {language === "es" ? "Política de cookies" : "Cookies Policy"}
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={accept}
            className="transition-all duration-200 hover:bg-black hover:text-white"
            style={{
              background: "var(--tm-black)",
              color: "#ffffff",
              border: "1px solid var(--tm-black)",
              padding: "0.5rem 1.5rem",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              cursor: "pointer",
            }}
          >
            {language === "es" ? "Aceptar todo" : "Accept all"}
          </button>
          <button
            onClick={reject}
            className="transition-all duration-200 hover:bg-gray-100"
            style={{
              background: "transparent",
              color: "var(--tm-black)",
              border: "1px solid var(--tm-gray-border)",
              padding: "0.5rem 1.5rem",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              cursor: "pointer",
            }}
          >
            {language === "es" ? "Rechazar no esenciales" : "Reject non-essential"}
          </button>
          <a
            href="#"
            style={{
              fontSize: "0.75rem",
              color: "var(--tm-gray-mid)",
              textDecoration: "underline",
              letterSpacing: "0.02em",
            }}
          >
            {language === "es" ? "Gestionar preferencias" : "Manage preferences"}
          </a>
        </div>
      </div>
    </div>
  );
}
