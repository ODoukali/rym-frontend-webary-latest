import { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Stack,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { styled } from "@mui/material/styles";
import ModalLayout from "./ModalLayout";
import Switcher from "../../components/Switcher";

import { ReactComponent as Chevron } from "../../images/chevron.svg";
import { ReactComponent as GPay } from "../../images/G_Pay.svg";
import { ReactComponent as APay } from "../../images/apple-pay.svg";
import { ReactComponent as PayPal } from "../../images/paypal.svg";

const DividerStyled = styled(Divider)({
  margin: "30px 0",
  borderColor: "#BFBEBB",
});

const TabStyled = styled(Tab)({
  fontSize: "14px",
  lineHeight: "14px",
  fontWeight: 700,
  color: "#333",
  textTransform: "none",
  border: "2px solid #BFBEBB",
  borderRadius: "10px",
  height: "64px",
  width: "87px",
  minWidth: "auto",
  "&.Mui-selected": {
    borderColor: "#333",
  },
});

const PurchaseModal = (props) => {
  const [isPromoVisible, setIsPromoVisible] = useState(false);
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ModalLayout {...props} headerTitle="וואס טוט מען ווען דער מאן ארבעט">
      <Box textAlign="center">
        <Typography component="p" fontSize="20px" fontWeight={700} mb="20px">
          Course Subscription for
        </Typography>
        <DividerStyled sx={{ my: "20px" }} />
        <Stack
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap="20px"
          mb="15px"
        >
          <Typography
            fontSize="30px"
            lineHeight="30px"
            fontWeight="700"
            color="#026670"
          >
            $250.59
          </Typography>
          <Typography
            fontSize="16px"
            fontWeight="600"
            color="#BFBEBB"
            sx={{ textDecoration: "line-through", mt: "10px" }}
          >
            $350.59
          </Typography>
        </Stack>
        <Typography
          component="p"
          fontSize="12px"
          fontWeight={600}
          color="#BFBEBB"
          mb="20px"
        >
          Valid for 6 months
        </Typography>
        <Switcher
          name="lifetime-access"
          label="Need Lifetime Access"
          defaultChecked={true}
          // checked={true}
          // onChange={() => handleSwitchChange(n.id)}
        />
        <DividerStyled />
        <Button
          fullWidth
          endIcon={<Chevron />}
          onClick={() => setIsPromoVisible(!isPromoVisible)}
          sx={{
            fontSize: "16px",
            justifyContent: "space-between",
            "& .MuiButton-endIcon svg": {
              transform: isPromoVisible ? "rotate(-90deg)" : "rotate(90deg)",
            },
          }}
        >
          Have a Promo?
        </Button>
        <Collapse in={isPromoVisible} timeout="auto" unmountOnExit>
          <Stack
            height="54px"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            bgcolor="#EDECE8"
            borderRadius="30px"
            mt="10px"
            p="0 10px"
          >
            <TextField
              fullWidth
              placeholder="Apply Promo Code"
              sx={{
                "& input": {
                  fontSize: "12px",
                  fontWeight: 600,
                  "&::placeholder": { color: "#BFBEBB", opacity: 1 },
                },
              }}
            />
            <Button
              variant="yellow"
              size="small"
              sx={{ minWidth: "120px", fontSize: "14px !important" }}
            >
              Apply
            </Button>
          </Stack>
        </Collapse>
        <DividerStyled />
        <Typography variant="medium" component="p" fontSize="16px" mb="20px">
          You are eligible for a payment plan of 3 payments of $85.39
        </Typography>
        <Button
          variant="yellow"
          size="small"
          sx={{ fontSize: "14px !important" }}
        >
          Select Payment Plan
        </Button>
        <DividerStyled />
        <TabContext value={value}>
          <TabList
            variant="scrollable"
            scrollButtons={false}
            onChange={handleChange}
            sx={{
              "& .MuiTabs-flexContainer": { gap: "10px" },
              "& .MuiTabs-indicator": { display: "none" },
            }}
          >
            <TabStyled label="Credit Card" value="1" />
            <TabStyled icon={<GPay />} value="2" />
            <TabStyled icon={<APay />} value="3" />
            <TabStyled label={<PayPal />} value="4" />
          </TabList>
          <TabPanel value="1">
            <Typography
              component="p"
              fontSize="16px"
              fontWeight={700}
              mb="20px"
            >
              Credit Card Information
            </Typography>
          </TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
          <TabPanel value="4"></TabPanel>
        </TabContext>
        <Typography
          component="p"
          fontSize="12px"
          fontWeight={500}
          color="#BFBEBB"
          textAlign="left"
        >
          * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </Typography>
      </Box>
    </ModalLayout>
  );
};

export default PurchaseModal;
