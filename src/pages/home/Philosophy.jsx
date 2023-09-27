import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";
import BlockBordered from "../../components/BlockBordered";

import PhilosophyImg from "../../images/philosophy-img.png";

const Philosophy = () => {
  return (
    <Container disableGutters sx={{ mb: pxToRem(190) }}>
      <Stack flexDirection="row" alignItems="center" gap="80px">
        <Box
          position="relative"
          maxWidth={pxToRem(500)}
          display="flex"
          borderRadius={pxToRem(20)}
          boxShadow={`${pxToRem(30)} ${pxToRem(30)} ${pxToRem(
            50
          )} rgba(0,0,0,0.2)`}
          flexShrink={0}
          sx={{
            "&::before": {
              content: "''",
              position: "absolute",
              left: pxToRem(-40),
              bottom: pxToRem(-40),
              width: "88%",
              height: "74.1%",
              bgcolor: "#FCE181",
              borderRadius: pxToRem(20),
              zIndex: -1,
            },
          }}
        >
          <img src={PhilosophyImg} alt="" />
        </Box>
        <Box>
          <Typography
            maxWidth={pxToRem(460)}
            variant="sectionTitle"
            component="h2"
            mb={pxToRem(30)}
          >
            Philosophy of our valuable <span className="highlighted">work</span>
          </Typography>
          <BlockBordered mb={pxToRem(50)}>
            <Typography maxWidth={pxToRem(522)} variant="large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis ullamco.
            </Typography>
          </BlockBordered>
          <Stack flexDirection="row" alignItems="center" gap={pxToRem(20)}>
            <Button variant="green">Contact us Today</Button>
            <Button variant="outlined">Need 1 on 1 help?</Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Philosophy;
