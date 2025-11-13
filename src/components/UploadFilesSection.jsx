import React from "react";
import { useFiles } from "../context/FIlesContext";
import { useNavigate } from "react-router-dom";
import { addFile, getAllFiles } from "../db/fileServices";

function UploadFilesSection() {
  const navigate = useNavigate();
  const { setFilePreview, setUploadedFile } = useFiles();

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-bg-yellow rounded-lg flex flex-col items-center text-center space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-white">Add Files</h2>

      <label className="w-full p-2 rounded border border-[#FDF4E3] bg-[#FDF4E3] text-black text-left cursor-pointer">
        {/* {uploadedDoc ? uploadedDoc.name : "Select a file..."} */}
        Select a file...
        <input
          type="file"
          accept=".pdf, .jpeg, .jpg, .png"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setUploadedFile(file);
              navigate("/preview", { replace: true });
              setFilePreview(true);
            }
          }}
        />
      </label>

      <p className="text-white text-sm font-medium sm:text-base">
        Max file sizes: PDF 20 MB, Image 5 MB, DOC 10 MB
      </p>
    </div>
  );
}

export default UploadFilesSection;
