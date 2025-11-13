import { createContext, useContext, useState } from "react";

export const FilesContext = createContext();
export const FilesProvider = ({ children }) => {
  const [uploadedFile, setUploadedFile] = useState([]);
  const [filePreview, setFilePreview] = useState(false);
  return (
    <FilesContext.Provider
      value={{ uploadedFile, filePreview, setFilePreview, setUploadedFile }}
    >
      {children}
    </FilesContext.Provider>
  );
};

export const useFiles = () => useContext(FilesContext);
