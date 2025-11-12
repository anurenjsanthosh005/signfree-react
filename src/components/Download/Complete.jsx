import React from "react";

function Complete() {
  return (
    <div className="relative gap-3 w-[90vw] sm:w-[60vw] md:w-[40vw] bg-nav border text-white font-bold p-3 rounded-2xl flex flex-col justify-center items-center text-center mx-auto my-auto shadow-lg">
      <h1>Completed !</h1>
      <div>
        <i className="fa-solid fa-house-chimney"></i>
      </div>
      <h1 className="w-full flex justify-end gap-2 text-sm">Redirecting in <span> 5</span></h1>
    </div>
  );
}

export default Complete;
