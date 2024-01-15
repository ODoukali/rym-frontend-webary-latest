import { Box, Button, Typography } from "@mui/material";
import ModalLayout from "./ModalLayout";

const Login = (props) => {
  return (
    <ModalLayout {...props} headerTitle="וואס טוט מען ווען דער מאן ארבעט">
      <Box textAlign="center">
        <Typography variant="medium" component="p" fontSize="16px" mb="40px">
          You need to login or signup in order to purchase this course.
        </Typography>
        <Button variant="yellow" sx={{ width: "300px" }}>
          Log In / Sign up
        </Button>
      </Box>
    </ModalLayout>
  );
};

export default Login;
