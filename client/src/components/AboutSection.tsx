import { useEffect, useRef } from "react";

const stats = [
  { number: "2014", label: "Foundation year" },
  { number: "+3.500", label: "Millions of € committed" },
  { number: "+2.000", label: "Millions of € invested" },
  { number: "4 - 75", label: "Millions of € invested per company" },
  { number: "+100", label: "Companies in 5 countries" },
  { number: "+60", label: "Employees" },
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
              A pan-european alternative investment firm focused on driving SME growth
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
              Founded in 2014, it currently has a team of over 60 professionals across its three offices in Madrid, London, and Frankfurt, from where it can execute transactions across Europe.
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
