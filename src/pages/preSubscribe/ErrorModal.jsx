import { Box, Button, Stack, Typography } from "@mui/material";
import ModalLayout from "./ModalLayout";

import { ReactComponent as Close } from "../../images/cross-white.svg";

const ErrorModal = (props) => {
  const { openPurchaseModal, ...restProps } = props;

  return (
    <ModalLayout {...restProps} headerTitle="וואס טוט מען ווען דער מאן">
      <Box textAlign="center">
        <Stack
          position="absolute"
          top="-27px"
          left="50%"
          alignItems="center"
          justifyContent="center"
          bgcolor="#C92727"
          width={54}
          height={54}
          borderRadius="100%"
          sx={{ transform: "translateX(-50%)" }}
        >
          <Close />
        </Stack>
        <Typography component="p" fontSize="20px" fontWeight={700} mb="20px">
          Ooops!
          <br /> That didn’t work!
        </Typography>
        <Typography variant="medium" component="p" fontSize="16px" mb="40px">
          Transaction declined, please try a different payment method.
        </Typography>
        <Button
          onClick={openPurchaseModal}
          variant="yellow"
          sx={{ width: "300px" }}
        >
          Try Again
        </Button>
      </Box>
    </ModalLayout>
  );
};

export default ErrorModal;
