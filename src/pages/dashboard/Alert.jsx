import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";

import TestimonialMenu from "../../components/TestimonialMenu";

const Alert = (props) => {
  const bgColor =
    props.severity === "error"
      ? "#FFEDED"
      : props.severity === "success"
      ? "#FBFFF0"
      : "black";
  const borderColor =
    props.severity === "error"
      ? "#FF4D4D"
      : props.severity === "success"
      ? "#A7C74F"
      : "black";

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      border="2px solid"
      borderRadius="10px"
      borderColor={borderColor}
      bgcolor={bgColor}
      py={pxToRem(24)}
      px={pxToRem(40)}
    >
      <Box>
        <Typography
          component="p"
          fontSize={pxToRem(18)}
          fontWeight={600}
          mb={pxToRem(5)}
        >
          {props.title}
        </Typography>
        <Typography
          component="p"
          fontSize={pxToRem(16)}
          lineHeight="20px"
          fontWeight={500}
        >
          {props.children}
        </Typography>
      </Box>
      <Stack
        flexDirection="row"
        alignItems="center"
        gap={pxToRem(30)}
        sx={{ "& button": { m: 0 } }}
      >
        <Button size="small" variant="outlined">
          What’s Next
        </Button>
        <TestimonialMenu sx={{ m: 0 }}>
          <MenuItem onClick={() => {}}>Menu</MenuItem>
        </TestimonialMenu>
      </Stack>
    </Stack>
  );
};

export default Alert;
