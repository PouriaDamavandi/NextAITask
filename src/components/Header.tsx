import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoSVG from "../img/logo.svg";
import typoLogo from "../img/typography.svg";
import styled from "styled-components";

const pages = ["خانه", "درباره ما", "مارکت  API"];
const Img = styled.img`
  margin: 4px 2px;
  position: relative;
`;
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="absolute"
      dir="rtl"
      sx={{
        bgcolor: "white",
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
        fontFamily: "Vazirmatn",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ mr: 8, display: "flex" }}>
          <Img src={LogoSVG} alt={"logo"} />
          <Img src={typoLogo} alt="typography logo" />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}></MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  display: "block",
                  color: "#9b9b9b",
                  mr: 6,
                  ml: -4,
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  fontFamily: "Vazirmatn",
                  fontWeight: "400",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Home">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              ></IconButton>
            </Tooltip>
          </Box>
          <Button
            size="medium"
            sx={{
              width: "90px",
              fontSize: "1rem",
              display: "flex",
              fontFamily: "Vazirmatn",
              marginLeft: 2,
            }}
          >
            ثبت نام
          </Button>
          <Button
            variant="contained"
            size="medium"
            sx={{
              width: "90px",
              borderRadius: "40px",
              fontSize: "1rem",
              display: "flex",
              ml: 9,
              fontFamily: "Vazirmatn",
            }}
          >
            ورود
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
