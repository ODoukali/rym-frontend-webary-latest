import { Box, Button, Container, Stack, Typography } from "@mui/material";
import BlockBordered from "../../components/BlockBordered";

import PhilosophyImg from "../../images/philosophy-img.png";

const Philosophy = () => {
  return (
    <Container sx={{ pb: "222px" }}>
      <Stack flexDirection="row" alignItems="center" gap="80px">
        <Box
          position="relative"
          maxWidth="500px"
          display="flex"
          borderRadius="20px"
          boxShadow="30px 30px 50px rgba(0,0,0,0.2)"
          sx={{
            "&::before": {
              content: "''",
              position: "absolute",
              left: "-40px",
              bottom: "-40px",
              width: "88%",
              height: "74.1%",
              bgcolor: "#FCE181",
              borderRadius: "20px",
              zIndex: -1,
            },
          }}
        >
          <img src={PhilosophyImg} alt="" />
        </Box>
        <Box>
          <Typography
            maxWidth="460px"
            variant="sectionTitle"
            component="h2"
            mb="30px"
          >
            Philosophy of our valuable <span className="highlighted">work</span>
          </Typography>
          <BlockBordered mb="50px">
            <Typography maxWidth="522px" variant="large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis ullamco.
            </Typography>
          </BlockBordered>
          <Button variant="green">Contact us Today</Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default Philosophy;
