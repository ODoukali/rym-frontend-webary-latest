import { Box, MenuItem, Stack, Typography } from "@mui/material";
import { useModal } from "mui-modal-provider";
import { pxToRem } from "px2rem2px";
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
      borderRadius={pxToRem(10)}
      p={pxToRem(40)}
      onClick={() => props.modal && showModal(CommentModal)}
    >
      <Stack
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        gap={pxToRem(10)}
        mb={pxToRem(20)}
      >
        <Stack flexDirection="row" alignItems="center" columnGap={pxToRem(21)}>
          <Box
            className="avatar-container"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={pxToRem(68)}
            height={pxToRem(68)}
            borderRadius="100%"
            bgcolor="#EDECE8"
          >
            {props.avatar ? (
              <img src={Avatar} alt="" />
            ) : (
              <Typography fontSize={pxToRem(20)} fontWeight={600} color="#fff">
                MK
              </Typography>
            )}
          </Box>
          <Stack>
            <Typography
              component="span"
              fontSize={pxToRem(20)}
              fontWeight={600}
              lineHeight={pxToRem(30)}
              color="secondary"
            >
              Miro Koljanin
            </Typography>
            {props.rating ? (
              <Box py={`${pxToRem(4)} 0 ${pxToRem(7)}`}>
                <Rating defaultValue={4} readOnly />
              </Box>
            ) : null}
            <Typography
              component="span"
              fontSize={pxToRem(12)}
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
      <BlockBordered mb={pxToRem(17)}>
        <Typography variant="medium" component="p" lineHeight={pxToRem(22)}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu
          doloremque laudantium, totam rem aperiam, eaque ipsa.
        </Typography>
        <TextLink
          sx={{ "& span": { fontSize: pxToRem(14), marginTop: pxToRem(2) } }}
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
          <TextLink
            onClick={(e) => {
              e.stopPropagation();
              props.modal && showModal(CommentModal);
            }}
            sx={{ "& span": { fontSize: pxToRem(14) } }}
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
