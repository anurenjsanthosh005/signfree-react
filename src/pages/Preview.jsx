import React, { useEffect, useState } from "react";
import ImgPreview from "../components/Img/ImgPreview";
import BottomControls from "../components/Controls/BottomControls";
import { useFiles } from "../context/FIlesContext";
import { useNavigate } from "react-router-dom";

function Preview() {
  const { uploadedPreviewFile } = useFiles();
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    // If no file exists (refresh or direct access), redirect
    if (!(uploadedPreviewFile instanceof File)) {
      navigate("/", { replace: true });
      return;
    }

    // Safe: now create preview URL
    const url = URL.createObjectURL(uploadedPreviewFile);
    setImgUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [uploadedPreviewFile, navigate]);

  if (!(uploadedPreviewFile instanceof File)) {
    return null; // avoid any render before redirect
  }

  return (
    <div className="py-9 w-full h-screen md:w-[60vw] lg:w-[40vw] flex flex-col">
      {imgUrl && <ImgPreview imgUrl={imgUrl} />}
      <BottomControls />
    </div>
  );
}

export default Preview;
