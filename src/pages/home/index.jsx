import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import IconBtn from "../../components/IconBtn";
import { Link } from "react-router-dom";
import LinkBtn from "../../components/LinkBtn";

import BgImg from "../../images/home-hero-bg.png";
import Logo from "../../images/logo.svg";
import User from "../../images/user.svg";
import Search from "../../images/search.svg";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 30px)",
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "40px",
      }}
      margin=" 30px 30px 0 30px"
      paddingY={5}
      minHeight="830px"
    >
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1380px"
        padding="0 30px"
        margin="auto"
      >
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <Stack flexDirection="row" alignItems="center">
          <Stack flexDirection="row" alignItems="center" columnGap="56px">
            <LinkBtn to="/" title="Main" />
            <LinkBtn to="/philosophy" title="Philosophy" />
            <LinkBtn to="/blog" title="Blog" />
            <LinkBtn to="/parsha" title="Parsha" />
            <LinkBtn to="/qa" title="Q&A" />
            <LinkBtn to="/contact" title="Contact" />
          </Stack>
          <Stack
            flexDirection="row"
            alignItems="center"
            columnGap="15px"
            ml="60px"
          >
            <IconBtn icon={User} />
            <IconBtn icon={Search} />
          </Stack>
        </Stack>
      </Stack>

      <Box maxWidth="785px" margin="108px auto 148px">
        <Typography
          component="h1"
          fontSize="80px"
          fontWeight="bold"
          lineHeight="75px"
          letterSpacing="-2px"
          mb="30px"
        >
          ‘ It doesn’t matter where you’re going, it’s who you have beside you.
          ’
        </Typography>
        <Typography>
          Lorem ipsum dolor amet, consectetur adipiscing elit tempor.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
