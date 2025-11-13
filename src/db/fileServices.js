import { db } from "./fileDB";

export async function addFile(file, metadata = {}) {
  // Convert to ArrayBuffer first
  const fileBuffer = await file.arrayBuffer();

  // Then create a Blob explicitly
  const blob = new Blob([fileBuffer], { type: file.type });

  const id = await db.files.add({
    name: file.name,
    type: file.type,
    data: blob, // ✅ store blob here
    width: metadata.width || null,
    height: metadata.height || null,
    pageCount: metadata.pageCount || 1,
    dateAdded: new Date().toISOString(),
  });

  return { success: true, message: "File saved successfully!", fileId: id };
}

export async function getAllFiles() {
  return await db.files.toArray();
}

export async function deleteFile(fileId) {
  await db.files.delete(fileId);
}
