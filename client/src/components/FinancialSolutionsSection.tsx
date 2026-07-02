import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const solutions = [
  {
    id: "leverage",
    enTitle: "Leverage",
    esTitle: "Apalancamiento",
    zhTitle: "杠杆交易",
    enDescription: "Amplify high-conviction prediction-market positions with up to 10x leverage through isolated execution, so every trade has its own defined risk boundary.",
    esDescription: "Amplifica posiciones de alta convicción en mercados de predicción con hasta 10x de apalancamiento mediante ejecución aislada, para que cada operación tenga su propio límite de riesgo.",
    zhDescription: "通过隔离执行，将高信念的预测市场仓位放大至最高 10 倍杠杆，让每笔交易都拥有清晰、独立的风险边界。",
    stats: [
      { en: "Maximum", es: "Máximo", zh: "最高", enValue: "10x", esValue: "10x", zhValue: "10x" },
      { en: "Execution", es: "Ejecución", zh: "执行", enValue: "Isolated", esValue: "Aislada", zhValue: "隔离" },
      { en: "Markets", es: "Mercados", zh: "市场", enValue: "Prediction", esValue: "Predicción", zhValue: "预测市场" },
    ],
    img: "/assets/leverage.png",
  },
  {
    id: "earning-vaults",
    enTitle: "Earning\nVaults",
    esTitle: "Bóvedas de\nRendimiento",
    zhTitle: "收益\n金库",
    enDescription: "Put idle capital to work in structured vaults designed to support leveraged prediction-market liquidity while keeping strategies and risk pools clearly separated.",
    esDescription: "Pon el capital inactivo a trabajar en bóvedas estructuradas que respaldan la liquidez apalancada de mercados de predicción, manteniendo estrategias y riesgos claramente separados.",
    zhDescription: "让闲置资本进入结构化收益金库，为杠杆预测市场提供流动性，同时清晰隔离不同策略与风险池。",
    stats: [
      { en: "Yield", es: "Rendimiento", zh: "收益", enValue: "Automated", esValue: "Automatizado", zhValue: "自动化" },
      { en: "Access", es: "Acceso", zh: "访问", enValue: "On-demand", esValue: "Bajo demanda", zhValue: "按需" },
      { en: "Risk", es: "Riesgo", zh: "风险", enValue: "Vault-isolated", esValue: "Aislado", zhValue: "金库隔离" },
    ],
    img: "/assets/earning-vaults.png",
  },
  {
    id: "automated-strategies",
    enTitle: "Automated\nStrategies",
    esTitle: "Estrategias\nAutomatizadas",
    zhTitle: "自动化\n策略",
    enDescription: "Deploy rules-based strategies that monitor markets, size opportunities, and execute around the clock—without surrendering ownership of your models or trading logic.",
    esDescription: "Despliega estrategias basadas en reglas que supervisan mercados, dimensionan oportunidades y ejecutan sin descanso, sin ceder la propiedad de tus modelos ni de tu lógica de trading.",
    zhDescription: "部署基于规则的策略，全天候监控市场、评估机会并执行交易，同时保留对模型与交易逻辑的完整所有权。",
    stats: [
      { en: "Operation", es: "Operación", zh: "运行", enValue: "24/7", esValue: "24/7", zhValue: "全天候" },
      { en: "Control", es: "Control", zh: "控制", enValue: "Rules-based", esValue: "Por reglas", zhValue: "规则驱动" },
      { en: "Status", es: "Estado", zh: "状态", enValue: "Coming soon", esValue: "Próximamente", zhValue: "即将推出" },
    ],
    img: "/assets/automated-strategies.png",
  },
  {
    id: "agentic-markets",
    enTitle: "Agentic\nMarkets",
    esTitle: "Mercados\nAgénticos",
    zhTitle: "智能体\n市场",
    enDescription: "Connect Claude, ChatGPT, Kimi, or your own agents to private execution infrastructure built for researching, deciding, and acting across prediction markets at scale.",
    esDescription: "Conecta Claude, ChatGPT, Kimi o tus propios agentes a una infraestructura de ejecución privada diseñada para investigar, decidir y actuar a escala en mercados de predicción.",
    zhDescription: "将 Claude、ChatGPT、Kimi 或自有智能体连接至私密执行基础设施，在预测市场中规模化完成研究、决策与行动。",
    stats: [
      { en: "Agents", es: "Agentes", zh: "智能体", enValue: "Bring your own", esValue: "Usa los tuyos", zhValue: "自带智能体" },
      { en: "Data", es: "Datos", zh: "数据", enValue: "Private", esValue: "Privados", zhValue: "私密" },
      { en: "Status", es: "Estado", zh: "状态", enValue: "Coming soon", esValue: "Próximamente", zhValue: "即将推出" },
    ],
    img: "/assets/agentic-markets.png",
  },
];

