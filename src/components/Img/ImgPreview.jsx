import React, { forwardRef } from "react";
import { useFiles } from "../../context/FIlesContext";
import BurnSign from "../Sign/BurnSign";

const ImgPreview = forwardRef(({ imgUrl,isDownloading }, ref) => {
  const { filePreview } = useFiles();  

  return (
    <div
      className={`flex-1 pb-5 ${
        !filePreview && "pb-32"
      } flex flex-col items-center justify-center relative`}
    >
      <div ref={ref} className="relative inline-block">
        <img src={imgUrl} alt="preview" />
        <BurnSign isDownloading={isDownloading} />
      </div>
    </div>
  );
});

export default ImgPreview;
