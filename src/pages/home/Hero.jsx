import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Guides from "../../components/Guides";
import Header from "../../components/Header";

import BgImg from "../../images/home-hero-bg.png";

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
      pt="30px"
      pb={5}
      minHeight="830px"
    >
      <Header menuVisible />

      <Box
        className="rtl-section header-padding"
        position="relative"
        maxWidth="873px"
        margin="102px auto 120px"
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
