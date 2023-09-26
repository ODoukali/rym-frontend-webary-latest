import { Box } from "@mui/material";
import { pxToRem } from "px2rem2px";

const BlockBordered = (props) => {
  return (
    <Box sx={{ display: "flex", columnGap: pxToRem(28) }} mb={props.mb}>
      <Box sx={{ width: pxToRem(2), backgroundColor: "#BFBEBB" }} />
      <Box width="100%">{props.children}</Box>
    </Box>
  );
};

export default BlockBordered;
