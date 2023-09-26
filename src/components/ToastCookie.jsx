import { Box, Button, Snackbar, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";

const ToastCookie = (props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={props.open}
      onClose={props.onClose}
      sx={{
        "& .MuiPaper-root": {
          minWidth: pxToRem(320),
          maxWidth: pxToRem(320),
          borderRadius: pxToRem(10),
          padding: pxToRem(30),
        },
        "& .MuiSnackbarContent-message": {
          padding: 0,
        },
        "& .MuiSnackbarContent-action": {
          width: "100%",
          justifyContent: "center",
          p: 0,
          m: 0,
        },
      }}
      action={
        <Box textAlign="center">
          <Typography
            color="#FCE181"
            fontSize={pxToRem(20)}
            fontWeight={700}
            mb={pxToRem(5)}
          >
            Cookie Policy
          </Typography>
          <Typography
            color="#BFBEBB"
            fontSize={pxToRem(14)}
            fontWeight={500}
            mb={pxToRem(15)}
          >
            {props.message}
          </Typography>
          <Button
            variant="yellow"
            size="small"
            onClick={props.onClose}
            sx={{
              height: `${pxToRem(40)} !important`,
            }}
          >
            Got It
          </Button>
        </Box>
      }
    />
  );
};

export default ToastCookie;
