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
            md: "65%",
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
            md: "25%",
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
            height: "45%",
            textAlign: "center",
            padding: "2.5%",
          }}
        >
          <h1>News</h1>
        </Box>
        <Box
          sx={{
            backgroundColor: "#242B2E",
            color: "#FFFFFF",
            borderRadius: "25px",
            height: "45%",
            textAlign: "center",
            padding: "2.5%",
            marginTop: "5%",
          }}
        >
          <h1>News</h1>
        </Box>
      </Box>
    </Box>
    // <div
    //   style={{
    //     padding: "25px",
    //     display: "flex",
    //     flexWrap: "wrap",
    //     color: "#FFFFFF",
    //   }}
    // >
    //   <div
    //     style={{
    //       height: "auto",
    //       width: "100%",
    //       maxWidth: "900px",
    //       position: "relative",
    //       padding: "25px",
    //       backgroundColor: "#242B2E",
    //       borderRadius: "25px",
    //       color: "#FFFFFF",
    //       marginRight: "10px",
    //     }}
    //   >
    //     <SpeakersCarousel />
    //   </div>

    //   <Box
    //     sx={{
    //       height: "auto",
    //       width: "300px",
    //       backgroundColor: "#242B2E",
    //       color: "#FFFFFF",
    //       borderRadius: "25px",
    //       marginRight: "10px",
    //       width: {
    //         xs: "100%",
    //         sm: "100%",
    //         md: "30%",
    //         lg: "30%",
    //       },
    //     }}
    //   >
    //     <div>
    //       <h1>News</h1>
    //     </div>
    //   </Box>
    // </div>
  );
};

export default Page2;
