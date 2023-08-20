import { Box, Button, Stack, Typography } from "@mui/material";
import Question from "./Question";
import TextLink from "../../components/TextLink";

const ConnectTab = () => {
  return (
    <>
      <Box>
        <Typography
          component="h2"
          fontSize="22px"
          fontWeight="bold"
          lineHeight="30px"
          mb="20px"
        >
          Have a Question? Ask the Rabbi!
        </Typography>
        <Stack flexDirection="row" alignItems="flex-start" gap="36px">
          <Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <Question />
              <Question />
            </Box>
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
              gap="10px"
              mt="40px"
              mb="60px"
            >
              <Button variant="yellow" sx={{ height: "54px" }}>
                Send us Your Question
              </Button>
              <TextLink to="">Explore all Q&A</TextLink>
            </Stack>
          </Box>
          <Box
            maxWidth="230px"
            position="relative"
            bgcolor="#026670"
            borderRadius="10px"
            p="30px"
            sx={{
              "&::before": {
                content: "''",
                position: "absolute",
                top: 0,
                left: "-18px",
                height: "100%",
                borderLeft: "2px solid #BFBEBB",
              },
            }}
          >
            <Typography
              color="#fff"
              fontSize="22px"
              fontWeight={700}
              lineHeight="30px"
              letterSpacing="-0.86px"
              mb="15px"
            >
              Need 1 on 1 help?
            </Typography>
            <Typography
              color="#fff"
              fontSize="14px"
              fontWeight={700}
              lineHeight="21px"
              mb="24px"
            >
              Book an Appointment with the Rabbi Today and improve your
              marriage.
            </Typography>
            <Typography
              color="#fff"
              fontSize="13px"
              fontWeight={500}
              lineHeight="21px"
              letterSpacing="-0.39px"
              mb="25px"
            >
              One-on-one appointments with the Reb Yakov Moshe are a great way
              to get personalized advice and support. He can tailor his guidance
              to your specific needs and help you create a plan to strengthen
              your marriage.
            </Typography>
            <Button
              variant="yellow"
              sx={{
                height: "40px",
                fontSize: "14px",
                p: "20px",
                maxWidth: "170px",
              }}
            >
              Book Appointment
            </Button>
          </Box>
        </Stack>

        <Box borderTop="1px solid #BFBEBB" pt="60px">
          <Typography
            component="h2"
            fontSize="22px"
            fontWeight="bold"
            lineHeight="30px"
            mb="20px"
          >
            View Your Submited Questions
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "16px",
            }}
          >
            <Question small />
            <Question small />
            <Question small />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ConnectTab;
