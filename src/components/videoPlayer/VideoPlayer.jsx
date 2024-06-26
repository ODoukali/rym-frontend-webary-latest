import { useEffect, useRef, useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
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
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import restrictToWindowEdgesMargin from "../../utils/restrictToWindowEdges";
import { pxToRem } from "px2rem2px";
import { CSS } from "@dnd-kit/utilities";
import EndView from "./EndView";

import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import PresentationImg from "../../images/presentation-img.jpg";
import { ReactComponent as Next } from "../../images/next.svg";
import { ReactComponent as Play } from "../../images/play.svg";
import { ReactComponent as Pause } from "../../images/pause.svg";
import { ReactComponent as Volume } from "../../images/volume.svg";
import { ReactComponent as Fullscreen } from "../../images/fullscreen.svg";
import { ReactComponent as FullscreenExit } from "../../images/full-screen-exit.svg";
import { ReactComponent as Settings } from "../../images/settings.svg";
import { ReactComponent as Close } from "../../images/close.svg";
import { ReactComponent as NewWindow } from "../../images/open-in-new-window.svg";
import SidePanel from "./SidePanel";

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

const VideoPlayerDraggable = ({ resetPosition, x, y, preview }) => {
  const playerWrapper = useRef(null);
  const player = useRef(null);
  const { fullscreen } = useMediaStore(player);

  const [isFixed, setIsFixed] = useState(false);
  const [playTriggered, setPlayTriggered] = useState(false);
  const [pauseTriggered, setPauseTriggered] = useState(false);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
    disabled: !isFixed,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const scrollTargetPosition =
    playerWrapper?.current?.getBoundingClientRect().top + window.scrollY;

  function onProviderSetup(event) {
    const provider = event.detail;
    if (provider.video) {
      provider.video.setAttribute("disablePictureInPicture", "");
    }
  }

  useEffect(() => {
    const callbackFunction = (entries) => {
      const [entry] = entries;
      setIsFixed(!entry.isIntersecting);
      resetPosition();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onPlay(event) {
    if (event.request.trigger.MEDIA_GESTURE) {
      setPlayTriggered(true);
    }
    setPauseTriggered(false);
  }

  function onPause(event) {
    if (event.request?.trigger.MEDIA_GESTURE) {
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
          bottom: pxToRem(-40),
          left: pxToRem(-40),
          width: "46.6%",
          height: "59.7%",
          bgcolor: "#FCE181",
          borderRadius: pxToRem(20),
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
        borderRadius={pxToRem(23)}
        pb="56.2%"
        overflow="hidden"
        sx={{ "&:hover": { "& .toggle-tooltip": { opacity: 1 } } }}
      >
        <MediaPlayer
          style={{
            ...style,
            bottom: isFixed ? y * -1 : 0,
            right: isFixed ? x * -1 : 0,
          }}
          {...listeners}
          {...attributes}
          ref={(node) => {
            setNodeRef(node);
            player.current = node;
          }}
          className={`${isFixed ? "pip" : ""}`}
          src="https://media-files.vidstack.io/hls/index.m3u8"
          poster={PresentationImg}
          aspectRatio={16 / 9}
          crossorigin=""
          onPause={onPause}
          onPlay={onPlay}
          onProviderSetup={onProviderSetup}
        >
          <MediaOutlet>
            <MediaGesture event="pointerup" action="toggle:paused" />
            <MediaPoster alt="" />
          </MediaOutlet>
          <Box className="pip-overlay">
            <IconButton className="pip-close" onClick={() => setIsFixed(false)}>
              <Close color="#fff" width={pxToRem(10)} height={pxToRem(10)} />
            </IconButton>
            <Button
              className="pip-back-btn"
              endIcon={<NewWindow width={pxToRem(20)} height={pxToRem(20)} />}
              onClick={() => {
                window.scrollTo({
                  top: scrollTargetPosition - pxToRem(68),
                  behavior: "smooth",
                });
              }}
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                fontSize: pxToRem(12),
                fontWeight: 400,
                p: `${pxToRem(2)} ${pxToRem(8)} ${pxToRem(2)} ${pxToRem(12)}`,
                "&:hover": {
                  color: "#FCE181",
                  backgroundColor: "#000",
                },
              }}
            >
              Back to tab
            </Button>
            <MediaPlayButton />
          </Box>
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
                height={pxToRem(68)}
                pointerEvents="none"
                pb={pxToRem(160)}
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
                left={pxToRem(18)}
                top={pxToRem(18)}
                pr={pxToRem(145)}
                zIndex={26}
              >
                <Typography
                  color="#fff"
                  fontSize={pxToRem(27)}
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
            gap={pxToRem(20)}
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
          <SidePanel preview={preview} />
          <Stack
            className="media-controls-group"
            height={pxToRem(64)}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            gap={pxToRem(40)}
            position="absolute"
            bottom={pxToRem(40)}
            left={pxToRem(40)}
            right={pxToRem(40)}
            borderRadius={pxToRem(32)}
            boxShadow={`0px ${pxToRem(10)} ${pxToRem(20)} rgba(0,0,0,0.16)`}
            backgroundColor="rgba(255, 255, 255, 0.5)"
            px={pxToRem(40)}
            sx={{
              backdropFilter: "blur(15px)",
            }}
          >
            <Stack flexDirection="row" alignItems="center" gap={pxToRem(17)}>
              <MediaSeekButton seconds={-10}>
                <MediaTooltip position="top center">
                  <span>Seek -10s</span>
                </MediaTooltip>
                <Typography
                  fontSize={pxToRem(12)}
                  fontWeight="bold"
                  color="secondary"
                >
                  - 10 sec
                </Typography>
              </MediaSeekButton>
              {preview ? null : (
                <Box className="tooltip-hover">
                  <MediaTooltip position="top center">
                    <span>Prev</span>
                  </MediaTooltip>
                  <IconButtonStyled
                    sx={{
                      width: pxToRem(21),
                      "& svg": { transform: "rotate(180deg)" },
                    }}
                  >
                    <Next color="#026670" />
                  </IconButtonStyled>
                </Box>
              )}
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
              {preview ? null : (
                <Box className="tooltip-hover">
                  <MediaTooltip position="top center">
                    <span>Next</span>
                  </MediaTooltip>
                  <IconButtonStyled sx={{ width: pxToRem(21) }}>
                    <Next color="#026670" />
                  </IconButtonStyled>
                </Box>
              )}
              <MediaSeekButton seconds={+10}>
                <MediaTooltip position="top center">
                  <span>Seek +10s</span>
                </MediaTooltip>
                <Typography
                  fontSize={pxToRem(12)}
                  fontWeight="bold"
                  color="secondary"
                >
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
                  fontSize: pxToRem(12),
                  fontWeight: "bold",
                  color: "#026670",
                  display: "flex",
                  gap: pxToRem(4),
                  marginRight: pxToRem(30),
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
                gap={pxToRem(20)}
              >
                <IconButtonStyled
                  sx={{
                    "& svg": {
                      width: pxToRem(22),
                    },
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
          <EndView />
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
      sx={{
        height: pxToRem(54),
        px: pxToRem(40),
        "&:hover svg": { color: "#026670" },
      }}
    >
      {props.children}
    </Button>
  );
};

const defaultCoordinates = {
  x: -25,
  y: -25,
};

const VideoPlayer = (props) => {
  const [{ x, y }, setCoordinates] = useState(defaultCoordinates);

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 1,
    },
  });

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    keyboardSensor,
    pointerSensor
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={({ delta }) => {
        setCoordinates(({ x, y }) => ({
          x: x + delta.x,
          y: y + delta.y,
        }));
      }}
      modifiers={[restrictToWindowEdgesMargin]}
    >
      <VideoPlayerDraggable
        x={x}
        y={y}
        resetPosition={() => setCoordinates({ x: -25, y: -25 })}
        preview={props.preview}
      />
    </DndContext>
  );
};

export default VideoPlayer;
