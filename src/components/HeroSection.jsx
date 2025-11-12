import React from "react";

function HeroSection() {
  return (
    <section className="h-[25vh] w-full md:h-[35vh] bg-bg-secondary mt-9 flex flex-col justify-center px-9 text-center md:text-left shadow-xl rounded">
      <div>
        <h1 className="text-[clamp(2rem,6vw,5rem)] font-bold text-white">
          Fast. Safe. Simple.
        </h1>
      </div>
      <h3 className="text-[clamp(1rem,3vw,2rem)] text-btn font-extrabold mt-3">
        Sign your documents online without the wait. For FREE !
        <span>
          <i className="fa-solid fa-hourglass-half text-white animate-spin-stepped ml-5"></i>
        </span>
      </h3>
    </section>
  );
}

export default HeroSection;
