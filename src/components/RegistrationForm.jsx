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
} from "@mui/material";
import { Box } from "@mui/system";

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
    receipt: "",
    proof: "",
    confirm: false,
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
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
      >
        <Typography variant="h4" sx={{ marginBottom: "10px" }}>
          Registration Form
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          Please fill the following form to register for the workshop.
        </Typography>

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
            required
            name="phoneNumber"
            label="Mobile Phone Number"
            value={form.phoneNumber}
            onChange={handleChange}
            sx={{ width: "98%" }}
          />
        </Box>
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
            label="Were you part of previous workshop"
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
            flexDirection: "row",
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
            onChange={handleChange}
            style={{
              paddingLeft: "10px",
            }}
          />
        </Button>

        <Button variant="contained" component="label">
          Upload Proof of Student/Faculty
          <input
            type="file"
            accept=".pdf"
            name="proof"
            onChange={handleChange}
            style={{
              paddingLeft: "10px",
            }}
          />
        </Button>

        <FormControlLabel
          control={
            <Checkbox
              checked={form.confirm}
              onChange={handleChange}
              name="confirm"
              color="primary"
            />
          }
          label="I confirm that the information provided by me in this form is correct."
        />

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
