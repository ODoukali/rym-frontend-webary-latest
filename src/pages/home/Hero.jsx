import React from "react";
import { Box, Button, Stack, Typography, Link as MuiLink } from "@mui/material";
import { styled } from "@mui/system";
import IconBtnCircular from "../../components/IconBtnCircular";
import { Link } from "react-router-dom";
import LinkBtn from "../../components/LinkBtn";
import Guides from "../../components/Guides";
import MenuDropdown from "../../components/menuDropdown/MenuDropdown";
import MenuDropdownLink from "../../components/menuDropdown/MenuDropdownLink";

import BgImg from "../../images/home-hero-bg.png";
import Logo from "../../images/logo.svg";
import { ReactComponent as User } from "../../images/user.svg";
import { ReactComponent as Search } from "../../images/search.svg";

const PageTitleHighlighted = styled(Typography)(() => {
  return {
    position: "relative",
    fontFamily: "FbJoker",
    fontSize: "80px",
    fontWeight: "900",
    lineHeight: "75px",
    "&::after": {
      content: "''",
      width: "104%",
      height: "20px",
      position: "absolute",
      left: "50%",
      bottom: "-3px",
      transform: "translateX(-50%)",
      backgroundColor: "rgba(252,225,129,0.5)",
    },
  };
});

const Hero = () => {
  return (
    <Box
      position="relative"
      sx={{
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "40px",
      }}
      mx={{ lg: "30px", xs: "24px" }}
      paddingY={5}
      minHeight="830px"
    >
      <Stack
        position="relative"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1380px"
        padding="0 30px"
        margin="auto"
        zIndex={1}
      >
        <Stack flexDirection="row" alignItems="center" columnGap="40px">
          <Stack flexDirection="row" alignItems="center" columnGap="15px">
            <IconBtnCircular>
              <User />
            </IconBtnCircular>
            <IconBtnCircular>
              <Search />
            </IconBtnCircular>
          </Stack>
          <Stack flexDirection="row" alignItems="center" columnGap="56px">
            <LinkBtn to="/" title="Main" />
            <MenuDropdown title="Philosophy">
              <MenuDropdownLink to="/course">Submenu link 01</MenuDropdownLink>
              <MenuDropdownLink to="/">Another link 02</MenuDropdownLink>
              <MenuDropdownLink to="/">Submenu link 03</MenuDropdownLink>
              <MenuDropdownLink to="/">Another link 04</MenuDropdownLink>
            </MenuDropdown>
            <LinkBtn to="/blog" title="Blog" />
            <LinkBtn to="/parsha" title="Parsha" />
            <LinkBtn to="/qa" title="Q&A" />
            <LinkBtn to="/contact" title="Contact" />
          </Stack>
        </Stack>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </Stack>

      <Box
        className="rtl-section"
        position="relative"
        maxWidth="873px"
        margin="108px auto 148px"
        zIndex={1}
      >
        <Typography
          component="h1"
          fontFamily="FbJoker"
          fontSize="80px"
          fontWeight={900}
          lineHeight="75px"
          mb="30px"
        >
          דא ווערן{" "}
          <PageTitleHighlighted component="span">
            דורכגערעדט
          </PageTitleHighlighted>{" "}
          די וויכטיגסטע{" "}
          <PageTitleHighlighted component="span">
            יסודות אין לעבן,
          </PageTitleHighlighted>{" "}
          וועלכע קומען צוניץ אין{" "}
          <PageTitleHighlighted component="span">יעדן מצב</PageTitleHighlighted>{" "}
          פון א מענטשנס לעבן…
        </Typography>
        <Typography fontSize="18px" fontWeight={500} mb="50px">
          Lorem ipsum dolor amet, consectetur adipiscing elit tempor.
        </Typography>
        <Button variant="white">Our Philosophy</Button>
      </Box>
      <Guides color="rgba(0,0,0,0.03)" zIndex="0" />
    </Box>
  );
};

export default Hero;
