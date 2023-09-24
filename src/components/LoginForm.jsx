import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    } else {
      const res = await response.json();
      const message = `An error has occured: ${response.status} ${res.error}`;
      throw new Error(message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    postData("http://localhost:5000/api/signin-registerUser", form)
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          // navigate("/dashboard");
          alert("login successful");
          setForm({
            email: "",
            password: "",
          });
          setLoading(false);
        } else {
          alert("login failed");
          setForm({
            email: "",
            password: "",
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("login failed");
        setForm({
          email: "",
          password: "",
        });
        setLoading(false);
      });
    setLoading(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: {
            xs: "100%",
            md: "550px",
          },
          padding: "20px",
          backgroundColor: "rgba(245, 245, 245, 0.95)",
          borderRadius: "15px",
          overflow: "hidden",
          margin: {
            xs: "60px 20px",
          },
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <Box
            component={"form"}
            sx={{
              width: "100%",
              padding: "10px 20px",
              "& .MuiTextField-root": { m: 1, width: "100%" },
              "& .MuiButton-root": { m: 1, width: "100%" },
              "& .MuiFormControl-root": { m: 1, width: "100%" },
            }}
            autoComplete="on"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <Typography
              variant="h4"
              sx={{
                marginBottom: "10px",
                fontWeight: "bold",
                color: "#3f51b5",
              }}
            >
              Login
            </Typography>
            <Box sx={{ marginBottom: "10px", maxWidth: "650px", padding: "0" }}>
              <Typography
                sx={{
                  marginTop: "10px",
                }}
              >
                For any queries, please contact us at
                <span
                  style={{
                    color: "#3f51b5",
                    fontWeight: "bold",
                    marginLeft: "5px",
                  }}
                >
                  wadla@iiits.in
                </span>
              </Typography>
              <Typography
                sx={{
                  marginTop: "10px",
                }}
              >
                If you are a new user, please register
                <span
                  style={{
                    color: "#3f51b5",
                    fontWeight: "bold",
                    marginLeft: "5px",
                  }}
                >
                  <a href="/register">here</a>
                </span>
              </Typography>
              <Typography
                sx={{
                  marginTop: "10px",
                  color: "#3f51b5",
                }}
              >
                * indicates required field
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "10px" }}>
              <TextField
                required
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <TextField
                required
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </Box>
            <Link to="/emailvalidation" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  marginTop: "10px",
                  color: "#3f51b5",
                }}
              >
                Forgot Password?/ Set Password
              </Typography>
            </Link>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default LoginForm;
