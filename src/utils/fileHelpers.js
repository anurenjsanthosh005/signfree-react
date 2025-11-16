export const removeWhiteBackground = (file) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Loop through pixels → remove white background
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];  

        // Threshold → adjust if needed
        if (r > 240 && g > 240 && b > 240) {
          data[i + 3] = 0; // make transparent
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Convert to PNG file
      canvas.toBlob((blob) => {
        const transparentPng = new File([blob], "signature.png", {
          type: "image/png",
        });
        resolve(transparentPng);
      }, "image/png");
    };
  });
};
