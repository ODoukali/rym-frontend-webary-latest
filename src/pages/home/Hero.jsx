import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import IconBtnCircular from "../../components/IconBtnCircular";
import { Link } from "react-router-dom";
import LinkBtn from "../../components/LinkBtn";
import Guides from "../../components/Guides";
import MenuDropdown from "../../components/menuDropdown/MenuDropdown";
import MenuDropdownLink from "../../components/menuDropdown/MenuDropdownLink";

import BgImg from "../../images/home-hero-bg.png";
import { ReactComponent as Logo } from "../../images/logo.svg";
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
      py={5}
      minHeight="830px"
    >
      <Box
        position="fixed"
        width="100%"
        left="50%"
        zIndex={2}
        sx={{ transform: "translateX(-50%)" }}
      >
        <Stack
          maxWidth="1380px"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          p="0 30px"
          m="0 auto"
        >
          <Stack flexDirection="row" alignItems="center" columnGap="40px">
            <Stack flexDirection="row" alignItems="center" columnGap="15px">
              <IconBtnCircular>
                <Search />
              </IconBtnCircular>
            </Stack>
            <Stack flexDirection="row" alignItems="center" columnGap="56px">
              <LinkBtn to="/" title="Main" />
              <MenuDropdown title="Philosophy">
                <MenuDropdownLink to="/course">
                  Submenu link 01
                </MenuDropdownLink>
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
          <Link to="/" style={{ display: "flex" }}>
            <Logo color="#333" />
          </Link>
        </Stack>
      </Box>

      <Box
        className="rtl-section"
        position="relative"
        maxWidth="873px"
        margin="160px auto 120px"
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
