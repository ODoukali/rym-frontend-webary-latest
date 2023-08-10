import React from "react";
import { Box, Button, Container, Typography, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import BlockBordered from "../../components/BlockBordered";

import PresentationImg from "../../images/presentation-img.jpg";
import PlayBtn from "../../components/PlayBtn";

const Presentation = () => {
  return (
    <Container sx={{ py: "150px" }}>
      <Box maxWidth="552px">
        <Typography
          maxWidth="460px"
          variant="sectionTitle"
          component="h2"
          mb="30px"
        >
          Presentation of the Reb Yakov{" "}
          <span className="highlighted">Moshe</span>
        </Typography>
        <BlockBordered mb="50px">
          <Typography maxWidth="522px" variant="large">
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
        maxWidth="960px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="20px"
        boxShadow="-30px 30px 50px rgba(0,0,0,0.2)"
        ml="auto"
        mt="-32px"
        sx={{
          "&::before": {
            content: "''",
            position: "absolute",
            top: "-40px",
            right: "-40px",
            width: "57.3%",
            height: "74.1%",
            bgcolor: "#FCE181",
            borderRadius: "20px",
            zIndex: -1,
          },
        }}
      >
        <img src={PresentationImg} alt="" style={{ borderRadius: "20px" }} />
        <Link to="" component={NavLink} sx={{ position: "absolute" }}>
          <PlayBtn width="120px" height="120px" />
        </Link>
      </Box>
    </Container>
  );
};

export default Presentation;
