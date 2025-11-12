import React, { useRef, useState } from "react";
import PdfImg from "../assets/Pdf1.jpg";
import ImgPreview from "../components/Img/ImgPreview";
import BottomControls from "../components/Controls/BottomControls";
import html2canvas from "html2canvas-pro";

function MainTasks() {
  const imageRef = useRef(null);

  const [isEdit, setIsEdit] = useState(true);

  const handleDownload = async () => {
    setIsEdit(false);
    await new Promise(requestAnimationFrame); //waits for react to rerender

    console.log("button clicked");
    const canvas = await html2canvas(imageRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "signed.png";
    link.click();
    setIsEdit(true);
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden items-center">
      <section className="mt-[6vh] bg-red-500 w-[60vw]">
        <ImgPreview doc={PdfImg} ref={imageRef} isEdit={isEdit} />
      </section>
      <BottomControls onClick={handleDownload} />
    </div>
  );
}

export default MainTasks;
