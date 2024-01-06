import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";
import InputGroup from "./InputGroup";
import BlockHeading from "../../components/BlockHeading";

import AvatarImg from "../../images/avatar.png";

const AccountSettings = () => {
  return (
    <>
      <BlockHeading>
        <Typography component="h3" variant="blockTitle">
          User Profile
        </Typography>
      </BlockHeading>

      <Stack
        flexDirection={{ xs: "column-reverse", ssm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "center", ssm: "flex-start" }}
        gap={{ xs: "30px", ssm: "15px" }}
        mb={pxToRem(60)}
      >
        <Stack flex={1} gap={pxToRem(20)}>
          <InputGroup
            label="Full Name"
            value="Moshy Biener"
            type="text"
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

          <InputGroup
            phone
            label="Telephone"
            value="+17185555555"
            rules={{
              required: "Field can't be empty",
            }}
          />

          <InputGroup
            label="Nickname"
            value="Moshy"
            type="text"
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

          <InputGroup
            label="Email Address"
            value="moshy@rym.com"
            type="email"
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

          <InputGroup
            passwordEye
            label="Password"
            value="Password"
            type="password"
            rules={{
              required: "Field can't be empty",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
              maxLength: {
                value: 30,
                message: "Maximum 30 characters",
              },
            }}
          />
        </Stack>

        <Box>
          <Avatar sx={{ width: pxToRem(128), height: pxToRem(128) }}>
            <img src={AvatarImg} alt="" />
          </Avatar>{" "}
          <Button
            size="small"
            variant="outlined"
            sx={{ mt: pxToRem(20), width: pxToRem(128) }}
          >
            Update
          </Button>
        </Box>
      </Stack>

      <BlockHeading>
        <Typography component="h3" variant="blockTitle">
          User Data & Activity
        </Typography>
      </BlockHeading>

      <Box>
        <Stack
          flexDirection={{ xs: "column", ssm: "row" }}
          alignItems={{ xs: "flex-start", ssm: "center" }}
          justifyContent="space-between"
          gap="15px"
        >
          <Box>
            <Typography fontSize={pxToRem(18)} fontWeight={600} mb="3px">
              View something here
            </Typography>
            <Typography fontSize={pxToRem(16)} fontWeight={500}>
              Sed ut perspiciatis unde omnis iste natus accusantium.
            </Typography>
          </Box>
          <Button variant="yellow" size="small">
            View Questions
          </Button>
        </Stack>

        <Divider
          sx={{ my: pxToRem(30), borderColor: "rgba(191,190,187, 0.5)" }}
        />

        <Stack
          flexDirection={{ xs: "column", ssm: "row" }}
          alignItems={{ xs: "flex-start", ssm: "center" }}
          justifyContent="space-between"
          gap="15px"
        >
          <Box>
            <Typography fontSize={pxToRem(18)} fontWeight={600} mb="3px">
              View something here
            </Typography>
            <Typography fontSize={pxToRem(16)} fontWeight={500}>
              Sed ut perspiciatis unde omnis iste natus accusantium.
            </Typography>
          </Box>
          <Button variant="yellow" size="small">
            View Questions
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default AccountSettings;
