import Navbar from "@/components/Navbar";
import ProHeroSection from "@/components/pro/ProHeroSection";
import ProStatStrip from "@/components/pro/ProStatStrip";
import ProProblemSection from "@/components/pro/ProProblemSection";
import ProMechanismSection from "@/components/pro/ProMechanismSection";
import ProUseCasesSection from "@/components/pro/ProUseCasesSection";
import ProStepsSection from "@/components/pro/ProStepsSection";
import ProRiskNote from "@/components/pro/ProRiskNote";
import ProFinalCta from "@/components/pro/ProFinalCta";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Pro() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      <Navbar />
      <ProHeroSection />
      <ProStatStrip />
      <ProProblemSection />
      <ProMechanismSection />
      <ProUseCasesSection />
      <ProStepsSection />
      <ProRiskNote />
      <ProFinalCta />
      <Footer />
      <CookieBanner />
    </div>
  );
}
