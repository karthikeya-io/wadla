import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SpeakersCarousel from "./SpeakersCarousel";
import { Box } from "@mui/material";
import { Element } from "react-scroll";

const Page2 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        color: "#FFFFFF",
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: "auto",
          position: "relative",
          color: "#FFFFFF",
          padding: "2.5%",
          width: {
            xs: "95%",
            sm: "95%",
            md: "95%",
            lg: "65%",
          },
        }}
      >
        <Element name="Speakers">
          <Box
            sx={{
              backgroundColor: "#242B2E",
              borderRadius: "25px",
              color: "#FFFFFF",
            }}
          >
            <SpeakersCarousel />
          </Box>
        </Element>
      </Box>

      <Box
        sx={{
          color: "#FFFFFF",
          padding: "2.5%",
          width: {
            xs: "95%",
            sm: "95%",
            md: "95%",
            lg: "25%",
          },
          height: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#242B2E",
            color: "#FFFFFF",
            borderRadius: "25px",
            height: {
              lg: "45%",
            },
            textAlign: "center",
            padding: "2.5%",
          }}
        >
          <Element name="News">
            <h1>News</h1>
          </Element>
          <Box
            sx={{
              height: "80%",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: "0.6em",
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ffffff",
                borderRadius: "25px",
              },
            }}
          >
            <ul
              style={{
                textAlign: "left",
                paddingLeft: "20px",
              }}
            >
              <li>
                <p
                  style={{
                    color: "#f9adc0",
                  }}
                >
                  Mark your calendars! WADLA 3.0 is back and better than ever
                  from December 11th to 16th, 2023!
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "-10px",
                  }}
                >
                  Date: [20 June, 2023]
                </p>
              </li>
              <li>
                <p
                  style={{
                    color: "#f9adc0",
                  }}
                >
                  Wadla 3.0 is coming soon, stay tuned for more updates.
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "-10px",
                  }}
                >
                  Date: [15 June, 2023]
                </p>
              </li>
            </ul>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#242B2E",
            color: "#FFFFFF",
            borderRadius: "25px",
            height: {
              lg: "45%",
            },
            textAlign: "center",
            padding: "2.5%",
            marginTop: "5%",
          }}
        >
          <Element name="Commitee">
            <h1>Organizers</h1>
          </Element>
          <Box
            sx={{
              height: "80%",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: "0.6em",
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ffffff",
                borderRadius: "25px",
              },
            }}
          >
            <ul
              style={{
                textAlign: "left",
                paddingLeft: "20px",
              }}
            >
              <li>
                <p
                  style={{
                    color: "#f9adc0",
                  }}
                >
                  <a
                    href="https://www.iiits.ac.in/people/regular-faculty/dr-rakesh-kumar-sanodiya/"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "#f9adc0",
                    }}
                  >
                    Dr. Rakesh Kumar Sanodiya
                  </a>
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    marginTop: "-10px",
                  }}
                >
                  Convener |{" "}
                  <a
                    href="mailto:"
                    target="_blank"
                    style={{
                      color: "#f9adc0",
                      textDecoration: "none",
                    }}
                  >
                    rakesh.s@iiits.in
                  </a>
                </p>
              </li>
              <li>
                <p
                  style={{
                    color: "#f9adc0",
                  }}
                >
                  <a
                    href="https://www.iiits.ac.in/people/regular-faculty/dr-arun-pv/"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "#f9adc0",
                    }}
                  >
                    Dr Arun PV
                  </a>
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    marginTop: "-10px",
                  }}
                >
                  Co-Convener |{" "}
                  <a
                    href="mailto:"
                    target="_blank"
                    style={{
                      color: "#f9adc0",
                      textDecoration: "none",
                    }}
                  >
                    arun.pv@iiits.in
                  </a>
                </p>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page2;
