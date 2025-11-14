import { createContext, useContext, useState } from "react";

export const FilesContext = createContext();
export const FilesProvider = ({ children }) => {
  const [uploadedPreviewFile, setUploadedPreviewFile] = useState([]);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [filePreview, setFilePreview] = useState(false);
  return (
    <FilesContext.Provider
      value={{
        uploadedPreviewFile,
        uploadedFile,
        filePreview,
        setFilePreview,
        setUploadedFile,
        setUploadedPreviewFile,
      }}
    >
      {children}
    </FilesContext.Provider>
  );
};

export const useFiles = () => useContext(FilesContext);
