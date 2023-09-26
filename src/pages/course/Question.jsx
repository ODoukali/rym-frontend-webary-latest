import { Box, IconButton, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";
import TextLink from "../../components/TextLink";
import Likes from "../../components/Likes";

import { ReactComponent as DotMenu } from "../../images/dots-menu.svg";

const Question = (props) => {
  return (
    <Box
      bgcolor="#fff"
      borderRadius={pxToRem(10)}
      p={`${pxToRem(30)} ${pxToRem(30)} ${pxToRem(27)}`}
    >
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        gap={pxToRem(15)}
        mb={pxToRem(18)}
      >
        <Box>
          <Typography fontWeight={600} color="secondary" mb={pxToRem(3)}>
            Lecture 3
          </Typography>
          <Typography fontSize={pxToRem(12)} fontWeight="600" color="#BFBEBB">
            7th of August 2023
          </Typography>
        </Box>
        <IconButton sx={{ height: pxToRem(34), mt: pxToRem(-5) }}>
          <DotMenu color="#026670" />
        </IconButton>
      </Stack>
      <Box>
        <Typography fontWeight={700} color="#BFBEBB" lineHeight={pxToRem(22)}>
          QUESTION
        </Typography>
        <Typography variant="medium" lineHeight={pxToRem(22)}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu
          doloremque laudantium, totam rem aperiam, eaque ipsa?
        </Typography>
      </Box>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mt={pxToRem(5)}
      >
        <TextLink href="" sx={{ "& span": { fontSize: pxToRem(14) } }}>
          Read More
        </TextLink>
        <Likes number="245" />
      </Stack>
      <Box
        borderTop="1px solid rgba(191,190,187,0.5)"
        pt={pxToRem(18)}
        mt={pxToRem(16)}
      >
        {props.awaiting ? (
          <Typography
            fontSize={pxToRem(14)}
            lineHeight={pxToRem(18)}
            fontWeight={600}
            color="#BFBEBB"
            mt={pxToRem(4)}
          >
            Awaiting Answer
          </Typography>
        ) : (
          <TextLink href="" sx={{ "& span": { fontSize: pxToRem(14) } }}>
            View Answer
          </TextLink>
        )}
      </Box>
    </Box>
  );
};

export default Question;
