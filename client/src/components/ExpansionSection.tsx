import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { language } = useLanguage();
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
      style={{ background: "#ffffff", padding: "6rem 0" }}
    >
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        <h2
          className="tm-display"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 300,
            maxWidth: "700px",
            lineHeight: 1.05,
            color: "var(--tm-black)",
            marginBottom: "3rem",
          }}
        >
          {language === "es"
            ? "Lo que dicen usuarios reales sobre la necesidad de apalancamiento"
            : "What real users say about need of leverage"}
        </h2>

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
