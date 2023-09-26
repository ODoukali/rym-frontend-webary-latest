import { Box } from "@mui/material";

const Guides = (props) => {
  return (
    <Box
      {...props}
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={props.zIndex}
      px="24px"
      sx={{ pointerEvents: "none" }}
    >
      <Box
        position="relative"
        maxWidth="1057px"
        height="100%"
        display="flex"
        justifyContent="space-between"
        margin="0 auto"
      >
        {[...Array(4).keys()].map((val) => (
          <Box key={val} width="1px" bgcolor={props.color} />
        ))}
      </Box>
    </Box>
  );
};

export default Guides;
