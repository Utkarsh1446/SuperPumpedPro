import { useEffect, useRef } from "react";

export default function ProProblemSection() {
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr",
            gap: "5rem",
            alignItems: "end",
          }}
        >
          <div className="fade-up">
            <h2
              className="tm-display"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 300,
                lineHeight: 1.02,
                color: "var(--tm-black)",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              You are not lacking conviction. You are under-capitalized.
            </h2>
          </div>

          <div
            className="fade-up"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingBottom: "0.5rem" }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "var(--tm-black)",
                fontWeight: 300,
                margin: 0,
              }}
            >
              The edge is real. The account size is the bottleneck. We extend
              capital-efficient leverage so the size of your position reflects
              the strength of your read, not the limit of your balance.
            </p>
            <a href="#how-it-works" className="tm-link" style={{ width: "fit-content" }}>
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
