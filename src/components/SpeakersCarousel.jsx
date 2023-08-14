import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { API_URL } from "../constants";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";

const SpeakersCarousel = () => {
  const [speakers, setSpeakers] = useState([]);
  const [academiaSpeakers, setAcademiaSpeakers] = useState([]);
  const [industrySpeakers, setIndustrySpeakers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/speakers/6473a8d750e038bfe765ab70`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const academiaData = data.speakers.filter(
          (item) => item.workingField === "Academia"
        );
        const industryData = data.speakers.filter(
          (item) => item.workingField === "Industry"
        );
        setSpeakers(data.speakers);
        setAcademiaSpeakers(academiaData);
        setIndustrySpeakers(industryData);
        setLoading(false);
      });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // create a copy of settings
  const academiaSettings = {
    ...settings,
    infinite: academiaSpeakers.length > 4 ? true : false,
  };
  const industrySettings = {
    ...settings,
    infinite: industrySpeakers.length > 4 ? true : false,
  };

  return (
    <div
      style={{
        padding: "3.5%",
      }}
    >
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Speakers
      </h2>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Academic Experts
      </h3>
      <Box
        sx={{
          padding: {
            xs: "15px",
          },
        }}
      >
        {loading ? (
          <LinearProgress color="secondary" />
        ) : (
          <Slider {...academiaSettings}>
            {academiaSpeakers.map((speaker, index) => (
              <div
                key={index}
                style={{
                  color: "white",
                }}
              >
                <div id="">
                  {" "}
                  <img
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "50%",
                      margin: "auto",
                    }}
                    src={speaker.profilePicPublicUrl}
                    alt={speaker.name}
                  />
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <a
                      href={speaker.websiteLink}
                      style={{
                        textDecoration: "none",
                      }}
                      target="_blank"
                    >
                      <h4
                        style={{
                          color: "#f9adc0",
                        }}
                      >
                        {speaker.name}
                      </h4>
                    </a>
                    {speaker.designation != "undefined"
                      ? `${speaker.designation}`
                      : ""}{" "}
                    <br />
                    {speaker.company != "undefined"
                      ? ` (${speaker.company})`
                      : ""}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </Box>
      <br />
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Industry Experts
      </h3>
      <Box
        sx={{
          padding: {
            xs: "15px",
          },
        }}
      >
        {loading ? (
          <LinearProgress color="secondary" />
        ) : (
          <Slider {...industrySettings}>
            {industrySpeakers.map((speaker, index) => (
              <div
                key={index}
                style={{
                  color: "white",
                }}
              >
                <div id="">
                  {" "}
                  <img
                    style={{
                      height: "200px",
                      width: "200px",
                      borderRadius: "50%",
                      margin: "auto",
                    }}
                    src={speaker.profilePicPublicUrl}
                    alt={speaker.name}
                  />
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <a
                      href={speaker.websiteLink}
                      style={{
                        textDecoration: "none",
                      }}
                      target="_blank"
                    >
                      <h4
                        style={{
                          color: "#f9adc0",
                        }}
                      >
                        {speaker.name}
                      </h4>
                    </a>
                    {speaker.designation != "undefined"
                      ? `${speaker.designation}`
                      : ""}{" "}
                    <br />
                    {speaker.company != "undefined"
                      ? ` (${speaker.company})`
                      : ""}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </Box>
      <div>{/* <button className="btn btn-primary">View All</button> */}</div>
    </div>
  );
};

export default SpeakersCarousel;
