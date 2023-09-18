import { Box, MenuItem, Stack, Typography } from "@mui/material";
import { useModal } from "mui-modal-provider";
import Rating from "./Rating";
import BlockBordered from "./BlockBordered";
import TextLink from "./TextLink";
import TestimonialMenu from "./TestimonialMenu";
import CommentModal from "./commentModal/CommentModal";
import Likes from "./Likes";

import Avatar from "../images/avatar.png";

const Testimonial = (props) => {
  const { showModal } = useModal();

  return (
    <Box
      bgcolor="#fff"
      borderRadius="10px"
      p="40px"
      onClick={() => props.modal && showModal(CommentModal)}
    >
      <Stack
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        gap="10px"
        mb="20px"
      >
        <Stack flexDirection="row" alignItems="center" columnGap="21px">
          <Box
            className="avatar-container"
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
        <TextLink sx={{ "& span": { fontSize: "14px", marginTop: "2px" } }}>
          Read More
        </TextLink>
      </BlockBordered>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        {props.reply ? (
          <TextLink
            onClick={(e) => {
              e.stopPropagation();
              props.modal && showModal(CommentModal);
            }}
            sx={{ "& span": { fontSize: "14px" } }}
          >
            Reply
          </TextLink>
        ) : (
          <div />
        )}
        <Likes number="245" />
      </Stack>
    </Box>
  );
};

export default Testimonial;
