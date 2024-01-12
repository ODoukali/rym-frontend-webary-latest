import {
  Dialog,
  useTheme,
  useMediaQuery,
  Typography,
  Stack,
} from "@mui/material";
import { pxToRem } from "px2rem2px";
import IconBtnCircular from "../../components/IconBtnCircular";

import { ReactComponent as Close } from "../../images/close.svg";

const Login = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { ...restProps } = props;
  return (
    <Dialog
      {...restProps}
      fullScreen={fullScreen}
      maxWidth="xs"
      scroll="body"
      disableEscapeKeyDown
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          return;
        }
      }}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: 500,
          borderRadius: fullScreen ? 0 : pxToRem(20),
          verticalAlign: "center",
          backgroundColor: "#F7F6F2",
        },
        zIndex: 1500,
      }}
    >
      <Stack
        position="relative"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="#EDECE8"
        p={`${pxToRem(40)} ${pxToRem(50)} ${pxToRem(67)}`}
        sx={{ "& button": { boxShadow: "none" } }}
      >
        <Typography
          fontSize="30px"
          lineHeight="30px"
          fontWeight="900"
          fontFamily="PloniBold"
          letterSpacing="-0.44px"
          textAlign="right"
        >
          וואס טוט מען ווען דער מאן ארבעט צופרי
        </Typography>
        <IconBtnCircular onClick={() => props.onClose()}>
          <Close color="#026670" />
        </IconBtnCircular>
      </Stack>
    </Dialog>
  );
};

export default Login;
