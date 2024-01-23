import {
  Box,
  Dialog,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { pxToRem } from "px2rem2px";
import { NavLink } from "react-router-dom";
import IconBtnCircular from "../../components/IconBtnCircular";
import { useAuth } from "../../utils/AuthContext";

import { ReactComponent as Close } from "../../images/close.svg";

const LinkStyled = styled(Link)({
  fontSize: "12px",
  lineHeight: "14px",
  fontWeight: 600,
  color: "#BFBEBB",
  textAlign: "center",
  "&:hover": {
    color: "#333",
  },
});

const ModalLayout = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("ssm"));
  const { isAuthenticated } = useAuth();
  const { headerTitle, ...restProps } = props;

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
        justifyContent="flex-end"
        gap="20px"
        bgcolor="#EDECE8"
        p={{ xs: "30px 25px", ssm: "40px 60px" }}
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
          {props.headerTitle}
        </Typography>
        <IconBtnCircular onClick={() => props.onClose()}>
          <Close color="#026670" />
        </IconBtnCircular>
      </Stack>
      <Box position="relative" p={{ xs: "30px 25px", ssm: "40px 60px" }}>
        {props.children}
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={{ xs: "30px", ssm: "40px" }}
          borderTop="1px solid #BFBEBB"
          mt={{ xs: "30px", ssm: "40px" }}
          pt={{ xs: "30px", ssm: "40px" }}
        >
          {isAuthenticated ? (
            <>
              <LinkStyled to="" component={NavLink} underline="none">
                Refund Policy
              </LinkStyled>
              <LinkStyled to="" component={NavLink} underline="none">
                Privacy Policy
              </LinkStyled>
              <LinkStyled to="" component={NavLink} underline="none">
                Terms Of Service
              </LinkStyled>
            </>
          ) : (
            <LinkStyled to="" component={NavLink} underline="none">
              Need Help?
            </LinkStyled>
          )}
        </Stack>
      </Box>
    </Dialog>
  );
};

export default ModalLayout;
