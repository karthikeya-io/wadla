import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Container, Typography, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Attractions } from "../content/Attractions";
import LaunchIcon from "@mui/icons-material/Launch";

const NearestAttractions = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        startIcon={<HomeIcon />}
        sx={{
          position: {
            xs: "relative",
            md: "sticky",
          },
          top: "10px",
          left: "10px",
          zIndex: "1",
          backgroundColor: "#242B2E",
          color: "#fff",
        }}
      >
        Home
      </Button>
      <Container
        fixed
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          backgroundColor: "#242B2E",
          color: "#fff",
          marginTop: "20px",
          marginBottom: "50px",
          borderRadius: "10px",
          padding: "30px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontFamily: "inherit",
            color: "#ffd718",
            marginTop: "20px",
          }}
        >
          Nearest Attractions
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: "1",
          }}
        >
          {Attractions.map((attraction) => (
            <Box
              key={attraction.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                flexGrow: "1",
                width: "100%",
                marginTop: "50px",
                backgroundColor: "#535C68",
                boxShadow: "0 0 10px #000",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  fontFamily: "inherit",
                  color: "#f9adc0",
                  fontWeight: "bold",
                }}
              >
                <Link
                  to={attraction.wikiLink}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  {attraction.title}
                  <LaunchIcon />
                </Link>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  width: "100%",
                  padding: {
                    xs: "5px",
                    md: "10px",
                  },
                  gap: "20px",
                }}
              >
                
                  <img
                    src={attraction.image}
                    alt={attraction.title}
                    style={{
                      margin: "auto",
                      padding: "0",
                      maxWidth: "300px",
                      height: "250px",
                      borderRadius: "10px",
                    }}
                  />
                <Box>
                  <Typography variant="h6" sx={{ fontFamily: "inherit" }}>
                    {attraction.description}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  padding: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontFamily: "inherit", textDecoration: "underline" }}
                >
                  How to get there:
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: "200px",
                  }}
                >
                  <iframe
                    title={attraction.title}
                    src={attraction.location}
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "15px" }}
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </Box>
              </Box>
            </Box>
          ))}
        </Container>
      </Container>
    </div>
  );
};

export default NearestAttractions;
