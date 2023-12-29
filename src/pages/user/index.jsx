import { Box, Container, Stack } from "@mui/material";
import { pxToRem } from "px2rem2px";
import Header from "../../components/Header";
import UserMenu from "../../components/UserMenu";

import HeaderBgrImg from "../../images/bgr-short.svg";
import Guides from "../../components/Guides";

const User = () => {
  return (
    <Box position="relative">
      <Guides color="rgba(0,0,0,0.06)" zIndex={-1} />
      <Box
        sx={{
          height: "130px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url("${HeaderBgrImg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          borderRadius: "40px 40px 0 0",
        }}
      >
        <Header menuVisible />
        <Guides color="rgba(0,0,0,0.03)" zIndex="0" />
      </Box>

      <Container
        disableGutters
        sx={{
          pt: pxToRem(80),
          pb: pxToRem(140),
        }}
      >
        <Stack flexDirection="row" gap="50px">
          <UserMenu />
        </Stack>
      </Container>
    </Box>
  );
};

export default User;
