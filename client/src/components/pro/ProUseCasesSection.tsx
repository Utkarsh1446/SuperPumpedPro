import { useEffect, useRef } from "react";

const useCases = [
  {
    tag: "Scalper",
    body: "High-frequency, low-conviction-per-trade. Needs tight spreads and sub-second execution to compound small edges.",
  },
  {
    tag: "Swing trader",
    body: "Holds for days against a thesis. Needs leverage that survives volatility without forced liquidation.",
  },
  {
    tag: "Funded prop",
    body: "Right on direction, capped by account size. Needs capital efficiency to express the full read.",
  },
];

export default function ProUseCasesSection() {
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
    <section ref={sectionRef} style={{ background: "#ffffff", padding: "8rem 0" }}>
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        <div className="tm-label fade-up" style={{ marginBottom: "3rem", color: "var(--tm-gray-mid)" }}>
          Who it is for
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid var(--tm-gray-border)",
          }}
        >
          {useCases.map((u, i) => (
            <div
              key={u.tag}
              className="fade-up"
              style={{
                padding: "2.5rem 0",
                paddingLeft: i % 3 === 0 ? "0" : "2.5rem",
                paddingRight: "2.5rem",
                borderRight: i < useCases.length - 1 ? "1px solid var(--tm-gray-border)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.6875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--tm-red)",
                  fontWeight: 500,
                }}
              >
                {u.tag}
              </span>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--tm-black)",
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                {u.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
