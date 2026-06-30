import { useEffect, useRef } from "react";

export const proStats = [
  { number: "2024", label: "Founded" },
  { number: "$X", label: "Volume routed" },
  { number: "X", label: "Active markets" },
  { number: "Xx", label: "Max leverage" },
  { number: "X", label: "Markets covered" },
  { number: "<1s", label: "Execution" },
];

export default function ProStatStrip() {
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
    <section ref={sectionRef} style={{ background: "#ffffff", padding: "6rem 0" }}>
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid var(--tm-gray-border)",
          }}
        >
          {proStats.map((stat, i) => (
            <div
              key={stat.label}
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
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  color: "var(--tm-gray-mid)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
