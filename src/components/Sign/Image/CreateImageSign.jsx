import React from "react";
import PdfImg from "../../../assets/mux-logo.png";

import ImgPreview from "../../Img/ImgPreview";
import BottomControls from "../../Controls/BottomControls";

function CreateImageSign() {
  return (
    <div className="absolute flex justify-center items-center w-full bg-white px-5 border-2 rounded">
      <button
        className="absolute -top-3 -right-3 text-xl font-bold bg-red-500 text-white 
        px-3 py-1 rounded-full shadow-md hover:scale-110 
        transition-transform duration-300 z-10"
      >
        X
      </button>
      <ImgPreview doc={PdfImg} />
      <BottomControls />
    </div>
  );
}

export default CreateImageSign;
