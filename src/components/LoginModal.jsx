import React, { useState } from "react";
import {
  useTheme,
  useMediaQuery,
  Dialog,
  Stack,
  Typography,
  Box,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  TextField,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ReCAPTCHA from "react-google-recaptcha";
import IconBtnCircular from "./IconBtnCircular";
import Switcher from "./Switcher";

import { ReactComponent as Close } from "../images/close.svg";
import { ReactComponent as Google } from "../images/google.svg";

const ToggleButtonStyled = styled(ToggleButton)({
  color: "#EDECE8",
  width: "147px",
  height: "50px",
  borderRadius: "30px !important",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "capitalize",
  border: "none",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#026670",
  },
  "&.Mui-selected": {
    color: "#026670",
    backgroundColor: "#EDECE8",
    "&:hover": {
      backgroundColor: "#EDECE8",
    },
  },
});

const ButtonGoogle = styled(Button)({
  height: "54px",
  borderWidth: "2px",
  fontWeight: 500,
  marginBottom: "35px",
  boxShadow: "none",
  "&:hover": {
    borderWidth: "2px",
  },
});

const ButtonLogin = styled(Button)({
  width: "300px",
  height: "54px",
  fontSize: "14px",
  fontWeight: 600,
  boxShadow: "none",
  margin: "40px 0",
});

const Hr = styled(Divider)({
  marginBottom: "40px",
  "&::after, &::before": {
    borderTop: "1px solid #BFBEBB",
  },
  "& span": {
    paddingLeft: "23px",
    paddingRight: "23px",
  },
});

const TextFieldStyled = styled(TextField)({
  width: "100%",
  height: "54px",
  borderRadius: "30px",
  backgroundColor: "#EDECE8",
  "& input": {
    borderRadius: "30px !important",
    padding: "15px 40px",
  },
});

const LoginModal = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { ...restProps } = props;

  const [register, setRegister] = useState("login");

  const handleChange = (event, newRegister) => {
    setRegister(newRegister);
  };

  return (
    <Dialog
      {...restProps}
      fullScreen={fullScreen}
      maxWidth="xs"
      scroll="body"
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "500px",
          borderRadius: "20px",
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
        p="40px 50px 67px"
        sx={{ "& button": { boxShadow: "none" } }}
      >
        <Typography fontSize="22px" fontWeight="bold">
          R.Y.M. {register === "login" ? "Log In" : "Sign Up"}
        </Typography>
        <IconBtnCircular onClick={() => props.onClose()}>
          <Close color="#026670" />
        </IconBtnCircular>
      </Stack>
      <Box bgcolor="#F7F6F2" p="0px 50px 40px">
        <Box position="relative" textAlign="center" mt="-27px" mb="40px">
          <ToggleButtonGroup
            value={register}
            exclusive
            onChange={handleChange}
            sx={{
              width: "300px",
              justifyContent: "space-between",
              backgroundColor: "#BFBEBB",
              borderRadius: "30px",
              p: "2px",
            }}
          >
            <ToggleButtonStyled value="login">Log In</ToggleButtonStyled>
            <ToggleButtonStyled value="signup">Sign Up</ToggleButtonStyled>
          </ToggleButtonGroup>
        </Box>

        {register === "login" ? (
          <Box textAlign="center">
            <ButtonGoogle fullWidth variant="outlined" startIcon={<Google />}>
              Continue with Google
            </ButtonGoogle>
            <Hr>
              <Typography fontSize="14px" fontWeight={600} color="#BFBEBB">
                or
              </Typography>
            </Hr>
            <Stack gap="10px">
              <TextFieldStyled type="email" placeholder="Email" />
              <TextFieldStyled type="password" placeholder="Password" />
            </Stack>
            <ButtonLogin variant="yellow">Log In</ButtonLogin>
            <Switcher
              name="keepLogged"
              label="Keep me logged in?"
              defaultChecked
            />
            <Divider sx={{ borderColor: "#BFBEBB", my: "40px" }} />
            <Link
              href=""
              underline="hover"
              sx={{ fontSize: "12px", fontWeight: 600, color: "#BFBEBB" }}
            >
              Forgot Password?
            </Link>
          </Box>
        ) : (
          <Box textAlign="center">
            <ButtonGoogle fullWidth variant="outlined" startIcon={<Google />}>
              Continue with Google
            </ButtonGoogle>
            <Hr>
              <Typography fontSize="14px" fontWeight={600} color="#BFBEBB">
                or
              </Typography>
            </Hr>
            <Stack gap="10px">
              <TextFieldStyled type="text" placeholder="Name" />
              <TextFieldStyled type="text" placeholder="Nickname" />
              <TextFieldStyled type="text" placeholder="Phone" />
              <TextFieldStyled type="email" placeholder="Email" />
              <TextFieldStyled type="password" placeholder="Password" />
              <TextFieldStyled type="password" placeholder="Retype Password" />
            </Stack>
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              gap="15px"
              mt="37px"
            >
              <Switcher
                name="notRobot"
                label="I am not a robot!"
                defaultChecked
              />
              <ReCAPTCHA sitekey="Your client site key" />
            </Stack>
            <ButtonLogin variant="yellow">Create Account</ButtonLogin>
            <Stack alignItems="center" gap="10px">
              <Switcher
                name="keepSignedin"
                label="Keep me signed in."
                defaultChecked
              />
              <Switcher
                name="sendEmails"
                label="Send me emails about updates and news."
                defaultChecked
              />
            </Stack>
            <Divider sx={{ borderColor: "#BFBEBB", my: "40px" }} />
            <Typography
              maxWidth="300px"
              fontSize="12px"
              fontWeight={500}
              lineHeight="16px"
              color="#BFBEBB"
              margin="auto"
            >
              By creating an account, you are agreeing to our{" "}
              <Link href="" underline="hover" color="#026670">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="" underline="hover" color="#026670">
                Privacy Policy
              </Link>
              .
            </Typography>
          </Box>
        )}
      </Box>
    </Dialog>
  );
};

export default LoginModal;
