import { Box } from "@mui/material";
import { pxToRem } from "px2rem2px";

const BlockHeading = (props) => {
  return (
    <Box
      borderBottom="1px solid rgba(191,190,187, 0.5)"
      pb={pxToRem(30)}
      mb={pxToRem(30)}
    >
      {props.children}
    </Box>
  );
};

export default BlockHeading;
