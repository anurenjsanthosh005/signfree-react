import React from "react";
import Footer from "../Footer/Footer";
import AdBannerSmall from "./AdBannerSmall";

function AdBanners({children}) {
  return (
    <section className="h-screen w-full overflow-hidden flex flex-col backdrop-blur-lg bg-black/70">
      {/* Top Banner */}
      <div className="h-[8vh] sm:h-[11vh] shrink-0">
        <AdBannerSmall />
      </div>

      {/* Main Outlet Area */}
      <div className="flex-1 min-h-0 overflow-auto flex justify-center">
        {children}
      </div>

      {/* Bottom Banner (mobile only) */}
      <div className="h-[8vh] sm:h-[11vh] block sm:hidden shrink-0">
        <AdBannerSmall />
      </div>
    </section>
  );
}

export default AdBanners;
