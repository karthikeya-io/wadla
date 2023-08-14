import React from "react";
import { Box } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { Element } from "react-scroll";
import PaymentTable from "./PaymentTable";
import { Link } from "react-router-dom";

const Section4 = () => {
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
            md: "95%",
            lg: "35%",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#242B2E",
            borderRadius: "25px",
            color: "#FFFFFF",
            height: {
              xs: "auto",
              sm: "auto",
              md: "auto",
              lg: "100%",
            },
            padding: "1% 2.5% 2.5% 2.5%",
          }}
        >
          <Element name="Schedule">
            <h1
              style={{
                textAlign: "center",
              }}
            >
              Schedule
            </h1>
          </Element>
          <Box>
            <h3
              style={{
                textAlign: "center",
                color: "#FFD700",
                marginTop: "10%",
                // center vertically
                // position: "absolute",
                // top: "50%",
                // left: "50%",
                // transform: "translate(-50%, -50%)",
              }}
            >
              Coming Soon...
            </h3>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          color: "#FFFFFF",
          padding: "2.5%",
          width: {
            xs: "95%",
            sm: "95%",
            md: "95%",
            lg: "55%",
          },
          height: "auto",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#242B2E",
            color: "#FFFFFF",
            borderRadius: "25px",
            height: "auto",
            textAlign: "center",
            padding: "2.5% 2.5% 1% 2.5%",
          }}
        >
          <Element name="Register" id="Register">
            <h1>Registration</h1>
          </Element>
          <Box>
            <h3
              style={{
                textAlign: "Left",
                color: "#FFD700",
              }}
            >
              Payment Procedure
            </h3>
            <ol
              style={{
                textAlign: "left",
                marginTop: "-10px",
              }}
            >
              <li>
                Pay the registration fee using below payment methods and amount
                according to your category.
              </li>
              <li>
                After payment fill the form to confirm your Registration{" -> "}
                <Link
                  to="/register"
                  target="_blank"
                  style={{
                    color: "#f9adc0",
                    textDecoration: "none",
                  }}
                  rel="noreferrer"
                >
                  Link to the form
                  <LaunchIcon
                    sx={{
                      color: "#f9adc0",
                      fontSize: "1.5rem",
                      verticalAlign: "middle",
                    }}
                  />
                </Link>
              </li>
            </ol>
            <PaymentTable />
            <p
              style={{
                textAlign: "center",
                color: "#FFD700",
                fontSize: "1.35rem",
                fontWeight: "bold",
              }}
            >
              After the Payment fill the form to confirm your Registration{" "}
              {" -> "}
              <a
                href="https://wadla.in/register"
                target="_blank"
                style={{
                  color: "#f9adc0",
                  textDecoration: "none",
                }}
                rel="noreferrer"
              >
                Link to the form
                <LaunchIcon
                  sx={{
                    color: "#f9adc0",
                    fontSize: "1.5rem",
                    verticalAlign: "middle",
                  }}
                />
              </a>
            </p>
            <p
              style={{
                textAlign: "left",
                marginTop: "-10px",
                fontWeight: "lighter",
              }}
            >
              For any queries contact us at wadla@iiits.in
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section4;
