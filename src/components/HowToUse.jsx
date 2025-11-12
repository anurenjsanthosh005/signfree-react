import React from "react";

function HowToUse() {
  return (
    <section className="bg-bg-secondary  w-full px-9 py-5 flex flex-col gap-9 shadow-2xl pb-9">
      <h1 className="text-logo font-bold text-[clamp(2rem,3vw,5rem)] text-center md:text-start">
        How to use <span className="text-white">?</span>
      </h1>
      <div className="bg-nav  rounded px-5">
        <div className="flex items-center h-[20vh] w-full">
          <div className="w-[80%] pr-5 pl-5 flex flex-col gap-2">
            <h3 className=" text-txt font-bold text-[clamp(1rem,2vw,3rem)]">
              Upload your files
            </h3>
            <span className="text-black">
              Currently, only JPEG, PNG, and PDF file formats are supported.
            </span>
          </div>
          <div className="flex justify-center items-center w-[20%] ">
            <i className="fa-regular fa-file text-7xl text-white    "></i>
          </div>
        </div>
      </div>
      <div className="bg-nav  rounded px-5">
        <div className="flex items-center h-[20vh] w-full">
          <div className="flex justify-center items-center w-[20%] ">
            <i className="fa-solid text-7xl fa-pen-nib text-white"></i>
          </div>
          <div className="w-[80%] pr-5 pl-5 flex flex-col gap-2">
            <h3 className=" text-txt font-bold text-[clamp(1rem,2vw,3rem)]">
              Upload your Signature
            </h3>
            <span className="text-black">
              It can be either typed text or an image of your signature on a
              white background.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-nav  rounded px-5">
        <div className="flex items-center h-[20vh] w-full">
          <div className="w-[80%] pr-5 pl-5 flex flex-col gap-2">
            <h3 className=" text-txt font-bold text-[clamp(1rem,2vw,3rem)]">
              Add your Signature to the file
            </h3>
            <span className="text-black">
              Position and resize your signature exactly where and how you want
              it.
            </span>
          </div>
          <div className="flex justify-center items-center w-[20%] ">
            <i className="fa-solid fa-clipboard-list text-7xl text-white"></i>
          </div>
        </div>
      </div>
      <div className="bg-nav  rounded px-5">
        <div className="flex items-center h-[20vh] w-full">
          <div className="flex justify-center items-center w-[20%] ">
            <i className="fa-solid fa-download text-7xl text-white"></i>
          </div>
          <div className="w-[80%] pr-5 pl-5 flex flex-col gap-2">
            <h3 className=" text-txt font-bold text-[clamp(1rem,2vw,3rem)]">
              Download and enjoy your life :)
            </h3>
            <span className="text-black">Download your signed document instantly — no waiting, no hassle.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToUse;
