import React, { useEffect } from "react";
import ImgPreview from "../components/Img/ImgPreview";
import BottomControls from "../components/Controls/BottomControls";
import { useFiles } from "../context/FIlesContext";
import { useNavigate } from "react-router-dom";

function Preview() {
  const { uploadedFile } = useFiles();
  const navigate = useNavigate();

  useEffect(() => {
    if (uploadedFile.length === 0) {
      navigate("/", { replace: true });
    }
  }, [uploadedFile, navigate]);

  return (
    <div className="py-9 w-full h-screen md:w-[60vw] lg:w-[40vw] flex flex-col">
      <ImgPreview />
      <BottomControls />
    </div>
  );
}

export default Preview;
