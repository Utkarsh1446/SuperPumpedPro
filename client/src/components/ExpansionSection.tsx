import { useEffect, useRef } from "react";

const socialPosts = [
  {
    type: "x" as const,
    url: "https://x.com/0xSehaj/status/1957574810499736021",
    label: "Post by Sehaj",
  },
  {
    type: "reddit" as const,
    url: "https://www.reddit.com/r/PredictionMarkets/comments/1t2uv1b/are_there_any_prediction_markets_that_offer/",
    label: "Are there any prediction markets that offer leverage?",
  },
  {
    type: "reddit" as const,
    url: "https://www.reddit.com/r/defi/comments/1rz21mh/lending_for_prediction_markets/",
    label: "Lending for Prediction Markets",
  },
  {
    type: "reddit" as const,
    url: "https://www.reddit.com/r/Polymarket/comments/1tr5310/leverage_on_polymarket_bots/",
    label: "Leverage on Polymarket bots?",
  },
  {
    type: "reddit" as const,
    url: "https://www.reddit.com/r/PredictionMarkets/comments/1tph0rm/genuine_question_does_the_prop_firm_model_make/",
    label: "Does the prop firm model make sense for prediction markets?",
  },
  {
    type: "x" as const,
    url: "https://x.com/DWFLabs/status/2054185230173667809",
    label: "Post by DWF Labs",
  },
  {
    type: "x" as const,
    url: "https://x.com/iatskar/status/1996990828804296907",
    label: "Post by iatskar",
  },
];

export default function ExpansionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const isCarouselPausedRef = useRef(false);

  useEffect(() => {
    const renderTweets = () => {
      const twitterWindow = window as typeof window & {
        twttr?: { widgets?: { load: (element?: HTMLElement) => void } };
      };
      twitterWindow.twttr?.widgets?.load(carouselRef.current ?? undefined);
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://platform.x.com/widgets.js"]'
    );

    if (existingScript) {
      renderTweets();
      existingScript.addEventListener("load", renderTweets);
      return () => existingScript.removeEventListener("load", renderTweets);
    }

    const script = document.createElement("script");
    script.src = "https://platform.x.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    script.addEventListener("load", renderTweets);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", renderTweets);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.reddit.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId: number;
    const animate = () => {
      if (!isCarouselPausedRef.current) {
        scrollPositionRef.current += 0.4;
        const loopWidth = carousel.scrollWidth / 2;
        if (loopWidth > 0 && scrollPositionRef.current >= loopWidth) {
          scrollPositionRef.current = 0;
        }
        carousel.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "#ffffff", padding: "8rem 0 6rem" }}
    >
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        {/* Label */}
        <div
          className="fade-up tm-label"
          style={{ marginBottom: "3rem", color: "var(--tm-gray-mid)" }}
        >
          Our expansion
        </div>

        {/* Two-column layout: text left, carousel right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
            marginBottom: "4rem",
          }}
        >
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <h2
              className="fade-up tm-display"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "var(--tm-black)",
                marginBottom: "0.5rem",
              }}
            >
              We join forces with{" "}
              <strong style={{ fontWeight: 600 }}>Banco Santander</strong> to
              reach further
            </h2>

            <p
              className="fade-up"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--tm-black)",
                fontWeight: 300,
              }}
            >
              An independent management company supported by Banco Santander, from which we operate in continental Europe from our offices in Madrid, London, and Frankfurt.
            </p>
            <p
              className="fade-up"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "var(--tm-black)",
                fontWeight: 300,
              }}
            >
              Our pan-European reach enables us to identify and execute investment opportunities across the continent, leveraging local expertise and a broad network of relationships.
            </p>

            {/* Office locations */}
            <div
              className="fade-up"
              style={{
                borderTop: "1px solid var(--tm-gray-border)",
                paddingTop: "1.5rem",
                marginTop: "0.5rem",
              }}
            >
              <div
                className="tm-label"
                style={{ marginBottom: "1rem", color: "var(--tm-gray-mid)" }}
              >
                Our offices
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {["Madrid", "London", "Frankfurt"].map((city) => (
                  <div
                    key={city}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.9375rem",
                      fontWeight: 400,
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--tm-red)",
                        flexShrink: 0,
                      }}
                    />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Carousel placeholder (actual carousel below) */}
          <div className="fade-in" />
        </div>

        {/* Social post carousel */}
        <div
          style={{
            overflow: "hidden",
            marginBottom: "3rem",
            background: "transparent",
            padding: "1rem 0",
          }}
        >
          <div
            ref={carouselRef}
            onMouseEnter={() => { isCarouselPausedRef.current = true; }}
            onMouseLeave={() => { isCarouselPausedRef.current = false; }}
            style={{
              display: "flex",
              gap: "0.4375rem",
              width: "max-content",
              willChange: "transform",
            }}
          >
            {[...socialPosts, ...socialPosts].map((post, index) => (
              <article
                key={`${post.url}-${index}`}
                className="social-post-card"
                style={{
                  flexShrink: 0,
                  width: "330px",
                  height: "440px",
                  overflowY: "auto",
                  background: "transparent",
                  padding: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <div className="social-embed-scale">
                  {post.type === "x" ? (
                    <blockquote className="twitter-tweet" data-dnt="true">
                      <a href={post.url}>{post.label}</a>
                    </blockquote>
                  ) : (
                    <blockquote className="reddit-embed-bq" data-embed-height="500">
                      <a href={post.url}>{post.label}</a>
                    </blockquote>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
