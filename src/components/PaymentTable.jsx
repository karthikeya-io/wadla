import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import qr from "../assets/wadlaUPIQR.png";
import LaunchIcon from "@mui/icons-material/Launch";

const PaymentTable = () => {
  const rows = [
    {
      participantType: "BTech with Research/MS/PhD/Equivalent",
      indianOnline: "Rs. 1000/-",
      indianOffline: "Rs. 3000/-",
      foreign: "$ 50/-",
    },
    {
      participantType: "FACULTY",
      indianOnline: "Rs. 2000/-",
      indianOffline: "Rs. 5000/-",
      foreign: "$ 70/-",
    },
    {
      participantType: "INDUSTRY",
      indianOnline: "Rs. 3000/-",
      indianOffline: "Rs. 6000/-",
      foreign: "$ 100/-",
    },
  ];

  return (
    <Box>
      <h3
        style={{
          color: "#FFD700",
          textAlign: "left",
        }}
      >
        Registration Fee
      </h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              backgroundColor: "#F4BE2Caf",
            }}
          >
            <TableRow>
              <TableCell>Participant Type</TableCell>
              <TableCell align="right">Indian - Online Participants </TableCell>
              <TableCell align="right">Indian - Offline Participants</TableCell>
              <TableCell align="right">Foreign Participants</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.participantType}>
                <TableCell component="th" scope="row">
                  {row.participantType}
                </TableCell>
                <TableCell align="right">{row.indianOnline}</TableCell>
                <TableCell align="right">{row.indianOffline}</TableCell>
                <TableCell align="right">{row.foreign}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h3>Indian Participants Fee Payment (Through UPI)</h3>
          <a
            href="https://drive.google.com/file/d/1TiR9dAVszBogEzPpILuab7qqmI8GcN_E/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              textDecoration: "none",
              justifyContent: "center",
              color: "#FFFFFF",
            }}
          >
            <img
              src={qr}
              alt="UPI QR code"
              style={{
                width: "200px",
                height: "200px",
              }}
            />
            <LaunchIcon />
          </a>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3>Foreign Participants Fee Payment Information</h3>
          <p>ACCOUNT NAME: IIIT SRI CITY CHITTOOR OPEX A/C</p>
          <p>BANK ACCOUNT NUMBER: 38329375681</p>
          <p>IFSC CODE: SBIN0016527</p>
          <p>MICR CODE: 517002825</p>
          <p>SWIFT CODE: SBININBB324</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentTable;
