import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FilesProvider } from "./context/FIlesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FilesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilesProvider>
  </StrictMode>
);
