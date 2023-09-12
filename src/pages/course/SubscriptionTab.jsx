import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import BlockBordered from "../../components/BlockBordered";
import TextLink from "../../components/TextLink";

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
    <Box>
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
        <Button variant="yellow" sx={{ height: "54px", maxWidth: "300px" }}>
          Add Associate for $25.49
        </Button>
      </Stack>
      <Stack
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        gap="25px"
      >
        <Box>
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
          <TextLink to="" sx={{ marginTop: "30px" }}>
            View Purchase Details
          </TextLink>
        </Box>
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
        justifyContent="flex-end"
        alignItems="center"
        mt="20px"
        gap="15px"
        borderBottom="1px solid rgba(191,190,187,0.5)"
        pb="60px"
      >
        <Button
          variant="outlined"
          sx={{
            maxWidth: "300px",
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
      <TextLink to="" sx={{ marginTop: "60px" }}>
        Rate This Course
      </TextLink>
    </Box>
  );
};

export default SubscriptionTab;
