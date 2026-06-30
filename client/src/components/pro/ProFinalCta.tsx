import { proStats } from "./ProStatStrip";

export default function ProFinalCta() {
  return (
    <section style={{ background: "#ffffff", padding: "8rem 0 6rem" }}>
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'DM Sans', Helvetica, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            lineHeight: 0.96,
            letterSpacing: "-0.03em",
            color: "var(--tm-black)",
            margin: 0,
            maxWidth: "1000px",
          }}
        >
          Trade your conviction, not your wallet size.
        </h2>

        <div style={{ display: "flex", alignItems: "center", gap: "2rem", marginTop: "2.5rem" }}>
          <a
            href="#how-it-works"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--tm-black)",
              borderBottom: "1px solid var(--tm-black)",
              paddingBottom: "2px",
              textDecoration: "none",
            }}
          >
            Start Trading →
          </a>
          <a
            href="https://private.superpumped.pro"
            className="transition-all duration-200 hover:bg-black hover:text-white"
            style={{
              color: "var(--tm-black)",
              border: "1px solid var(--tm-black)",
              padding: "0.5rem 1.25rem",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
          >
            Launch App
          </a>
        </div>

        {/* Stat strip repeated, small */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            borderTop: "1px solid var(--tm-gray-border)",
            marginTop: "5rem",
            paddingTop: "2rem",
          }}
        >
          {proStats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
                paddingLeft: i > 0 ? "1.5rem" : "0",
                paddingRight: "1.5rem",
                borderRight: i < proStats.length - 1 ? "1px solid var(--tm-gray-border)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "1.5rem",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "var(--tm-red)",
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontSize: "0.625rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--tm-gray-mid)",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
