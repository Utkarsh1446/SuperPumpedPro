import { useLanguage } from "@/contexts/LanguageContext";

const faqCards = [
  {
    id: "what",
    image: "/assets/faq-what-is-superpumped.png",
    enQuestion: "What is SuperPumped?",
    esQuestion: "¿Qué es SuperPumped?",
    enAnswer: [
      "SuperPumped is the world's only leveraged trading layer built specifically for prediction markets. It lets you amplify your positions with up to 10x leverage, trade privately without exposing your moves to copy-bots, and access the largest execution data infrastructure in the prediction market space — built for everyday traders, institutions, and AI agents alike.",
      "If you've ever been right on a market but walked away with a fraction of what you should have made, SuperPumped is what was missing.",
    ],
    esAnswer: [
      "SuperPumped es la única capa de trading apalancado del mundo creada específicamente para mercados de predicción. Te permite amplificar posiciones con hasta 10x de apalancamiento, operar en privado sin exponer tus movimientos a copy-bots y acceder a la mayor infraestructura de datos de ejecución del sector, creada para traders, instituciones y agentes de IA.",
      "Si alguna vez acertaste en un mercado pero te llevaste solo una fracción de lo que deberías haber ganado, SuperPumped era lo que faltaba.",
    ],
  },
  {
    id: "how",
    image: "/assets/faq-how-it-works.png",
    enQuestion: "How does it work?",
    esQuestion: "¿Cómo funciona?",
    enAnswer: [
      "You bring your conviction. SuperPumped brings the capital efficiency.",
      "Pick any market, choose your leverage, and enter your position — all through isolated, vault-based trade execution, meaning each trade is self-contained and your risk never bleeds across positions. For traders who want to go further, you can connect your own AI agents — Claude, ChatGPT, Kimi, or any system you've built — directly into SuperPumped via our agentic trading layer. Your strategies, your models, your data. We just give them the infrastructure to act at scale.",
    ],
    esAnswer: [
      "Tú aportas la convicción. SuperPumped aporta la eficiencia de capital.",
      "Elige cualquier mercado, selecciona tu apalancamiento y abre tu posición mediante ejecución aislada basada en bóvedas. Cada operación es independiente y el riesgo nunca se mezcla entre posiciones. También puedes conectar tus propios agentes de IA —Claude, ChatGPT, Kimi o cualquier sistema propio— a nuestra capa de trading agéntico. Tus estrategias, tus modelos y tus datos siguen siendo tuyos; nosotros aportamos la infraestructura para actuar a escala.",
    ],
  },
  {
    id: "fees",
    image: "/assets/faq-fees.png",
    enQuestion: "What are the fees?",
    esQuestion: "¿Cuáles son las comisiones?",
    enAnswer: [
      "Smaller than you'd expect for what you're getting access to.",
      "For standard leveraged markets, there's a flat 2.5% fee per trade. For high-frequency 5 and 15-minute markets, it's usage-based: $0.20 for 2x leverage, $0.30 for 3x, $0.40 for 4x, and $0.50 for 5x — plus 1% of profits when you win.",
      "If you're using 5x leverage on a $100 position and you're right, you've turned a $20 move into a $100 move. The $0.50 entry cost and a dollar on profits is not a fee you'll think about twice.",
    ],
    esAnswer: [
      "Más pequeñas de lo que esperarías para el acceso que obtienes.",
      "En mercados apalancados estándar hay una comisión fija del 2,5% por operación. En mercados de alta frecuencia de 5 y 15 minutos, el precio depende del uso: $0,20 para 2x, $0,30 para 3x, $0,40 para 4x y $0,50 para 5x, más un 1% de los beneficios cuando ganas.",
      "Si utilizas 5x sobre una posición de $100 y aciertas, un movimiento de $20 se convierte en uno de $100. El coste de entrada de $0,50 y un dólar sobre beneficios apenas se notan.",
    ],
  },
  {
    id: "privacy",
    image: "/assets/faq-privacy.png",
    enQuestion: "How does privacy work?",
    esQuestion: "¿Cómo funciona la privacidad?",
    enAnswer: [
      "Most prediction market platforms expose your active positions in real time — which means copy-bots can front-run or mirror your best trades before you've even closed them.",
      "SuperPumped's Stealth Mode uses a Per Trade Wallet Method (PTWM), so each trade is isolated in its own execution environment. Your positions aren't visible on-chain in a way that can be traced back to you mid-trade.",
      "When you connect your own AI agents, your strategies, models, and trading logic stay entirely with you. SuperPumped never trains on your data, stores your agent logic, or shares execution patterns across users. What you build is yours.",
    ],
    esAnswer: [
      "La mayoría de plataformas muestran tus posiciones activas en tiempo real, permitiendo que copy-bots anticipen o repliquen tus mejores operaciones antes de cerrarlas.",
      "El Modo Stealth de SuperPumped utiliza el método Per Trade Wallet (PTWM): cada operación queda aislada en su propio entorno de ejecución y no puede vincularse contigo en cadena mientras está abierta.",
      "Al conectar tus agentes de IA, tus estrategias, modelos y lógica permanecen contigo. SuperPumped nunca entrena con tus datos, almacena la lógica de tus agentes ni comparte patrones de ejecución. Lo que construyes es tuyo.",
    ],
  },
  {
    id: "contact",
    image: "/assets/faq-contact.png",
    enQuestion: "Contact us",
    esQuestion: "Contáctanos",
    enAnswer: [],
    esAnswer: [],
  },
];

export default function ContactSection() {
  const { language } = useLanguage();

  return (
    <section id="contact" style={{ background: "#f8f8f6", padding: "8rem 0 0" }}>
      <div style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        <h2
          className="tm-display"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--tm-black)",
            maxWidth: "760px",
            marginBottom: "5rem",
          }}
        >
          {language === "es"
            ? "Todo lo que querías saber para poner tu capital en modo SuperPumped"
            : "Everything you wanted to know to get SuperPumped"}
        </h2>

        <div className="faq-mosaic">
          {faqCards.map((card, index) => {
            const question = language === "es" ? card.esQuestion : card.enQuestion;
            const answer = language === "es" ? card.esAnswer : card.enAnswer;
            return (
              <article
                key={card.id}
                className={`faq-card ${index === 0 ? "faq-card-large" : ""}`}
                tabIndex={0}
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="faq-card-shade" />
                <h3 className="faq-card-question">{question}</h3>
                <div className="faq-card-answer">
                  <h3>{question}</h3>
                  {card.id === "contact" ? (
                    <div className="faq-contact-links">
                      <a href="https://x.com/trysuperpumped" target="_blank" rel="noreferrer">X: @trysuperpumped</a>
                      <a href="https://t.me/superpumpedpro" target="_blank" rel="noreferrer">Telegram: @superpumpedpro</a>
                      <a href="mailto:team@superpumped.pro">Mail: team@superpumped.pro</a>
                    </div>
                  ) : (
                    answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
