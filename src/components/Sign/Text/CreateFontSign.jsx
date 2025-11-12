import React, { useState } from "react";

function CreateFontSign() {
  const [font, setFont] = useState("font-sans");
  const [text, setText] = useState("");

  const fonts = [
    { name: "Sans", class: "font-sans" },
    { name: "Serif", class: "font-serif" },
    { name: "Mono", class: "font-mono" },
    { name: "Cursive", class: "italic" },
  ];

  return (
    <div className="relative w-[90vw] sm:w-[60vw] md:w-[40vw] bg-nav text-txt px-6 py-5 rounded-2xl flex flex-col justify-between items-center text-center mx-auto my-auto shadow-lg gap-5">
      {/* Close Button */}
      <button
        className="absolute -top-3 -right-3 text-xl font-bold bg-red-500 text-white 
        px-3 py-1 rounded-full shadow-md hover:scale-110 
        transition-transform duration-300 z-10"
      >
        X
      </button>

      {/* Signature typing area */}
      <div className="flex flex-col items-center w-full gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your signature..."
          className={`w-full text-2xl ${font} bg-bg text-black/70 rounded-xl text-center outline-none focus:border-white/70 transition-all duration-300`}
        />

        {/* Font collection */}
        <div className="max-h-40 w-full overflow-y-auto border-2 border-gray-300 rounded-md p-2 flex flex-col gap-2">
          {fonts.map((f, index) => (
            <div
              key={index}
              onClick={() => setFont(f.class)}
              className="py-2 px-3 cursor-pointer hover:bg-black/60 bg-blue-950 rounded font-bold"
            >
              <span className={`${f.class}`}>{f.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 font-bold w-full justify-end">
        <button className="bg-btn text-txt px-5 py-2 rounded-md hover:bg-btn-hover transition-all duration-300 text-lg sm:text-base">
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateFontSign;
