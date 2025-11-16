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
  const [keySign, setKeySign] = useState(null);

  const [signUrl, setSignUrl] = useState(null);
  const { setUploadedPreviewSign } = useFiles();

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click(); // opens file picker
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file && !keySign) return;

    console.log("Selected file:", file);
    setLoading(true); // ⬅️ START LOADING
    try {
      // Remove background using IMG.LY browser version
      let processedFile;
      if (keySign === "sign") {
        processedFile = await removeWhiteBackground(file);
      } else if (keySign === "image") {
        processedFile = file;
      }
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
      <div
        className={`relative ${
          loading && "hidden"
        }  md:w-[35vw] bg-nav text-txt px-6 py-3 rounded-2xl flex flex-col justify-center items-center text-center mx-auto my-auto shadow-lg gap-5`}
      >
        {/* Close Button - top right corner */}
        <button
          onClick={() => navigate(-1, { replace: true })}
          className={`absolute ${
           ( fontSignModal || imageSignModal) && "hidden"
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

        <div className="flex flex-col justify-start items-start gap-5">
          <h1 className="font-bold text-xl text-bg-yellow">
            Select overlay type
          </h1>
          <ul className="flex flex-col  justify-start items-start gap-2">
            <li>
              <span className="font-bold text-white">Aa -</span>
              <span className="pl-2">for adding text.</span>
            </li>
            <div className="flex items-center">
              <span className="font-bold text-white">
                <i className="fa-solid fa-images"></i> -
              </span>

              <span className="pl-2">for adding images.</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-white">
                <i className="fa-solid fa-signature"></i> -
              </span>

              <span className="pl-2">for adding Signature.</span>
            </div>{" "}
          </ul>
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
            onClick={() => {
              handleImageClick(), setKeySign("image");
            }}
            className="bg-btn text-txt px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 text-xl sm:text-base"
          >
            <i className="fa-solid fa-images"></i>
          </button>

          <button
            onClick={() => {
              handleImageClick(), setKeySign("sign");
            }}
            className="bg-btn text-txt px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 text-xl sm:text-base"
          >
            <i className="fa-solid fa-signature"></i>
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

      {fontSignModal && (
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
          keySign={keySign}
        />
      )}
    </>
  );
}

export default CreateSign;
