import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { enNumber: "2026", esNumber: "2026", en: "Foundation Year", es: "Año de fundación" },
  { enNumber: "True", esNumber: "Sí", en: "Privacy", es: "Privacidad" },
  { enNumber: "Up to 10x", esNumber: "Hasta 10x", en: "Leverage", es: "Apalancamiento" },
  { enNumber: "<100ms", esNumber: "<100ms", en: "Latency", es: "Latencia" },
  { enNumber: "+1000", esNumber: "+1000", en: "Trades", es: "Operaciones" },
  { enNumber: "True", esNumber: "Sí", en: "Advanced Options", es: "Opciones avanzadas" },
];

export default function AboutSection() {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up, .fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#ffffff", padding: "8rem 0 6rem" }}
    >
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        {/* Label */}
        <div
          className="fade-up tm-label"
          style={{ marginBottom: "3rem", color: "var(--tm-gray-mid)" }}
        >
          {language === "es" ? "Acerca de SuperPumped" : "About SuperPumped"}
        </div>

        {/* Two-column layout: heading left, text right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            marginBottom: "5rem",
            alignItems: "start",
          }}
        >
          <div className="fade-up">
            <h2
              className="tm-display"
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "var(--tm-black)",
                letterSpacing: "-0.02em",
              }}
            >
              {language === "es" ? (
                <>No te falta convicción.<br />Te falta<br />capital.</>
              ) : (
                <>You are not lacking conviction.<br />You are<br />under capitalized.</>
              )}
            </h2>
          </div>

          <div
            className="fade-up"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              paddingTop: "0.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--tm-black)",
                fontWeight: 300,
              }}
            >
              {language === "es"
                ? "Tenías razón. Sabías que el mercado estaba mal valorado. Lo anticipaste antes que nadie y después viste cómo se resolvía exactamente como dijiste. El beneficio estuvo bien, pero debería haber cambiado tu vida. El problema nunca fue tu lectura, sino el tamaño de la posición que podías permitirte."
                : "You've been right. You knew the market was mispriced. You called it before anyone else did and then watched it resolve exactly the way you said it would. The payout was fine. It should have been life-changing. The problem was never your read. It was the size you could afford to put behind it."}
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid var(--tm-gray-border)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.en}
              className="fade-up"
              style={{
                padding: "2.5rem 0",
                borderBottom: i < 3 ? "1px solid var(--tm-gray-border)" : "none",
                borderRight: (i + 1) % 3 !== 0 ? "1px solid var(--tm-gray-border)" : "none",
                paddingLeft: i % 3 === 0 ? "0" : "2.5rem",
                paddingRight: "2.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "var(--tm-red)",
                  marginBottom: "0.5rem",
                }}
              >
                {language === "es" ? stat.esNumber : stat.enNumber}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  color: "var(--tm-black)",
                  letterSpacing: "0.02em",
                }}
              >
                {language === "es" ? stat.es : stat.en}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
