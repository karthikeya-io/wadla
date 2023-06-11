import React from "react";
import BannerCarousel from "./BannerCarousel";
import img1 from "../assets/temp/Academia_all_foreign.jpg";
import img2 from "../assets/temp/download.jpeg";
import img3 from "../assets/temp/Industry_all_c.jpg";

const Page1 = () => {
  const banners = [img1, img2, img3];
  const caption =
    "Embrace the AI Revolution with World-Leading Experts at WADLA 3.0";

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <BannerCarousel banners={banners} />
      <div
        style={{
          width: "100%",
          maxWidth: "calc(100% - 1030px)", // 1000px = 980px of the carousel + 20px margin
          transition: "all 0.5s ease",
          backgroundColor: "#242B2E",
          color: "#FFFFFF",
          borderRadius: "0 0 25px 0",
        }}
      >
        <h2
          style={{
            margin: "0px",
            padding: "35px",
            fontSize: "2.0rem",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "75px",
          }}
        >
          {caption}
        </h2>

        <div>
          <h3
            style={{
              margin: "0px",
              padding: "5px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            From:
            <span
              style={{
                color: "#FFD700",
                opacity: "0.8",
                fontSize: "1.3rem",
              }}
            >
              TBD
            </span>
          </h3>
          <h3
            style={{
              margin: "0px",
              padding: "5px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            To:{" "}
            <span
              style={{
                color: "#FFD700",
                opacity: "0.8",
                fontSize: "1.3rem",
              }}
            >
              TBD
            </span>
          </h3>
          <h3
            style={{
              margin: "0px",
              padding: "5px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Venue:
            <span
              style={{
                color: "#5DA3FA",
                opacity: "0.8",
                fontSize: "1.3rem",
              }}
            >
              {" "}
              Online & IIITS
            </span>
          </h3>
          <h3
            style={{
              margin: "0px",
              padding: "5px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Organized by:
            <span
              style={{
                color: "#5DA3FA",
                opacity: "0.8",
                fontSize: "1.3rem",
              }}
            >
              {" "}
              Indian Institute of Information Technoloyg, Sri City
            </span>
          </h3>
        </div>

        {/* <h3>
          From: Coming Soon...<br/>
          To: Coming Soon...<br/>
          Venue: Online/IIITS<br/>
          Organized by: Indian Institute of Information Technoloyg, Sri City<br/>
        </h3> */}
      </div>
    </div>
  );
};

export default Page1;
