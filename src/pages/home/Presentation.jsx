import React from "react";
import { Box, Button, Container, Typography, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import BlockBordered from "../../components/BlockBordered";
import PlayBtn from "../../components/PlayBtn";

import PresentationImg from "../../images/presentation-img.jpg";
import { ReactComponent as Play } from "../../images/play-video.svg";

const Presentation = () => {
  return (
    <Container sx={{ pb: pxToRem(150) }}>
      <Box maxWidth={pxToRem(552)}>
        <Typography
          maxWidth={pxToRem(460)}
          variant="sectionTitle"
          component="h2"
          mb={pxToRem(30)}
        >
          Presentation of the Reb Yakov{" "}
          <span className="highlighted">Moshe</span>
        </Typography>
        <BlockBordered mb={pxToRem(50)}>
          <Typography maxWidth={pxToRem(522)} variant="large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis ullamco.
          </Typography>
        </BlockBordered>
        <Button variant="yellow" sx={{ position: "relative", zIndex: 1 }}>
          Learn More
        </Button>
      </Box>
      <Box
        position="relative"
        maxWidth={pxToRem(960)}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius={pxToRem(20)}
        boxShadow={`${pxToRem(-30)} ${pxToRem(30)} ${pxToRem(
          50
        )} rgba(0,0,0,0.2)`}
        ml="auto"
        mt={pxToRem(-32)}
        sx={{
          "&::before": {
            content: "''",
            position: "absolute",
            top: pxToRem(-40),
            right: pxToRem(-40),
            width: "57.3%",
            height: "74.1%",
            bgcolor: "#FCE181",
            borderRadius: pxToRem(20),
            zIndex: -1,
          },
        }}
      >
        <img
          src={PresentationImg}
          alt=""
          style={{ borderRadius: pxToRem(20) }}
        />
        <Link to="" component={NavLink} sx={{ position: "absolute" }}>
          <PlayBtn width={pxToRem(120)} height={pxToRem(120)}>
            <Play color="#026670" style={{ marginLeft: "6%" }} />
          </PlayBtn>
        </Link>
      </Box>
    </Container>
  );
};

export default Presentation;
