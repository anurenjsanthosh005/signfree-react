import React from "react";

function ImgPreview({ doc }) {
  const isEdit = true;
  return (
    <div
      className={`flex-1  px-3 sm:px-5 lg:px-9 pt-4 pb-5 ${
        !isEdit && "pb-32"
      }  flex items-center justify-center`}
    >
      <img
        src={doc}
        alt="preview"
        className="max-w-full h-auto max-h-[90vh] object-contain rounded-lg"
      />
    </div>
  );
}

export default ImgPreview;
