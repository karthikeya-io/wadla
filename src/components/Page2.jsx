import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SpeakersCarousel from "./SpeakersCarousel";
import { Box } from "@mui/material";
import { Element } from "react-scroll";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LaunchIcon from "@mui/icons-material/Launch";

const Page2 = () => {
  function ScrollingText() {
    const containerStyle = {
      overflow: "hidden",
      whiteSpace: "nowrap",
      position: "relative",
      width: "100%",
      marginTop: ".5%",
    };

    const textStyle = {
      display: "inline-block",
      color: "#6B8E23",
      whiteSpace: "nowrap",
      animation: "scrollText 25s linear infinite",
      fontSize: "1.2rem",
      paddingLeft: "100%",
    };

    return (
      <div style={containerStyle}>
        <Typography variant="h4" component="span" style={textStyle}>
          Deadline for Registration is 30th September 2023.
        </Typography>
      </div>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        color: "#FFFFFF",
        width: "100%",
      }}
    >
      {/* scroll text  */}
      <ScrollingText />
      <Box
        sx={{
          height: "auto",
          position: "relative",
          color: "#FFFFFF",
          padding: "1% 2.5% 2.5%2.5%",
          width: {
            xs: "95%",
            sm: "95%",
            md: "95%",
            lg: "65%",
          },
        }}
      >
        <Element name="Speakers">
          <Box
            sx={{
              backgroundColor: "#242B2E",
              borderRadius: "25px",
              color: "#FFFFFF",
            }}
          >
            <SpeakersCarousel />
          </Box>
        </Element>
      </Box>

      <Box
        sx={{
          color: "#FFFFFF",
          padding: "1.5% 2.5% 2.5% 2.5%",
          width: {
            xs: "95%",
            sm: "95%",
            md: "95%",
            lg: "25%",
          },
          height: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#242B2E",
            color: "#FFFFFF",
            borderRadius: "25px",
            height: {
              lg: "45%",
            },
            textAlign: "center",
            padding: "2.5%",
          }}
        >
          <Element name="News">
            <h1>News</h1>
          </Element>
          <Box
            sx={{
              height: "80%",
              maxHeight: "350px",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: "0.6em",
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ffffff",
                borderRadius: "25px",
              },
            }}
          >
            <ul
              style={{
                textAlign: "left",
                paddingLeft: "20px",
              }}
            >
              <li>
                <p
                  style={{
                    color: "#f9adc0",
                  }}
                >
                  <a
                    href="https://drive.google.com/file/d/1E0uYTEsMQhgelRa_4aVB_9J8Ytq3ef-L/view?usp=sharing"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "#f9adc0",
                    }}
                  >
                    WADLA 3.0 Brochure
                    <LaunchIcon
                      sx={{
                        fontSize: "1rem",
                        marginLeft: "5px",
                      }}
                    />
                  </a>
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "-10px",
                  }}
                >
                  Date: [15 September, 2023]
                </p>
              </li>
              <li>
                <p
                  style={{
                    color: "#f9adc0",
                  }}
                >
                  <a
                    href="https://www.youtube.com/playlist?list=PLFVY9UMYveR47NPTDEAyJFAeYhswCwJ3T"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "#f9adc0",
                    }}
                  >
                    WADLA 2.0 Talk series is released
                    <LaunchIcon
                      sx={{
                        fontSize: "1rem",
                        marginLeft: "5px",
                      }}
                    />
                  </a>
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "-10px",
                  }}
                >
                  Date: [11 July, 2023]
                </p>
              </li>
              <li>
                <p
                  style={{
                    color: "#f9adc0",
                  }}
                >
                  Mark your calendars! WADLA 3.0 is back and better than ever
                  from December 11th to 16th, 2023!
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "-10px",
                  }}
                >
                  Date: [20 June, 2023]
                </p>
              </li>
              <li>
                <p
                  style={{
                    color: "#f9adc0",
                  }}
                >
                  Wadla 3.0 is coming soon, stay tuned for more updates.
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    marginTop: "-10px",
                  }}
                >
                  Date: [15 June, 2023]
                </p>
              </li>
            </ul>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#242B2E",
            color: "#FFFFFF",
            borderRadius: "25px",
            height: {
              lg: "45%",
            },
            textAlign: "center",
            padding: "2.5%",
            marginTop: "5%",
          }}
        >
          <Element name="Commitee">
            <h1>Organizing Commitee</h1>
          </Element>
          <Box
            sx={{
              maxHeight: "350px",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "0.6em",
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ffffff",
                borderRadius: "25px",
              },
            }}
          >
            <Accordion
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#ffffff1f",
                borderRadius: "15px 15px 0px 0px",
                marginTop: "25px",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#f0e68c",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "#ffffff1f",
                }}
              >
                <Typography
                  sx={{
                    color: "#f0e68c",
                    fontFamily: "comic neue",
                  }}
                >
                  Chief Patron
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "justify",
                    fontSize: "1rem",
                    fontFamily: "comic neue",
                  }}
                >
                  <ul
                    style={{
                      textAlign: "left",
                      paddingLeft: "20px",
                    }}
                  >
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                        }}
                      >
                        <a
                          href="https://www.iiits.ac.in/home/governance/chairman/"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Shri M Balasubramaniam
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        Chariman BoG, IIIT Sri City
                      </p>
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#ffffff1f",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#f0e68c",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "#ffffff1f",
                }}
              >
                <Typography
                  sx={{
                    color: "#f0e68c",
                    fontFamily: "comic neue",
                  }}
                >
                  Patron & Mentor
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "justify",
                    fontSize: "1rem",
                    fontFamily: "comic neue",
                  }}
                >
                  <ul
                    style={{
                      textAlign: "left",
                      paddingLeft: "20px",
                    }}
                  >
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                        }}
                      >
                        <a
                          href="https://www.iiits.ac.in/home/administration/director/"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Prof.D.V.L.N. Somayajulu
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        Director, IIIT Sri City
                      </p>
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#ffffff1f",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#f0e68c",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "#ffffff1f",
                }}
              >
                <Typography
                  sx={{
                    color: "#f0e68c",
                    fontFamily: "comic neue",
                  }}
                >
                  Technical Chairs
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "justify",
                    fontSize: "1rem",
                    fontFamily: "comic neue",
                  }}
                >
                  <ul
                    style={{
                      textAlign: "left",
                      paddingLeft: "20px",
                    }}
                  >
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                        }}
                      >
                        <a
                          href="https://www.ee.ntut.edu.tw/English/teacher/teacher2.php?tsn=5"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Prof. Leehter Yao
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        National Taipei University
                      </p>
                    </li>
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        <a
                          href="http://www.cse.iitm.ac.in/profile.php?arg=Nw=="
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Prof. C. Chandra Sekhar
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        IIT Madras
                      </p>
                    </li>
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        <a
                          href="https://wadla.in"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Prof. B Krishna Mohan
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        IIT Bombay
                      </p>
                    </li>
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        <a
                          href="https://www.linkedin.com/in/rama-vedantam-291b9831/"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Dr. Rama Vendatam
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        AI Researcher, New York University , USA
                      </p>
                    </li>
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        <a
                          href="https://wadla.in"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Prof. Jimson Mathew
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        IIT Patna
                      </p>
                    </li>
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        <a
                          href="https://wadla.in"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Prof. Ram Bilas Pachori
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        IIT Indore
                      </p>
                    </li>
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        <a
                          href="#"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Dr. Sriparna Saha
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      ></p>
                    </li>
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        <a
                          href="https://www.iiits.ac.in/people/regular-faculty/dr-anish-chand-turlapaty/"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Dr. Anish Chand Turlapaty
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        IIIT SriCity
                      </p>
                    </li>
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        <a
                          href="https://faculty.iitmandi.ac.in/~dineshsingh/"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Dr. Dinesh Singh
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        IIT Mandi
                      </p>
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#ffffff1f",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#f0e68c",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "#ffffff1f",
                }}
              >
                <Typography
                  sx={{
                    color: "#f0e68c",
                    fontFamily: "comic neue",
                  }}
                >
                  Workshop Chairs
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "justify",
                    fontSize: "1rem",
                    fontFamily: "comic neue",
                  }}
                >
                  <ul
                    style={{
                      textAlign: "left",
                      paddingLeft: "20px",
                    }}
                  >
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        <a
                          href="https://www.iiits.ac.in/people/regular-faculty/dr-rakesh-kumar-sanodiya/"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Dr. Rakesh Kumar Sanodiya
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        Convener |{" "}
                        <a
                          href="mailto:"
                          target="_blank"
                          style={{
                            color: "#f9adc0",
                            textDecoration: "none",
                          }}
                        >
                          rakesh.s@iiits.in
                        </a>
                      </p>
                    </li>
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        <a
                          href="https://www.iiits.ac.in/people/regular-faculty/dr-arun-pv/"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Dr Arun PV
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        Co-Convener |{" "}
                        <a
                          href="mailto:"
                          target="_blank"
                          style={{
                            color: "#f9adc0",
                            textDecoration: "none",
                          }}
                        >
                          arun.pv@iiits.in
                        </a>
                      </p>
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#ffffff1f",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#f0e68c",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "#ffffff1f",
                }}
              >
                <Typography
                  sx={{
                    color: "#f0e68c",
                    fontFamily: "comic neue",
                  }}
                >
                  Finance Chairs
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "justify",
                    fontSize: "1rem",
                    fontFamily: "comic neue",
                  }}
                >
                  <ul
                    style={{
                      textAlign: "left",
                      paddingLeft: "20px",
                    }}
                  >
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        Dr. Piyush Joshi
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        IIIT Sri City
                      </p>
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#ffffff1f",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#f0e68c",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "#ffffff1f",
                }}
              >
                <Typography
                  sx={{
                    color: "#f0e68c",
                    fontFamily: "comic neue",
                  }}
                >
                  Publicity Chairs
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "justify",
                    fontSize: "1rem",
                    fontFamily: "comic neue",
                  }}
                >
                  <ul
                    style={{
                      textAlign: "left",
                      paddingLeft: "20px",
                    }}
                  >
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        Dr. Matloob Khusi
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        Sydney University, Australia
                      </p>
                    </li>
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        Dr Nikhil Tripathi
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        IIIT Sri City
                      </p>
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                color: "#FFFFFF",
                backgroundColor: "#ffffff1f",
                borderRadius: "0px 0px 15px 15px",
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#f0e68c",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "#ffffff1f",
                }}
              >
                <Typography
                  sx={{
                    color: "#f0e68c",
                    fontFamily: "comic neue",
                  }}
                >
                  Registration Chairs
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "justify",
                    fontSize: "1rem",
                    fontFamily: "comic neue",
                  }}
                >
                  <ul
                    style={{
                      textAlign: "left",
                      paddingLeft: "20px",
                    }}
                  >
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        <a
                          href="https://www.iiits.ac.in/people/regular-faculty/dr-pavan-kumar-b-n/"
                          target="_blank"
                          style={{
                            textDecoration: "none",
                            color: "#f9adc0",
                          }}
                        >
                          Dr. Pavan Kumar B N
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        IIIT Sri City
                      </p>
                    </li>
                    <li>
                      <p
                        style={{
                          color: "#f9adc0",
                          marginTop: "-10px",
                        }}
                      >
                        Satya Rajendra Singh
                      </p>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "-20px",
                        }}
                      >
                        IIIT Sri City
                      </p>
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
      <style>
        {`
          @keyframes scrollText {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Page2;
