export const handleDownload = async () => {
    setIsEdit(false);
    await new Promise(requestAnimationFrame); //waits for react to rerender

    console.log("button clicked");
    const canvas = await html2canvas(imageRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "signed.png";
    link.click();
    setIsEdit(true);
  };
