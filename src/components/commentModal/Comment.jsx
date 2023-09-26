import { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { pxToRem } from "px2rem2px";
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
      <Box bgcolor="#fff" borderRadius={pxToRem(10)} p={pxToRem(40)}>
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          gap={pxToRem(10)}
          mb={pxToRem(4)}
        >
          <Stack
            flexDirection="row"
            alignItems="center"
            columnGap={pxToRem(21)}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width={pxToRem(68)}
              height={pxToRem(68)}
              borderRadius="100%"
              bgcolor="#EDECE8"
            >
              <img src={Avatar} alt="" />
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
          <Stack
            flexDirection="row"
            alignItems="center"
            columnGap={pxToRem(15)}
          >
            <Stack
              flexDirection="row"
              alignItems="center"
              columnGap={pxToRem(5)}
              bgcolor="#026670"
              borderRadius={pxToRem(10)}
              p={`1px ${pxToRem(12)}`}
              mt={pxToRem(5)}
            >
              <Pin />
              <Typography fontSize={pxToRem(12)} fontWeight={600} color="#fff">
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
          fontSize={pxToRem(20)}
          fontWeight={600}
          color="#026670"
          mb={pxToRem(10)}
        >
          וויאזוי אויסצולעשן איר עקס רעי מאשין
        </Typography>
        <BlockBordered mb={pxToRem(20)}>
          <Typography variant="medium" component="p" lineHeight={pxToRem(22)}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu
            doloremque laudantium, totam rem aperiam, eaque ipsa.
          </Typography>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            gap={pxToRem(10)}
            mt={pxToRem(10)}
          >
            <Button variant="text" href="" endIcon={<Chevron />}>
              <Typography component="span">Read More</Typography>
            </Button>
            <Likes number="245" />
          </Stack>
        </BlockBordered>
        <Stack flexDirection="row" alignItems="center" gap={pxToRem(20)}>
          <Button
            onClick={handleExpandClick}
            startIcon={<Chevron color="#fff" />}
            sx={{
              color: "#fff",
              backgroundColor: "#026670",
              borderRadius: pxToRem(20),
              p: `${pxToRem(1)} ${pxToRem(13)} ${pxToRem(2)} ${pxToRem(15)}`,
              "& svg": {
                width: pxToRem(7),
                transform: expanded ? "rotate(270deg)" : "rotate(90deg)",
                marginTop: expanded ? 0 : pxToRem(1),
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
          gap={pxToRem(20)}
          pl={pxToRem(80)}
          mt={pxToRem(20)}
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
