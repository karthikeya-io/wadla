import React from "react";
import BannerCarousel from "../components/BannerCarousel";
import ResponsiveAppBar from "../components/NavBar";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";

const HomePage = () => {
  return (
    <div className="body">
      <ResponsiveAppBar />
      <Page1 />
      <Page2 />
    </div>
  );
};

export default HomePage;
