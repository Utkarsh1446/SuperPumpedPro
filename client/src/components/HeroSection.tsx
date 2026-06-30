import { useEffect, useRef } from "react";

export default function HeroSection() {
  const scrollDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let pos = 0;
    let dir = 1;
    const animate = () => {
      pos += dir * 0.4;
      if (pos > 14) dir = -1;
      if (pos < 0) dir = 1;
      if (scrollDotRef.current) {
        scrollDotRef.current.style.transform = `translateY(${pos}px)`;
      }
      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", background: "#ffffff" }}
    >
      {/* Stadium background — grayscale, full bleed */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/manus-storage/Stadium_fe070eff.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%) contrast(1.1) brightness(0.9)",
        }}
      />

      {/* Bottom fade to white */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0.6) 65%, rgba(255,255,255,1) 100%)",
        }}
      />

      {/* Content — positioned at bottom */}
      <div
        className="relative z-10"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 2.5rem 4.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          {/* Left: large staggered title */}
          <div>
            <h1
              style={{
                fontFamily: "'DM Sans', Helvetica, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(5.5rem, 11vw, 10.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "var(--tm-black)",
                margin: 0,
              }}
            >
              <span style={{ display: "block", marginLeft: "0" }}>Your edge is</span>
              <span style={{ display: "block", marginLeft: "clamp(2.5rem, 5vw, 6rem)" }}>bigger than</span>
              <span style={{ display: "block", marginLeft: "clamp(5rem, 10vw, 12rem)" }}>your position size</span>
            </h1>
          </div>

          {/* Right: subtitle + link */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              maxWidth: "260px",
              paddingBottom: "0.75rem",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.55,
                color: "var(--tm-black)",
                fontWeight: 300,
                margin: 0,
              }}
            >
              Tailored financing
              <br />
              for high-growth SMEs
              <br />
              and private equity
              <br />
              managers.
            </p>
            <a
              href="#financial-solutions"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "var(--tm-black)",
                borderBottom: "1px solid var(--tm-black)",
                paddingBottom: "2px",
                width: "fit-content",
                textDecoration: "none",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--tm-red)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--tm-red)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--tm-black)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--tm-black)";
              }}
            >
              Financial Solutions
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "1px",
              height: "36px",
              background: "rgba(43,43,43,0.2)",
            }}
          >
            <div
              ref={scrollDotRef}
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "var(--tm-red)",
                position: "absolute",
                left: "-2px",
                top: "0",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "0.625rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 500,
              color: "var(--tm-black)",
            }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
