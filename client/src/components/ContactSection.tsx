import { useLanguage } from "@/contexts/LanguageContext";
import type { CSSProperties } from "react";

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
    zhQuestion: "什么是 SuperPumped？",
    zhAnswer: [
      "SuperPumped 是全球唯一专为预测市场打造的杠杆交易层。它让你以最高 10 倍杠杆放大仓位，在不向跟单机器人暴露操作的情况下私密交易，并使用预测市场领域规模最大的执行数据基础设施，服务于普通交易者、机构和 AI 智能体。",
      "如果你曾经判断正确，却只获得了本应得到回报的一小部分，那么你缺少的正是 SuperPumped。",
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
    zhQuestion: "它如何运作？",
    zhAnswer: [
      "你提供判断力，SuperPumped 提供资本效率。",
      "选择任意市场和杠杆倍数，通过基于金库的隔离执行建立仓位。每笔交易彼此独立，风险不会跨仓位扩散。你还可以通过智能体交易层连接 Claude、ChatGPT、Kimi 或自有系统。策略、模型和数据仍属于你，我们只提供规模化执行所需的基础设施。",
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
    zhQuestion: "费用是多少？",
    zhAnswer: [
      "远低于你对这种能力的预期。",
      "标准杠杆市场每笔交易收取固定 2.5% 费用。对于 5 分钟和 15 分钟高频市场，按使用量计费：2 倍杠杆 $0.20、3 倍 $0.30、4 倍 $0.40、5 倍 $0.50，盈利时另收取利润的 1%。",
      "如果你在 $100 仓位上使用 5 倍杠杆并判断正确，原本 $20 的变动就会成为 $100 的收益。$0.50 的入场成本和一美元的利润费用几乎无需犹豫。",
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
    zhQuestion: "隐私如何保护？",
    zhAnswer: [
      "大多数预测市场平台会实时公开活跃仓位，这意味着跟单机器人可能在你平仓前抢先或复制最佳交易。",
      "SuperPumped 的隐身模式采用单笔交易钱包方法（PTWM），每笔交易都隔离在独立执行环境中。仓位在交易进行中不会以可追溯到你的方式显示在链上。",
      "连接自己的 AI 智能体后，策略、模型和交易逻辑仍完全属于你。SuperPumped 不会使用你的数据训练、存储智能体逻辑或在用户间共享执行模式。你构建的一切都属于你。",
    ],
  },
  {
    id: "contact",
    image: "/assets/faq-contact.png",
    enQuestion: "Contact us",
    esQuestion: "Contáctanos",
    zhQuestion: "联系我们",
    enAnswer: [],
    esAnswer: [],
    zhAnswer: [],
  },
];

export default function ContactSection() {
  const { pick } = useLanguage();

  return (
    <section id="contact" className="site-section contact-section" style={{ background: "#f8f8f6", padding: "8rem 0 0" }}>
      <div className="site-shell" style={{ padding: "0 2.5rem", maxWidth: "1440px", margin: "0 auto" }}>
        <h2
          className="tm-display motion-reveal"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--tm-black)",
            maxWidth: "760px",
            marginBottom: "5rem",
          }}
        >
          {pick({
            en: "Everything you wanted to know to get SuperPumped",
            es: "Todo lo que querías saber para poner tu capital en modo SuperPumped",
            zh: "让你全面了解如何开启 SuperPumped",
          })}
        </h2>

        <div className="faq-mosaic">
          {faqCards.map((card, index) => {
            const question = pick({ en: card.enQuestion, es: card.esQuestion, zh: card.zhQuestion });
            const answer = pick({ en: card.enAnswer, es: card.esAnswer, zh: card.zhAnswer });
            return (
              <article
                key={card.id}
                className={`faq-card motion-reveal ${index === 0 ? "faq-card-large" : ""}`}
                tabIndex={0}
                style={{ backgroundImage: `url(${card.image})`, "--motion-delay": `${index * 65}ms` } as CSSProperties}
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
