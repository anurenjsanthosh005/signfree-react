import React from "react";
import Image from "../assets/anurenj.jpg";
import Pdf1 from "../assets/Pdf1.pdf";
import Pdf2 from "../assets/Pdf2.pdf";
import PdfPreview from "../components/Pdf/PdfPreview";

function Preview() {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <div className="flex flex-col h-full mx-3 sm:mx-5 lg:mx-9 gap-3">
        <div className="flex-8 rounded-lg flex items-center justify-center overflow-hidden">
          <img src={Image} alt="" />

          {/* <PdfPreview file={Pdf1} /> //preview pdf later here */}
        </div>

        <div className="w-full mt-6 flex flex-col items-center justify-center gap-4">
        <div className="w-full  p-4 rounded-lg ">
          <h1 className="text-txt text-center mb-3 text-lg font-medium">
            file name
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-btn text-txt px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 sm:w-auto">
              Change
            </button>
            <button className="bg-btn-neg text-txt-neg px-5 py-2 rounded-md hover:bg-btn-neg-hover transition-all duration-300 sm:w-auto">
              Done
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Preview;
