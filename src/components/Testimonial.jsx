import { Box, IconButton, MenuItem, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Rating from "./Rating";
import BlockBordered from "./BlockBordered";
import TextLink from "./TextLink";
import TestimonialMenu from "./TestimonialMenu";

import Avatar from "../images/avatar.png";
import { ReactComponent as Like } from "../images/like.svg";

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

const Testimonial = (props) => {
  return (
    <Box bgcolor="#fff" borderRadius="10px" p="40px">
      <Stack
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        gap="10px"
        mb="20px"
      >
        <Stack flexDirection="row" alignItems="center" columnGap="21px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={68}
            height={68}
            borderRadius="100%"
            bgcolor="#EDECE8"
          >
            {props.avatar ? (
              <img src={Avatar} alt="" />
            ) : (
              <Typography fontSize="20px" fontWeight={600} color="#fff">
                MK
              </Typography>
            )}
          </Box>
          <Stack>
            <Typography
              component="span"
              fontSize="20px"
              fontWeight={600}
              lineHeight="30px"
              color="secondary"
            >
              Miro Koljanin
            </Typography>
            {props.rating ? (
              <Box py="4px 0 7px">
                <Rating defaultValue={4} readOnly />
              </Box>
            ) : null}
            <Typography
              component="span"
              fontSize="12px"
              fontWeight={600}
              color="#BFBEBB"
            >
              Edited 2 months ago
            </Typography>
          </Stack>
        </Stack>
        <TestimonialMenu>
          <MenuItem onClick={() => {}}>Edit</MenuItem>
          <MenuItem onClick={() => {}}>Copy post link</MenuItem>
          <MenuItem onClick={() => {}}>Report</MenuItem>
        </TestimonialMenu>
      </Stack>
      <BlockBordered mb="17px">
        <Typography variant="medium" component="p" lineHeight="22px">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu
          doloremque laudantium, totam rem aperiam, eaque ipsa.
        </Typography>
        <TextLink
          to=""
          sx={{ "& span": { fontSize: "14px", marginTop: "2px" } }}
        >
          Read More
        </TextLink>
      </BlockBordered>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        {props.reply ? (
          <TextLink to="" sx={{ "& span": { fontSize: "14px" } }}>
            Reply
          </TextLink>
        ) : (
          <div />
        )}
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
      </Stack>
    </Box>
  );
};

export default Testimonial;
