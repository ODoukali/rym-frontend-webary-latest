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
// import ReCAPTCHA from "react-google-recaptcha";

import { ReactComponent as Close } from "../images/close.svg";
import { ReactComponent as Google } from "../images/google.svg";
import FormInputPhone from "./FormInputPhone";

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
  height: pxToRem(54),
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
  height: pxToRem(54),
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

  const { control, handleSubmit } = useForm({
    values: {
      name: "",
      nickname: "",
      phone: "",
      signupEmail: "",
      signupPassword: "",
      signupRePassword: "",
    },
  });

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
          borderRadius: pxToRem(20),
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
      <Box bgcolor="#F7F6F2" p={`0 ${pxToRem(50)} ${pxToRem(40)}`}>
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
        <Box position="relative" overflow="hidden">
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
              <Stack gap={pxToRem(10)}>
                <FormInputText
                  name="loginEmail"
                  control={control}
                  placeholder="Email"
                  muiProps={{ type: "email" }}
                />
                <FormInputText
                  name="loginPassword"
                  control={control}
                  placeholder="Password"
                  muiProps={{ type: "password" }}
                />
              </Stack>
              <ButtonLogin variant="yellow">Log In</ButtonLogin>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Keep me logged in?"
              />
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
              <form onSubmit={handleSubmit(props.onClose)}>
                <Stack gap={pxToRem(10)}>
                  <FormInputText
                    name="name"
                    control={control}
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
                      pattern: {
                        value: /^[^\s]+(?:$|.*[^\s]+$)/,
                        message:
                          "Entered value cant start/end or contain only white spacing",
                      },
                    }}
                  />
                  <FormInputText
                    name="nickname"
                    control={control}
                    placeholder="Nickname"
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
                      pattern: {
                        value: /^[^\s]+(?:$|.*[^\s]+$)/,
                        message:
                          "Entered value cant start/end or contain only white spacing",
                      },
                    }}
                  />
                  <FormInputPhone
                    name="phone"
                    control={control}
                    placeholder="Phone"
                    rules={{
                      required: "Field can't be empty",
                    }}
                  />
                  <FormInputText
                    name="signupEmail"
                    control={control}
                    placeholder="Email"
                    muiProps={{ type: "email" }}
                    rules={{
                      required: "Field can't be empty",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    }}
                  />
                  <FormInputText
                    name="signupPassword"
                    control={control}
                    placeholder="Password"
                    muiProps={{ type: "password" }}
                  />
                  <FormInputText
                    name="signupRePassword"
                    control={control}
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
