import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../components/NavBar";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import Section4 from "../components/Section4";
import { Button } from "@mui/material";
import { Link } from "react-scroll";

const HomePage = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // useEffect(() => {
  //   scrollSpy.update();

  //   Events.scrollEvent.register("begin", function () {
  //     // Scroll has begun
  //   });

  //   Events.scrollEvent.register("end", function (to) {
  //     if (to === "Register") {
  //       // Replace 'sectionId' with the id of the section you're scrolling to
  //       setButtonDisabled(true);
  //     } else {
  //       setButtonDisabled(false);
  //     }
  //   });

  //   return () => {
  //     Events.scrollEvent.remove("begin");
  //     Events.scrollEvent.remove("end");
  //   };
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("Register");
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setButtonDisabled(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="body">
      <ResponsiveAppBar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Section4 />

      <Link
        activeClass="active"
        to="Register"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Button
          variant="contained"
          disabled={buttonDisabled}
          sx={{
            position: "fixed",
            backgroundColor: "",
            color: "#FFFFFF",
            borderRadius: "12px",
            padding: "15px",
            fontSize: "1.0rem",
            bottom: "5%",
            right: "5%",
            zIndex: "1",
            "&:hover": {
              backgroundColor: "#r9adc0",
              color: "#FFFFFF",
            },
            "@media (max-width: 600px)": {
              fontSize: "0.8rem",
            },
          }}
        >
          Register Now
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
