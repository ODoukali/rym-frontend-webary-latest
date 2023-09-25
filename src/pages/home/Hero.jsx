import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { pxToRem } from "px2rem2px";
import Guides from "../../components/Guides";
import Header from "../../components/Header";

import BgImg from "../../images/home-hero-bg.png";

const PageTitleHighlighted = styled(Typography)(() => {
  return {
    position: "relative",
    fontFamily: "PloniBold",
    fontSize: pxToRem(80),
    lineHeight: pxToRem(75),
    "&::after": {
      content: "''",
      width: "104%",
      height: pxToRem(20),
      position: "absolute",
      left: "50%",
      bottom: pxToRem(-3),
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
        borderRadius: pxToRem(40),
      }}
      pt={pxToRem(30)}
      pb={pxToRem(40)}
      minHeight={pxToRem(830)}
    >
      <Header menuVisible />

      <Box
        className="rtl-section header-padding"
        position="relative"
        maxWidth={pxToRem(873)}
        mt={pxToRem(102)}
        mb={pxToRem(120)}
        mx="auto"
        zIndex={1}
      >
        <Typography
          component="h1"
          fontFamily="PloniBold"
          fontSize={pxToRem(80)}
          lineHeight={pxToRem(75)}
          mb={pxToRem(30)}
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
        <Typography fontSize={pxToRem(18)} fontWeight={500} mb={pxToRem(50)}>
          Lorem ipsum dolor amet, consectetur adipiscing elit tempor.
        </Typography>
        <Button variant="white">Our Philosophy</Button>
      </Box>
      <Guides color="rgba(0,0,0,0.03)" zIndex="0" />
    </Box>
  );
};

export default Hero;
