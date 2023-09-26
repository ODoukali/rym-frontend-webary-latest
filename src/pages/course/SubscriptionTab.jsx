import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { pxToRem } from "px2rem2px";
import BlockBordered from "../../components/BlockBordered";
import TextLink from "../../components/TextLink";

const TypographyStyled = styled(Typography)({
  fontSize: pxToRem(18),
  fontWeight: 600,
  lineHeight: pxToRem(30),
  "& span": {
    display: "inline-block",
    width: pxToRem(152),
    color: "#BFBEBB",
    marginRight: pxToRem(20),
  },
});

const SubscriptionTab = () => {
  return (
    <Box>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={pxToRem(15)}
        mb={pxToRem(17)}
      >
        <Typography
          variant="sectionTitle"
          component="h2"
          fontSize={pxToRem(35)}
        >
          Subscription
        </Typography>
        <Button
          variant="yellow"
          sx={{ height: pxToRem(54), maxWidth: pxToRem(300) }}
        >
          Add Associate for $25.49
        </Button>
      </Stack>
      <Stack
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        gap={pxToRem(25)}
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
          <TextLink href="" sx={{ marginTop: pxToRem(30) }}>
            View Purchase Details
          </TextLink>
        </Box>
        <Box
          maxWidth={pxToRem(314)}
          flexShrink={0}
          textAlign="right"
          mt={pxToRem(50)}
        >
          <Typography
            component="p"
            fontSize={pxToRem(16)}
            fontWeight={600}
            lineHeight={pxToRem(24)}
            mb={pxToRem(15)}
          >
            Buy Lifetime Subscription without any expirations today with
            discounted price.
          </Typography>
          <Typography component="p" color="#BFBEBB" fontWeight={600}>
            Discounted price:{" "}
            <Typography
              component="span"
              fontSize={pxToRem(25)}
              color="#026670"
              fontWeight={700}
              ml={pxToRem(8)}
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
        mt={pxToRem(20)}
        gap={pxToRem(15)}
        borderBottom="1px solid rgba(191,190,187,0.5)"
        pb={pxToRem(60)}
      >
        <Button
          variant="outlined"
          sx={{
            maxWidth: pxToRem(300),
            height: pxToRem(54),
            borderWidth: "2px",
            "&:hover": {
              border: "2px solid #026670",
            },
          }}
        >
          Buy Lifetime Subsctiption
        </Button>
      </Stack>
      <TextLink href="" sx={{ marginTop: pxToRem(60) }}>
        Rate This Course
      </TextLink>
    </Box>
  );
};

export default SubscriptionTab;
