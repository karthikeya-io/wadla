import React from "react";
import { Box, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LoginForm from "../components/LoginForm";
import ResetPasswordForm from "../components/ResetPasswordForm";

const LoginPage = ({page}) => {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#242B2E",
          background: `radial-gradient(${getRandomColor()} 3px, transparent 4px), radial-gradient(${getRandomColor()} 3px, transparent 4px), linear-gradient(#000 4px, transparent 0), linear-gradient(45deg, transparent 74px, transparent 75px, ${getRandomColor()} 75px, ${getRandomColor()} 76px, transparent 77px, transparent 109px), linear-gradient(-45deg, transparent 75px, transparent 76px, ${getRandomColor()} 76px, ${getRandomColor()} 77px, transparent 78px, transparent 109px), #000`,
          backgroundSize:
            "109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px",
          backgroundPosition: "54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px",
          minHeight: "100vh",
        }}
      >
        <Button
          variant="contained"
          href="/"
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            maxWidth: "100%",
          }}
        >
            {page === "login" && <LoginForm /> }
            {page === "emailvalidation" && <ResetPasswordForm /> }
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
