import { Box, Button, Stack, Typography } from "@mui/material";
import BlockBordered from "../../components/BlockBordered";
import { styled } from "@mui/material/styles";

const TypographyStyled = styled(Typography)({
  fontSize: 18,
  fontWeight: 600,
  lineHeight: "30px",
  "& span": {
    display: "inline-block",
    width: "152px",
    color: "#BFBEBB",
    marginRight: "20px",
  },
});

const SubscriptionTab = () => {
  return (
    <Box sx={{ borderBottom: "1px solid rgba(191,190,187,0.5)", pb: "60px" }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap="15px"
        mb="17px"
      >
        <Typography variant="sectionTitle" component="h2" fontSize="35px">
          Subscription
        </Typography>
        <Button variant="yellow" sx={{ height: "54px" }}>
          Renew Your Subscription
        </Button>
      </Stack>
      <Stack
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        gap="25px"
      >
        <BlockBordered>
          <TypographyStyled>
            <span>Subcription date:</span> 25. June 2023
          </TypographyStyled>
          <TypographyStyled>
            <span>Expiration date:</span> 25. July 2023
          </TypographyStyled>
          <TypographyStyled>
            <span>Progress:</span> 25% Completed
          </TypographyStyled>
        </BlockBordered>
        <Box maxWidth="314px" flexShrink={0} textAlign="right" mt="50px">
          <Typography
            component="p"
            fontSize="16px"
            fontWeight={600}
            lineHeight="24px"
            mb="15px"
          >
            Buy Lifetime Subscription without any expirations today with
            discounted price.
          </Typography>
          <Typography component="p" color="#BFBEBB" fontWeight={600}>
            Discounted price:{" "}
            <Typography
              component="span"
              fontSize="25px"
              color="#026670"
              fontWeight={700}
              ml="8px"
            >
              $599.49
            </Typography>
          </Typography>
        </Box>
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt="20px"
        gap="15px"
      >
        <Button variant="yellow" sx={{ height: "54px" }}>
          Add Associate for $25.49
        </Button>
        <Button
          variant="outlined"
          sx={{
            height: "54px",
            borderWidth: "2px",
            "&:hover": {
              border: "2px solid #026670",
            },
          }}
        >
          Buy Lifetime Subsctiption
        </Button>
      </Stack>
    </Box>
  );
};

export default SubscriptionTab;
