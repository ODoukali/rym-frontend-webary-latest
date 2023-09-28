import { Box, Button, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";
import BlockBordered from "../../components/BlockBordered";

import PresentationImg from "../../images/promotion-img.png";

const Promotion = () => {
  return (
    <Box pb={{ xs: "80px", sm: "120px", md: pxToRem(150) }}>
      <Box
        borderRadius={{ xs: 0, md: pxToRem(30) }}
        overflow="hidden"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        }}
      >
        <Box
          display="flex"
          mx={{ xs: "-25px", sm: 0 }}
          sx={{ "& img": { width: "100%", objectFit: "cover" } }}
        >
          <img src={PresentationImg} alt="" />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent={{ xs: "center", sm: "flex-start" }}
          bgcolor="#FCE181"
          py={{ xs: "40px", sm: "74px", md: pxToRem(87) }}
          px={{ xs: "25px", sm: "30px", md: pxToRem(80) }}
        >
          <Box maxWidth={pxToRem(510)} textAlign={{ xs: "center", sm: "left" }}>
            <Typography variant="sectionTitle" component="h2" mb={pxToRem(20)}>
              Promotion here
            </Typography>
            <BlockBordered mb={{ xs: "20px", md: pxToRem(35) }}>
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
