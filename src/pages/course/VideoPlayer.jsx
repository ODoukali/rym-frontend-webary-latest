import { useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import IconBtnCircular from "../../components/IconBtnCircular";
import {
  MediaFullscreenButton,
  MediaMenu,
  MediaMenuButton,
  MediaMenuItems,
  MediaMuteButton,
  MediaOutlet,
  MediaPlayButton,
  MediaPlaybackRateMenuButton,
  MediaPlaybackRateMenuItems,
  MediaPlayer,
  MediaPoster,
  MediaSeekButton,
  MediaSliderValue,
  MediaTime,
  MediaTimeSlider,
  MediaVolumeSlider,
} from "@vidstack/react";

import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import PresentationImg from "../../images/presentation-img.jpg";
import { ReactComponent as Heart } from "../../images/heart.svg";
import { ReactComponent as Next } from "../../images/next.svg";
import { ReactComponent as Play } from "../../images/play.svg";
import { ReactComponent as Volume } from "../../images/volume.svg";
import { ReactComponent as Fullscreen } from "../../images/fullscreen.svg";
import { ReactComponent as Settings } from "../../images/settings.svg";

const IconButtonStyled = styled(IconButton)(() => {
  return {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
      "& svg": {
        color: "#FCE181",
      },
    },
  };
});

const VideoPlayer = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  function onFullscreenChange(event) {
    setIsFullscreen(event.detail);
  }

  return (
    <Box
      position="relative"
      sx={{
        "&::before": {
          content: "''",
          position: "absolute",
          top: "-40px",
          right: "-40px",
          width: "46.6%",
          height: "59.7%",
          bgcolor: "#FCE181",
          borderRadius: "20px",
          zIndex: -1,
        },
      }}
    >
      <MediaPlayer
        src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
        poster={PresentationImg}
        aspectRatio={16 / 9}
        crossorigin=""
        onFullscreenChange={onFullscreenChange}
      >
        <MediaOutlet>
          <MediaPoster alt="" />
        </MediaOutlet>
        <Stack
          position="absolute"
          top="40px"
          right="40px"
          gap="10px"
          sx={{
            opacity: isFullscreen ? 0 : 1,
            transition: "opacity 0.2s ease-in-out",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <IconBtnCircular>
            <Heart />
          </IconBtnCircular>
          <IconBtnCircular>
            <MediaMuteButton>
              <Volume slot="mute" color="#026670" />
              <Volume slot="unmute" color="transparent" />
            </MediaMuteButton>
          </IconBtnCircular>
        </Stack>
        <Stack
          height="64px"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="40px"
          position="absolute"
          bottom="40px"
          left="40px"
          right="40px"
          borderRadius="32px"
          boxShadow="0px 10px 20px rgba(0,0,0,0.16)"
          backgroundColor="rgba(255, 255, 255, 0.5)"
          px="40px"
          sx={{
            backdropFilter: "blur(15px)",
            opacity: isFullscreen ? 0 : 1,
            transition: "opacity 0.2s ease",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <Stack flexDirection="row" alignItems="center" gap="20px">
            <MediaSeekButton seconds={-10}>
              <Typography fontSize="12px" fontWeight="bold" color="secondary">
                - 10 sec
              </Typography>
            </MediaSeekButton>
            <IconButtonStyled sx={{ "& svg": { transform: "rotate(180deg)" } }}>
              <Next color="#026670" />
            </IconButtonStyled>
            <MediaPlayButton>
              <Play slot="play" color="#026670" />
              <Play slot="pause" color="#fce181" />
              <Play slot="replay" color="#026670" />
            </MediaPlayButton>
            <IconButtonStyled>
              <Next color="#026670" />
            </IconButtonStyled>
            <MediaSeekButton seconds={+10}>
              <Typography fontSize="12px" fontWeight="bold" color="secondary">
                + 10 sec
              </Typography>
            </MediaSeekButton>
          </Stack>
          <MediaTimeSlider>
            <div slot="preview">
              <MediaSliderValue type="pointer" format="time" />
            </div>
          </MediaTimeSlider>
          <Stack
            flexDirection="row"
            alignItems="center"
            gap="20px"
            flexShrink={0}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#026670",
                display: "flex",
                gap: "4px",
                marginRight: "10px",
              }}
            >
              <MediaTime type="current" /> <span>/</span>{" "}
              <MediaTime type="duration" />
            </Typography>
            <IconButtonStyled
              sx={{
                width: "23.2px",
                "&:hover": {
                  "& svg": {
                    display: "none",
                  },
                  "& media-volume-slider": {
                    display: "block",
                  },
                },
              }}
            >
              <Volume color="#026670" />
              <MediaVolumeSlider aria-orientation="vertical" />
            </IconButtonStyled>
            <MediaFullscreenButton>
              <Fullscreen color="#026670" />
            </MediaFullscreenButton>
            <MediaMenu>
              <MediaMenuButton aria-label="Settings">
                <Settings color="#026670" />
              </MediaMenuButton>
              <MediaMenuItems>
                <MediaMenu>
                  <MediaPlaybackRateMenuButton label="Speed"></MediaPlaybackRateMenuButton>
                  <MediaPlaybackRateMenuItems
                    rates={[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]}
                    normalLabel="Normal"
                  />
                </MediaMenu>
              </MediaMenuItems>
            </MediaMenu>
          </Stack>
        </Stack>
      </MediaPlayer>
    </Box>
  );
};

export default VideoPlayer;
