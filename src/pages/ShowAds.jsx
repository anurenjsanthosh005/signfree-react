import React from "react";
import AdBanners from "../components/Ad/AdBanners";
import MainAlert from "../components/Alerts/MainAlert";
import CreateSign from "../components/Sign/CreateSign";
import CreateFontSign from "../components/Sign/Text/CreateFontSign";
import CreateImageSign from "../components/Sign/Image/CreateImageSign";
import ImageSignAlert from "../components/Alerts/ImageSignAlert";
import Download from "../components/Download/Download";
import Complete from "../components/Download/Complete";
import { useFiles } from "../context/FIlesContext";
import { useLocation } from "react-router-dom";

function ShowAds() {
  // const { homeClick, setHomeClick } = useFiles();

  const location = useLocation();
  const showAlert = location.state?.showHomeAlert;
  const showCreateSign = location.state?.createSign;

  return (
    <AdBanners>
      <div className="flex flex-col items-center justify-center">
        {showAlert && <MainAlert />}
        {/* <ImageSignAlert/> */}
        {/* <Download/> */}
        {/* <Complete/> */}
        {showCreateSign && <CreateSign />}
        {/* <CreateImageSign/> */}
        {/* <CreateFontSign/> */}
      </div>
    </AdBanners>
  );
}

export default ShowAds;
