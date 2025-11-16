import React from "react";

function HowToUse() {
  const steps = [
    {
      step: "Step 1",
      description: "Upload the document you want to work with.",
      items: ["PDF", "JPEG", "PNG"],
    },
    {
      step: "Step 2",
      description: "Choose the overlay, and select the type you wish to apply.",
      items: [
        "Aa",
        <i className="fa-solid fa-images"></i>,
        <i className="fa-solid fa-signature"></i>,
      ],
    },
    {
      step: "Step 3",
      description: "Position and apply the overlay to your document.",
      items: [<i className="fa-solid fa-file-signature"></i>],
    },
    {
      step: "Step 4",
      description: "Download your updated file instantly.",
      items: [<i className="fa-solid fa-download"></i>],
    },
  ];

  return (
    <div className="w-full max-w-4xl mt-10 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-nav mb-6 text-center">
        How to Use
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col gap-4 h-[25vh] justify-between"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-1">{item.step}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
            <div className="flex-3">

            </div>
            {item.items && (
              <div className="flex flex-1 flex-wrap gap-2 text-2xl font-bold justify-center items-center border-dashed border p-3 rounded h-[50%]">
                {item.items.map((format, i) => (
                  <span
                    key={i}
                    className="px-1 py-1 text-sm bg-gray-100 border rounded-md text-gray-800"
                  >
                    {format}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowToUse;
