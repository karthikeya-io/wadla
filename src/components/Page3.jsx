import React, { useState } from "react";
import { Box } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link, Element } from "react-scroll";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Page3 = () => {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    color += "7f";
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
          <Element name="About">
            <h1
              style={{
                textAlign: "center",
              }}
            >
              About
            </h1>
          </Element>
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
                backgroundColor: "#CAD5E2",
                borderRadius: "25px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#758283",
                borderRadius: "25px",
              },
              background: `radial-gradient(${getRandomColor()} 3px, transparent 4px), radial-gradient(${getRandomColor()} 3px, transparent 4px), linear-gradient(#000 4px, transparent 0), linear-gradient(45deg, transparent 74px, transparent 75px, ${getRandomColor()} 75px, ${getRandomColor()} 76px, transparent 77px, transparent 109px), linear-gradient(-45deg, transparent 75px, transparent 76px, ${getRandomColor()} 76px, ${getRandomColor()} 77px, transparent 78px, transparent 109px), #000`,
              backgroundSize:
                "109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px",
              backgroundPosition:
                "54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px",
            }}
          >
            <Box
              sx={{
                marginTop: "50px",
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
                    Background
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
                    <p>
                      Deep learning has emerged as a powerful tool in artificial
                      intelligence, thanks to advancements in data science and
                      computing power, such as the widespread use of GPUs and
                      TPUs. Its applications are vast, including Automation,
                      Robotics, Natural Language Processing, Computer Vision,
                      Speech Recognition, Object Detection, Remote Sensing,
                      Language Modeling, and Drug Discovery. Deep learning has
                      achieved remarkable feats, surpassing world champions in
                      various games and becoming a highly sought-after skill in
                      the industry. By utilizing deep neural network
                      architectures with multiple layers, it enables data
                      representation with increasing abstraction and can be
                      applied to different learning scenarios, such as
                      supervised, unsupervised, and reinforcement learning.
                    </p>
                    <p>
                      The Workshop on Advances in Deep Learning and Applications
                      (WADLA) was established in 2021. It features a committee
                      of deep learning experts responsible for overseeing the
                      workshop's activities and finalizing the program schedule.
                      WADLA 1.0, held from February 22nd to 26th, 2021,
                      attracted 64 participants, including faculties, Ms/PhD
                      students, and researchers from esteemed institutions like
                      IITs, IIITs, NITs, and other premier organizations. The
                      workshop featured 20 speakers, including 10 from academia
                      and 6 from industry, with 2 international speakers from
                      Germany and Taiwan.
                    </p>
                    <p>
                      Building on the success of WADLA 1.0, WADLA 2.0 took place
                      from February 21st to 25th, 2022. This highly successful
                      workshop aimed to draw researchers, educators, and
                      industry professionals interested in deep learning. Dr.
                      Manish Gupta, Director of Google Research India,
                      inaugurated the event, and Shri Vishnu Chandra, Group Head
                      of the National Informatics Center of the Government of
                      India, delivered the closing address. With 37 speakers,
                      including IIT faculties, industry experts, and government
                      officials, the workshop provided a solid foundation in the
                      fundamentals and advancements of deep learning, showcasing
                      practical applications across various domains. The event
                      fostered interactions between academia and industry,
                      offering participants the chance to demonstrate deep
                      learning capabilities through industry-led hands-on
                      sessions. Attendees included researchers and faculties
                      from around the world, as well as renowned Indian
                      institutions like IITs, NITs, IIITs, IISERs, and central
                      and state universities. Sponsored by DST, the workshop
                      received an overwhelming response, attracting 113
                      participants.
                    </p>
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
                    About WADLA 3.0
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
                    <p>
                      The upcoming WADLA 3.0 signifies a continued commitment to
                      providing participants with the latest advancements and
                      trends in deep learning. By incorporating more advanced
                      topics, the workshop aims to stay at the forefront of this
                      rapidly evolving field.
                    </p>
                    <p>
                      Scheduled from December 11th to 16th, 2023, WADLA 3.0 will
                      deliver an enhanced learning experience for researchers,
                      educators, and industry professionals interested in deep
                      learning. Building upon the success of its previous
                      editions, the workshop will offer high-quality content,
                      practical hands-on sessions, and opportunities for
                      industry-academia interactions.
                    </p>
                    <p>
                      Participants can expect an updated program schedule that
                      covers cutting-edge topics and techniques in deep
                      learning. The workshop will delve into advanced
                      architectures, algorithms, and applications that reflect
                      the latest research advancements and industry demands. By
                      addressing these advanced topics, WADLA 3.0 aims to equip
                      participants with the skills and knowledge required to
                      tackle complex challenges in their research, teaching, and
                      industry projects.
                    </p>
                    <p>
                      The expert committee, in collaboration with leading
                      experts and practitioners, will curate a comprehensive
                      agenda for WADLA 3.0, ensuring coverage of a wide range of
                      advanced topics. These may include emerging deep learning
                      architectures, novel optimization algorithms, ethical
                      considerations in deep learning, advanced computer vision
                      and natural language processing techniques, and
                      specialized applications in domains like healthcare,
                      finance, and robotics.
                    </p>
                    <p>
                      Participants can also look forward to hands-on sessions
                      that provide practical experience
                    </p>
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
                    Topics to be Covered
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
                    <p>
                      WADLA 3.0 will cover a wide range of topics related to
                      deep learning
                    </p>
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          1. Pre-Deep Learning Essentials
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
                          <ul>
                            <li>
                              Activation Functions (e.g., ReLU, Sigmoid, Tanh)
                            </li>
                            <li>
                              Loss Functions (e.g., Mean Squared Error,
                              Cross-Entropy)
                            </li>
                            <li>Backpropagation</li>
                            <li>
                              Optimization Algorithms (e.g., Stochastic Gradient
                              Descent, Adam)
                            </li>
                            <li>
                              Regularization Techniques (e.g., Dropout, L1/L2
                              Regularization)
                            </li>
                            <li>Data Preprocessing and Augmentation</li>
                            <li>
                              Evaluation Metrics (e.g., Accuracy, Precision,
                              Recall, F1 Score)
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          2. Foundations of Deep Learning
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
                          <ul>
                            <li>Convolutional Neural Networks</li>
                            <li>
                              Variants of Convolutional Neural Networks (e.g.,
                              VGG, ResNet, Inception)
                            </li>
                            <li>Sequence Models (e.g., GRU, BiLSTM)</li>
                            <li>
                              Attention Mechanisms (e.g., Self-Attention,
                              Multi-Head Attention)
                            </li>
                            <li>
                              Unsupervised Learning (e.g., Autoencoders,
                              Variational Autoencoders)
                            </li>
                            <li>Graph Neural Networks</li>
                            <li>Deep Reinforcement Learning</li>
                            <li>GANs (Generative Adversarial Networks)</li>
                            <li>Object Detection and Localization</li>
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          3. Advances in Deep Learning
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
                          <ul>
                            <li>
                              Transformer Architecture Variants (e.g., GPT, T5)
                            </li>
                            <li>
                              Pretrained Language Models (e.g., RoBERTa, XLNet)
                            </li>
                            <li>Graph Convolutional Networks (GCN)</li>
                            <li>Meta-Learning and Few-Shot Learning</li>
                            <li>Self-Supervised Learning</li>
                            <li>Federated Learning</li>
                            <li>
                              Explainability and Interpretability in Deep
                              Learning
                            </li>
                            <li>
                              Metaheuristic Optimization for Deep Learning
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          4. Recent Trends in Deep Learning:
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
                          <ul>
                            <li>
                              Generative Models for Text and Images (e.g.,
                              StyleGAN, VQ-VAE)
                            </li>
                            <li>Contrastive Learning</li>
                            <li>Multi-modal Learning</li>
                            <li>Adversarial Attacks and Defenses</li>
                            <li>Continual Learning</li>
                            <li>Model Compression and Quantization</li>
                            <li>
                              Self-Supervised Video Representation Learning
                            </li>
                            <li>
                              Reinforcement Learning in Real-World Environments
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          5. Deep Learning Applications:
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
                          <ul>
                            <li>
                              Medical Image Analysis (e.g., Diagnosis,
                              Segmentation)
                            </li>
                            <li>Autonomous Driving</li>
                            <li>Crop Yield Prediction</li>
                            <li>Satellite Image Analysis</li>
                            <li>Personalized Medicine</li>
                            <li>Sentiment Analysis and Opinion Mining</li>
                            <li>Chatbots and Virtual Assistants</li>
                            <li>Video Game AI</li>
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          6. Deep Learning Frameworks and Packages
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
                          <ul>
                            <li>ONNX (Open Neural Network Exchange)</li>
                            <li>MXNet</li>
                            <li>Caffe</li>
                            <li>Theano</li>
                            <li>PyTorch Lightning</li>
                            <li>TensorFlow Extended (TFX)</li>
                            <li>Fastai</li>
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          7. Hands-on Sessions on Advanced Topics
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
                          <ul>
                            <li>Neural Style Transfer</li>
                            <li>Reinforcement Learning with OpenAI Gym</li>
                            <li>Sequence-to-Sequence Models</li>
                            <li>
                              Generative Adversarial Networks (GAN) Training
                            </li>
                            <li>Fine-tuning Pretrained Models</li>
                            <li>Hyperparameter Tuning</li>
                            <li>
                              Deploying Deep Learning Models to Production
                            </li>
                            <li>Transfer Learning for Computer Vision Tasks</li>
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          8. Trends in Deep Learning Research
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
                          <ul>
                            <li>Meta-Learning for Few-Shot Learning</li>
                            <li>Explainable AI for Deep Learning Models</li>
                            <li>
                              Continual Learning and Catastrophic Forgetting
                            </li>
                            <li>Robustness and Security in Deep Learning</li>
                            <li>Deep Learning on Edge Devices</li>
                            <li>
                              Federated Learning in Privacy-Preserving Settings
                            </li>
                            <li>Neural Architecture Search</li>
                            <li>
                              Deep Learning for Graphs and Structured Data
                            </li>
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <p>
                      These topics will provide participants with a
                      comprehensive understanding of deep learning, its
                      foundations, advanced techniques, and practical
                      applications across various sectors. Hands-on sessions
                      will allow participants to gain practical experience and
                      apply their knowledge to real-world scenarios. The
                      workshop aims to equip participants with the skills
                      necessary to lead successful deep learning projects in
                      both academic and industry settings.
                    </p>
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
                    Special Sessions
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
                    <p>
                      This provides an opportunity to delve deeper into a
                      particular area of deep learning and address specific
                      challenges or emerging trends. Here are a few ideas for
                      special sessions:
                    </p>
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          1. Explainable AI and Interpretable Deep Learning
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
                          Explore techniques and methods for understanding and
                          interpreting the decisions made by deep learning
                          models, with a focus on transparency, fairness, and
                          accountability.
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          2. Deep Learning for Time Series Analysis
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
                          Discuss the application of deep learning models, such
                          as recurrent neural networks (RNNs) and
                          attention-based models, for time series forecasting,
                          anomaly detection, and sequence generation.
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          3. Generative Adversarial Networks (GANs) and Creative
                          AI
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
                          Explore the principles and applications of GANs for
                          generating realistic images, videos, and other
                          creative outputs, as well as the challenges and
                          ethical considerations involved.
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          4. Deep Learning in Natural Language Generation
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
                          Dive into the advancements and applications of deep
                          learning in natural language generation tasks, such as
                          text summarization, machine translation, dialogue
                          systems, and language generation models.
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          5. Deep Learning for Healthcare
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
                          Focus on the application of deep learning techniques
                          for medical image analysis, disease diagnosis, patient
                          monitoring, drug discovery, and personalized medicine,
                          addressing challenges and potential solutions in the
                          healthcare domain.
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          6. Deep Learning for Autonomous Systems
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
                          Discuss the use of deep learning in autonomous
                          vehicles, drones, robotics, and other autonomous
                          systems, covering perception, control, planning, and
                          decision-making aspects.
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          7. Federated Learning and Privacy-Preserving Deep
                          Learning
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
                          Examine techniques that enable training of deep
                          learning models across distributed data sources while
                          preserving data privacy, security, and
                          confidentiality.
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          8. Deep Learning for Edge Computing
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
                          Explore strategies and optimizations for deploying
                          deep learning models on resource-constrained devices
                          and edge computing platforms, enabling real-time
                          inference and reducing reliance on cloud
                          infrastructure.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <p>
                      These special sessions can provide focused insights and
                      discussions on specific topics of interest within the deep
                      learning domain. They offer participants the opportunity
                      to deepen their knowledge, engage in specialized
                      discussions, and explore the practical applications and
                      challenges related to these topics.
                    </p>
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
                    Intended Participants
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
                    <p>
                      WADLA 3.0 aims to cater to the needs and interests of
                      various participants, including:
                    </p>
                    <ul>
                      <li>
                        Research Students (BTech with
                        Research/MS/PhD/Equivalent)
                      </li>
                      <li>Faculties and Educators</li>
                      <li>R & D and Industry Persons</li>
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
                    Goal of the workshop
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
                    <p>
                      The goal of the workshop is to provide participants with a
                      comprehensive understanding of the fundamental concepts,
                      advanced techniques, and practical applications of deep
                      learning. By exploring these topics, the workshop aims to
                      achieve the following objectives:
                    </p>
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          Foundation Building
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
                          By covering pre-deep learning essentials and the
                          foundations of deep learning, participants will
                          develop a strong understanding of key concepts,
                          algorithms, and methodologies. This knowledge will
                          serve as a solid foundation for their deep learning
                          journey.
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          Advanced Techniques
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
                          Participants will learn about the latest advances in
                          deep learning, including transformer architectures,
                          attention mechanisms, generative models, reinforcement
                          learning, and more. This exposure to cutting-edge
                          techniques will help participants stay up-to-date with
                          the rapidly evolving field.
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          Practical Applications
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
                          {" "}
                          By exploring deep learning applications in various
                          sectors such as healthcare, automation, agriculture,
                          and natural language processing, participants will
                          understand how to apply deep learning techniques to
                          real-world problems. The workshop will highlight case
                          studies and examples to demonstrate the practical
                          impact of deep learning across industries.
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          Hands-on Experience
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
                          Hands-on sessions on advanced topics and deep learning
                          frameworks will provide participants with practical
                          experience in implementing and deploying deep learning
                          models. Participants will gain valuable insights into
                          best practices, tools, and libraries, enabling them to
                          undertake deep learning projects with confidence.
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          Industry-Academia Interactions:
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
                          The workshop aims to facilitate interactions between
                          academia and industry professionals. By featuring
                          speakers from both domains and organizing industry-led
                          sessions, participants will gain insights into
                          real-world applications and industry expectations.
                          This interaction will foster collaboration and
                          knowledge exchange between researchers and industry
                          practitioners.
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
                            color: "#EF5354",
                            fontFamily: "comic neue",
                          }}
                        >
                          Trends and Research Directions
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
                          Exploring trends in deep learning research will
                          familiarize participants with the latest research
                          directions, emerging techniques, and open challenges.
                          Participants will gain an understanding of the broader
                          landscape of deep learning and the potential areas of
                          future growth and innovation.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <p>
                      Overall, the goal of covering these topics is to equip
                      participants with a well-rounded understanding of deep
                      learning, enabling them to apply these techniques
                      effectively in their academic pursuits, industry projects,
                      and research endeavors.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
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
            maxHeight: {
              lg: "550px",
              xs: "auto",
            },
            height: {
              lg: "96%",
            },
            textAlign: "center",
            padding: "2.5% 2.5% 1% 2.5%",
          }}
        >
          <Element name="Archive">
            <h1>Archive</h1>
          </Element>
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
                href="https://second.wadla.in/"
                target="_blank"
              >
                Wadla 2.0 - 2022 {<LaunchIcon />}
              </a>
            </h2>
            <Box
              sx={{
                height: "63%",
                padding: "0 2.5%",
                overflowY: "auto",

                "&::-webkit-scrollbar": {
                  width: ".6em",
                },
                "&::-webkit-scrollbar-track": {
                  boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                  webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
                  backgroundColor: "#CAD5E2",
                  borderRadius: "25px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#758283",
                  borderRadius: "25px",
                },
              }}
            >
              <p
                style={{
                  textAlign: "justify",
                  fontSize: "0.85rem",
                }}
              >
                WADLA 2.0 was a highly successful workshop aimed at researchers,
                educators, and industry professionals interested in deep
                learning. The event was inaugurated by Dr. Manish Gupta,
                Director of Google Research India, and valedicted by Shri Vishnu
                Chandra, Group Head of the National Informatics Center of the
                Government of India. The workshop provided a strong foundation
                in the basics and advancements of deep learning, with practical
                applications across various domains. The workshop also
                facilitated academia-industry interactions through the
                participation of leaders from diverse fields and included
                industry-led hands-on sessions for participants to demonstrate
                deep learning capabilities. 37 speakers, including 15 IIT
                faculties, 13 industry experts, 2 from the Government of India,
                and 7 international speakers, were present at the event.
                Researchers and faculties from around the world, including the
                UK, Israel, South Korea, Mexico, Denmark, Morocco, and Sudan, as
                well as from IITs, NITs, IIITs, IISERs, and central and state
                universities, participated in the workshop. The event was
                sponsored by DST and received an overwhelming response with 113
                participants in attendance.
              </p>
            </Box>
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
