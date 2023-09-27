import React from "react";
import {
  useTheme,
  useMediaQuery,
  Dialog,
  Stack,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { pxToRem } from "px2rem2px";
import IconBtnCircular from "../IconBtnCircular";
import Switcher from "../Switcher";
import Comment from "./Comment";

import { ReactComponent as Close } from "../../images/close.svg";

const CommentModal = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { ...restProps } = props;

  return (
    <Dialog
      {...restProps}
      fullScreen={fullScreen}
      maxWidth="xs"
      scroll="body"
      disableEscapeKeyDown
      disableScrollLock
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          return;
        }
      }}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: pxToRem(920),
          borderRadius: pxToRem(20),
        },
        zIndex: 1500,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="#EDECE8"
        p={`${pxToRem(40)} ${pxToRem(60)}`}
        sx={{ "& button": { boxShadow: "none" } }}
      >
        <Button variant="yellow" size="small">
          Post a Comment
        </Button>
        <IconBtnCircular onClick={() => props.onClose()}>
          <Close color="#026670" />
        </IconBtnCircular>
      </Stack>
      <Box bgcolor="#F7F6F2" p={`${pxToRem(40)} ${pxToRem(60)} ${pxToRem(50)}`}>
        <Box mb={pxToRem(40)}>
          <Box
            bgcolor="#EDECE8"
            borderRadius={pxToRem(10)}
            p={`${pxToRem(26)} ${pxToRem(30)}`}
            mb={pxToRem(20)}
          >
            <Typography
              lineHeight={pxToRem(26)}
              fontWeight={500}
              color="#807F7D"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
          <Stack
            flexDirection="row"
            alignContent="center"
            justifyContent="flex-end"
            flexWrap="wrap"
            gap={pxToRem(30)}
            mr={pxToRem(30)}
          >
            <Switcher name="anonymous" label="Post Anonymous" defaultChecked />
            <Stack flexDirection="row" alignContent="center" gap={pxToRem(10)}>
              <Button variant="outlined" size="small">
                Cancel
              </Button>
              <Button variant="yellow" size="small">
                Comment
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Typography fontSize={pxToRem(20)} fontWeight={700} mb={pxToRem(40)}>
            Comments (34)
          </Typography>
          <Stack gap={pxToRem(20)}>
            <Comment />
            <Comment />
            <Comment />
          </Stack>
        </Box>
      </Box>
    </Dialog>
  );
};

export default CommentModal;
