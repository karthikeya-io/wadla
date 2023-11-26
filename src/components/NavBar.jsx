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
import logo from "../assets/WADLA-logo.webp";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

const settings = ["Logout"];

function ResponsiveAppBar() {
  const [pages, setPages] = useState([
    "About",
    "Speakers",
    "News",
    "Archive",
    "Schedule",
    "Nearest-Attractions",
    "Login",
    "Register",
  ]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("timeOfLogin");
    window.location.reload();
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setPages([
        "About",
        "Speakers",
        "News",
        "Archive",
        "Schedule",
        "Nearest-Attractions",
        "Home",
      ]);
    }
  }, []);

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
              alt="WADLA Logo"
              src={logo}
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                width: "70px",
                height: "70px",
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
                  display: { xs: "none", lg: "flex" },
                }}
              >
                3rd International Research Workshop on Advances in
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  marginLeft: "25px",
                  display: { xs: "none", lg: "flex" },
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
                  page === "Login" ||
                  page === "Home" ||
                  page === "Nearest-Attractions" ? (
                    <RouterLink
                      to={`${"/" + page}`}
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
                {user ? (
                  <RouterLink
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    activeClass="active"
                  >
                    <MenuItem onClick={logOut}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </RouterLink>
                ) : (
                  <> </>
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
                page === "Login" ||
                page === "Home" ||
                page === "Nearest-Attractions" ? (
                  <RouterLink
                    to={`${"/" + page}`}
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
              {user ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt={user.name}
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting}
                        onClick={
                          setting == "Logout" ? logOut : handleCloseUserMenu
                        }
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <> </>
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
