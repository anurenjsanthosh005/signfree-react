import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFiles } from "../../context/FIlesContext";
import { addFile } from "../../db/fileServices";
import html2canvas from "html2canvas-pro";

function BottomControls({ imgRef }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { uploadedPreviewFile, setHomeClick, setFilePreview, setUploadedFile } =
    useFiles();

  const baseBtn =
    "px-5 py-2 rounded-md transition-all duration-300 sm:w-auto font-medium";

  const handleFileUpload = async () => {
    // console.log("clicked preview done button");
    const res = await addFile(uploadedPreviewFile);
    // console.log("uploaded res:", res.file);

    setUploadedFile(res.file);
    navigate("/main", { replace: true });
    setFilePreview(false);
  };

  const handleDownload = async () => {
    console.log("clicked download!");
    // if (!imgRef?.current) return;

    // const canvas = await html2canvas(imgRef.current, { scale: 2 });
    // const imgData = canvas.toDataURL("image/png");
    // const link = document.createElement("a");
    // link.href = imgData;
    // link.download = "signed.png";
    // link.click();
    // console.log("download completed");
  };

  const renderButtons = () => {
    if (pathname === "/preview")
      return (
        <>
          <button
            onClick={() => {
              navigate("/", { replace: true }), setFilePreview(false);
            }}
            className={`bg-btn hover:bg-btn-hover ${baseBtn}`}
          >
            Change
          </button>
          <button
            onClick={handleFileUpload}
            className={`bg-btn-neg hover:bg-btn-neg-hover ${baseBtn}`}
          >
            Done
          </button>
        </>
      );

    if (pathname === "/main")
      return (
        <>
          <button className={`bg-btn hover:bg-btn-hover ${baseBtn}`}>
            <i className="fa-solid fa-pen-nib"></i>
          </button>
          <button
            onClick={() => {
              navigate("/ads", { state: { showHomeAlert: true } });
            }}
            className={`bg-bg-yellow hover:bg-btn-hover ${baseBtn}`}
          >
            <i className="fa-solid fa-house-chimney"></i>
          </button>
          <button
            onClick={handleDownload}
            className={`bg-btn-neg hover:bg-btn-neg-hover ${baseBtn}`}
          >
            Download
          </button>
        </>
      );
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-black/70 backdrop-blur-md py-2 px-5 flex flex-col items-center gap-3 border-t border-white/10 }`}
    >
      <h1 className="text-txt text-center text-lg font-medium">file name</h1>
      <div className="flex flex-wrap justify-center gap-4 text-white">
        {renderButtons()}
      </div>
    </div>
  );
}

export default BottomControls;
