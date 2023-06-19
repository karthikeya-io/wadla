import React from "react";
import BannerCarousel from "./BannerCarousel";
import img1 from "../assets/temp/Academia_all_foreign.jpg";
import img2 from "../assets/temp/download.jpeg";
import img3 from "../assets/temp/Industry_all_c.jpg";
import { Box } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const Page1 = () => {
  const banners = [img1, img2, img3];
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
          width: {
            xs: "90%",
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
            md: "45%",
            lg: "30%",
          },
          margin: "auto",
          padding: "2.5%",
        }}
      >
        <div
          style={{
            width: "100%",
            transition: "all 0.5s ease",
            backgroundColor: "#242B2E",
            color: "#FFFFFF",
            borderRadius: "0 0 25px 0",
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
