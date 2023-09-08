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
  MediaTooltip,
  MediaVolumeSlider,
  useMediaStore,
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
import { ReactComponent as FullscreenExit } from "../images/full-screen-exit.svg";
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
  const playerWrapper = useRef(null);
  const player = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [playTriggered, setPlayTriggered] = useState(false);
  const [pauseTriggered, setPauseTriggered] = useState(false);
  const { fullscreen } = useMediaStore(player);

  useEffect(() => {
    const callbackFunction = (entries) => {
      const [entry] = entries;
      setIsFixed(!entry.isIntersecting);
    };

    let observerRefValue = null;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    if (playerWrapper.current) {
      observer.observe(playerWrapper.current);
      observerRefValue = playerWrapper.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, []);

  function onPlay(event) {
    if (event.request.trigger.MEDIA_GESTURE) {
      setPlayTriggered(true);
    }
    setPauseTriggered(false);
  }

  function onPause(event) {
    if (event.request.trigger.MEDIA_GESTURE) {
      setPauseTriggered(true);
    }
    setPlayTriggered(false);
  }

  return (
    <Box
      position="relative"
      sx={{
        "&::before": {
          content: "''",
          position: "absolute",
          bottom: "-40px",
          left: "-40px",
          width: "46.6%",
          height: "59.7%",
          bgcolor: "#FCE181",
          borderRadius: "20px",
          zIndex: -1,
        },
      }}
    >
      <Box
        ref={playerWrapper}
        className="player-bgr"
        width="100%"
        position="relative"
        display="flex"
        borderRadius="23px"
        pb="56.2%"
        overflow="hidden"
        sx={{ "&:hover": { "& .toggle-tooltip": { opacity: 1 } } }}
      >
        <MediaPlayer
          ref={player}
          className={`${isFixed ? "pip" : ""}`}
          src="https://media-files.vidstack.io/hls/index.m3u8"
          poster={PresentationImg}
          aspectRatio={16 / 9}
          crossorigin=""
          onPause={onPause}
          onPlay={onPlay}
        >
          <MediaOutlet>
            <MediaGesture event="pointerup" action="toggle:paused" />
            <MediaPoster alt="" />
          </MediaOutlet>
          {fullscreen ? (
            <Box
              className="media-controls-group"
              position="absolute"
              top={0}
              left={0}
              width="100%"
            >
              <Box
                width="100%"
                position="absolute"
                top={0}
                height="68px"
                pointerEvents="none"
                pb="160px"
                zIndex={25}
                sx={{
                  background:
                    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAEmCAYAAACjy/qzAAAAhklEQVQ4y52RUQ6AMAxCKd7/JJ7R6aeJAdr507TjQZqOAE4CWARwx7JE944rch/k6qOWS7bq5bh72zGF8+LTa6goJeRPgXDYNxWFfkS0QXCInLIN1GxTXA0dtS0otWJnuXJR1Y9WYP9GF1UCYRQYHRSlXMARbVO4th3sd7Y3OP5dY3Bn+SkPsGJ1+HGGVtcAAAAASUVORK5CYII=)",
                  backgroundRepeat: "repeat-x",
                  backgroundPosition: "top",
                }}
              ></Box>
              <Box
                width="100%"
                position="absolute"
                left={18}
                top={18}
                pr="145px"
                zIndex={26}
              >
                <Typography
                  color="#fff"
                  fontSize="27px"
                  sx={{
                    display: "block",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    wordWrap: "normal",
                    cursor: "default",
                    textShadow: "0 0 2px rgba(0,0,0,.5)",
                  }}
                >
                  Lecture1
                </Typography>
              </Box>
            </Box>
          ) : null}
          <Box
            position="absolute"
            top="40%"
            left="50%"
            display="flex"
            sx={{
              transform: "translate(-50%)",
              pointerEvents: "none",
            }}
          >
            {playTriggered ? (
              <div className="animWrapper">
                <div className="play" />
              </div>
            ) : null}
            {pauseTriggered ? (
              <div className="animWrapper">
                <div className="pause" />
              </div>
            ) : null}
          </Box>
          <Stack
            className="play-btn"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap="20px"
            width="100%"
            height="100%"
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
                  color: "#026670",
                  borderRadius: "10px",
                  backgroundColor: "#FCE181",
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
            }}
          >
            <Stack flexDirection="row" alignItems="center" gap="17px">
              <MediaSeekButton seconds={-10}>
                <MediaTooltip position="top center">
                  <span>Seek -10s</span>
                </MediaTooltip>
                <Typography fontSize="12px" fontWeight="bold" color="secondary">
                  - 10 sec
                </Typography>
              </MediaSeekButton>
              <Box className="tooltip-hover">
                <MediaTooltip position="top center">
                  <span>Prev</span>
                </MediaTooltip>
                <IconButtonStyled
                  sx={{ "& svg": { transform: "rotate(180deg)" } }}
                >
                  <Next color="#026670" />
                </IconButtonStyled>
              </Box>
              <MediaPlayButton>
                <MediaTooltip position="top center">
                  <span slot="play">Play</span>
                  <span slot="pause">Pause</span>
                  <span slot="replay">Replay</span>
                </MediaTooltip>
                <Play slot="play" color="#026670" />
                <Pause slot="pause" color="#fce181" />
                <Play slot="replay" color="#026670" />
              </MediaPlayButton>
              <Box className="tooltip-hover">
                <MediaTooltip position="top center">
                  <span>Next</span>
                </MediaTooltip>
                <IconButtonStyled>
                  <Next color="#026670" />
                </IconButtonStyled>
              </Box>
              <MediaSeekButton seconds={+10}>
                <MediaTooltip position="top center">
                  <span>Seek +10s</span>
                </MediaTooltip>
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
              justifyContent="space-between"
              flexShrink={0}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#026670",
                  display: "flex",
                  gap: "4px",
                  marginRight: "30px",
                  "& span": {
                    fontFamily: "Roboto Mono",
                  },
                }}
              >
                <MediaTime type="current" /> <span>/</span>{" "}
                <MediaTime type="duration" />
              </Typography>
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap="20px"
              >
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
                  <MediaVolumeSlider>
                    <MediaSliderValue
                      type="pointer"
                      format="percent"
                      slot="preview"
                    />
                  </MediaVolumeSlider>
                </IconButtonStyled>
                <MediaFullscreenButton>
                  <MediaTooltip position="top center">
                    <span slot="enter">Enter Fullscreen</span>
                    <span slot="exit">Exit Fullscreen</span>
                  </MediaTooltip>
                  <Fullscreen slot="enter" color="#026670" />
                  <FullscreenExit slot="exit" color="#026670" />
                </MediaFullscreenButton>
                <MediaMenu>
                  <MediaMenuButton aria-label="Settings">
                    <Settings color="#026670" />
                    <MediaTooltip>
                      <span slot="open">Open Settings</span>
                      <span slot="close">Close Settings</span>
                    </MediaTooltip>
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
