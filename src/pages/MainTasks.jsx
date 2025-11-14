import React, { useEffect, useRef, useState } from "react";
import ImgPreview from "../components/Img/ImgPreview";
import BottomControls from "../components/Controls/BottomControls";
import { useFiles } from "../context/FIlesContext";
import { getAllFiles } from "../db/fileServices";
import { useNavigate } from "react-router-dom";

function MainTasks() {
  
  const imageRef = useRef(null);
  const [imgUrl, setImgUrl] = useState(null);
  const navigate = useNavigate();

  const { uploadedFile, setUploadedFile } = useFiles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const res = await getAllFiles();

      if (res.length > 0) {
        setUploadedFile(res[0]);
      }

      setLoading(false); // 👈 must be after DB loading
    };

    loadData();
  }, [setUploadedFile]);

  useEffect(() => {
    if (loading) return;

    if (!uploadedFile || !uploadedFile.data) {
      navigate("/");
      return;
    }

    if (uploadedFile.data instanceof Blob) {
      const url = URL.createObjectURL(uploadedFile.data);
      setImgUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [uploadedFile, loading]);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden items-center">
      <section className="mt-[20vh] w-full md:w-[70vw]">
        <ImgPreview ref={imageRef} imgUrl={imgUrl} />
      </section>

      <BottomControls imgRef={imageRef} />
    </div>
  );
}

export default MainTasks;
