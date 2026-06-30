import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    id: "private-equity",
    title: "Private\nEquity",
    description:
      "Minority stakes in SMEs, with the aim of becoming strategic capital to support professionalization and accelerate growth.",
    stats: [
      { label: "AuMs", value: "€550m+" },
      { label: "EBITDA", value: "€1m ⟷ €25m" },
      { label: "Ticket", value: "€5m ⟷ €35m" },
    ],
    img: "/manus-storage/pe_12fb5a88.jpg",
  },
  {
    id: "direct-lending",
    title: "Direct\nLending",
    description:
      "Tailored financing that can combine amortizable tranches (TLA) and non-amortizable tranches to maturity / bullet (TLB) to finance different uses (acquisitions, capex, M&A, dividends, etc.)",
    stats: [
      { label: "AuMs", value: "€2.3bn+" },
      { label: "EBITDA", value: "€2m ⟷ €25m" },
      { label: "Ticket", value: "€5m ⟷ €75m" },
    ],
    img: "/manus-storage/dl_776055e4.jpg",
  },
  {
    id: "fund-of-funds",
    title: "Fund of\nFunds",
    description:
      "We invest in leading Buyout and Growth strategies through a selective portfolio of private equity funds, focusing on supporting experienced strategies and managers with consistent top-quartile performance.",
    stats: [
      { label: "AuMs", value: "€600m" },
      { label: "Target Segment", value: "Retail" },
      { label: "Strategy", value: "FoF PE & Secondaries" },
    ],
    img: "/manus-storage/fof_ab40617a.jpg",
  },
  {
    id: "fund-financing",
    title: "Fund\nFinancing",
    description:
      "Tailored financing to meet the liquidity needs of private equity managers and provide operational flexibility.",
    stats: [
      { label: "AuMs", value: "€150m" },
      { label: "Ticket", value: "€5m ⟷ €50m" },
      { label: "Transactions", value: "+15" },
    ],
    img: "/manus-storage/ff_7de8677f.jpg",
  },
];

export default function FinancialSolutionsSection() {
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
            Financial solutions
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
            Our four strategies are service-oriented, providing tailored financing solutions across the entire capital structure
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
                  {s.title.replace("\n", " ")}
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
                      alt={solution.title.replace("\n", " ")}
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
                      {solution.title}
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
                      {solution.description}
                    </p>
                    <a href="#" className="tm-link" style={{ width: "fit-content" }}>
                      Know more
                    </a>
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
                      key={stat.label}
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
                        {stat.label}
                      </span>
                      <span
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 400,
                          color: "var(--tm-red)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {stat.value}
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