export default function FinancialSolutionsSection() {
  const { pick } = useLanguage();
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
      className="site-section solutions-section"
      style={{ background: "#ffffff", padding: "8rem 0" }}
    >
      <div className="site-shell" style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        {/* Section header */}
        <div className="motion-reveal" style={{ marginBottom: "5rem" }}>
          <div
            className="tm-label"
            style={{ marginBottom: "2rem", color: "var(--tm-gray-mid)" }}
          >
            {pick({ en: "Solutions", es: "Soluciones", zh: "解决方案" })}
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
            {pick({
              en: "Our ecosystem offers one stop solution for all your needs. Curated for Traders by Traders. Let your capital get SuperPumped",
              es: "Nuestro ecosistema ofrece una solución integral para todas tus necesidades. Creado por traders, para traders. Haz que tu capital se SuperPumped.",
              zh: "我们的生态系统为你的所有需求提供一站式解决方案。由交易者为交易者精心打造，让你的资本全面 SuperPumped。",
            })}
          </h2>
        </div>

        {/* Sticky scroll layout */}
        <div className="solutions-layout" style={{ display: "flex", gap: "5rem", alignItems: "flex-start" }}>
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
                  {pick({ en: s.enTitle, es: s.esTitle, zh: s.zhTitle }).replace("\n", " ")}
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
                className="solution-item motion-reveal"
                style={{
                  "--motion-delay": `${i * 70}ms`,
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                  padding: "5rem 0",
                  borderBottom: i < solutions.length - 1 ? "1px solid var(--tm-gray-border)" : "none",
                } as CSSProperties}
              >
                {/* Top row: image + title */}
                <div className="solution-top" style={{ display: "flex", gap: "3rem", alignItems: "flex-start" }}>
                  {/* Image */}
                  <div
                    className="solution-media"
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
                      alt={pick({ en: solution.enTitle, es: solution.esTitle, zh: solution.zhTitle }).replace("\n", " ")}
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
                      {pick({ en: solution.enTitle, es: solution.esTitle, zh: solution.zhTitle })}
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
                      {pick({ en: solution.enDescription, es: solution.esDescription, zh: solution.zhDescription })}
                    </p>
                    {i < 2 ? (
                      <a href="#" className="tm-link" style={{ width: "fit-content" }}>
                        {pick({ en: "Know more", es: "Saber más", zh: "了解更多" })}
                      </a>
                    ) : (
                      <span className="tm-link" style={{ width: "fit-content", cursor: "default" }}>
                        {pick({ en: "Coming Soon", es: "Próximamente", zh: "即将推出" })}
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats row */}
                <div className="solution-stats"
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
                      className="solution-stat"
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
                        {pick({ en: stat.en, es: stat.es, zh: stat.zh })}
                      </span>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 400,
                          color: "var(--tm-red)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {pick({ en: stat.enValue, es: stat.esValue, zh: stat.zhValue })}
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
