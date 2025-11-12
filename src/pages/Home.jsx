import React from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection";
import UploadFilesSection from "../components/UploadFilesSection";
import HowToUse from "../components/HowToUse";

function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col flex-1 px-3 gap-9 overflow-hidden mb-9 items-center">
        <HeroSection />
        <UploadFilesSection />
        <HowToUse />
      </div>
      <Footer />
    </main>
  );
}

export default Home;
