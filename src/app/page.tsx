// Landing Page

import HeroSection from "./components/home/HeroSection";
import Navbar from "./components/home/Navbar";

export default function Home() {
  return (
    <>
      <div className="w-[90%] mx-auto ">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}
