import { Box, Container } from "@mui/material";
import { pxToRem } from "px2rem2px";
import Header from "../../components/Header";

import HeaderBgrImg from "../../images/bgr-short.svg";

const User = () => {
  return (
    <>
      <Box
        sx={{
          height: "130px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url("${HeaderBgrImg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Header menuVisible />
      </Box>

      <Container
        disableGutters
        sx={{
          pt: pxToRem(80),
          pb: pxToRem(140),
        }}
      ></Container>
    </>
  );
};

export default User;
