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
import { useForm } from "react-hook-form";
import ModalLayout from "./ModalLayout";
import Switcher from "../../components/Switcher";
import FormInputText from "../../components/FormInputText";

import { ReactComponent as Chevron } from "../../images/chevron.svg";
import { ReactComponent as GPay } from "../../images/G_Pay.svg";
import { ReactComponent as APay } from "../../images/apple-pay.svg";
import { ReactComponent as PayPal } from "../../images/paypal.svg";

const DividerStyled = styled(Divider)({
  margin: "30px 0",
  borderColor: "#BFBEBB",
});

const TabPanelStyled = styled(TabPanel)({
  padding: "30px 0",
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
  const { openThankModal, ...restProps } = props;
  const [isPromoVisible, setIsPromoVisible] = useState(false);
  const [tabValue, setTabValue] = useState("1");
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const { control, setValue, handleSubmit } = useForm({
    values: {
      creditCard: "",
      expiration: "",
      cvv: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    openThankModal();
  };

  return (
    <ModalLayout {...restProps} headerTitle="וואס טוט מען ווען דער מאן">
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
        <TabContext value={tabValue}>
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
          <TabPanelStyled value="1">
            <Typography
              component="p"
              fontSize="16px"
              fontWeight={700}
              mb="20px"
            >
              Credit Card Information
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack gap="10px">
                <FormInputText
                  name="creditCard"
                  control={control}
                  setValue={setValue}
                  placeholder="Credit Card Number"
                  muiProps={{
                    type: "text",
                  }}
                  rules={{
                    required: "Field can't be empty",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Invalid input. Only digits are allowed.",
                    },
                  }}
                />
                <Stack flexDirection="row" gap="10px">
                  <Box flex={0.55}>
                    <FormInputText
                      name="expiration"
                      control={control}
                      setValue={setValue}
                      placeholder="Expiration"
                      muiProps={{
                        type: "text",
                      }}
                      rules={{
                        required: "Field can't be empty",
                        pattern: {
                          value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                          message: "Wrong format.",
                        },
                      }}
                    />
                  </Box>
                  <Box flex={0.58}>
                    <FormInputText
                      name="cvv"
                      control={control}
                      setValue={setValue}
                      placeholder="CVV Code"
                      muiProps={{
                        type: "text",
                      }}
                      rules={{
                        required: "Field can't be empty",
                        pattern: {
                          value: /^[0-9]{3,4}$/,
                          message: "Invalid input. Only digits are allowed.",
                        },
                      }}
                    />
                  </Box>
                </Stack>
              </Stack>
              <DividerStyled />
              <Switcher
                name="save-info"
                label="Save my information for a future checkouts"
                defaultChecked={true}
                // checked={true}
                // onChange={() => handleSwitchChange(n.id)}
              />
              <Box bgcolor="#EDECE8" p="40px 60px" m="30px -60px 0">
                <Stack
                  flexDirection="row"
                  justifyContent="center"
                  gap="10px"
                  mb="20px"
                >
                  <Typography fontSize="16px" fontWeight={700} mt="6px">
                    Checkout:
                  </Typography>
                  <Typography
                    fontSize="30px"
                    lineHeight="30px"
                    fontWeight="700"
                    color="#026670"
                  >
                    $250.59
                  </Typography>
                </Stack>
                <Button
                  variant="yellow"
                  type="submit"
                  sx={{ fontSize: "16px", fontWeight: 700 }}
                >
                  Checkout & Pay Now
                </Button>
              </Box>
            </form>
          </TabPanelStyled>
          <TabPanelStyled value="2"></TabPanelStyled>
          <TabPanelStyled value="3"></TabPanelStyled>
          <TabPanelStyled value="4"></TabPanelStyled>
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
