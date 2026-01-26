import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";
import ServiceSection from "../../components/ServiceSection";
import ChoiceSection from "../../components/ChoiceSection";
import Contact from "../../components/Contact";
import FooterSection from "../../components/FooterSection";
import Whatsapp from "../../components/whatsapp";

export default function Home() {
  const location = useLocation();

  // Scroll ao voltar de outra rota (ex: /product)
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // Scroll interno (Hero button)
  function scrollToContact() {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <MenuBar />
      <Whatsapp />

      <HeroSection onContactClick={scrollToContact} />

      <InfoSection />
      <ServiceSection />
      <ChoiceSection />

      {/* ID REAL DA SEÇÃO */}
      <div id="contact">
        <Contact />
      </div>

      <FooterSection />
    </>
  );
}
