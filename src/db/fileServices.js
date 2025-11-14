import { data } from "react-router-dom";
import { db } from "./fileDB";

export async function addFile(file, metadata = {}) {
  const fileBuffer = await file.arrayBuffer();
  const blob = new Blob([fileBuffer], { type: file.type });

  const newFile = {
    name: file.name,
    type: file.type,
    data: blob,
    width: metadata.width || null,
    height: metadata.height || null,
    pageCount: metadata.pageCount || 1,
    dateAdded: new Date().toISOString(),
  };

  const id = await db.files.add(newFile);

  return {
    success: true,
    message: "File saved successfully!",
    file: { ...newFile, id }, // ✅ return full file object
  };
}


export async function getAllFiles() {
  return await db.files.toArray();
}

export async function deleteFile(fileId) {
  await db.files.delete(fileId);
}
