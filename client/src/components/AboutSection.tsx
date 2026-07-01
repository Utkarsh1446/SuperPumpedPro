import { useEffect, useRef } from "react";

const stats = [
  { number: "2026", label: "Foundation Year" },
  { number: "True", label: "Privacy" },
  { number: "Upto 10x", label: "Leverage" },
  { number: "<100ms", label: "Latency" },
  { number: "+1000", label: "Trades" },
  { number: "True", label: "Advanced Options" },
];

export default function AboutSection() {
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
          About SuperPumped
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
              You are not lacking conviction.
              <br />
              You are
              <br />
              under capitalized.
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
              You've been right. You knew the market was mispriced. You called it before anyone else did and then watched it resolve exactly the way you said it would. The payout was fine. It should have been life-changing. The problem was never your read. It was the size you could afford to put behind it.
            </p>
            <a href="#" className="tm-link" style={{ width: "fit-content" }}>
              Discover our history
            </a>
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
              key={stat.number}
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
                  color: "var(--tm-black)",
                  letterSpacing: "0.02em",
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
