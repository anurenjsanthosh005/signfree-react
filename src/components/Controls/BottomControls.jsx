import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFiles } from "../../context/FIlesContext";
import { addFile, getAllFiles } from "../../db/fileServices";
import {handleDownload} from "../";

function BottomControls() {
  // const [location, setLocation] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();
  const { uploadedFile } = useFiles();

  const handleFileUpload = async () => {
    console.log("clicked preview done button");

    const res = await addFile(uploadedFile);
    console.log("uploaded res :", res.message);

    // const data = await getAllFiles();
    // console.log("All files :", data);

    navigate("/main", { replace: true });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-black/70 backdrop-blur-md py-2 px-5 flex flex-col items-center gap-3 border-t border-white/10 sm:mb-0 ${
        location.pathname !== "/main" && "mb-[8vh]"
      }`}
    >
      <h1 className="text-txt text-center text-lg font-medium">file name</h1>

      <div className="flex flex-wrap justify-center gap-4 text-white font-medium">
        {location.pathname === "/preview" && (
          <>
            <button
              onClick={() => navigate("/", { replace: true })}
              className="bg-btn px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 sm:w-auto"
            >
              Change
            </button>
            <button
              onClick={handleFileUpload}
              className="bg-btn-neg px-5 py-2 rounded-md hover:bg-btn-neg-hover transition-all duration-300 sm:w-auto"
            >
              Done
            </button>
          </>
        )}
        {location.pathname === "/main" && (
          <>
            <button className="bg-btn  px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 sm:w-auto">
              <i className="fa-solid fa-pen-nib"></i>
            </button>
            <button className="bg-bg-yellow  px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 sm:w-auto">
              <i className="fa-solid fa-house-chimney"></i>
            </button>
            <button
              onClick={handleDownload}
              className="bg-btn-neg px-5 py-2 rounded-md hover:bg-btn-neg-hover transition-all duration-300 sm:w-auto"
            >
              Download
            </button>
          </>
        )}

        {/* {location.pathname === "/ads" && (
          <>
            <button className="bg-btn  px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 sm:w-auto">
              Edit
            </button>
          </>
        )} */}
      </div>
    </div>
  );
}

export default BottomControls;
