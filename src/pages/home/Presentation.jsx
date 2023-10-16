import React from "react";
import { Box, Button, Container, Typography, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import BlockBordered from "../../components/BlockBordered";
import PlayBtn from "../../components/PlayBtn";

import PresentationImg from "../../images/presentation-img.jpg";
import { ReactComponent as Play } from "../../images/play.svg";

const Presentation = () => {
  return (
    <Container
      disableGutters
      sx={{ pb: { xs: "80px", sm: "130px", md: pxToRem(150) } }}
    >
      <Box maxWidth={pxToRem(552)}>
        <Typography
          maxWidth={pxToRem(460)}
          variant="sectionTitle"
          component="h2"
          mb={{ xs: "20px", sm: pxToRem(30) }}
        >
          Presentation of the Reb Yakov{" "}
          <span className="highlighted">Moshe</span>
        </Typography>
        <BlockBordered mb={{ xs: "40px", sm: pxToRem(50) }}>
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
        mt={{ xs: "70px", sm: "80px", md: pxToRem(-32) }}
        mr={{ xs: 0, sm: "30px", md: 0 }}
        sx={{
          "&::before": {
            content: "''",
            position: "absolute",
            top: { xs: "-30px", md: pxToRem(-40) },
            right: { xs: "-25px", sm: "-30px", md: pxToRem(-40) },
            width: { xs: "55%", sm: pxToRem(550) },
            height: { xs: "75%", sm: pxToRem(400) },
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
          <PlayBtn
            width={{ xs: "60px", sm: pxToRem(120) }}
            height={{ xs: "60px", sm: pxToRem(120) }}
          >
            <Play
              color="#026670"
              width={pxToRem(20)}
              height={pxToRem(24)}
              style={{ marginLeft: "6%" }}
            />
          </PlayBtn>
        </Link>
      </Box>
    </Container>
  );
};

export default Presentation;
