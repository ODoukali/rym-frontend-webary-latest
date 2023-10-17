import { useEffect, useState } from "react";
import { Box, Button, Skeleton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { pxToRem } from "px2rem2px";
import Guides from "../../components/Guides";
import Header from "../../components/Header";

import BgImg from "../../images/home-hero-bg.png";
import TreeImg from "../../images/footer-tree.svg";

const PageTitleHighlighted = styled(Typography)(({ theme }) => {
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
      bottom: pxToRem(12),
      transform: "translateX(-50%)",
      backgroundColor: "rgba(252,225,129,0.5)",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
      lineHeight: "50px",
      "&::after": {
        bottom: "6px",
      },
    },
  };
});

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box
      position="relative"
      pt={pxToRem(30)}
      pb={pxToRem(40)}
      minHeight={pxToRem(835)}
      sx={{
        backgroundImage: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: { xs: 0, md: pxToRem(40) },
        "&::before": {
          content: "''",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-125%)",
          background: `url(${TreeImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          width: pxToRem(520),
          height: pxToRem(702),
          opacity: 0.4,
          "@media(max-width: 1300px)": {
            left: "30px",
            transform: "none",
          },
          "@media(max-width: 899px)": {
            left: "50%",
            transform: "translateX(-50%)",
          },
        },
      }}
    >
      <Header menuVisible />

      <Box
        className="rtl-section header-padding"
        position="relative"
        maxWidth={pxToRem(873)}
        mt={pxToRem(102)}
        mb={pxToRem(120)}
        mx={{ md: "auto" }}
        ml="auto"
        px={{ xs: "20px", sm: "30px", md: 0 }}
        zIndex={1}
      >
        {loading ? (
          [...Array(3).keys()].map((val) => (
            <Skeleton
              key={val}
              variant="text"
              animation="wave"
              sx={{ fontSize: "50px" }}
            />
          ))
        ) : (
          <Typography
            component="h1"
            fontFamily="PloniBold"
            fontSize={{ xs: "50px", sm: pxToRem(80) }}
            lineHeight={{ xs: "50px", sm: pxToRem(75) }}
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
            <PageTitleHighlighted component="span">
              יעדן מצב
            </PageTitleHighlighted>{" "}
            פון א מענטשנס לעבן…
          </Typography>
        )}
        <Typography fontSize={pxToRem(18)} fontWeight={500} mb={pxToRem(50)}>
          Lorem ipsum dolor amet, consectetur adipiscing elit tempor.
        </Typography>
        {loading ? (
          <Skeleton
            variant="rounded"
            animation="wave"
            width={211}
            height={57}
          />
        ) : (
          <Button variant="white">Our Philosophy</Button>
        )}
      </Box>
      <Guides color="rgba(0,0,0,0.03)" zIndex="0" />
    </Box>
  );
};

export default Hero;
