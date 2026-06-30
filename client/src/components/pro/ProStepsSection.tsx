import { useEffect, useRef } from "react";

const steps = [
  { n: "01", title: "Connect wallet" },
  { n: "02", title: "Deposit margin" },
  { n: "03", title: "Open position" },
  { n: "04", title: "Close & settle" },
];

export default function ProStepsSection() {
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
          Get started
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--tm-gray-border)",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="fade-up"
              style={{
                padding: "2.5rem 0",
                paddingLeft: i === 0 ? "0" : "2.5rem",
                paddingRight: "2.5rem",
                borderRight: i < steps.length - 1 ? "1px solid var(--tm-gray-border)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "var(--tm-red)",
                }}
              >
                {s.n}
              </span>
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "var(--tm-black)",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
