import React from "react";
import MenuBar from "../../components/MenuBar";
import HeroSection from "../../components/HeroSection";
import InfoSection from "../../components/InfoSection";
import ServiceSection from "../../components/ServiceSection";
import ChoiceSection from "../../components/ChoiceSection";
import Contact from "../../components/Contact";
import FooterSection from "../../components/FooterSection";
import Whatsapp from "../../components/whatsapp";
export default function Home() {
  return (
    <>
    <div id="home"></div>
      <MenuBar />
      <Whatsapp/>
      <HeroSection />
      <InfoSection/>
      <ServiceSection/>
      <ChoiceSection/>
      <Contact/>
      <FooterSection/>
    </>
  );
}
 