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
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { pxToRem } from "px2rem2px";
import { useForm } from "react-hook-form";
import IconBtnCircular from "./IconBtnCircular";
import FormInputText from "./FormInputText";
import FormInputPhone from "./FormInputPhone";
// import ReCAPTCHA from "react-google-recaptcha";

import { ReactComponent as Close } from "../images/close.svg";
import { ReactComponent as Google } from "../images/google.svg";
import { ReactComponent as Info } from "../images/info.svg";

const ToggleButtonStyled = styled(ToggleButton)({
  color: "#EDECE8",
  width: pxToRem(147),
  height: pxToRem(50),
  borderRadius: `${pxToRem(30)} !important`,
  fontSize: pxToRem(16),
  fontWeight: 600,
  textTransform: "capitalize",
  border: "none",
  "&:hover": {
    backgroundColor: "transparent",
    color: "#026670",
  },
  "&.Mui-selected": {
    color: "#026670",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
});

const ButtonGoogle = styled(Button)({
  height: `${pxToRem(54)} !important`,
  borderWidth: pxToRem(2),
  fontWeight: 500,
  marginBottom: pxToRem(35),
  boxShadow: "none",
  "&:hover": {
    borderWidth: pxToRem(2),
  },
});

const ButtonLogin = styled(Button)({
  width: pxToRem(300),
  height: `${pxToRem(54)} !important`,
  fontSize: pxToRem(14),
  fontWeight: 600,
  boxShadow: "none",
  margin: `${pxToRem(40)} 0`,
});

const Hr = styled(Divider)({
  marginBottom: pxToRem(40),
  "&::after, &::before": {
    borderTop: "1px solid #BFBEBB",
  },
  "& span": {
    paddingLeft: pxToRem(23),
    paddingRight: pxToRem(23),
  },
});

const ToggleButtonGroupStyled = styled(ToggleButtonGroup)({
  position: "relative",
  width: pxToRem(300),
  justifyContent: "space-between",
  backgroundColor: "#BFBEBB",
  borderRadius: pxToRem(30),
  padding: pxToRem(2),
  "&::before": {
    content: "''",
    width: pxToRem(147),
    height: pxToRem(50),
    position: "absolute",
    left: pxToRem(2),
    backgroundColor: "#EDECE8",
    borderRadius: pxToRem(30),
    transition: "left 0.2s ease-in-out",
  },
  "&.active::before": {
    left: pxToRem(151),
  },
});

const LoginModal = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { ...restProps } = props;
  const [register, setRegister] = useState("login");

  const registerForm = useForm({
    values: {
      name: "",
      nickname: "",
      phone: "",
      signupEmail: "",
      signupPassword: "",
      signupRePassword: "",
    },
  });

  const loginForm = useForm({
    values: {
      loginEmail: "",
      loginPassword: "",
    },
  });

  const onRegisterSubmit = (data) => {
    const trimmedData = {};
    Object.keys(data).forEach((key) => {
      trimmedData[key] = data[key].trim();
    });
    props.onClose();
    console.log(trimmedData);
  };

  const onLoginSubmit = (data) => {
    const trimmedData = {};
    Object.keys(data).forEach((key) => {
      trimmedData[key] = data[key].trim();
    });
    props.onClose();
    console.log(trimmedData);
  };

  const handleChange = (event, newRegister) => {
    if (newRegister !== null) {
      setRegister(newRegister);
    }
  };

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
          maxWidth: pxToRem(500),
          borderRadius: fullScreen ? 0 : pxToRem(20),
          verticalAlign: "top",
        },
        "& .MuiDialog-container": {
          overflowY: "scroll",
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
        <Typography fontSize={pxToRem(22)} fontWeight="bold">
          R.Y.M. {register === "login" ? "Log In" : "Sign Up"}
        </Typography>
        <IconBtnCircular onClick={() => props.onClose()}>
          <Close color="#026670" />
        </IconBtnCircular>
      </Stack>
      <Box
        bgcolor="#F7F6F2"
        p={`0 ${pxToRem(50)} ${pxToRem(40)}`}
        sx={{
          "@media(max-width: 400px)": {
            paddingX: "20px",
          },
        }}
      >
        <Box
          position="relative"
          textAlign="center"
          mt={pxToRem(-27)}
          mb={pxToRem(40)}
        >
          <ToggleButtonGroupStyled
            className={`${register === "signup" ? "active" : ""}`}
            value={register}
            exclusive
            onChange={handleChange}
          >
            <ToggleButtonStyled value="login">Log In</ToggleButtonStyled>
            <ToggleButtonStyled value="signup">Sign Up</ToggleButtonStyled>
          </ToggleButtonGroupStyled>
        </Box>
        <Box maxWidth={500} position="relative" overflow="hidden" m="auto">
          <Stack
            className={`${register === "signup" ? "active" : ""}`}
            width="200%"
            flexDirection="row"
            sx={{
              transition: "transform 0.2s ease-in-out",
              "&.active": { transform: "translateX(-50%)" },
            }}
          >
            <Box width="100%" textAlign="center">
              <ButtonGoogle fullWidth variant="outlined" startIcon={<Google />}>
                Continue with Google
              </ButtonGoogle>
              <Hr>
                <Typography
                  fontSize={pxToRem(14)}
                  fontWeight={600}
                  color="#BFBEBB"
                >
                  or
                </Typography>
              </Hr>
              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} noValidate>
                <Stack gap={pxToRem(10)}>
                  <FormInputText
                    name="loginEmail"
                    control={loginForm.control}
                    placeholder="Email"
                    muiProps={{ type: "email" }}
                    rules={{
                      required: "Field can't be empty",
                      maxLength: {
                        value: 100,
                        message: "Maximum 100 characters",
                      },
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    }}
                  />
                  <FormInputText
                    name="loginPassword"
                    control={loginForm.control}
                    placeholder="Password"
                    muiProps={{ type: "password" }}
                  />
                </Stack>
                <ButtonLogin type="submit" variant="yellow">
                  Log In
                </ButtonLogin>
                <div>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Keep me logged in?"
                  />
                </div>
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  gap="7px"
                  mt="20px"
                >
                  <Info color="#BFBEBB" />
                  <Typography color="#BFBEBB" fontSize={pxToRem(12)}>
                    Not recommended on public devices
                  </Typography>
                </Stack>
              </form>
              <Divider sx={{ borderColor: "#BFBEBB", my: pxToRem(40) }} />
              <Link
                href=""
                underline="hover"
                sx={{
                  fontSize: pxToRem(12),
                  fontWeight: 600,
                  color: "#BFBEBB",
                }}
              >
                Forgot Password?
              </Link>
            </Box>
            <Box width="100%" textAlign="center">
              <ButtonGoogle fullWidth variant="outlined" startIcon={<Google />}>
                Continue with Google
              </ButtonGoogle>
              <Hr>
                <Typography
                  fontSize={pxToRem(14)}
                  fontWeight={600}
                  color="#BFBEBB"
                >
                  or
                </Typography>
              </Hr>
              <form
                onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
                noValidate
              >
                <Stack gap={pxToRem(10)}>
                  <FormInputText
                    name="name"
                    control={registerForm.control}
                    setValue={registerForm.setValue}
                    placeholder="Name"
                    muiProps={{ type: "text" }}
                    rules={{
                      required: "Field can't be empty",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Maximum 50 characters",
                      },
                    }}
                  />
                  <FormInputText
                    name="nickname"
                    control={registerForm.control}
                    setValue={registerForm.setValue}
                    placeholder="Nickname (optional)"
                    muiProps={{ type: "text" }}
                    rules={{
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Maximum 50 characters",
                      },
                    }}
                  />
                  <FormInputPhone
                    name="phone"
                    control={registerForm.control}
                    placeholder="Phone"
                    rules={{
                      required: "Field can't be empty",
                    }}
                  />
                  <FormInputText
                    name="signupEmail"
                    control={registerForm.control}
                    setValue={registerForm.setValue}
                    placeholder="Email"
                    muiProps={{
                      type: "email",
                    }}
                    rules={{
                      required: "Field can't be empty",
                      maxLength: {
                        value: 100,
                        message: "Maximum 100 characters",
                      },
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    }}
                  />
                  <FormInputText
                    name="signupPassword"
                    control={registerForm.control}
                    setValue={registerForm.setValue}
                    placeholder="Password"
                    muiProps={{ type: "password" }}
                  />
                  <FormInputText
                    name="signupRePassword"
                    control={registerForm.control}
                    setValue={registerForm.setValue}
                    placeholder="Retype Password"
                    muiProps={{ type: "password" }}
                  />
                </Stack>
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  gap={pxToRem(15)}
                  mt={pxToRem(37)}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="I am not a robot!"
                  />
                  {/* <ReCAPTCHA sitekey="Your client site key" /> */}
                </Stack>
                <ButtonLogin variant="yellow" type="submit">
                  Create Account
                </ButtonLogin>
                <Stack alignItems="center" gap={pxToRem(10)}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Keep me signed in."
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Send me emails about updates and news."
                  />
                </Stack>
              </form>
              <Divider sx={{ borderColor: "#BFBEBB", my: pxToRem(40) }} />
              <Typography
                maxWidth={pxToRem(300)}
                fontSize={pxToRem(12)}
                fontWeight={500}
                lineHeight={pxToRem(16)}
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
          </Stack>
        </Box>
      </Box>
    </Dialog>
  );
};

export default LoginModal;
