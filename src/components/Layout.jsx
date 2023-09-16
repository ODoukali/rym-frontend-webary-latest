import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Box maxWidth="1920px" m="0 auto" p="30px" sx={{ overflowX: "hidden" }}>
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
