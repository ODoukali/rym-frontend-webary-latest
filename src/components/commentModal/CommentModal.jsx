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
      onClose={(event, reason) => {
        if (reason !== "backdropClick") {
          return;
        }
      }}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "920px",
          borderRadius: "20px",
        },
        zIndex: 1500,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="#EDECE8"
        p="40px 60px"
        sx={{ "& button": { boxShadow: "none" } }}
      >
        <Button variant="yellow" size="small">
          Post a Comment
        </Button>
        <IconBtnCircular onClick={() => props.onClose()}>
          <Close color="#026670" />
        </IconBtnCircular>
      </Stack>
      <Box bgcolor="#F7F6F2" p="40px 60px 50px">
        <Box mb="40px">
          <Box bgcolor="#EDECE8" borderRadius="10px" p="26px 30px" mb="20px">
            <Typography lineHeight="26px" fontWeight={500} color="#807F7D">
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
            gap="30px"
            mr="30px"
          >
            <Switcher name="anonymous" label="Post Anonymous" defaultChecked />
            <Stack flexDirection="row" alignContent="center" gap="10px">
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
          <Typography fontSize="20px" fontWeight={700} mb="40px">
            Comments (34)
          </Typography>
          <Stack gap="20px">
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
