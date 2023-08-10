import { Box, Button, Typography } from "@mui/material";
import BlockBordered from "../../components/BlockBordered";

import PresentationImg from "../../images/promotion-img.png";

const Promotion = () => {
  return (
    <Box pb="150px" mx="30px">
      <Box
        borderRadius="30px"
        overflow="hidden"
        sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        <Box
          display="flex"
          sx={{ "& img": { width: "100%", objectFit: "cover" } }}
        >
          <img src={PresentationImg} alt="" />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          bgcolor="#FCE181"
          py="87px"
          px="80px"
        >
          <Box maxWidth="510px">
            <Typography variant="sectionTitle" component="h2" mb="20px">
              Promotion here
            </Typography>
            <BlockBordered mb="35px">
              <Typography variant="large" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt et dolore.
              </Typography>
            </BlockBordered>
            <Button variant="green">Contact us Today</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Promotion;
