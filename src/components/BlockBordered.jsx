import { Box } from "@mui/material";

const BlockBordered = (props) => {
  return (
    <Box sx={{ display: "flex", columnGap: "28px" }} mb={props.mb}>
      <Box sx={{ width: "2px", backgroundColor: "#BFBEBB" }} />
      <>{props.children}</>
    </Box>
  );
};

export default BlockBordered;
