import React, { useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";

function BurnSign({ sign,isEdit }) {
  const textRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [fontSize, setFontSize] = useState(24);

  useEffect(() => {
    if (textRef.current) {
      const { offsetWidth, offsetHeight } = textRef.current;
      setSize({ width: offsetWidth + 20, height: offsetHeight + 10 });
    }
    // console.log("Image size from parent:", imgSize);
  }, [sign, fontSize]);

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Rnd
        size={size}
        position={position}
        onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
        onResizeStop={(e, direction, ref, delta, pos) => {
          const newHeight = ref.offsetHeight;
          const newFont = newHeight * 0.9;
          setFontSize(newFont);
          setSize({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
          });
          setPosition(pos);
        }}
        bounds="parent"
      >
        <div
          ref={textRef}
          className={`flex items-center justify-center w-full h-full ${isEdit && 'border border-dashed border-gray-400'}   bg-transparent select-none text-black font-signature`}
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          {sign}
        </div>
      </Rnd>
    </div>
  );
}

export default BurnSign;
