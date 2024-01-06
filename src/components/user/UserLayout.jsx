import { Box, Container, Stack, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import ModalProvider from "mui-modal-provider";
import Footer from "../Footer";
import Guides from "../Guides";
import Header from "../Header";
import UserMenu from "./UserMenu";
import IconBtnCircular from "../IconBtnCircular";

import HeaderBgrImg from "../../images/bgr-short.svg";
import { ReactComponent as Close } from "../../images/close-user-menu.svg";

const routeTitles = {
  "/user/dashboard": "Dashboard",
  "/user/notifications": "Notifications",
  "/user/account-settings": "Account Settings",
  "/user/courses": "My Courses",
};

const UserLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const pageTitle = routeTitles[pathname] || "User";

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
            <Header menuVisible hideUserProfile />
            <Guides color="rgba(0,0,0,0.03)" zIndex="0" />
          </Box>

          <Container
            disableGutters
            sx={{
              pt: { xs: "50px", md: pxToRem(80) },
              pb: { xs: "70px", md: pxToRem(140) },
            }}
          >
            <Stack
              flexDirection="row"
              gap={{ xs: "30px", md: "50px" }}
              overflow={{ xs: "hidden", sm: "visible" }}
            >
              <Box className="user-menu" width={{ xs: "200px", md: "250px" }}>
                <UserMenu />
              </Box>

              <Box
                className="user-page"
                flex={1}
                width={{ xs: "calc(100% - 260px)", md: "calc(100% - 310px)" }}
              >
                <Stack
                  height={{ xs: "90px", sm: "auto" }}
                  position={{ xs: "sticky", sm: "static" }}
                  top={0}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  bgcolor="#F7F6F2"
                  px={{ xs: "25px", sm: 0 }}
                  mb={{ xs: 0, sm: pxToRem(27) }}
                  zIndex={1}
                >
                  <Typography
                    variant="sectionTitle"
                    component="h2"
                    fontSize={{ xs: "20px", sm: pxToRem(35) }}
                    pl={{ xs: 0, sm: pxToRem(60) }}
                  >
                    {pageTitle}
                  </Typography>
                  <Box display={{ xs: "block", sm: "none" }}>
                    <IconBtnCircular onClick={() => navigate("/")}>
                      <Close color="#026670" />
                    </IconBtnCircular>
                  </Box>
                </Stack>
                <Box
                  minHeight={{ xs: "calc(100% - 90px)", sm: "auto" }}
                  position="relative"
                  bgcolor="#fff"
                  borderRadius="20px"
                  p={{ xs: "32px 25px 60px", sm: pxToRem(40), lg: pxToRem(60) }}
                >
                  <Outlet />
                </Box>
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
