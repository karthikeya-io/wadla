import React from "react";
import BannerCarousel from "./BannerCarousel";
import { Box, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import defenceImg from "../assets/defence.webp";
import graphsImg from "../assets/graphs.webp";
import rlImg from "../assets/rl.webp";
import banner1 from "../assets/banner1.webp";
import logo from "../assets/WADLA-logo.webp";

const Page1 = () => {
  const banners = [banner1, graphsImg, defenceImg, rlImg];
  const caption =
    "Embrace the AI Revolution with World-Leading Experts at WADLA 3.0";

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        color: "#FFFFFF",
        width: "100%",
        backgroundColor: "#242B2E",
        borderRadius: "0 0 25px 25px",
      }}
    >
      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
          width: "100%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "100%",
            margin: "auto",
            padding: "2.5%",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          3rd International Research Workshop on Advances in Deep Learning and
          Applications
        </Typography>
      </Box>
      <Box
        sx={{
          width: {
            xs: "86%",
            sm: "95%",
            md: "55%",
            lg: "65%",
          },
        }}
      >
        <BannerCarousel banners={banners} />
      </Box>
      <Box
        sx={{
          width: {
            xs: "95%",
            sm: "95%",
            md: "40%",
            lg: "30%",
          },
          margin: "auto",
          padding: "2.5%",
        }}
      >
        <div
          style={{
            opacity: 0.3,
            // center the image
            zIndex: -10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt="WADLA Logo"
            style={{
              objectFit: "contain",
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            transition: "all 0.5s ease",
            color: "#FFFFFF",
            borderRadius: "0 0 25px 0",
            backgroundColor: "#242B2E",
          }}
        >
          <h2
            style={{
              margin: "0px",
              fontSize: "2.0rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {caption}
          </h2>

          <div>
            <h3
              style={{
                margin: "0px",
                padding: "5px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              From:{" "}
              <span
                style={{
                  color: "#f0e68c",
                  opacity: "0.8",
                  fontSize: "1.3rem",
                }}
              >
                11th December, 2023
              </span>
            </h3>
            <h3
              style={{
                margin: "0px",
                padding: "5px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              To:{" "}
              <span
                style={{
                  // color: "#FFD700",
                  color: "#f0e68c",
                  opacity: "0.8",
                  fontSize: "1.3rem",
                }}
              >
                16th December, 2023
              </span>
            </h3>
            <h3
              style={{
                margin: "0px",
                padding: "5px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Venue:
              <span
                style={{
                  color: "#f0e68c",
                  opacity: "0.8",
                  fontSize: "1.3rem",
                }}
              >
                {" "}
                Online & IIITS
              </span>
            </h3>
            <h3
              style={{
                margin: "0px",
                padding: "5px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Organized by:
              <span
                style={{
                  color: "#f9adc0",
                  // #5DA3FA
                  opacity: "0.8",
                  fontSize: "1.3rem",
                }}
              >
                <a
                  style={{
                    color: "#f9adc0",
                    textDecoration: "none",
                  }}
                  href="https://www.iiits.ac.in/"
                  target="_blank"
                >
                  {" "}
                  Indian Institute of Information Technoloyg, Sri City{" "}
                  {<LaunchIcon />}
                </a>
              </span>
            </h3>
            <h3
              style={{
                margin: "0px",
                padding: "5px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Sponsored by:
              <span
                style={{
                  color: "#f9adc0",
                  opacity: "0.8",
                  fontSize: "1.3rem",
                }}
              >
                <a
                  style={{
                    color: "#f9adc0",
                    textDecoration: "none",
                  }}
                  href="https://serb.gov.in/"
                  target="_blank"
                >
                  {" "}
                  SERB, DST - GoI
                  {<LaunchIcon />}
                </a>
              </span>
            </h3>
          </div>

          {/* <h3>
          From: Coming Soon...<br/>
          To: Coming Soon...<br/>
          Venue: Online/IIITS<br/>
          Organized by: Indian Institute of Information Technoloyg, Sri City<br/>
        </h3> */}
        </div>
      </Box>
    </Box>
  );
};

export default Page1;
