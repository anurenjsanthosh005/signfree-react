import React from "react";
import { useFiles } from "../context/FIlesContext";
import { useNavigate } from "react-router-dom";
import { addFile, getAllFiles } from "../db/fileServices";

function UploadFilesSection() {
  const navigate = useNavigate();
  const { setFilePreview, setUploadedPreviewFile } = useFiles();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileSizeMB = file.size / (1024 * 1024); // convert to MB
    const fileType = file.type;

    // PDF → max 20MB
    if (fileType === "application/pdf" && fileSizeMB > 20) {
      alert("PDF max size is 20 MB");
      return;
    }

    // Images → max 5MB
    if (
      ["image/jpeg", "image/png", "image/jpg"].includes(fileType) &&
      fileSizeMB > 5
    ) {
      alert("Image max size is 5 MB");
      return;
    }

    // DOC/DOCX → max 10MB (optional)
    // if (
    //   ["application/msword",
    //    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    //   ].includes(fileType) &&
    //   fileSizeMB > 10
    // ) {
    //   alert("DOC max size is 10 MB");
    //   return;
    // }

    // If valid → store & navigate
    setUploadedPreviewFile(file);
    setFilePreview(true);
    navigate("/preview", { replace: true });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-bg-yellow rounded-lg flex flex-col items-center text-center space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-white">Add Files</h2>

      <label className="w-full p-2 rounded border border-[#FDF4E3] bg-[#FDF4E3] text-black text-left cursor-pointer">
        Select a file...
        <input
          type="file"
          accept=".pdf, .jpeg, .jpg, .png"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      <p className="text-white text-sm font-medium sm:text-base">
        <span className="font-bold">Max file sizes:</span> PDF 20 MB, Image 5 MB
      </p>
    </div>
  );
}

export default UploadFilesSection;
