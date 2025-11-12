import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Preview from "./components/Preview";
import MainTasks from "./pages/MainTasks";
import AdBanners from "./components/Ad/AdBanners";
import ShowAds from "./pages/ShowAds";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<MainTasks />} />
      <Route
        path="/preview"
        element={
          <AdBanners>
            <Preview />
          </AdBanners>
        }
      />
      <Route path="/ads" element={<ShowAds />} />
    </Routes>
  );
}

export default App;
