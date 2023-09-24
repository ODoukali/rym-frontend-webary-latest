import { Box, Button, Snackbar, Typography } from "@mui/material";

const ToastCookie = (props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={props.open}
      onClose={props.onClose}
      sx={{
        "& .MuiPaper-root": {
          minWidth: "320px",
          maxWidth: "320px",
          borderRadius: "10px",
          padding: "30px",
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
          <Typography color="#FCE181" fontSize="20px" fontWeight={700} mb="5px">
            Cookie Policy
          </Typography>
          <Typography
            color="#BFBEBB"
            fontSize="14px"
            fontWeight={500}
            mb="15px"
          >
            {props.message}
          </Typography>
          <Button
            variant="yellow"
            size="small"
            onClick={props.onClose}
            sx={{
              height: "40px !important",
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
