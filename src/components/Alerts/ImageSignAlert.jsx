import React from "react";

function ImageSignAlert() {
  return (
    <div className="w-[90vw] sm:w-[60vw] md:w-[40vw] bg-nav border text-white p-6 rounded-2xl flex flex-col justify-center items-center text-center mx-auto my-auto shadow-lg">
      <h1 className="text-base sm:text-lg md:text-xl font-semibold mb-5">
        Make sure to select an image of your signature with a white background for the best results !
      </h1>
      <div className="flex gap-4 font-bold justify-end items-end w-full">
        <button className="bg-btn text-white px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 text-sm sm:text-base">
          Ok
        </button>
      </div>
    </div>
  );
}

export default ImageSignAlert;
