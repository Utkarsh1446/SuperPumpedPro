export default function ProRiskNote() {
  return (
    <section style={{ background: "#ffffff", padding: "4rem 0" }}>
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ maxWidth: "640px" }}>
          <p
            style={{
              fontSize: "0.8125rem",
              lineHeight: 1.7,
              color: "var(--tm-gray-mid)",
              fontWeight: 300,
              margin: 0,
            }}
          >
            Leveraged trading carries a high level of risk and can result in the
            loss of capital exceeding your initial margin. Positions may be
            liquidated automatically. Ensure you understand the mechanics before
            trading.{" "}
            <a
              href="#"
              style={{
                color: "var(--tm-gray-mid)",
                borderBottom: "1px solid var(--tm-gray-mid)",
                paddingBottom: "1px",
                textDecoration: "none",
              }}
            >
              Read the full risk disclosure
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
