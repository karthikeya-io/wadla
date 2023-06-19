import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SpeakersCarousel from "./SpeakersCarousel";
import { Box } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const Page3 = () => {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
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
            lg: "65%",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#242B2E",
            borderRadius: "25px",
            color: "#FFFFFF",
            height: "550px",
            padding: "1% 2.5% 2.5% 2.5%",
          }}
        >
          <h1
            style={{
              textAlign: "center",
            }}
          >
            About
          </h1>
          <Box
            sx={{
              width: "95%",
              height: "85%",
              overflow: "auto",
              margin: "auto",
              bgcolor: "#758283",
              borderRadius: "25px",
              color: "#d3d3d3",
              padding: "0% 2.5%",
              "&::-webkit-scrollbar": {
                width: "0.6em",
              },
              "&::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#242B2E",
                borderRadius: "25px",
              },
              background: `radial-gradient(${getRandomColor()} 3px, transparent 4px), radial-gradient(${getRandomColor()} 3px, transparent 4px), linear-gradient(#000 4px, transparent 0), linear-gradient(45deg, transparent 74px, transparent 75px, ${getRandomColor()} 75px, ${getRandomColor()} 76px, transparent 77px, transparent 109px), linear-gradient(-45deg, transparent 75px, transparent 76px, ${getRandomColor()} 76px, ${getRandomColor()} 77px, transparent 78px, transparent 109px), #000`,
              backgroundSize:
                "109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px",
              backgroundPosition:
                "54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px",
            }}
          >
            <h3></h3>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1rem",
              }}
            >
              Breakthroughs in data science and computing power, especially the
              prevalence of graphical processing units (GPUs) and tensor
              processing units (TPUs) over the past two decades, have made deep
              learning (DL) one of the most powerful tools in the field of
              artificial intelligence. DL has been successfully and effectively
              applied in many cutting edge applications including Automation,
              Robotics, Natural Language Processing, Computer Vision, Speech
              Recognition, Object Detection, Drug Discovery etc. Present day DL
              has amazed everyone with their human level accuracy in
              classification, generating life-like images and videos and even
              beating world-champions at their own games. As the quest
              continues, deep learning has emerged out to be the most sought
              after skill in today's industrial scenario, right from the Tech
              Giants to Startups. DL basically uses deep neural network
              architecture with multiple layers to represent data with
              increasing abstraction and can be applied to supervised,
              unsupervised, as well as reinforcement learning.
            </p>
            <p
              style={{
                textAlign: "justify",
                fontSize: "1rem",
              }}
            >
              The Workshop on Advances in Deep Learning and Applications (WADLA)
              was formally formalized in 2021 to give the participants hands-on
              experience, right from the foundations, from some of the leading
              experts in the fields. Based on the past experience and
              suggestions of the participants and expert speakers, this time we
              have officially created an organizing committee consisting of
              expert people from all over the world. This expert committee is
              continuously monitoring the activities of this workshop and has
              finalized the topics covered in the program schedule which
              reflects the recent trends in deep learning.
            </p>
            <Box>
              <h3
                style={{
                  color: "#f0e68c",
                }}
              >
                Topics Covered
              </h3>
              <ul>
                <li>TBD</li>
              </ul>
            </Box>
            <Box>
              <h3
                style={{
                  color: "#f0e68c",
                }}
              >
                Special Sessions
              </h3>
              <ul>
                <li>TBD</li>
              </ul>
            </Box>
            <Box>
              <h3
                style={{
                  color: "#f0e68c",
                }}
              >
                Intended Participants
              </h3>
              <ul>
                <li>Research Students(MS/PhD/Equivalent)</li>
                <li>Faculties and Educators</li>
                <li>R & D and Industry Persons</li>
              </ul>
            </Box>
            <Box>
              <h3
                style={{
                  color: "#f0e68c",
                }}
              >
                The goal of the workshop is to
              </h3>
              <ul>
                <li>
                  Provides a strong understanding of deep learning basics and
                  advancements along with practical insights
                </li>
                <li>
                  Familiarisation of edge computing and deployment of DL models
                  on edge devices
                </li>
                <li>
                  Encourage the academia industry interactions through
                  participation of leaders from diverse fields
                </li>
                <li>
                  Demonstrate deep learning capabilities through industry-led
                  hands-on sessions for participants
                </li>
              </ul>
            </Box>
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
              lg: "96%",
            },
            textAlign: "center",
            padding: "2.5% 2.5% 1% 2.5%",
          }}
        >
          <h1>Archive</h1>
          <Box
            sx={{
              height: "43%",
              overflow: "auto",
            }}
          >
            <h2
              style={{
                color: "#f9adc0",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "#f9adc0",
                }}
                href="https://wadla.in/"
                target="_blank"
              >
                Wadla 2.0 - 2022 {<LaunchIcon />}
              </a>
            </h2>
          </Box>
          <Box
            sx={{
              height: "45%",
              overflow: "auto",
            }}
          >
            <h2
              style={{
                color: "#f9adc0",
              }}
            >
              {/* make default styles none */}
              <a
                href="https://sites.google.com/view/wadla2021"
                style={{
                  textDecoration: "none",
                  color: "#f9adc0",
                }}
                target="_blank"
              >
                Wadla 1.0 - 2021 {<LaunchIcon />}
              </a>
            </h2>
            <p
              style={{
                textAlign: "justify",
                height: "63%",
                overflowY: "hidden",
                fontSize: "0.85rem",
                padding: "0 2.5%",
              }}
            >
              The WADLA - 2021 workshop had 64 participants. These included
              faculties, Ms/PhD students and other researchers. All the
              participants were from premier institutions such as IITs, IIITs,
              NITs and other premier institutions. Importantly, there were 20
              speakers, of which 16 speakers were invited from outside IIIT Sri
              City. Of these 16 speakers, 10 of them were from academia while 6
              were from industry. Notably, there were 2 speakers from Germany
              and Taiwan. The workshop was held over 5 days; from 22 - 26 Feb
              2021.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Page3;
