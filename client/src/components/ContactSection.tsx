import { useEffect, useRef } from "react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up, .fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
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
      style={{ background: "#f8f8f6", padding: "8rem 0 0" }}
    >
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        {/* CTA heading */}
        <div
          className="fade-up"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginBottom: "6rem",
          }}
        >
          <h2
            className="tm-display"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--tm-black)",
              maxWidth: "700px",
            }}
          >
            The opportunity to create, grow, and look ahead
          </h2>
          <a href="#" className="tm-link" style={{ width: "fit-content" }}>
            Contact us
          </a>
        </div>

        {/* Office images mosaic */}
        <div
          className="fade-in"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "0.5rem",
          }}
        >
          {/* Large contact image spanning 2 rows */}
          <div
            style={{
              gridColumn: "1",
              gridRow: "1 / 3",
              overflow: "hidden",
              background: "#e8e8e6",
              minHeight: "400px",
            }}
          >
            <img
              src="/manus-storage/contact_798aba28.jpg"
              alt="SuperPumped office"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.7s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          {/* Top right images */}
          <div style={{ overflow: "hidden", background: "#e8e8e6", aspectRatio: "1/1" }}>
            <img
              src="/manus-storage/footer1_557ad212.jpg"
              alt="Office"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.7s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div style={{ overflow: "hidden", background: "#e8e8e6", aspectRatio: "1/1" }}>
            <img
              src="/manus-storage/footer2_4338d72a.jpg"
              alt="Office"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.7s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          {/* Bottom right images */}
          <div style={{ overflow: "hidden", background: "#e8e8e6", aspectRatio: "1/1" }}>
            <img
              src="/manus-storage/footer3_4a8ea6e6.jpg"
              alt="Office"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.7s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          {/* Dark tile with brand name */}
          <div
            style={{
              overflow: "hidden",
              background: "var(--tm-black)",
              aspectRatio: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ width: "20px", height: "1.5px", background: "rgba(255,255,255,0.5)" }} />
                <div style={{ width: "28px", height: "1.5px", background: "rgba(255,255,255,0.5)" }} />
                <div style={{ width: "16px", height: "1.5px", background: "rgba(255,255,255,0.5)" }} />
              </div>
              <span
                style={{
                  fontSize: "0.625rem",
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                SUPERPUMPED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
