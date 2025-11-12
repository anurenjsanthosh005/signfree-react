import React, { forwardRef, useRef } from "react";
import BurnSign from "../Sign/BurnSign";

function ImgPreview({ doc, isEdit }, ref) {
  const sign = "Anurenj";
  const isKey = true;

  return (
    <div
      className={`flex-1 pb-5 ${
        isKey && "pb-32"
      } flex flex-col items-center justify-center relative`}
    >
      {/* ✅ Only capture the image + sign */}
      <div ref={ref} className="relative inline-block">
        <img src={doc} alt="preview" />
        <BurnSign sign={sign} isEdit={isEdit} />
      </div>
    </div>
  );
}

export default forwardRef(ImgPreview);
