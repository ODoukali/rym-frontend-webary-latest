import { Box, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextLink from "../../components/TextLink";

import Avatar from "../../images/avatar.png";
import { ReactComponent as DotMenu } from "../../images/dots-menu.svg";
import { ReactComponent as Like } from "../../images/like.svg";

const IconButtonStyled = styled(IconButton)(() => {
  return {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
      "& svg": {
        color: "#026670",
      },
    },
  };
});

const Question = (props) => {
  return (
    <Box bgcolor="#fff" borderRadius="10px" p="30px 30px 27px">
      {!props.small ? (
        <Stack flexDirection="row" alignItems="center" gap="20px" mb="25px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexShrink={0}
            width={68}
            height={68}
            borderRadius="100%"
            bgcolor="#EDECE8"
          >
            <img src={Avatar} alt="" />
          </Box>
          <Typography
            component="span"
            fontSize="20px"
            fontWeight={600}
            lineHeight="25px"
            color="secondary"
            mb="4px"
          >
            Miro Koljanin
          </Typography>
        </Stack>
      ) : null}
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
        <TextLink to="" sx={{ "& span": { fontSize: "14px" } }}>
          Read More
        </TextLink>
        {!props.small ? (
          <Stack flexDirection="row" alignItems="flex-end" columnGap="10px">
            <Typography fontSize="14px" fontWeight={600} color="#BFBEBB">
              245
            </Typography>
            <Stack flexDirection="row" alignItems="center" columnGap="7px">
              <IconButtonStyled sx={{ marginBottom: "4px" }}>
                <Like color="#BFBEBB" />
              </IconButtonStyled>
            </Stack>
          </Stack>
        ) : null}
      </Stack>
      <Box borderTop="1px solid rgba(191,190,187,0.5)" pt="18px" mt="16px">
        <TextLink to="" sx={{ "& span": { fontSize: "14px" } }}>
          View Answer
        </TextLink>
      </Box>
    </Box>
  );
};

export default Question;
