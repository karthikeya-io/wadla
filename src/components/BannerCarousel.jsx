import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { height } from "@mui/system";
import "../App.css";

const BannerCarousel = ({ banners }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      style={{
        height: "auto",
        maxWidth: "980px",
        width: "100%",
        position: "relative",
        padding: "25px",
        backgroundColor: "#242B2E",
        borderRadius: "0 0 0 25px",
      }}
    >
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img
              style={{
                height: "500px",
                width: "100%",
                borderRadius: "25px",
                margin: "auto",
              }}
              src={banner}
              alt={`Banner ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
