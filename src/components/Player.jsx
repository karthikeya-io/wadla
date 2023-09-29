import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router-dom";
import { EventList } from "../content/EventList";
import { Box } from "@mui/material";

const Player = ({ videoId }) => {
  let { eventid, dayid } = useParams();
  if (!eventid) {
    eventid = EventList[0].id;
    dayid = EventList[0].days[0].id;
  }
  const obj1 = EventList.find((o) => o.id === parseInt(eventid));
  const obj = obj1.days.find((o) => o.id === parseInt(dayid));
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const getVideoId = (videoLink) => {
    const url = new URL(videoLink);
    const searchParams = new URLSearchParams(url.search);
    return searchParams.get("v") || null;
  };

  const vid = getVideoId(obj.videoId);
  console.log(vid);
  return vid ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: {
          xs: "100%",
          md: "100%",
        },
        margin: "0",
        padding: "20px",
        height: "91vh",
        background: "white",
      }}
    >
      <h2>{obj.name}</h2>
      <YouTube videoId={vid} opts={opts} />
    </Box>
  ) : (
    <h1>Select an event to play a video.</h1>
  );
};

export default Player;
