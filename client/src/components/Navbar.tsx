import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const financialSolutions = [
  { en: "Leverage", es: "Apalancamiento", zh: "杠杆交易", img: "/assets/leverage.png", href: "#" },
  { en: "Earning Vaults", es: "Bóvedas de Rendimiento", zh: "收益金库", img: "/assets/earning-vaults.png", href: "#" },
  { en: "Automated Strategies", es: "Estrategias Automatizadas", zh: "自动化策略", img: "/assets/automated-strategies.png", href: "#" },
  { en: "Agentic Markets", es: "Mercados Agénticos", zh: "智能体市场", img: "/assets/agentic-markets.png", href: "#" },
];

export default function Navbar() {
  const { pick } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const solidHeader = scrolled || mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: "64px",
          backgroundColor: solidHeader ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: solidHeader ? "blur(8px)" : "none",
          boxShadow: solidHeader ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div
          className="navbar-shell flex items-center justify-between h-full"
          style={{ padding: "0 2.5rem" }}
        >
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center" style={{ height: "100%" }}>
            <SuperPumpedWordmark scrolled={solidHeader} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[pick({ en: "About", es: "Acerca de", zh: "关于" })].map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: scrolled ? "var(--tm-black)" : "#ffffff", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.01em" }}
                className="transition-colors duration-200 hover:opacity-60"
              >
                {item}
              </a>
            ))}
            {/* Solutions with mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-60"
                style={{ color: scrolled ? "var(--tm-black)" : "#ffffff", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.01em", background: "none", border: "none", cursor: "pointer" }}
              >
                {pick({ en: "Solutions", es: "Soluciones", zh: "解决方案" })}
                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" className={`transition-transform duration-200 ${megaMenuOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1L4.5 4L8 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            {[pick({ en: "Docs", es: "Docs", zh: "文档" }), pick({ en: "Contact", es: "Contacto", zh: "联系" })].map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: scrolled ? "var(--tm-black)" : "#ffffff", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.01em" }}
                className="transition-colors duration-200 hover:opacity-60"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://private.superpumped.pro"
              className="transition-all duration-200 hover:bg-black hover:text-white"
              style={{
                color: scrolled ? "var(--tm-black)" : "#ffffff",
                border: `1px solid ${scrolled ? "var(--tm-black)" : "#ffffff"}`,
                padding: "0.4rem 1rem",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              {pick({ en: "Launch App", es: "Abrir app", zh: "启动应用" })}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={pick({ en: "Toggle menu", es: "Abrir menú", zh: "打开菜单" })}
            style={{ background: "none", border: "none" }}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} style={{ backgroundColor: solidHeader ? "var(--tm-black)" : "#ffffff" }} />
              <span className={`block h-px transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} style={{ backgroundColor: solidHeader ? "var(--tm-black)" : "#ffffff" }} />
              <span className={`block h-px transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} style={{ backgroundColor: solidHeader ? "var(--tm-black)" : "#ffffff" }} />
            </div>
          </button>
        </div>

        {/* Mega Menu */}
        <div
          className="absolute left-0 right-0 bg-white transition-all duration-300"
          style={{
            top: "64px",
            borderTop: megaMenuOpen ? "1px solid var(--tm-gray-border)" : "none",
            overflow: megaMenuOpen ? "visible" : "hidden",
            maxHeight: megaMenuOpen ? "600px" : "0",
            opacity: megaMenuOpen ? 1 : 0,
            boxShadow: megaMenuOpen ? "0 8px 24px rgba(0,0,0,0.06)" : "none",
          }}
          onMouseEnter={() => setMegaMenuOpen(true)}
          onMouseLeave={() => setMegaMenuOpen(false)}
        >
          <div style={{ padding: "2rem 2.5rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {financialSolutions.map((item) => (
              <a
                key={item.en}
                href={item.href}
                className="group flex flex-col gap-3"
                style={{ textDecoration: "none" }}
              >
                <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#f0f0ee" }}>
                  <img
                    src={item.img}
                    alt={pick({ en: item.en, es: item.es, zh: item.zh })}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--tm-black)" }}>
                  {pick({ en: item.en, es: item.es, zh: item.zh })}
                </span>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 bg-white lg:hidden transition-all duration-300"
        style={{
          paddingTop: "64px",
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? "visible" : "hidden",
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
      >
        <nav className="mobile-nav flex flex-col" style={{ padding: "2rem 2.5rem", gap: "0" }}>
          {[
            pick({ en: "About", es: "Acerca de", zh: "关于" }),
            pick({ en: "Solutions", es: "Soluciones", zh: "解决方案" }),
            pick({ en: "Docs", es: "Docs", zh: "文档" }),
            pick({ en: "Contact", es: "Contacto", zh: "联系" }),
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="py-5 text-2xl font-light border-b transition-colors hover:text-red-600"
              style={{ color: "var(--tm-black)", borderColor: "var(--tm-gray-border)" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="https://private.superpumped.pro"
            className="mt-6 text-sm font-medium border text-center py-3"
            style={{ color: "var(--tm-black)", borderColor: "var(--tm-black)" }}
          >
            {pick({ en: "Launch App", es: "Abrir app", zh: "启动应用" })}
          </a>
        </nav>
      </div>
    </>
  );
}

function SuperPumpedWordmark({ scrolled }: { scrolled: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img
        src="/assets/superpumped-logo-bw.png"
        alt=""
        style={{
          width: "26px",
          height: "26px",
          objectFit: "contain",
          display: "block",
          filter: scrolled ? "invert(1)" : "none",
        }}
      />
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: "0.875rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: scrolled ? "var(--tm-black)" : "#ffffff",
          lineHeight: 1,
        }}
      >
        SUPERPUMPED
      </span>
    </div>
  );
}
