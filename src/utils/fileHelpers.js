import { removeBackground } from "@imgly/background-removal";

export const removeWhiteBackground = async (file) => {
  try {
    // This automatically detects subject and removes background
    const blob = await removeBackground(file);

    // Convert Blob → File (so you can save it later)
    const processedFile = new File([blob], "signature.png", {
      type: "image/png",
    });

    return processedFile;
  } catch (err) {
    console.error("Background removal error:", err);
    return file; // fallback
  }
};