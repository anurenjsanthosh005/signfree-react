import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateFontSign from "./Text/CreateFontSign";
import CreateImageSign from "./Image/CreateImageSign";
import { useFiles } from "../../context/FIlesContext";
import { removeWhiteBackground } from "../../utils/fileHelpers";

function CreateSign() {
  const navigate = useNavigate();
  const [fontSignModal, setFontSignModal] = useState(false);
  const [imageSignModal, setImageSignModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [signUrl, setSignUrl] = useState(null);
  const { setUploadedPreviewSign } = useFiles();

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click(); // opens file picker
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    console.log("Selected file:", file);
    setLoading(true); // ⬅️ START LOADING
    try {
      // Remove background using IMG.LY browser version
      const processedFile = await removeWhiteBackground(file);
      console.log("Processed file:", processedFile);
      setUploadedPreviewSign(processedFile);
      const url = URL.createObjectURL(processedFile);
      setSignUrl(url);
      setImageSignModal(true);
    } catch (error) {
      console.error("Error processing sign:", error);
    } finally {
      setLoading(false); // ⬅️ END LOADING
    }
  };

  return (
    <>
      <div className={`relative ${loading && 'hidden'} w-[50vw] md:w-[25vw] bg-nav text-txt px-6 py-3 rounded-2xl flex flex-col justify-center items-center text-center mx-auto my-auto shadow-lg gap-5`}>
        {/* Close Button - top right corner */}
        <button
          onClick={() => navigate(-1, { replace: true })}
          className={`absolute ${
            fontSignModal || (imageSignModal && "hidden")
          } -top-3 -right-3 text-xl font-bold bg-red-500 text-white 
        px-3 py-1 rounded-full shadow-md hover:scale-110 
        transition-transform duration-300 z-10`}
        >
          X
        </button>

        {/* Signature area */}
        {/* <div className="group relative flex justify-end w-[50vw] md:w-[25vw] h-[10vh] rounded-xl border-2 bg-transparent overflow-hidden">
            <button
              className="
              absolute right-0 h-full px-5 text-xl font-bold text-white 
              bg-gradient-to-l from-black/90 to-transparent 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
              transition-opacity duration-300">
              Add
            </button>
            </div> */}

        <div>
          <h1 className="font-bold ">Select sign type</h1>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 font-bold">
          <button
            onClick={() => setFontSignModal(true)}
            className="bg-btn text-txt px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 text-xl sm:text-base"
          >
            Aa
          </button>

          <button
            onClick={handleImageClick}
            className="bg-btn text-txt px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 text-xl sm:text-base"
          >
            <i className="fa-solid fa-images"></i>
          </button>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>

      {loading && (
        <div className="relative inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white px-6 py-4 rounded-xl shadow-lg text-center">
            <div className="loader border-4 border-gray-300 border-t-blue-600 rounded-full w-10 h-10 animate-spin mx-auto"></div>
            <p className="mt-3 font-medium text-gray-700">
              Processing your signature…
            </p>
          </div>
        </div>
      )}

      {fontSignModal && !imageSignModal && (
        <CreateFontSign
          onClick={() => (
            setFontSignModal(false),
            console.log("close clicked font sign modal")
          )}
        />
      )}

      {imageSignModal && (
        <CreateImageSign
          onClick={() => (
            setImageSignModal(false),
            console.log("close clicked image sign modal")
          )}
          imgUrl={signUrl}
        />
      )}
    </>
  );
}

export default CreateSign;
