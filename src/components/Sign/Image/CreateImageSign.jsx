import React, { useEffect, useState } from "react";
import PdfImg from "../../../assets/anurenj.jpg";

import ImgPreview from "../../Img/ImgPreview";
import BottomControls from "../../Controls/BottomControls";
import { useFiles } from "../../../context/FIlesContext";
import { useNavigate } from "react-router-dom";
import TransparentBg from "../../../assets/transparentbg.jpg";
import { addSignature, getAllSignatures } from "../../../db/signServices";

function CreateImageSign({ onClick, imgUrl, keySign }) {
  const { uploadedPreviewSign, setUploadedImageSign, setSign } = useFiles();

  console.log("key is :",keySign);
  

  const navigate = useNavigate();
  // const [imgUrl, setImgUrl] = useState(null);

  const getImageDimensions = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
    });
  };

  const setupSignData = async () => {
    console.log("image sign save clicked ");

    // MUST be File → NOT blob URL
    const file = uploadedPreviewSign;
    if (!file) return;

    const { width, height } = await getImageDimensions(file);

    // 2. Save to IndexedDB
    await addSignature({
      type: "image",
      data: file, // <-- store real PNG file
      width,
      height,
      pageNumber: 1,
      xPercent: 0,
      yPercent: 0,
      scale: 1,
      rotation: 0,
    });

    // 3. Reload signatures
    const savedSigns = await getAllSignatures();
    setSign(savedSigns);

    navigate("/main");
  };

  return (
    <div className="absolute w-[90vw] sm:w-[60vw] md:w-[40vw] bg-nav text-txt px-6 py-5 rounded-2xl flex flex-col justify-between items-center text-center mx-auto my-auto shadow-lg gap-5">
      <button
        onClick={onClick}
        className="absolute -top-3 -right-3 text-xl font-bold bg-red-500 text-white 
        px-3 py-1 rounded-full shadow-md hover:scale-110 
        transition-transform duration-300 z-10"
      >
        X
      </button>
      <div className="relative w-full flex justify-center border-2 border-black rounded ">
        {keySign === "sign" && (
          <img
            src={TransparentBg}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <img
          src={imgUrl}
          alt="transparent sign"
          className="max-w-full max-h-full object-contain relative z-10"
        />
      </div>
      <div>
        <button
          onClick={() => setupSignData()}
          className={`bg-btn hover:bg-btn-hover px-5 py-2 rounded-md transition-all duration-300 sm:w-auto font-medium text-white`}
        >
          Done
        </button>
      </div>
      {/* <BottomControls /> */}
    </div>
  );
}

export default CreateImageSign;
