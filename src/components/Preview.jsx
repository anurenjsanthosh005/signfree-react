import React, { useState } from "react";
import Img from "../assets/anurenj.jpg";
import PdfImg from "../assets/Pdf1.jpg";
import Pdf1 from "../assets/Pdf1.pdf";
import PdfPreview from "./Pdf/PdfPreview";
import ImgPreview from "./Img/ImgPreview";
import BottomControls from "./Controls/BottomControls";

function Preview() {
  return (
    <div className=" w-full h-screen flex flex-col">
      <ImgPreview doc={PdfImg} />
      {/* Fixed bottom bar */}
      <BottomControls />
    </div>
  );
}

export default Preview;
