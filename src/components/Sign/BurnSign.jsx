import React, { useCallback, useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { useFiles } from "../../context/FIlesContext";
import {
  addSignature,
  deleteSignature,
  getAllSignatures,
  getSignatureWithId,
  updateSignature,
} from "../../db/signServices";

function BurnSign({ isDownloading }) {
  const { sign, setSign } = useFiles();

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
        <SignItem
          key={s.id}
          sign={s}
          setSign={setSign}
          isDownloading={isDownloading}
        />
      ))}
    </div>
  );
}

function SignItem({ sign, setSign, isDownloading }) {
  console.log("sign data :", sign);

  const textRef = useRef(null);
  const { uploadedFile } = useFiles();

  const isEdit = true;

  // ✅ Load saved position & size on mount
  const [position, setPosition] = useState({
    x: sign.xPercent ?? 100,
    y: sign.yPercent ?? 100,
  });

  const [size, setSize] = useState({
    width: sign.widthPercent ?? 120,
    height: sign.heightPercent ?? 40,
  });

  const [fontSize, setFontSize] = useState(sign.fontSize ?? 20);
  const [imgUrl, setImgUrl] = useState(null);

  // Measure text only when no saved size exists
  useEffect(() => {
    if (sign.widthPercent && sign.heightPercent) return;

    if (textRef.current) {
      const w = textRef.current.offsetWidth;
      const h = textRef.current.offsetHeight;
      setSize({ width: w + 20, height: h + 10 });
    }
  }, [sign.data, sign.font]);

  useEffect(() => {
    if (sign.type === "image" && sign.data instanceof Blob) {
      const url = URL.createObjectURL(sign.data);
      setImgUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [sign]);

  // Save updated position/size/fontSize to DB
  useEffect(() => {
    if (!uploadedFile) return;

    const updateSign = async () => {
      await updateSignature(sign.id, {
        xPercent: position.x,
        yPercent: position.y,
        widthPercent: size.width,
        heightPercent: size.height,
        fontSize,
        fileId: uploadedFile.id,
        pageWidth: uploadedFile.width,
        pageHeight: uploadedFile.height,
      });
    };

    updateSign();
  }, [position, size, fontSize]);

  const updatePage = async () => {
    try {
      const updated = await getAllSignatures();
      setSign(updated);
    } catch (error) {
      console.error("Failed to refresh signatures:", error);
    }
  };

  const handleSignDelete = useCallback(
    async (id) => {
      try {
        await deleteSignature(id);
        await updatePage();
      } catch (error) {
        console.error("Failed to delete signature:", error);
      }
    },
    [setSign]
  );

  const handleDuplicate = async (id) => {
    try {
      const { success, sign } = await getSignatureWithId(id);

      if (!success || !sign) {
        console.error("Duplicate failed: original sign not found");
        return;
      }

      const duplicated = {
        fileId: sign.fileId,
        type: sign.type,
        data: sign.data, // keep same sign content
        font: sign.font,

        pageNumber: sign.pageNumber,
        pageWidth: sign.pageWidth,
        pageHeight: sign.pageHeight,

        xPercent: (sign.xPercent ?? 0) + 20, // shift so the clone isn't overlapped
        yPercent: (sign.yPercent ?? 0) + 20,

        widthPercent: sign.widthPercent,
        heightPercent: sign.heightPercent,

        fontSize: sign.fontSize,
        rotation: sign.rotation,
        scale: sign.scale,
      };

      const res = await addSignature(duplicated);

      if (!res.success) {
        console.error("Duplicate failed while saving:", res.message);
        return;
      }

      await updatePage();

      console.log("Duplicated sign:", res.sign);
    } catch (error) {
      console.error("Error while duplicating signature:", error);
    }
  };

  return (
    <Rnd
      size={size}
      position={position}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, pos) => {
        const newHeight = ref.offsetHeight;
        setFontSize(newHeight); // scale font with height
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
          isDownloading && "border-2 border-dashed border-bg-yellow"
        } bg-transparent select-none`}
      >
        {isDownloading && (
          <div className="absolute flex gap-1 text-xl -top-7 -right-2">
            <button onClick={() => handleDuplicate(sign.id)}>
              <i className="fa-solid fa-copy text-bg-yellow"></i>
            </button>
            <button onClick={() => handleSignDelete(sign.id)}>
              <i className="fa-solid fa-trash text-bg-yellow"></i>
            </button>
          </div>
        )}

        {sign.type === "text" && (
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
        )}

        {sign.type === "image" && imgUrl && (
          <img
            src={imgUrl}
            alt="signature"
            className="w-full h-full object-contain pointer-events-none"
          />
        )}
      </div>
    </Rnd>
  );
}

export default BurnSign;
