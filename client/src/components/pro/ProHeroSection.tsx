export default function ProHeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", background: "#ffffff" }}
    >
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
          {/* Left: oversized staggered title */}
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
              <span style={{ display: "block" }}>Trade your</span>
              <span style={{ display: "block", marginLeft: "clamp(2.5rem, 5vw, 6rem)" }}>conviction,</span>
              <span style={{ display: "block", marginLeft: "clamp(5rem, 10vw, 12rem)" }}>not your wallet size</span>
            </h1>
          </div>

          {/* Right: sub-copy + underlined link CTA */}
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
              Capital-efficient leverage
              <br />
              for traders who are right
              <br />
              more often than they are
              <br />
              funded.
            </p>
            <a
              href="#how-it-works"
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
              Start Trading →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
