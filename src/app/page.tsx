// Landing Page

import FeaturesSection from "./components/home/FeaturesSection";
import HeroSection from "./components/home/HeroSection";
import HowToSection from "./components/home/HowToSection";
import Navbar from "./components/home/Navbar";

export default function Home() {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <Navbar />
        <HeroSection />
        <HowToSection />
        <FeaturesSection />
      </div>
    </>
  );
}
