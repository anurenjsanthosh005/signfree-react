// import { db } from "./fileDB";

// export async function addSignature(sig) {
//   return await db.signatures.add({
//     fileId: sig.fileId,
//     type: sig.type,
//     page: sig.page || 1,
//     x: sig.x,
//     y: sig.y,
//     width: sig.width,
//     height: sig.height,
//     data: sig.data, // base64 or blob
//     dateAdded: new Date().toISOString(),
//   });
// }

// export async function getSignaturesForFile(fileId) {
//   return await db.signatures.where("fileId").equals(fileId).toArray();
// }

// export async function deleteSignatures(fileId) {
//   await db.signatures.where("fileId").equals(fileId).delete();
// }
