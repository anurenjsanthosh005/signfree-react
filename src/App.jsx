import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AdBanners from "./layouts/AdBanners";
import Preview from "./pages/Preview";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<AdBanners/>}>
        <Route path="/preview" element={<Preview/>}/>
      </Route>
    </Routes>
  );
}

export default App;
