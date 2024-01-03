import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";

import TestimonialMenu from "../../components/TestimonialMenu";

const Alert = (props) => {
  const bgColor =
    props.severity === "error"
      ? "#FFEDED"
      : props.severity === "success"
      ? "#EAF7EE"
      : "black";
  const borderColor =
    props.severity === "error"
      ? "#F6CCC4"
      : props.severity === "success"
      ? "#BFE4C9"
      : "black";

  return (
    <Stack
      position="relative"
      flexDirection={{ xs: "column", lg: "row" }}
      alignItems={{ xs: "flex-start", lg: "center" }}
      justifyContent="space-between"
      gap={pxToRem(20)}
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
          pr={{ xs: "28px", lg: 0 }}
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
        sx={{
          "& button": {
            m: 0,
          },
        }}
      >
        <Button size="small" variant="outlined">
          What’s Next
        </Button>
        <Box
          position={{ xs: "absolute", lg: "static" }}
          top="17px"
          right="28px"
        >
          <TestimonialMenu>
            <MenuItem onClick={() => {}}>Menu</MenuItem>
          </TestimonialMenu>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Alert;
