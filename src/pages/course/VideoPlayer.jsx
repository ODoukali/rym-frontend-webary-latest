import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import IconBtnCircular from "../../components/IconBtnCircular";

import PresentationImg from "../../images/presentation-img.png";
import { ReactComponent as Heart } from "../../images/heart.svg";
import { ReactComponent as Next } from "../../images/next.svg";
import { ReactComponent as Play } from "../../images/play.svg";
import { ReactComponent as Volume } from "../../images/volume.svg";
import { ReactComponent as Fullscreen } from "../../images/fullscreen.svg";
import { ReactComponent as Settings } from "../../images/settings.svg";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: "100%",
  height: 4,
  borderRadius: 2,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#026670",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 2,
    backgroundColor: "#FCE181",
  },
}));

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
      <Stack position="absolute" top="40px" right="40px" gap="10px">
        <IconBtnCircular>
          <Heart />
        </IconBtnCircular>
        <IconBtnCircular>
          <Volume color="#026670" />
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
        }}
      >
        <Stack flexDirection="row" alignItems="center" gap="20px">
          <Button variant="text" sx={{ fontSize: "12px", fontWeight: "bold" }}>
            - 10 sec
          </Button>
          <IconButtonStyled sx={{ "& svg": { transform: "rotate(180deg)" } }}>
            <Next color="#026670" />
          </IconButtonStyled>
          <IconButtonStyled>
            <Play color="#026670" />
          </IconButtonStyled>
          <IconButtonStyled>
            <Next color="#026670" />
          </IconButtonStyled>
          <Button variant="text" sx={{ fontSize: "12px", fontWeight: "bold" }}>
            + 10 sec
          </Button>
        </Stack>
        <BorderLinearProgress variant="determinate" value={35} />
        <Stack
          flexDirection="row"
          alignItems="center"
          gap="20px"
          flexShrink={0}
        >
          <Typography
            sx={{ fontSize: "12px", fontWeight: "bold", color: "#026670" }}
          >
            1:45 <span style={{ margin: "0 2px" }}>/</span> 2:37
          </Typography>
          <IconButtonStyled>
            <Volume color="#026670" />
          </IconButtonStyled>
          <IconButtonStyled>
            <Fullscreen color="#026670" />
          </IconButtonStyled>
          <IconButtonStyled>
            <Settings color="#026670" />
          </IconButtonStyled>
        </Stack>
      </Stack>
      <img src={PresentationImg} style={{ width: "100%" }} alt="" />
    </Box>
  );
};

export default VideoPlayer;
