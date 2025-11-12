import React from "react";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import AdBannerSmall from "../components/Ad/AdBannerSmall";

function AdBanners() {
  return (
    <section className="h-screen w-full overflow-x-hidden flex flex-col justify-between gap-5 backdrop-blur-lg bg-black/50 ">
      <div className="h-[8vh] sm:h-[11vh]">
        <AdBannerSmall />
      </div>
      <div className="flex-1">
        <Outlet/>
      </div>    
      <div className="h-[8vh] sm:h-[11vh] block sm:hidden">
        <AdBannerSmall />
      </div>
    </section>
  );
}

export default AdBanners;
