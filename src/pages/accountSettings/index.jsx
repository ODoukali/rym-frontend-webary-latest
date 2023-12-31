import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";

import AvatarImg from "../../images/avatar.png";

const AccountSettings = () => {
  return (
    <Box flex={1}>
      <Typography
        variant="sectionTitle"
        component="h2"
        fontSize={pxToRem(35)}
        pl={pxToRem(60)}
        mb={pxToRem(27)}
      >
        Account Settings
      </Typography>

      <Box
        position="relative"
        bgcolor="#fff"
        borderRadius="20px"
        p={pxToRem(60)}
      >
        <Box
          borderBottom="1px solid rgba(191,190,187, 0.5)"
          pb={pxToRem(30)}
          mb={pxToRem(30)}
        >
          <Typography component="h3" variant="blockTitle">
            User Profile
          </Typography>
        </Box>

        <Stack flexDirection="row" justifyContent="space-between" gap="30px">
          <Stack gap={pxToRem(20)}>
            <Stack></Stack>
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
      </Box>
    </Box>
  );
};

export default AccountSettings;
