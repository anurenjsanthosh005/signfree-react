import React, { useRef, useState } from "react";
import PdfImg from "../assets/Pdf1.jpg";
import ImgPreview from "../components/Img/ImgPreview";
import BottomControls from "../components/Controls/BottomControls";
import html2canvas from "html2canvas-pro";

function MainTasks() {
  const imageRef = useRef(null);

  const [isEdit, setIsEdit] = useState(true);
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden items-center">
      <section className="mt-[20vh] bg-red-500 w-full md:w-[70vw]">
        <ImgPreview doc={PdfImg} ref={imageRef} isEdit={isEdit} />
      </section>
      <BottomControls />
    </div>
  );
}
  
export default MainTasks;
