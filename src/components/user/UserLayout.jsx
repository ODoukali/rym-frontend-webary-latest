import { useEffect, useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import ModalProvider from "mui-modal-provider";
import Footer from "../Footer";
import Guides from "../Guides";
import Header from "../Header";
import UserMenu from "./UserMenu";
import { usePath } from "../../utils/PathContext";
import CloseBtn from "./CloseBtn";

import HeaderBgrImg from "../../images/bgr-short.svg";
import { ReactComponent as Chevron } from "../../images/chevron.svg";

const routeTitles = {
  "/user/dashboard": "Dashboard",
  "/user/notifications": "Notifications",
  "/user/account-settings": "Account Settings",
  "/user/purchase-history": "Purchase History",
  "/user/courses": "My Courses",
  "/user/favorites": "My Favorites",
};

const UserLayout = () => {
  const location = useLocation();
  const { pathname } = useLocation();
  const pageTitle = routeTitles[pathname] || "Dashboard";
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const { setPath } = usePath();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (location.state?.referer) {
      setPath(location.state.referer);
    }
  }, [location.state, setPath]);

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
            display={{ xs: "none", sm: "flex" }}
            height={{ xs: "100px", md: "130px" }}
            borderRadius={{ xs: 0, md: "40px 40px 0 0" }}
            sx={{
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
              pt: { xs: 0, sm: "50px", md: pxToRem(80) },
              pb: { xs: 0, sm: "70px", md: pxToRem(140) },
            }}
          >
            <Stack
              className={isMenuVisible ? "" : "user-active"}
              flexDirection="row"
              gap={{ xs: "30px", md: "50px" }}
              overflow={{ xs: "hidden", sm: "visible" }}
            >
              <Box
                className="user-menu"
                width={{ xs: "100%", sm: "200px", md: "250px" }}
              >
                <UserMenu setIsMenuVisible={setIsMenuVisible} />
              </Box>

              <Box
                className="user-page"
                flex={1}
                width={{
                  xs: "100%",
                  sm: "calc(100% - 260px)",
                  md: "calc(100% - 310px)",
                }}
              >
                <Stack
                  height={{ xs: "90px", sm: "auto" }}
                  position={{ xs: "sticky", sm: "static" }}
                  top={0}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                  bgcolor={{ xs: "#F7F6F2", sm: "transparent" }}
                  px={{ xs: "25px", sm: 0 }}
                  mb={{ xs: 0, sm: pxToRem(27) }}
                  zIndex={2}
                >
                  <Stack flexDirection="row" alignItems="center" gap="10px">
                    {mobile ? (
                      <IconButton
                        onClick={() => setIsMenuVisible(true)}
                        sx={{
                          ml: "-8px",
                          "& svg": {
                            transform: "rotate(180deg)",
                          },
                        }}
                      >
                        <Chevron color="#333" />
                      </IconButton>
                    ) : null}
                    <Typography
                      variant="sectionTitle"
                      component="h2"
                      fontSize={{ xs: "20px", sm: pxToRem(35) }}
                      pl={{ xs: 0, sm: pxToRem(60) }}
                    >
                      {pageTitle}
                    </Typography>
                  </Stack>
                  <CloseBtn />
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

        <Box display={{ xs: "none", sm: "block" }}>
          <Footer />
        </Box>
      </Box>
    </ModalProvider>
  );
};

export default UserLayout;
