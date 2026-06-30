import { useState } from "react";

const inputStyle: React.CSSProperties = {
  border: "1px solid var(--tm-gray-border)",
  background: "#ffffff",
  padding: "0.75rem 1rem",
  fontSize: "0.9375rem",
  fontWeight: 300,
  color: "var(--tm-black)",
  width: "100%",
  outline: "none",
  borderRadius: 0,
  fontFamily: "'DM Sans', sans-serif",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.6875rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--tm-gray-mid)",
  fontWeight: 500,
  marginBottom: "0.5rem",
  display: "block",
};

function fmt(n: number): string {
  if (!isFinite(n)) return "—";
  return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

export default function LeverageCalculator() {
  const [margin, setMargin] = useState(1000);
  const [leverage, setLeverage] = useState(10);
  const [entry, setEntry] = useState(100);

  const positionSize = margin * leverage;
  const units = entry > 0 ? positionSize / entry : 0;
  // Long liquidation (approx): entry * (1 - 1/leverage)
  const liquidation = leverage > 0 ? entry * (1 - 1 / leverage) : 0;

  const outputs = [
    { label: "Position size", value: `$${fmt(positionSize)}` },
    { label: "Units", value: fmt(units) },
    { label: "Est. liquidation", value: `$${fmt(liquidation)}` },
  ];

  return (
    <div style={{ borderTop: "1px solid var(--tm-gray-border)", paddingTop: "2.5rem" }}>
      <div className="tm-label" style={{ marginBottom: "2rem", color: "var(--tm-gray-mid)" }}>
        Size your position
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <div>
          <label style={labelStyle} htmlFor="calc-margin">Margin (USD)</label>
          <input
            id="calc-margin"
            type="number"
            min={0}
            value={margin}
            onChange={(e) => setMargin(Math.max(0, Number(e.target.value)))}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="calc-leverage">Leverage (x)</label>
          <input
            id="calc-leverage"
            type="number"
            min={1}
            value={leverage}
            onChange={(e) => setLeverage(Math.max(1, Number(e.target.value)))}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="calc-entry">Entry price (USD)</label>
          <input
            id="calc-entry"
            type="number"
            min={0}
            value={entry}
            onChange={(e) => setEntry(Math.max(0, Number(e.target.value)))}
            style={inputStyle}
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: "1px solid var(--tm-gray-border)",
          paddingTop: "2rem",
        }}
      >
        {outputs.map((o, i) => (
          <div
            key={o.label}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              paddingLeft: i > 0 ? "2rem" : "0",
              paddingRight: "2rem",
              borderRight: i < outputs.length - 1 ? "1px solid var(--tm-gray-border)" : "none",
            }}
          >
            <span
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--tm-gray-mid)",
                fontWeight: 500,
              }}
            >
              {o.label}
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                color: "var(--tm-red)",
              }}
            >
              {o.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
