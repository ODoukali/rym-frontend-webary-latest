import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { MediaPlayButton } from "@vidstack/react";

import { ReactComponent as Replay } from "../../images/replay.svg";
import { ReactComponent as Check } from "../../images/check.svg";

const EndView = () => {
  return (
    <Stack
      className="end-overlay"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      width="100%"
      height="100%"
      bgcolor="#026670"
      zIndex={28}
      p="15px 60px"
      sx={{
        inset: 0,
        display: "none",
        "& media-play-button": { width: "auto", height: "auto", m: 0 },
      }}
    >
      <MediaPlayButton>
        <Button
          variant="yellow"
          startIcon={<Replay />}
          sx={{ fontSize: "16px", height: "54px", maxWidth: "225px" }}
        >
          Replay Preview
        </Button>
      </MediaPlayButton>
      <Divider
        sx={{
          backgroundColor: "rgba(255,255,255,0.3)",
          my: "30px",
          alignSelf: "stretch",
        }}
      />
      <Box textAlign="center">
        <Typography
          component="p"
          fontSize="16px"
          fontWeight={600}
          color="#fff"
          mb="10px"
        >
          What’s included?
        </Typography>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          gap="7px 30px"
        >
          <CourseFeature>1h 2m of content</CourseFeature>
          <CourseFeature>1 project file</CourseFeature>
          <CourseFeature>5 chapter quizzes</CourseFeature>
        </Stack>
      </Box>
    </Stack>
  );
};

const CourseFeature = (props) => {
  return (
    <Stack flexDirection="row" alignItems="center" gap="10px">
      <Check color="#FCE181" />
      <Typography fontSize="14px" fontWeight={500} color="#F7F6F2">
        {props.children}
      </Typography>
    </Stack>
  );
};

export default EndView;
