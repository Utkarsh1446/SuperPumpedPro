import { useEffect, useRef } from "react";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef({ position: 0, velocity: 0 });

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      scrollRef.current.position += speed;
      
      // Get the total width of one full set of cards
      const cardWidth = 240; // approximate card width
      const totalWidth = cardWidth * countries.length;
      
      // Reset to beginning when we've scrolled past one full set
      if (scrollRef.current.position > totalWidth) {
        scrollRef.current.position = 0;
      }

      carousel.style.transform = `translateX(-${scrollRef.current.position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
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
          Our expansion
        </div>

        {/* Two-column layout: text left, carousel right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
            marginBottom: "4rem",
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

          {/* Right: Carousel placeholder (actual carousel below) */}
          <div className="fade-in" />
        </div>

        {/* Horizontal infinite carousel */}
        <div
          style={{
            overflow: "hidden",
            marginBottom: "3rem",
            background: "#f8f8f6",
            padding: "2rem 0",
          }}
        >
          <div
            ref={carouselRef}
            style={{
              display: "flex",
              gap: "1rem",
              willChange: "transform",
            }}
          >
            {/* Duplicate countries array for seamless loop */}
            {[...countries, ...countries].map((country, i) => (
              <div
                key={`${country.name}-${i}`}
                style={{
                  flexShrink: 0,
                  width: "240px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    overflow: "hidden",
                    background: "#e8e8e6",
                  }}
                >
                  <img
                    src={country.img}
                    alt={country.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 400,
                    color: "var(--tm-black)",
                    textAlign: "center",
                  }}
                >
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Static map with office locations */}
        <div
          style={{
            background: "#f8f8f6",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "300px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "600px",
              aspectRatio: "16/9",
              background: "#e8e8e6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.875rem",
              color: "var(--tm-gray-mid)",
            }}
          >
            {/* Simplified Europe map representation */}
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "1rem", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Europe Map
              </div>
              <div style={{ display: "flex", gap: "2rem", justifyContent: "center", alignItems: "center" }}>
                {/* Office location markers */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--tm-red)" }} />
                  <span style={{ fontSize: "0.75rem" }}>Madrid</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--tm-red)" }} />
                  <span style={{ fontSize: "0.75rem" }}>London</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--tm-red)" }} />
                  <span style={{ fontSize: "0.75rem" }}>Frankfurt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
