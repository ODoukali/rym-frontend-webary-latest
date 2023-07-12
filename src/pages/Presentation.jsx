import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import SectionTitle from "../components/SectionTitle";
import BlockBordered from "../components/BlockBordered";

import PresentationImg from "../images/presentation-img.png";

const Presentation = () => {
  return (
    <Container sx={{ py: "150px" }}>
      <SectionTitle
        title="Presentation of the Reb Yakov"
        lastWord="Moshe"
        maxWidth="460px"
        component="h2"
        fontSize="45px"
        lineHeight="48px"
        mb="30px"
      />
      <BlockBordered mb="50px">
        <Typography maxWidth="522px" variant="large">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis ullamco.
        </Typography>
      </BlockBordered>
      <Button variant="yellow">Contact us Today</Button>
      <Box
        maxWidth="960px"
        display="flex"
        borderRadius="20px"
        boxShadow="-30px 30px 50px rgba(0,0,0,0.2)"
        ml="auto"
        mt="-32px"
      >
        <img src={PresentationImg} alt="" />
      </Box>
    </Container>
  );
};

export default Presentation;
