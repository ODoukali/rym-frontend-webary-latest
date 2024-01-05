import { Box, Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import ModalProvider from "mui-modal-provider";
import Footer from "../Footer";
import Guides from "../Guides";
import Header from "../Header";
import UserMenu from "./UserMenu";

import HeaderBgrImg from "../../images/bgr-short.svg";

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
            height={{ xs: "100px", md: "130px" }}
            borderRadius={{ xs: 0, md: "40px 40px 0 0" }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url("${HeaderBgrImg}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
          >
            <Header menuVisible />
            <Guides color="rgba(0,0,0,0.03)" zIndex="0" />
          </Box>

          <Container
            disableGutters
            sx={{
              pt: { xs: "50px", md: pxToRem(80) },
              pb: { xs: "70px", md: pxToRem(140) },
            }}
          >
            <Stack flexDirection="row" gap={{ xs: "30px", md: "50px" }}>
              <Box className="user-menu" width={{ xs: "200px", md: "250px" }}>
                <UserMenu />
              </Box>
              <Box
                flex={1}
                width={{ xs: "calc(100% - 260px)", md: "calc(100% - 310px)" }}
              >
                <Outlet />
              </Box>
            </Stack>
          </Container>
        </Box>

        <Footer />
      </Box>
    </ModalProvider>
  );
};

export default UserLayout;
