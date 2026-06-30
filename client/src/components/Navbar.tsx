import { useState, useEffect } from "react";

const financialSolutions = [
  { title: "Private Equity", img: "/manus-storage/menu_pe_88278eeb.jpg", href: "#" },
  { title: "Direct Lending", img: "/manus-storage/menu_dl_59c6a75c.jpg", href: "#" },
  { title: "Fund of Funds", img: "/manus-storage/menu_fof_589aa3f2.jpg", href: "#" },
  { title: "Fund Financing", img: "/manus-storage/menu_ff_192da86e.jpg", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div
          className="flex items-center justify-between h-full"
          style={{ padding: "0 2.5rem" }}
        >
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center" style={{ height: "100%" }}>
            <SuperPumpedWordmark />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {["About", "Portfolio", "Team", "Investors", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: "var(--tm-black)", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.01em" }}
                className="transition-colors duration-200 hover:opacity-60"
              >
                {item}
              </a>
            ))}
            {/* Financial Solutions with mega menu */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 transition-opacity duration-200 hover:opacity-60"
                style={{ color: "var(--tm-black)", fontSize: "0.8125rem", fontWeight: 400, letterSpacing: "0.01em", background: "none", border: "none", cursor: "pointer" }}
              >
                Financial Solutions
                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" className={`transition-transform duration-200 ${megaMenuOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1L4.5 4L8 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2" style={{ fontSize: "0.75rem", letterSpacing: "0.05em" }}>
              <a href="#" style={{ color: "var(--tm-black)", fontWeight: 600 }}>EN</a>
              <span style={{ color: "var(--tm-gray-mid)" }}>|</span>
              <a href="#" style={{ color: "var(--tm-gray-mid)", fontWeight: 400 }}>ES</a>
            </div>
            <a
              href="#"
              className="transition-all duration-200 hover:bg-black hover:text-white"
              style={{
                color: "var(--tm-black)",
                border: "1px solid var(--tm-black)",
                padding: "0.4rem 1rem",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              Investors Portal
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none" }}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} style={{ backgroundColor: "var(--tm-black)" }} />
              <span className={`block h-px transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} style={{ backgroundColor: "var(--tm-black)" }} />
              <span className={`block h-px transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} style={{ backgroundColor: "var(--tm-black)" }} />
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
                key={item.title}
                href={item.href}
                className="group flex flex-col gap-3"
                style={{ textDecoration: "none" }}
              >
                <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#f0f0ee" }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--tm-black)" }}>
                  {item.title}
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
        <nav className="flex flex-col" style={{ padding: "2rem 2.5rem", gap: "0" }}>
          {["About", "Financial Solutions", "Portfolio", "Team", "Investors", "Contact"].map((item) => (
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
            href="#"
            className="mt-6 text-sm font-medium border text-center py-3"
            style={{ color: "var(--tm-black)", borderColor: "var(--tm-black)" }}
          >
            Investors Portal
          </a>
        </nav>
      </div>
    </>
  );
}

function SuperPumpedWordmark() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {/* Icon: three horizontal lines stacked */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "2px" }}>
        <div style={{ width: "18px", height: "1.5px", background: "var(--tm-black)" }} />
        <div style={{ width: "24px", height: "1.5px", background: "var(--tm-black)" }} />
        <div style={{ width: "14px", height: "1.5px", background: "var(--tm-black)" }} />
      </div>
      {/* Wordmark text */}
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: "0.875rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--tm-black)",
          lineHeight: 1,
        }}
      >
        SUPERPUMPED
      </span>
    </div>
  );
}
