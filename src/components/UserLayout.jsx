import { Box, Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import ModalProvider from "mui-modal-provider";
import Footer from "./Footer";
import Guides from "./Guides";
import Header from "./Header";
import UserMenu from "./UserMenu";

import HeaderBgrImg from "../images/bgr-short.svg";

const UserLayout = () => {
  return (
    <ModalProvider>
      <Box
        position="relative"
        maxWidth={pxToRem(1920)}
        m="0 auto"
        p={{ xs: 0, md: pxToRem(30) }}
        sx={{ overflowX: "hidden" }}
      >
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
              <Outlet />
            </Stack>
          </Container>
        </Box>

        <Footer />
      </Box>
    </ModalProvider>
  );
};

export default UserLayout;
