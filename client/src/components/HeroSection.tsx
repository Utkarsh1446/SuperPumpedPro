export default function HeroSection() {

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", background: "#ffffff" }}
    >
      {/* Stadium background — grayscale, full bleed */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(/assets/superpumped-hero-stadium.png)`,
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
        <div>
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

        </div>


      </div>
    </section>
  );
}
