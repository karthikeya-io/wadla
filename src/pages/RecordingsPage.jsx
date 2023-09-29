import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { EventList } from "./../EventList";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Player from "./../components/Player";
import { useParams, useNavigate } from "react-router-dom";

const drawerWidth = 340;

function RecordingsPage(props) {
  const navigate = useNavigate();
  // const {id} = useParams();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ bgcolor: "#242B2E" }} />
      {EventList.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              bgcolor: "#ecd9dd",
            }}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {item.days.map((x) => (
                <ListItem key={x.id} disablePadding>
                  <ListItemButton>
                    {/* <ListItemText primary={x.title} onClick={navigate(`/event/${x.id}`)} /> */}
                    <Link
                      to={`/event/${item.id}/${x.id}`}
                      style={{
                        width: "100%",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <ListItemText primary={x.name} />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        width: {
          sx: "100%",
        },
        overflow: "hidden",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          marginTop: "64px",
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
          },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ bgcolor: "#242B2E" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              marginTop: "64px",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            margin: "45px 0 0 0",
            padding: "0",
          },
        }}
      >
        {/* <Toolbar /> */}
        {/* <Routes>
                    <Route path="/event/:id" element={<Player />} />
                    </Routes> */}
        <Player />
      </Box>
    </Box>
  );
}

RecordingsPage.propTypes = {
  window: PropTypes.func,
};

export default RecordingsPage;
