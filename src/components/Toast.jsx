import { Button, IconButton, Snackbar } from "@mui/material";

import { ReactComponent as Close } from "../images/close.svg";

const Toast = (props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={props.open}
      onClose={props.onClose}
      autoHideDuration={props.button ? 10000 : 5000}
      message={props.message}
      sx={{
        "& .MuiPaper-root": {
          minWidth: "320px",
          borderRadius: "10px",
          padding: "8px 30px",
        },
        "& .MuiSnackbarContent-message": {
          fontSize: "12px",
          fontWeight: 700,
        },
        "& .MuiSnackbarContent-action": {
          gap: "20px",
        },
      }}
      action={
        <>
          {props.button ? (
            <Button
              onClick={props.onClose}
              sx={{
                color: "#fff",
                fontSize: "12px",
                fontWeight: 500,
                "&:hover": { color: "#FCE181" },
              }}
            >
              Undo
            </Button>
          ) : null}
          <IconButton
            onClick={props.onClose}
            sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" } }}
          >
            <Close color="#fff" width={14} height={14} />
          </IconButton>
        </>
      }
    />
  );
};

export default Toast;
