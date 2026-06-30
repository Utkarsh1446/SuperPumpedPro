import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FinancialSolutionsSection from "@/components/FinancialSolutionsSection";
import ExpansionSection from "@/components/ExpansionSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FinancialSolutionsSection />
      <ExpansionSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </div>
  );
}
