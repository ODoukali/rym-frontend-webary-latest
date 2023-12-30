import { Box, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";
import Switcher from "../../components/Switcher";

const Notifications = () => {
  return (
    <Box flex={1}>
      <Typography
        variant="sectionTitle"
        component="h2"
        fontSize={pxToRem(35)}
        pl={pxToRem(60)}
        mb={pxToRem(27)}
      >
        Dashboard
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
          <Typography component="h3" variant="blockTitle" mb={pxToRem(5)}>
            General Notifications
          </Typography>
          <Typography component="p" variant="medium">
            Sed ut perspiciatis unde omnis iste natus accusantium.
          </Typography>
        </Box>

        <Stack
          gap={pxToRem(20)}
          sx={{
            "& .MuiTypography-root": {
              fontSize: pxToRem(18),
              fontWeight: 600,
              color: "#333",
            },
          }}
        >
          <Switcher name="updates" label="Updates & News" defaultChecked />
          <Switcher name="new-course" label="New course" defaultChecked />
        </Stack>
      </Box>
    </Box>
  );
};

export default Notifications;
