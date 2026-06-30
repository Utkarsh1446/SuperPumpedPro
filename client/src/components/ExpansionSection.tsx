import { useEffect, useRef, useState } from "react";

const countries = [
  { name: "Spain", img: "/manus-storage/map_spain_25a014a1.jpg" },
  { name: "Portugal", img: "/manus-storage/map_portugal_35e8dce6.jpg" },
  { name: "France", img: "/manus-storage/map_france_7815701d.jpg" },
  { name: "Italy", img: "/manus-storage/map_italy_f0b1a174.jpg" },
  { name: "Holland", img: "/manus-storage/map_holland_a518d501.jpg" },
  { name: "Belgium", img: "/manus-storage/map_belgium_5a36bf7e.jpg" },
  { name: "Luxembourg", img: "/manus-storage/map_luxembourg_3cca6ac6.jpg" },
  { name: "Norway", img: "/manus-storage/map_noruega_aad55356.jpg" },
  { name: "Denmark", img: "/manus-storage/map_dinamarca_43399bce.jpg" },
  { name: "Sweden", img: "/manus-storage/map_suecia_7f48d306.jpg" },
  { name: "Finland", img: "/manus-storage/map_finlandia_5ef2d657.jpg" },
  { name: "Austria", img: "/manus-storage/map_austria_761e3ae9.jpg" },
  { name: "Germany", img: "/manus-storage/map_germany_867e5c91.jpg" },
  { name: "Switzerland", img: "/manus-storage/map_suiza_8f6c47e1.jpg" },
  { name: "United Kingdom", img: "/manus-storage/map_uk_48668537.jpg" },
  { name: "Ireland", img: "/manus-storage/map_ireland_d8ef628b.jpg" },
];

export default function ExpansionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCountry, setActiveCountry] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCountry((prev) => (prev + 1) % countries.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#f8f8f6", padding: "8rem 0", overflow: "hidden" }}
    >
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        {/* Label */}
        <div
          className="fade-up tm-label"
          style={{ marginBottom: "3rem", color: "var(--tm-gray-mid)" }}
        >
          Our expansion
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <h2
              className="fade-up tm-display"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "var(--tm-black)",
                marginBottom: "0.5rem",
              }}
            >
              We join forces with{" "}
              <strong style={{ fontWeight: 600 }}>Banco Santander</strong> to
              reach further
            </h2>

            <p
              className="fade-up"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--tm-black)",
                fontWeight: 300,
              }}
            >
              An independent management company supported by Banco Santander, from which we operate in continental Europe from our offices in Madrid, London, and Frankfurt.
            </p>
            <p
              className="fade-up"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--tm-black)",
                fontWeight: 300,
              }}
            >
              Our pan-European reach enables us to identify and execute investment opportunities across the continent, leveraging local expertise and a broad network of relationships.
            </p>

            {/* Office locations */}
            <div
              className="fade-up"
              style={{
                borderTop: "1px solid var(--tm-gray-border)",
                paddingTop: "1.5rem",
                marginTop: "0.5rem",
              }}
            >
              <div
                className="tm-label"
                style={{ marginBottom: "1rem", color: "var(--tm-gray-mid)" }}
              >
                Our offices
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {["Madrid", "London", "Frankfurt"].map((city) => (
                  <div
                    key={city}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.9375rem",
                      fontWeight: 400,
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--tm-red)",
                        flexShrink: 0,
                      }}
                    />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Country photo carousel */}
          <div className="fade-in">
            {/* Main photo */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4/3",
                overflow: "hidden",
                background: "#e8e8e6",
                marginBottom: "1rem",
              }}
            >
              {countries.map((country, i) => (
                <img
                  key={country.name}
                  src={country.img}
                  alt={country.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: i === activeCountry ? 1 : 0,
                    transition: "opacity 0.8s ease",
                  }}
                />
              ))}
              {/* Country overlay label */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "0.875rem 1.25rem",
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--tm-black)" }}>
                  {countries[activeCountry].name}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--tm-gray-mid)" }}>
                  {activeCountry + 1} / {countries.length}
                </span>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                overflowX: "auto",
                scrollbarWidth: "none",
                paddingBottom: "4px",
              }}
            >
              {countries.map((country, i) => (
                <button
                  key={country.name}
                  onClick={() => setActiveCountry(i)}
                  title={country.name}
                  style={{
                    flexShrink: 0,
                    width: "56px",
                    height: "56px",
                    overflow: "hidden",
                    opacity: i === activeCountry ? 1 : 0.35,
                    outline: i === activeCountry ? "2px solid var(--tm-red)" : "none",
                    outlineOffset: "2px",
                    transition: "opacity 0.3s ease",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <img
                    src={country.img}
                    alt={country.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
