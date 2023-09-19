import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../assets/iiits.webp";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const pages = [
  "About",
  "Speakers",
  "News",
  "Archive",
  "Schedule",
  "Login",
  "Register",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "#242B2E",
          color: "white",
          boxShadow: "none",
          borderRadius: "0 0 25px 25px",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                boxShadow: "none",
              }}
            />

            <div
              style={{
                textAlign: "center",
                maxWidth: "360px",
                lineHeight: "1.5",
              }}
            >
              <Typography
                variant="body2"
                component="p"
                sx={{
                  marginBottom: "-8px",
                  marginLeft: "5px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                3rd International Research Workshop on Advances in
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  marginLeft: "25px",
                  display: { xs: "none", md: "flex" },
                }}
              >
                Deep Learning and Applications
              </Typography>
            </div>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) =>
                  page === "Login" ? (
                    <RouterLink
                      to="/login"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                      activeClass="active"
                    >
                      <MenuItem key={page}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </RouterLink>
                  ) : (
                    <Link
                      activeClass="active"
                      to={page === "Login" ? "/login" : page}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    </Link>
                  )
                )}
              </Menu>
            </Box>
            <Avatar
              alt="Remy Sharp"
              src={logo}
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                boxShadow: "none",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WADLA
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) =>
                page === "Login" ? (
                  <RouterLink
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    activeClass="active"
                  >
                    <MenuItem key={page}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </RouterLink>
                ) : (
                  <Link
                    activeClass="active"
                    to={page === "Login" ? "/login" : page}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                )
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar
        sx={{
          bgcolor: "#242B2E",
        }}
      />
    </div>
  );
}
export default ResponsiveAppBar;
