import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import ModalProvider from "mui-modal-provider";
import Footer from "./Footer";

const Layout = () => {
  return (
    <ModalProvider>
      <Box maxWidth="1920px" m="0 auto" p="30px" sx={{ overflowX: "hidden" }}>
        <Outlet />
        <Footer />
      </Box>
    </ModalProvider>
  );
};

export default Layout;
