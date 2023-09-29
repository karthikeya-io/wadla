import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MediaCard from "../components/MediaCard";
import wadla2Img from "../assets/wadla2.webp";

const LoggedInHome = () => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        bgcolor: "#242B2E",
        color: "white",
        height: "100vh",
        width: "100%",
        padding: "2rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              margin: "10px",
              padding: "10px",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 700, color: "#FFD700" }}>
              Welcome to WADLA!
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
              }}
            >
              Thanks for registering for WADLA 3.0! We're excited to have you on
              board.
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Click watch on WADLA 2.0 card to watch the 2.0 recordings. More
              exciting content coming soon!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <MediaCard
              title="Wadla 2.0"
              description="Watch the recordings of highly successful workshop series WADLA 2.0"
              image={wadla2Img}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoggedInHome;
