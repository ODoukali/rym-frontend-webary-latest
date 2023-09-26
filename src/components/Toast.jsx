import { Button, IconButton, Snackbar } from "@mui/material";
import { pxToRem } from "px2rem2px";

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
          minWidth: pxToRem(320),
          borderRadius: pxToRem(10),
          padding: `${pxToRem(8)} ${pxToRem(30)}`,
        },
        "& .MuiSnackbarContent-message": {
          fontSize: pxToRem(12),
          fontWeight: 700,
        },
        "& .MuiSnackbarContent-action": {
          gap: pxToRem(20),
        },
      }}
      action={
        <>
          {props.button ? (
            <Button
              onClick={props.onClose}
              sx={{
                color: "#fff",
                fontSize: pxToRem(12),
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
            <Close color="#fff" width={pxToRem(14)} height={pxToRem(14)} />
          </IconButton>
        </>
      }
    />
  );
};

export default Toast;
