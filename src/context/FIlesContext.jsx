import { createContext, useContext, useState, useMemo } from "react";

export const FilesContext = createContext();

export const FilesProvider = ({ children }) => {
  const [uploadedPreviewFile, setUploadedPreviewFile] = useState([]);
  const [uploadedFile, setUploadedFile] = useState([]);
  const [filePreview, setFilePreview] = useState(false);
  const [sign, setSign] = useState([]);
  const [uploadedPreviewSign, setUploadedPreviewSign] = useState(null);
  const [uploadedImageSign, setUploadedImageSign] = useState(null);

  const value = useMemo(
    () => ({
      uploadedPreviewFile,
      uploadedFile,
      filePreview,
      sign,
      uploadedPreviewSign,
      uploadedImageSign,
      setUploadedImageSign,
      setUploadedPreviewSign,
      setSign,
      setFilePreview,
      setUploadedFile,
      setUploadedPreviewFile,
    }),
    [
      uploadedPreviewFile,
      uploadedFile,
      filePreview,
      sign,
      uploadedPreviewSign, // ADD THIS
      uploadedImageSign, // ADD THIS
    ]
  );

  return (
    <FilesContext.Provider value={value}>{children}</FilesContext.Provider>
  );
};

export const useFiles = () => useContext(FilesContext);
