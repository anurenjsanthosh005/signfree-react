import React from "react";

function UploadFilesSection() {
  return (
    <section className="min-h-[25vh]  w-full flex justify-center items-center">
      <div className=" max-w-2xl flex flex-col justify-center items-center border-2 border-dashed text-txt p-5 animate-pulse-slow shadow-2xl">
        <h1 className="text-[clamp(1.5rem,4vw,3.5rem)] font-bold flex items-center gap-3 cursor-pointer ">
          Upload files here.
          <i className="fa-regular fa-file text-[clamp(1.5rem,4vw,3.5rem)] text-btn"></i>
        </h1>
        <h3 className=" text-[clamp(0.875rem,2vw,1.5rem)] mt-2 text-center md:text-left">
          Supported formats: jpeg, png, pdf.
        </h3>
      </div>
    </section>
  );
}

export default UploadFilesSection;
