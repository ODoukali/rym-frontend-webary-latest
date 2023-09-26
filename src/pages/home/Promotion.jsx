import { Box, Button, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";
import BlockBordered from "../../components/BlockBordered";

import PresentationImg from "../../images/promotion-img.png";

const Promotion = () => {
  return (
    <Box pb={pxToRem(150)}>
      <Box
        borderRadius={pxToRem(30)}
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
          py={pxToRem(87)}
          px={pxToRem(80)}
        >
          <Box maxWidth={pxToRem(510)}>
            <Typography variant="sectionTitle" component="h2" mb={pxToRem(20)}>
              Promotion here
            </Typography>
            <BlockBordered mb={pxToRem(35)}>
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
