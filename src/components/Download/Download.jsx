import React from "react";

function Download() {
  return (
    <div className="relative w-[90vw] sm:w-[60vw] md:w-[40vw] bg-nav border text-white font-bold p-6 rounded-2xl flex flex-col justify-center items-center text-center mx-auto my-auto shadow-lg">
      <div className="absolute -top-9 text-2xl">
        <h1>5</h1>
        {/*logo here for loading...*/}
      </div>
      <h1>Downloading...</h1>
    </div>
  );
}

export default Download;
