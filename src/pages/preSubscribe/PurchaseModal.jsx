import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ModalLayout from "./ModalLayout";

const DividerStyled = styled(Divider)({
  margin: "30px 0",
  borderColor: "#BFBEBB",
});

const PurchaseModal = (props) => {
  return (
    <ModalLayout {...props} headerTitle="וואס טוט מען ווען דער מאן ארבעט">
      <Box textAlign="center">
        <Typography component="p" fontSize="20px" fontWeight={700} mb="20px">
          Course Subscription for
        </Typography>
        <DividerStyled />
        <Box></Box>
      </Box>
    </ModalLayout>
  );
};

export default PurchaseModal;
