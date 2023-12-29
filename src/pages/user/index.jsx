import { Box, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";

const User = () => {
  return (
    <Box flex={1}>
      <Typography
        variant="sectionTitle"
        component="h2"
        fontSize={pxToRem(35)}
        pl={pxToRem(60)}
        mb={pxToRem(27)}
      >
        Dashboard
      </Typography>

      <Box
        position="relative"
        bgcolor="#fff"
        borderRadius="20px"
        p={pxToRem(60)}
      ></Box>
    </Box>
  );
};

export default User;
