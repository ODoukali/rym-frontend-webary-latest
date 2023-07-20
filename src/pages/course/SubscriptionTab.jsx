import { Box, Button, Stack, Typography } from "@mui/material";
import BlockBordered from "../../components/BlockBordered";
import TextLink from "../../components/TextLink";
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
    <>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mb="17px"
      >
        <Typography variant="sectionTitle" component="h2" fontSize="35px">
          Subscription
        </Typography>
        <Button variant="yellow">Renew Your Subscription</Button>
      </Stack>
      <BlockBordered>
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          gap="25px"
        >
          <Box>
            <TypographyStyled>
              <span>Subcription date:</span> 25. June 2023
            </TypographyStyled>
            <TypographyStyled>
              <span>Expiration date:</span> 25. July 2023
            </TypographyStyled>
            <TypographyStyled>
              <span>Progress:</span> Advanced
            </TypographyStyled>
            <Typography
              pl="172px"
              fontSize="14px"
              fontWeight={600}
              color="#BFBEBB"
            >
              (25 hours of watching & listening, 17 comments, 3 questions)
            </Typography>
          </Box>
          <Box
            maxWidth="264px"
            alignSelf="flex-end"
            flexShrink={0}
            textAlign="right"
          >
            <Typography
              fontSize="14px"
              fontWeight={600}
              lineHeight="22px"
              mb="20px"
            >
              You can also buy Lifetime Subscription for $499,59 without any
              expirations.
            </Typography>
            <TextLink to="">Buy Lifetime Subcription</TextLink>
          </Box>
        </Stack>
      </BlockBordered>
    </>
  );
};

export default SubscriptionTab;
