import { Box } from "@mui/material";

const BlockBordered = (props) => {
  return (
    <Box sx={{ display: "flex", columnGap: "28px" }} mb={props.mb}>
      <Box sx={{ width: "2px", backgroundColor: "#BFBEBB" }} />
      <Box width="100%">{props.children}</Box>
    </Box>
  );
};

export default BlockBordered;
