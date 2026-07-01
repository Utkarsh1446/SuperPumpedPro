import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const solutions = [
  {
    id: "leverage",
    enTitle: "Leverage",
    esTitle: "Apalancamiento",
    enDescription: "Amplify high-conviction prediction-market positions with up to 10x leverage through isolated execution, so every trade has its own defined risk boundary.",
    esDescription: "Amplifica posiciones de alta convicción en mercados de predicción con hasta 10x de apalancamiento mediante ejecución aislada, para que cada operación tenga su propio límite de riesgo.",
    stats: [
      { en: "Maximum", es: "Máximo", enValue: "10x", esValue: "10x" },
      { en: "Execution", es: "Ejecución", enValue: "Isolated", esValue: "Aislada" },
      { en: "Markets", es: "Mercados", enValue: "Prediction", esValue: "Predicción" },
    ],
    img: "/assets/leverage.png",
  },
  {
    id: "earning-vaults",
    enTitle: "Earning\nVaults",
    esTitle: "Bóvedas de\nRendimiento",
    enDescription: "Put idle capital to work in structured vaults designed to support leveraged prediction-market liquidity while keeping strategies and risk pools clearly separated.",
    esDescription: "Pon el capital inactivo a trabajar en bóvedas estructuradas que respaldan la liquidez apalancada de mercados de predicción, manteniendo estrategias y riesgos claramente separados.",
    stats: [
      { en: "Yield", es: "Rendimiento", enValue: "Automated", esValue: "Automatizado" },
      { en: "Access", es: "Acceso", enValue: "On-demand", esValue: "Bajo demanda" },
      { en: "Risk", es: "Riesgo", enValue: "Vault-isolated", esValue: "Aislado" },
    ],
    img: "/assets/earning-vaults.png",
  },
  {
    id: "automated-strategies",
    enTitle: "Automated\nStrategies",
    esTitle: "Estrategias\nAutomatizadas",
    enDescription: "Deploy rules-based strategies that monitor markets, size opportunities, and execute around the clock—without surrendering ownership of your models or trading logic.",
    esDescription: "Despliega estrategias basadas en reglas que supervisan mercados, dimensionan oportunidades y ejecutan sin descanso, sin ceder la propiedad de tus modelos ni de tu lógica de trading.",
    stats: [
      { en: "Operation", es: "Operación", enValue: "24/7", esValue: "24/7" },
      { en: "Control", es: "Control", enValue: "Rules-based", esValue: "Por reglas" },
      { en: "Status", es: "Estado", enValue: "Coming soon", esValue: "Próximamente" },
    ],
    img: "/assets/automated-strategies.png",
  },
  {
    id: "agentic-markets",
    enTitle: "Agentic\nMarkets",
    esTitle: "Mercados\nAgénticos",
    enDescription: "Connect Claude, ChatGPT, Kimi, or your own agents to private execution infrastructure built for researching, deciding, and acting across prediction markets at scale.",
    esDescription: "Conecta Claude, ChatGPT, Kimi o tus propios agentes a una infraestructura de ejecución privada diseñada para investigar, decidir y actuar a escala en mercados de predicción.",
    stats: [
      { en: "Agents", es: "Agentes", enValue: "Bring your own", esValue: "Usa los tuyos" },
      { en: "Data", es: "Datos", enValue: "Private", esValue: "Privados" },
      { en: "Status", es: "Estado", enValue: "Coming soon", esValue: "Próximamente" },
    ],
    img: "/assets/agentic-markets.png",
  },
];

export default function FinancialSolutionsSection() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    );
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="financial-solutions"
      ref={sectionRef}
      style={{ background: "#ffffff", padding: "8rem 0" }}
    >
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "5rem" }}>
          <div
            className="tm-label"
            style={{ marginBottom: "2rem", color: "var(--tm-gray-mid)" }}
          >
            {language === "es" ? "Soluciones" : "Solutions"}
          </div>
          <h2
            className="tm-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              maxWidth: "700px",
              lineHeight: 1.05,
              color: "var(--tm-black)",
            }}
          >
            {language === "es"
              ? "Nuestro ecosistema ofrece una solución integral para todas tus necesidades. Creado por traders, para traders. Haz que tu capital se SuperPumped."
              : "Our ecosystem offers one stop solution for all your needs. Curated for Traders by Traders. Let your capital get SuperPumped"}
          </h2>
        </div>

        {/* Sticky scroll layout */}
        <div style={{ display: "flex", gap: "5rem", alignItems: "flex-start" }}>
          {/* Left sticky sidebar — strategy titles */}
          <div
            className="hidden lg:block"
            style={{ width: "200px", flexShrink: 0 }}
          >
            <div className="sticky" style={{ top: "100px" }}>
              {solutions.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => {
                    itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                  }}
                  className="block text-left w-full py-4 transition-all duration-300"
                  style={{
                    borderBottom: "1px solid var(--tm-gray-border)",
                    color: i === activeIndex ? "var(--tm-black)" : "var(--tm-gray-mid)",
                    fontSize: "0.8125rem",
                    fontWeight: i === activeIndex ? 500 : 400,
                    letterSpacing: "0.02em",
                    background: "none",
                    padding: "1rem 0",
                    cursor: "pointer",
                  }}
                >
                  {(language === "es" ? s.esTitle : s.enTitle).replace("\n", " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Right scrolling content */}
          <div style={{ flex: 1 }}>
            {solutions.map((solution, i) => (
              <div
                key={solution.id}
                ref={(el) => { itemRefs.current[i] = el; }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  padding: "5rem 0",
                  borderBottom: i < solutions.length - 1 ? "1px solid var(--tm-gray-border)" : "none",
                }}
              >
                {/* Top row: image + title */}
                <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start" }}>
                  {/* Image */}
                  <div
                    style={{
                      width: "280px",
                      flexShrink: 0,
                      aspectRatio: "16/9",
                      overflow: "hidden",
                      background: "#f0f0ee",
                    }}
                  >
                    <img
                      src={solution.img}
                      alt={(language === "es" ? solution.esTitle : solution.enTitle).replace("\n", " ")}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>

                  {/* Text content */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <h3
                      className="tm-display"
                      style={{
                        fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
                        fontWeight: 300,
                        lineHeight: 1.0,
                        color: "var(--tm-black)",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {language === "es" ? solution.esTitle : solution.enTitle}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.7,
                        color: "var(--tm-black)",
                        fontWeight: 300,
                        maxWidth: "460px",
                      }}
                    >
                      {language === "es" ? solution.esDescription : solution.enDescription}
                    </p>
                    {i < 2 ? (
                      <a href="#" className="tm-link" style={{ width: "fit-content" }}>
                        {language === "es" ? "Saber más" : "Know more"}
                      </a>
                    ) : (
                      <span className="tm-link" style={{ width: "fit-content", cursor: "default" }}>
                        {language === "es" ? "Próximamente" : "Coming Soon"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "0",
                    borderTop: "1px solid var(--tm-gray-border)",
                    paddingTop: "2rem",
                  }}
                >
                  {solution.stats.map((stat, si) => (
                    <div
                      key={stat.en}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.375rem",
                        paddingRight: "2rem",
                        borderRight: si < solution.stats.length - 1 ? "1px solid var(--tm-gray-border)" : "none",
                        paddingLeft: si > 0 ? "2rem" : "0",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.6875rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--tm-gray-mid)",
                          fontWeight: 500,
                        }}
                      >
                        {language === "es" ? stat.es : stat.en}
                      </span>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 400,
                          color: "var(--tm-red)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {language === "es" ? stat.esValue : stat.enValue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
