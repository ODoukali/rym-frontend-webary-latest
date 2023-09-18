import { Box, IconButton, Stack, Typography } from "@mui/material";
import TextLink from "../../components/TextLink";
import Likes from "../../components/Likes";

import { ReactComponent as DotMenu } from "../../images/dots-menu.svg";

const Question = (props) => {
  return (
    <Box bgcolor="#fff" borderRadius="10px" p="30px 30px 27px">
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        gap="15px"
        mb="18px"
      >
        <Box>
          <Typography fontWeight={600} color="secondary" mb="3px">
            Lecture 3
          </Typography>
          <Typography fontSize="12px" fontWeight="600" color="#BFBEBB">
            7th of August 2023
          </Typography>
        </Box>
        <IconButton sx={{ height: "34px", mt: "-5px" }}>
          <DotMenu color="#026670" />
        </IconButton>
      </Stack>
      <Box>
        <Typography fontWeight={700} color="#BFBEBB" lineHeight="22px">
          QUESTION
        </Typography>
        <Typography variant="medium" lineHeight="22px">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu
          doloremque laudantium, totam rem aperiam, eaque ipsa?
        </Typography>
      </Box>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mt="5px"
      >
        <TextLink href="" sx={{ "& span": { fontSize: "14px" } }}>
          Read More
        </TextLink>
        <Likes number="245" />
      </Stack>
      <Box borderTop="1px solid rgba(191,190,187,0.5)" pt="18px" mt="16px">
        {props.awaiting ? (
          <Typography
            fontSize="14px"
            lineHeight="18px"
            fontWeight={600}
            color="#BFBEBB"
            mt="4px"
          >
            Awaiting Answer
          </Typography>
        ) : (
          <TextLink href="" sx={{ "& span": { fontSize: "14px" } }}>
            View Answer
          </TextLink>
        )}
      </Box>
    </Box>
  );
};

export default Question;
