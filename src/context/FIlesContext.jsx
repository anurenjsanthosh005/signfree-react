import { createContext, useContext, useState, useMemo } from "react";

export const FilesContext = createContext();

export const FilesProvider = ({ children }) => {
  const [uploadedPreviewFile, setUploadedPreviewFile] = useState([]);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [filePreview, setFilePreview] = useState(false);
  const [sign, setSign] = useState([]);

  const value = useMemo(
    () => ({
      uploadedPreviewFile,
      uploadedFile,
      filePreview,
      sign,
      setSign,
      setFilePreview,
      setUploadedFile,
      setUploadedPreviewFile,
    }),
    [uploadedPreviewFile, uploadedFile, filePreview, sign] // only changes if these change
  );

  return <FilesContext.Provider value={value}>{children}</FilesContext.Provider>;
};

export const useFiles = () => useContext(FilesContext);
