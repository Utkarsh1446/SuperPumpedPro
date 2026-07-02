import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { pick } = useLanguage();

  return (
    <section
      className="hero-section relative w-full overflow-hidden"
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
        className="hero-content relative z-10"
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
            <h1 className="hero-heading"
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
              <span className="hero-line hero-line-1" style={{ display: "block", marginLeft: "0" }}>{pick({ en: "Your edge is", es: "Tu ventaja es", zh: "你的优势" })}</span>
              <span className="hero-line hero-line-2 hero-indent-1" style={{ display: "block", marginLeft: "clamp(2.5rem, 5vw, 6rem)" }}>{pick({ en: "bigger than", es: "mayor que", zh: "远比" })}</span>
              <span className="hero-line hero-line-3 hero-indent-2" style={{ display: "block", marginLeft: "clamp(5rem, 10vw, 12rem)" }}>{pick({ en: "your position size", es: "el tamaño de tu posición", zh: "你的仓位更重要" })}</span>
            </h1>
          </div>

        </div>


      </div>
    </section>
  );
}
