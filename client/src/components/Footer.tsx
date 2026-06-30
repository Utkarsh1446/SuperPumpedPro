export default function Footer() {
  return (
    <footer
      style={{
        background: "#f8f8f6",
        borderTop: "1px solid var(--tm-gray-border)",
        padding: "3rem 2.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* Top row */}
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
        >
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="transition-colors duration-200 hover:text-red-600"
              style={{ color: "var(--tm-black)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="2"
                  y="9"
                  width="4"
                  height="12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="mailto:info@tresmarescapital.com"
              aria-label="Email"
              className="transition-colors duration-200 hover:text-red-600"
              style={{ color: "var(--tm-black)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M2 7l10 7 10-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Legal links */}
          <div
            className="flex flex-wrap gap-x-6 gap-y-2"
            style={{ fontSize: "0.6875rem", color: "var(--tm-gray-mid)" }}
          >
            {[
              "Legal Notice",
              "Privacy Policy",
              "Cookies Policy",
              "Whistleblowing channel",
              "Internal channel policy",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="transition-colors duration-200 hover:text-black"
                style={{ color: "var(--tm-gray-mid)", letterSpacing: "0.03em" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2"
          style={{
            borderTop: "1px solid var(--tm-gray-border)",
            paddingTop: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.6875rem",
              color: "var(--tm-gray-mid)",
              letterSpacing: "0.03em",
            }}
          >
            © 2023 Tresmares Capital is registered with the CNMV.
          </p>
          <div
            className="flex items-center gap-3"
            style={{ fontSize: "0.6875rem", color: "var(--tm-gray-mid)" }}
          >
            <a href="#" className="hover:text-black transition-colors">EN</a>
            <span>|</span>
            <a href="#" className="hover:text-black transition-colors">ES</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
