import React, { forwardRef } from "react";
import { useFiles } from "../../context/FIlesContext";

function ImgPreview({ doc, isEdit }, ref) {
  const { uploadedFile } = useFiles();
  const sign = "Anurenj";
  const isKey = true;

  // if no uploaded file, render nothing (avoids createObjectURL crash)
  if (!uploadedFile) return null;

  const imageUrl =
    uploadedFile instanceof File
      ? URL.createObjectURL(uploadedFile)
      : uploadedFile; // fallback if already a URL

  return (
    <div
      className={`flex-1 pb-5 ${
        isKey && "pb-32"
      } flex flex-col items-center justify-center relative`}
    >
      <div ref={ref} className="relative inline-block">
        <img src={imageUrl} alt="preview" />
        {/* <BurnSign sign={sign} isEdit={isEdit} /> */}
      </div>
    </div>
  );
}

export default forwardRef(ImgPreview);
