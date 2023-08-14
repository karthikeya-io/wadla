import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { height } from "@mui/system";
import "../App.css";
import { Box } from "@mui/material";

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
        width: "100%",
        padding: "25px",
        backgroundColor: "#242B2E",
        borderRadius: "0 0 0 25px",
      }}
    >
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <Box
            key={index}
            sx={{
              height: {
                xs: "300px",
                sm: "350px",
                md: "500px",
                lg: "500px",
              },
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "25px",
                margin: "auto",
              }}
              src={banner}
              alt={`Banner ${index}`}
            />
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
