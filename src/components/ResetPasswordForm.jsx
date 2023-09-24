import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { OTP_ENDPOINT, RESET_PASSWORD_ENDPOINT } from "../constants";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();
  const [otpSent, setOTPSent] = useState(false);
  const [timer, setTimer] = useState(-1);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isTimerActive) {
      interval = setInterval(() => {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          setIsTimerActive(false);
          clearInterval(interval);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer, isTimerActive]);

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

  const handleSendOTP = (e) => {
    e.preventDefault();
    setLoading(true);
    postData(OTP_ENDPOINT, {
      email: email,
    })
      .then((data) => {
        console.log(data);
        alert("OTP sent");
        setOTPSent(true);
        setTimer(180);
        setIsTimerActive(true);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        setLoading(false);
      });
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (form.password.length < 6) {
      alert("Password must be atleast 6 characters long");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);
    postData(RESET_PASSWORD_ENDPOINT, {
      email: email,
      otp: otp,
      password: form.password,
    })
      .then((data) => {
        console.log(data);
        alert(data.message);
        setLoading(false);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        setLoading(false);
      });
    setOTPSent(false);
    setOTP("");
    setEmail("");
    setForm({
      password: "",
      confirmPassword: "",
    });
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
          >
            <Typography
              variant="h4"
              sx={{
                marginBottom: "10px",
                fontWeight: "bold",
                color: "#3f51b5",
              }}
            >
              Email verification
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
                }}
              >
                We will send an OTP for verification to your email address
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
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {!otpSent ? (
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ mt: 2, mb: 2, ml: 1 }}
                  onClick={handleSendOTP}
                >
                  {loading ? (
                    <CircularProgress
                      color="inherit"
                      size={20}
                      sx={{ mr: 1 }}
                    />
                  ) : null}
                  Send OTP
                </Button>
              ) : (
                <Box sx={{ marginBottom: "10px" }}>
                  <Typography
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    Resend OTP in
                    <span
                      style={{
                        color: "#3f51b5",
                        fontWeight: "bold",
                        marginLeft: "5px",
                      }}
                    >
                      {Math.floor(timer / 60)}:
                      {timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
                    </span>
                  </Typography>
                  {timer === 0 && (
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ mt: 2, mb: 2, ml: 1 }}
                      onClick={handleSendOTP}
                    >
                      {loading ? (
                        <CircularProgress
                          color="inherit"
                          size={20}
                          sx={{ mr: 1 }}
                        />
                      ) : null}
                      Resend OTP
                    </Button>
                  )}
                  <TextField
                    required
                    id="outlined-basic"
                    label="OTP"
                    variant="outlined"
                    type="number"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                  />
                  <TextField
                    required
                    id="outlined-basic"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                  <TextField
                    required
                    id="outlined-basic"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    value={form.confirmPassword}
                    onChange={(e) =>
                      setForm({ ...form, confirmPassword: e.target.value })
                    }
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ mt: 2, mb: 2, ml: 1 }}
                    onClick={handleVerifyOTP}
                  >
                    {loading ? (
                      <CircularProgress
                        color="inherit"
                        size={20}
                        sx={{ mr: 1 }}
                      />
                    ) : null}
                    Change Password
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ResetPasswordForm;
