import { db } from "./fileDB";

export async function addSignature(signature) {
  try {
    // Normalize image to Blob if needed
    let signData = signature.data;

    if (signature.type === "image" && signature.data instanceof File) {
      const buffer = await signature.data.arrayBuffer();
      signData = new Blob([buffer], { type: signature.data.type });
    }

    const newSign = {
      fileId: signature.fileId,
      type: signature.type,
      data: signData,
      font: signature.font,

      pageNumber: signature.pageNumber ?? 1,
      pageWidth: signature.pageWidth ?? null,
      pageHeight: signature.pageHeight ?? null,

      xPercent: signature.xPercent ?? 0,
      yPercent: signature.yPercent ?? 0,
      widthPercent: signature.widthPercent ?? null,
      heightPercent: signature.heightPercent ?? null,
      
      fontSize: signature.fontSize ?? 24,

      rotation: signature.rotation ?? 0,
      scale: signature.scale ?? 1,

      dateAdded: new Date().toISOString(),
    };

    const id = await db.signatures.add(newSign);

    return {
      success: true,
      message: "Signature saved successfully!",
      sign: { ...newSign, id },
    };
  } catch (error) {
    console.error("Error saving signature:", error);
    return { success: false, message: "Failed to save signature" };
  }
}

export async function getAllSignatures() {
  return await db.signatures.toArray();
}

export async function updateSignature(id, updates) {
  try {
    await db.signatures.update(id, updates);
    return { success: true };
  } catch (error) {
    console.error("Update signature error:", error);
    return { success: false, message: "Failed to update signature" };
  }
}


export async function getSignatureWithId(id) {
  try {
    const sign = await db.signatures.get(id);
    return { success: true, sign };
  } catch (error) {
    console.error("Get signature error:", error);
    return { success: false, message: "Failed to get signature" };
  }
}

export async function deleteSignature(id) {
  try {
    await db.signatures.delete(id);
    return { success: true, message: "Signature deleted" };
  } catch (error) {
    console.error("Delete signature error:", error);
    return { success: false, message: "Failed to delete signature" };
  }
}

export async function clearSignatureDb() {
  try {
    await db.signatures.clear();
    return { success: true, message: "All signatures cleared" };
  } catch (error) {
    console.error("Clear signatures error:", error);
    return { success: false, message: "Failed to clear signatures" };
  }
}

