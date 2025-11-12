import React from "react";

function CreateSign() {
  return (
    <div className="relative w-[90vw] sm:w-[60vw] md:w-[40vw] bg-nav text-txt px-6 py-2 rounded-2xl flex flex-col justify-center items-center text-center mx-auto my-auto shadow-lg gap-5">
      {/* Close Button - top right corner */}
      <button
        className="absolute -top-3 -right-3 text-xl font-bold bg-red-500 text-white 
        px-3 py-1 rounded-full shadow-md hover:scale-110 
        transition-transform duration-300 z-10"
      >
        X
      </button>

      {/* Signature area */}
      <div className="group relative flex justify-end w-[88vw] sm:w-[58vw] md:w-[38vw] h-[10vh] rounded-xl border-2 bg-transparent overflow-hidden">
        <button
          className="
          absolute right-0 h-full px-5 text-xl font-bold text-white 
          bg-gradient-to-l from-black/90 to-transparent 
          opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
          transition-opacity duration-300
        "
        >
          Add
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 font-bold">
        <button className="bg-btn text-txt px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 text-xl sm:text-base">
          Aa
        </button>
        <button className="bg-btn text-txt px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 text-xl sm:text-base">
          <i className="fa-solid fa-images"></i>
        </button>
      </div>
    </div>
  );
}

export default CreateSign;
