import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import IconBtnCircular from "./IconBtnCircular";
import {
  MediaFullscreenButton,
  MediaGesture,
  MediaMenu,
  MediaMenuButton,
  MediaMenuItems,
  MediaOutlet,
  MediaPlayButton,
  MediaPlaybackRateMenuButton,
  MediaPlaybackRateMenuItems,
  MediaPlayer,
  MediaPoster,
  MediaQualityMenuButton,
  MediaQualityMenuItems,
  MediaSeekButton,
  MediaSliderValue,
  MediaTime,
  MediaTimeSlider,
  MediaVolumeSlider,
  useMediaRemote,
} from "@vidstack/react";

import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import PresentationImg from "../images/presentation-img.jpg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";
import { ReactComponent as Notes } from "../images/notes.svg";
import { ReactComponent as Share } from "../images/share.svg";
import { ReactComponent as Next } from "../images/next.svg";
import { ReactComponent as Play } from "../images/play.svg";
import { ReactComponent as Pause } from "../images/pause.svg";
import { ReactComponent as Volume } from "../images/volume.svg";
import { ReactComponent as Fullscreen } from "../images/fullscreen.svg";
import { ReactComponent as Settings } from "../images/settings.svg";

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
  const player = useRef(null);
  const remote = useMediaRemote(player);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function onFullscreenChange(event) {
    setIsFullscreen(event.detail);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        remote.enterPictureInPicture();
      }
    });

    if (player.current) {
      observer.observe(player.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [player, remote]);

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
      <Box
        width="100%"
        display="flex"
        borderRadius="23px"
        overflow="hidden"
        sx={{ "&:hover": { "& .toggle-tooltip": { opacity: 1 } } }}
      >
        <MediaPlayer
          ref={player}
          src="https://media-files.vidstack.io/hls/index.m3u8"
          poster={PresentationImg}
          aspectRatio={16 / 9}
          crossorigin=""
          onFullscreenChange={onFullscreenChange}
        >
          <MediaOutlet>
            <MediaGesture event="pointerup" action="toggle:paused" />
            <MediaPoster alt="" />
          </MediaOutlet>
          <Stack
            className="play-btnnn"
            flexDirection="row"
            alignItems="center"
            gap="20px"
            position="absolute"
            top="50%"
            left="50%"
            flexShrink={0}
            sx={{
              transform: "translate(-50%,-50%)",
              "& media-play-button": { width: "auto" },
            }}
          >
            <MediaPlayButton>
              <PlayerBtn icon={<Play />}>Watch</PlayerBtn>
            </MediaPlayButton>
            <PlayerBtn icon={<Volume />}>Listen</PlayerBtn>
          </Stack>
          <Stack
            className="media-controls-group"
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
            <Tooltip title="Bookmark" placement="left">
              <Box>
                <IconBtnCircular className="hover-green">
                  <Bookmark color="#026670" />
                </IconBtnCircular>
              </Box>
            </Tooltip>
            <Tooltip title="Notes" placement="left">
              <Box>
                <IconBtnCircular className="hover-green">
                  <Notes color="#026670" />
                </IconBtnCircular>
              </Box>
            </Tooltip>
            <Tooltip title="Share Now" placement="left">
              <Box>
                <IconBtnCircular className="hover-green">
                  <Share color="#026670" style={{ marginRight: "1.5px" }} />
                </IconBtnCircular>
              </Box>
            </Tooltip>
            <Box position="relative">
              <IconBtnCircular className="yellow-ic">
                <Volume color="#026670" />
              </IconBtnCircular>
              <Box
                className="toggle-tooltip"
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "62px",
                  transform: "translateY(-50%)",
                  height: "20px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#fff",
                  borderRadius: "10px",
                  backgroundColor: "#026670",
                  whiteSpace: "nowrap",
                  padding: "1px 10px",
                  opacity: 0,
                  transition: "opacity 0.1s ease",
                }}
              >
                Listen / Watch
              </Box>
            </Box>
          </Stack>
          <Stack
            className="media-controls-group"
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
              <IconButtonStyled
                sx={{ "& svg": { transform: "rotate(180deg)" } }}
              >
                <Next color="#026670" />
              </IconButtonStyled>
              <MediaPlayButton>
                <Play slot="play" color="#026670" />
                <Pause slot="pause" color="#fce181" />
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
                <MediaVolumeSlider />
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
                  <MediaMenu>
                    <MediaQualityMenuButton label="Quality"></MediaQualityMenuButton>
                    <MediaQualityMenuItems autoLabel="Auto" />
                  </MediaMenu>
                </MediaMenuItems>
              </MediaMenu>
            </Stack>
          </Stack>
        </MediaPlayer>
      </Box>
    </Box>
  );
};

const PlayerBtn = (props) => {
  return (
    <Button
      variant="yellow"
      startIcon={props.icon}
      sx={{ height: "54px", px: "40px", "&:hover svg": { color: "#026670" } }}
    >
      {props.children}
    </Button>
  );
};

export default VideoPlayer;
