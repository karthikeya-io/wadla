import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Checkbox,
  Button,
  FormControl,
  InputLabel,
  FormControlLabel,
  Typography,
  CircularProgress,
  FormHelperText,
} from "@mui/material";
import { Box } from "@mui/system";
import { TEST_API_URL_REGISTRATION } from "../constants";
import { Form } from "react-router-dom";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    affiliation: "",
    designation: "",
    registrationCategory: "",
    previousWorkshop: "",
    feedback: "",
    registrationFee: "",
    transactionNumber: "",
    registrationDate: "",
    confirm: false,
  });

  const [receipt, setReceipt] = useState(null);
  const [proof, setProof] = useState(null);
  const [loading, setLoading] = useState(false);

  async function postData(url = "", data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: data, // body data type must match "Content-Type" header
    });
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
      alert(message);
    }
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("email", form.email);
    formData.append("name", form.name);
    formData.append("phoneNumber", form.phoneNumber);
    formData.append("affiliation", form.affiliation);
    formData.append("designation", form.designation);
    formData.append("registrationCategory", form.registrationCategory);
    formData.append("previousWorkshop", form.previousWorkshop);
    formData.append("feedback", form.feedback);
    formData.append("registrationFee", form.registrationFee);
    formData.append("transactionNumber", form.transactionNumber);
    formData.append("registrationDate", form.registrationDate);
    formData.append("receipt", receipt);
    formData.append("proof", proof);
    formData.append("confirm", form.confirm);
    console.log(form);
    console.log(formData);
    console.log(formData.get("email"));
    postData(TEST_API_URL_REGISTRATION, formData)
      .then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
        alert("Registration Successful");
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.checked });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
        margin: "20px",
        backgroundColor: "#f5f5f5",
        // make background color translucent
        backgroundColor: "rgba(245, 245, 245, 0.9)",
        borderRadius: "15px",
        maxWidth: "95%",
        overflow: "hidden",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
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
            sx={{ marginBottom: "10px", fontWeight: "bold", color: "#3f51b5" }}
          >
            Registration Form
          </Typography>
          <Box sx={{ marginBottom: "10px", maxWidth: "650px", padding: "0" }}>
            <Typography>
              Please complete this form after paying the registration fee to
              confirm your registration for the International Research Workshop
              on Advances in Deep Learning and Applications (WADLA), 2023.
            </Typography>
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
                color: "#3f51b5",
              }}
            >
              * indicates required field
            </Typography>
          </Box>

          <TextField
            required
            name="name"
            label="Name"
            value={form.name}
            onChange={handleChange}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              required
              name="email"
              label="Email"
              value={form.email}
              onChange={handleChange}
              sx={{ width: "98%" }}
            />
            <TextField
              name="phoneNumber"
              label="Mobile Phone Number"
              value={form.phoneNumber}
              onChange={handleChange}
              sx={{ width: "98%" }}
            />
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              required
              name="password"
              label="Password"
              type="password"
              value={form.password}
              onChange={handleChange}
              style={{
                marginTop: "15px",
              }}
            />
            <FormControl error={form.password !== form.confirmPassword}>
              <TextField
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={form.confirmPassword}
                required
                onChange={handleChange}
              />
              {form.password !== form.confirmPassword && (
                <FormHelperText>Passwords do not match</FormHelperText>
              )}
            </FormControl>
          </Box> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              required
              name="affiliation"
              label="Affiliation"
              value={form.affiliation}
              onChange={handleChange}
              sx={{ width: "48%" }}
            />
            <TextField
              required
              name="designation"
              label="Designation"
              value={form.designation}
              onChange={handleChange}
              sx={{ width: "48%" }}
            />
          </Box>

          <FormControl required>
            <InputLabel id="registration-category-label">
              Registration Category
            </InputLabel>
            <Select
              labelId="registration-category-label"
              id="registration-category"
              name="registrationCategory"
              value={form.registrationCategory}
              onChange={handleChange}
              label="Registration Category"
            >
              <MenuItem value="Student - India">Student - India</MenuItem>
              <MenuItem value="Faculty/Educator - India">
                Faculty/Educator - India
              </MenuItem>
              <MenuItem value="Industry/R&D Person - India">
                Industry/R&D Person - India
              </MenuItem>
              <MenuItem value="Student - Foreign">Student - Foreign</MenuItem>
              <MenuItem value="Faculty/Educator - Foreign">
                Faculty/Educator - Foreign
              </MenuItem>
              <MenuItem value="Industry/R&D Person - Foreign">
                Industry/R&D Person - Foreign
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl required>
            <InputLabel id="previous-workshop-label">
              Were you part of previous workshop
            </InputLabel>
            <Select
              labelId="previous-workshop-label"
              id="previous-workshop"
              name="previousWorkshop"
              value={form.previousWorkshop}
              onChange={handleChange}
              label="Were you part of previous workshop - WADLA 2021/2022"
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>

          {form.previousWorkshop === "Yes" && (
            <TextField
              name="feedback"
              label="Feedback for previous workshop"
              multiline
              rows={4}
              value={form.feedback}
              onChange={handleChange}
            />
          )}

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "space-between",
            }}
          >
            <TextField
              required
              name="registrationFee"
              label="Amount Paid"
              value={form.registrationFee}
              onChange={handleChange}
            />
            <TextField
              required
              name="transactionNumber"
              label="Transaction Number"
              value={form.transactionNumber}
              onChange={handleChange}
            />
            <TextField
              required
              name="registrationDate"
              label="Date of Registration"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={form.registrationDate}
              onChange={handleChange}
            />
          </Box>

          <Typography variant="body1" sx={{ marginTop: "10px" }}>
            Upload the following documents in PDF format:
          </Typography>

          <Button variant="contained" component="label">
            Upload Registration Fee Transaction Receipt
            <input
              type="file"
              accept=".pdf"
              name="receipt"
              onChange={(e) => setReceipt(e.target.files[0])}
              style={{
                paddingLeft: "10px",
              }}
              required
            />
          </Button>
          <Typography variant="body1" sx={{ marginTop: "10px" }}>
            Upload the following documents in an image format(jpg, png, etc.):
          </Typography>
          <Button variant="contained" component="label">
            Upload Proof of Student/Faculty
            <input
              required
              type="file"
              name="proof"
              onChange={(e) => setProof(e.target.files[0])}
              style={{
                paddingLeft: "10px",
              }}
            />
          </Button>

          <FormControlLabel
            control={
              <Checkbox
                checked={form.confirm}
                onChange={handleCheckboxChange}
                name="confirm"
                color="primary"
                required
              />
            }
            label="I confirm that the information provided by me in this form is correct."
          />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RegistrationForm;
