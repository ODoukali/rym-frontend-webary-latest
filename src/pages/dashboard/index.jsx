import { Box, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";

import Alert from "./Alert";

const Dashboard = () => {
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
          <Typography component="h3" variant="blockTitle">
            Alerts & Notifications
          </Typography>
        </Box>

        <Stack gap={pxToRem(20)} mb={pxToRem(60)}>
          <Alert severity="error" title="Payment Issue">
            Sed ut perspiciatis unde omnis iste natus accusantium.
          </Alert>
          <Alert severity="success" title="Account Created">
            Sed ut perspiciatis unde omnis iste natus error sit accusantium.
          </Alert>
        </Stack>

        <Box
          borderBottom="1px solid rgba(191,190,187, 0.5)"
          pb={pxToRem(30)}
          mb={pxToRem(30)}
        >
          <Typography component="h3" variant="blockTitle">
            Recently Watched
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
