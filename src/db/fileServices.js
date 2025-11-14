import { db } from "./fileDB";

// Helper: convert File → Blob
async function fileToBlob(file) {
  const buffer = await file.arrayBuffer();
  return new Blob([buffer], { type: file.type });
}

export async function addFile(file, metadata = {}) {
  try {
    const blob = await fileToBlob(file);

    const newFile = {
      name: file.name,
      type: file.type,
      data: blob,
      width: metadata.width ?? null,
      height: metadata.height ?? null,
      pageCount: metadata.pageCount ?? 1,
      dateAdded: new Date().toISOString(),
    };

    // ensures only one file exists
    const existing = await db.files.toCollection().first();

    if (existing) {
      await db.files.update(existing.id, newFile);
      return {
        success: true,
        message: "File updated successfully",
        file: { ...newFile, id: existing.id },
      };
    }

    const id = await db.files.add(newFile);
    return {
      success: true,
      message: "File added successfully",
      file: { ...newFile, id },
    };

  } catch (error) {
    console.error("addFile error:", error);
    return { success: false, message: "Failed to add file" };
  }
}

export async function getAllFiles() {
  try {
    return await db.files.toArray();
  } catch (error) {
    console.error("getAllFiles error:", error);
    return [];
  }
}

export async function deleteFile(fileId) {
  try {
    await db.files.delete(fileId);
    return { success: true, message: "File deleted" };
  } catch (error) {
    console.error("deleteFile error:", error);
    return { success: false, message: "Failed to delete file" };
  }
}

export async function crearFilesDb() {
  try {
    await db.files.clear();
    return { success: true, message: "Files DB cleared" };
  } catch (error) {
    console.error("clearFilesDb error:", error);
    return { success: false, message: "Failed to clear DB" };
  }
}
