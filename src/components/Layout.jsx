import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import ModalProvider from "mui-modal-provider";
import Footer from "./Footer";

const Layout = () => {
  return (
    <ModalProvider>
      <Box
        position="relative"
        maxWidth={pxToRem(1920)}
        m="0 auto"
        p={{ xs: 0, md: pxToRem(30) }}
        sx={{ overflowX: "hidden" }}
      >
        <Outlet />
        <Footer />
      </Box>
    </ModalProvider>
  );
};

export default Layout;
