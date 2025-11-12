import React from "react";

function MainAlert() {
  return (
    <div className="w-[90vw] sm:w-[60vw] md:w-[40vw] bg-nav text-txt p-6 rounded-2xl flex flex-col justify-center items-center text-center mx-auto my-auto shadow-lg">
      <h1 className="text-base sm:text-lg md:text-xl font-semibold mb-5">
        Are you sure you want to stop and go back to the home page?
      </h1>
      <div className="flex gap-4 font-bold">
        <button className="bg-btn-neg text-txt-neg px-5 py-2 rounded-md hover:bg-btn-neg-hover transition-all duration-300 text-sm sm:text-base">
          Cancel
        </button>
        <button className="bg-btn text-txt px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 text-sm sm:text-base">
          Yes, Go Home
        </button>
      </div>
    </div>
  );
}

export default MainAlert;
