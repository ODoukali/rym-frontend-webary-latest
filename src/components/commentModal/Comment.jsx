import { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import Testimonial from "../Testimonial";
import TestimonialMenu from "../TestimonialMenu";
import BlockBordered from "../BlockBordered";
import Likes from "../Likes";

import Avatar from "../../images/avatar.png";
import { ReactComponent as Pin } from "../../images/pin.svg";
import { ReactComponent as Chevron } from "../../images/chevron.svg";

const Comment = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Box bgcolor="#fff" borderRadius="10px" p="40px">
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          gap="10px"
          mb="4px"
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
              <img src={Avatar} alt="" />
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
          <Stack flexDirection="row" alignItems="center" columnGap="15px">
            <Stack
              flexDirection="row"
              alignItems="center"
              columnGap="5px"
              bgcolor="#026670"
              borderRadius="10px"
              p="1px 12px"
              mt="5px"
            >
              <Pin />
              <Typography fontSize="12px" fontWeight={600} color="#fff">
                Pinned
              </Typography>
            </Stack>
            <TestimonialMenu>
              <MenuItem onClick={() => {}}>Submenu link 01</MenuItem>
              <MenuItem onClick={() => {}}>Another link 02</MenuItem>
            </TestimonialMenu>
          </Stack>
        </Stack>
        <Typography
          fontFamily="PloniDBold"
          fontSize="20px"
          fontWeight={600}
          color="#026670"
          mb="10px"
        >
          וויאזוי אויסצולעשן איר עקס רעי מאשין
        </Typography>
        <BlockBordered mb="20px">
          <Typography variant="medium" component="p" lineHeight="22px">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu
            doloremque laudantium, totam rem aperiam, eaque ipsa.
          </Typography>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            gap="10px"
            mt="10px"
          >
            <Button variant="text" href="" endIcon={<Chevron />}>
              <Typography component="span">Read More</Typography>
            </Button>
            <Likes number="245" />
          </Stack>
        </BlockBordered>
        <Stack flexDirection="row" alignItems="center" gap="20px">
          <Button
            onClick={handleExpandClick}
            startIcon={<Chevron color="#fff" />}
            sx={{
              color: "#fff",
              backgroundColor: "#026670",
              borderRadius: "20px",
              p: "1px 13px 2px 15px",
              "& svg": {
                width: "7px",
                transform: expanded ? "rotate(270deg)" : "rotate(90deg)",
                marginTop: expanded ? 0 : "1px",
              },
              "&:hover": {
                backgroundColor: "#00545d",
                color: "#fff",
              },
            }}
          >
            2 replies
          </Button>
          <Button variant="text" endIcon={<Chevron />}>
            <Typography component="span">Reply</Typography>
          </Button>
        </Stack>
      </Box>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Stack
          gap="20px"
          pl="80px"
          mt="20px"
          sx={{
            "& > div": { backgroundColor: "#F2F1ED" },
            "& .avatar-container": {
              backgroundColor: "#fff",
              "& p": {
                color: "#BFBEBB",
              },
            },
          }}
        >
          <Testimonial reply />
          <Testimonial reply />
        </Stack>
      </Collapse>
    </Box>
  );
};

export default Comment;
