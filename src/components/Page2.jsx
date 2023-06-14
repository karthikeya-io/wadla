import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SpeakersCarousel from "./SpeakersCarousel";
import { Box } from "@mui/material";

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
        <Box
          sx={{
            backgroundColor: "#242B2E",
            borderRadius: "25px",
            color: "#FFFFFF",
          }}
        >
          <SpeakersCarousel />
        </Box>
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
          <h1>News</h1>
          <Box
            sx={{
              height: "80%",
              overflow: "auto",
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
                  Wadla 3.0 is coming soon, stay tuned for more updates.
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "-10px",
                  }}
                >
                  Date: [15 June 2023]
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
          <h1>Organizing Commitee</h1>
        </Box>
      </Box>
    </Box>
  );
};

export default Page2;
