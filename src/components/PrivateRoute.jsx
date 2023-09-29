import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavBarLoggedIn from "./NavBarLoggedIn";
import { Box } from "@mui/material";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const timeOfLogin = localStorage.getItem("timeOfLogin");
  const user = JSON.parse(localStorage.getItem("user"));
  const isAuthenticated =
    token && Date.now() - timeOfLogin < 24 * 60 * 60 * 1000;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Box>
      <NavBarLoggedIn user={user} />
      <Outlet />
    </Box>
  );
};

export default PrivateRoute;
