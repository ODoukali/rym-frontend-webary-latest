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
  fontWeight: 600,
  color: "#BFBEBB",
  "&:hover": {
    color: "#333",
  },
});

const ModalLayout = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
        justifyContent="space-between"
        gap="20px"
        bgcolor="#EDECE8"
        p="40px 60px"
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
      <Box p="40px 60px">
        {props.children}
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap="40px"
          borderTop="1px solid #BFBEBB"
          mt="40px"
          pt="40px"
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
