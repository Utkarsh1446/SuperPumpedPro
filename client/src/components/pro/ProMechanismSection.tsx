import { useState } from "react";
import LeverageCalculator from "./LeverageCalculator";

const mechanics = [
  {
    id: "open-position",
    title: "Open\nPosition",
    description:
      "Commit margin and define direction. Your position scales with conviction, sized off collateral rather than total balance.",
  },
  {
    id: "add-margin",
    title: "Add\nMargin",
    description:
      "Top up collateral to widen your liquidation buffer and hold through volatility without reducing exposure.",
  },
  {
    id: "auto-hedge",
    title: "Auto\nHedge",
    description:
      "Risk engine offsets directional exposure automatically as thresholds are hit, protecting the book in real time.",
  },
  {
    id: "close-settle",
    title: "Close &\nSettle",
    description:
      "Realize the position. PnL and remaining margin settle instantly back to your available balance.",
  },
];

export default function ProMechanismSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="how-it-works" style={{ background: "#ffffff", padding: "8rem 0" }}>
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "5rem" }}>
          <div className="tm-label" style={{ marginBottom: "2rem", color: "var(--tm-gray-mid)" }}>
            How it works
          </div>
          <h2
            className="tm-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              maxWidth: "700px",
              lineHeight: 1.05,
              color: "var(--tm-black)",
            }}
          >
            Four mechanics that turn a tight balance into a position sized to your edge
          </h2>
        </div>

        {/* Tab list + content panel */}
        <div style={{ display: "flex", gap: "5rem", alignItems: "flex-start" }}>
          {/* Left vertical tab list */}
          <div className="hidden lg:block" style={{ width: "200px", flexShrink: 0 }}>
            {mechanics.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setActive(i)}
                className="block text-left w-full transition-all duration-300"
                style={{
                  borderBottom: "1px solid var(--tm-gray-border)",
                  color: i === active ? "var(--tm-black)" : "var(--tm-gray-mid)",
                  fontSize: "0.8125rem",
                  fontWeight: i === active ? 500 : 400,
                  letterSpacing: "0.02em",
                  background: "none",
                  border: "none",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "var(--tm-gray-border)",
                  padding: "1rem 0",
                  cursor: "pointer",
                }}
              >
                {m.title.replace("\n", " ")}
              </button>
            ))}
          </div>

          {/* Right content panel */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4rem" }}>
            <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start" }}>
              {/* Simple line illustration placeholder */}
              <div
                style={{
                  width: "280px",
                  flexShrink: 0,
                  aspectRatio: "16/9",
                  border: "1px solid var(--tm-gray-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="160" height="80" viewBox="0 0 160 80" fill="none">
                  <path
                    d="M4 70 L40 50 L72 58 L104 24 L140 12"
                    stroke="var(--tm-red)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line x1="4" y1="78" x2="156" y2="78" stroke="var(--tm-gray-border)" strokeWidth="1" />
                  <line x1="4" y1="2" x2="4" y2="78" stroke="var(--tm-gray-border)" strokeWidth="1" />
                </svg>
              </div>

              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <h3
                  className="tm-display"
                  style={{
                    fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)",
                    fontWeight: 300,
                    lineHeight: 1.0,
                    color: "var(--tm-black)",
                    whiteSpace: "pre-line",
                    margin: 0,
                  }}
                >
                  {mechanics[active].title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "var(--tm-black)",
                    fontWeight: 300,
                    maxWidth: "460px",
                    margin: 0,
                  }}
                >
                  {mechanics[active].description}
                </p>
                <a href="#" className="tm-link" style={{ width: "fit-content" }}>
                  Know more
                </a>
              </div>
            </div>

            {/* Interactive calculator */}
            <LeverageCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
