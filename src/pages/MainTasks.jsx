import React from "react";
import PdfImg from "../assets/Pdf1.jpg";
import ImgPreview from "../components/Img/ImgPreview";
import BottomControls from "../components/Controls/BottomControls";

function MainTasks() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <section className="mt-[6vh]">
        <ImgPreview doc={PdfImg} />
      </section>
      <BottomControls />
    </div>
  );
}

export default MainTasks;
