import { useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "Rene Hartert",
    role: "Partner",
    img: "/manus-storage/team_rene_72855fc6.png",
    linkedin: "#",
  },
  {
    name: "Vasil Peres",
    role: "ODD Analyst",
    img: "/manus-storage/team_vasil_411ca007.png",
    linkedin: "#",
  },
  {
    name: "Eva Lozano",
    role: "Head of Investor Relations",
    img: "/manus-storage/team_eva_57c08b09.png",
    linkedin: "#",
  },
  {
    name: "Cristina Oñate",
    role: "Fund Manager",
    img: "/manus-storage/team_cristina_0b76e947.png",
    linkedin: "#",
  },
  {
    name: "Pol Ruiz",
    role: "Associate",
    img: "/manus-storage/team_pol_30b87f3e.png",
    linkedin: "#",
  },
  {
    name: "Norman Wallace",
    role: "Associate",
    img: "/manus-storage/team_norman_c990a65f.png",
    linkedin: "#",
  },
  {
    name: "Enrique Abascal",
    role: "Associate",
    img: "/manus-storage/team_enrique_e3cc0849.png",
    linkedin: "#",
  },
  {
    name: "Juan Treviño",
    role: "Analyst",
    img: "/manus-storage/team_juan_ed545668.png",
    linkedin: "#",
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up, .fade-in").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#ffffff", padding: "8rem 0" }}
    >
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        {/* Heading */}
        <div className="fade-up" style={{ maxWidth: "700px", marginBottom: "5rem" }}>
          <h2
            className="tm-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--tm-black)",
            }}
          >
            We are a team of more than 60 professionals with extensive experience in private equity and investment in SMEs.
          </h2>
        </div>

        {/* Team grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "2rem 1.5rem",
            marginBottom: "5rem",
          }}
        >
          {teamMembers.map((member, i) => (
            <a
              key={member.name}
              href={member.linkedin}
              className="fade-in group flex flex-col gap-3"
              style={{ textDecoration: "none" }}
            >
              {/* Photo */}
              <div
                style={{
                  aspectRatio: "200/246",
                  overflow: "hidden",
                  background: "#e8e8e6",
                  filter: "grayscale(100%)",
                  transition: "filter 0.4s ease",
                }}
                className="group-hover:filter-none"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = "grayscale(0%)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "grayscale(100%)")
                }
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Info */}
              <div>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--tm-black)",
                    marginBottom: "0.125rem",
                  }}
                >
                  {member.name}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--tm-gray-mid)",
                    fontWeight: 400,
                  }}
                >
                  {member.role}
                </div>
              </div>
              {/* LinkedIn icon */}
              <div style={{ marginTop: "-0.5rem" }}>
                <LinkedInIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "var(--tm-gray-mid)" }}
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
  );
}
