import Dexie from "dexie";

// Create the database
export const db = new Dexie("fileSignDB");

// Define tables and indexed fields
db.version(1).stores({
  files: "++id, name, type, dateAdded",
  signatures: "++id, fileId, type, page, dateAdded",
});
