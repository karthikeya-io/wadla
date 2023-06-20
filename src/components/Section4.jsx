import React from "react";
import { Box } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link, Element } from "react-scroll";

const Section4 = () => {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

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
            lg: "45%",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#242B2E",
            borderRadius: "25px",
            color: "#FFFFFF",
            height: "350px",
            padding: "1% 2.5% 2.5% 2.5%",
          }}
        >
          <Element name="Schedule">
            <h1
              style={{
                textAlign: "center",
              }}
            >
              Schedule
            </h1>
          </Element>
          <Box>
            <h3
              style={{
                textAlign: "center",
                color: "#FFD700",
                marginTop: "10%",
                // center vertically
                // position: "absolute",
                // top: "50%",
                // left: "50%",
                // transform: "translate(-50%, -50%)",
              }}
            >
              Coming Soon...
            </h3>
          </Box>
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
            lg: "43%",
          },
          height: "auto",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#242B2E",
            color: "#FFFFFF",
            borderRadius: "25px",
            height: "350px",
            textAlign: "center",
            padding: "2.5% 2.5% 1% 2.5%",
          }}
        >
          <Element name="Register">
            <h1>Registration</h1>
          </Element>
          <Box>
            <h3
              style={{
                textAlign: "center",
                color: "#FFD700",
                marginTop: "10%",
              }}
            >
              Opens Soon...
            </h3>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section4;
