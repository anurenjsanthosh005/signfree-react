import React, { useCallback, useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { useFiles } from "../../context/FIlesContext";
import { deleteSignature, getAllSignatures } from "../../db/signServices";

function BurnSign() {
  const { sign, setSign } = useFiles();
  console.log("sign data :", sign);

  useEffect(() => {
    const getSignDatas = async () => {
      const datas = await getAllSignatures();
      setSign(datas);
    };

    getSignDatas();
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {sign.map((s) => (
        <SignItem key={s.id} sign={s} setSign={setSign} />
      ))}
    </div>
  );
}

function SignItem({ sign, setSign }) {
  const textRef = useRef(null);

  const {uploadedFile } = useFiles();


  const isEdit = true;

  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [fontSize, setFontSize] = useState(sign.fontSize);

  // Measure text size
  useEffect(() => {
    if (textRef.current) {
      const w = textRef.current.offsetWidth;
      const h = textRef.current.offsetHeight;
      setSize({ width: w + 20, height: h + 10 });
    }
  }, [sign.text, sign.font]);

  useEffect(() => {
    console.log("moved or rezised the sign :",sign.id);

    const signMetaData = {
      'xPercent':position.x,
      'yPercent':position.y,
      'widthPercent':size.width,
      'heightPercent':size.height,
      'fonrotationtSize':fontSize,
    }

    console.log("uploaded file data :",uploadedFile);
    

  }, [position,size,fontSize,setPosition, setFontSize, setSize]);

  const handleSignDelete = useCallback(
    async (id) => {
      const data = await deleteSignature(id);
      const updated = await getAllSignatures();
      setSign(updated);
    },
    [setSign]
  );

  return (
    <Rnd
      size={size}
      position={position}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, pos) => {
        const newHeight = ref.offsetHeight;
        setFontSize(newHeight * 1);
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
        setPosition(pos);
      }}
      bounds="parent"
    >
      <div
        className={`relative flex flex-cols items-center justify-center w-full h-full ${
          isEdit && "border-2 border-dashed border-white"
        } bg-transparent select-none`}
      >
        <div className="absolute flex gap-1 text-xl -top-7 -right-2">
          <button>
            <i className="fa-solid fa-copy text-white"></i>
          </button>
          <button onClick={() => handleSignDelete(sign.id)}>
            <i className="fa-solid fa-trash text-white"></i>
          </button>
        </div>

        <div
          ref={textRef}
          className={`text-black ${
            sign.font === "italic" ? "italic" : sign.font
          }`}
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          {sign.data}
        </div>
      </div>
    </Rnd>
  );
}

export default BurnSign;
