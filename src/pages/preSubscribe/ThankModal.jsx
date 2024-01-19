import { Box, Button, Stack, Typography } from "@mui/material";
import ModalLayout from "./ModalLayout";

import { ReactComponent as Check } from "../../images/check.svg";

const ThankModal = (props) => {
  return (
    <ModalLayout {...props} headerTitle="וואס טוט מען ווען דער מאן">
      <Box textAlign="center">
        <Stack
          position="absolute"
          top="-27px"
          left="50%"
          alignItems="center"
          justifyContent="center"
          bgcolor="#026670"
          width={54}
          height={54}
          borderRadius="100%"
          sx={{ transform: "translateX(-50%)" }}
        >
          <Check width={16} height={16} color="#FCE181" />
        </Stack>
        <Typography component="p" fontSize="20px" fontWeight={700} mb="20px">
          Thank you.
          <br /> Payment Successful!
        </Typography>
        <Typography variant="medium" component="p" fontSize="16px" mb="40px">
          An email confirmation was sent.
        </Typography>
        <Button variant="yellow" sx={{ width: "300px" }}>
          Start Watching
        </Button>
      </Box>
    </ModalLayout>
  );
};

export default ThankModal;
