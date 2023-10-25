import { useEffect, useState } from "react";
import {
  Box,
  Container,
  LinearProgress,
  Link,
  Skeleton,
  Stack,
  Typography,
  linearProgressClasses,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { pxToRem } from "px2rem2px";
import TextLink from "../../components/TextLink";
import Slider from "../../components/Slider";
import PlayBtn from "../../components/PlayBtn";

import SlideWide from "../../images/video-slide-wide.jpg";
import SlideVideo1 from "../../images/video-slide2.jpg";
import SlideVideo2 from "../../images/video-slide3.jpg";
import { ReactComponent as Play } from "../../images/play.svg";

const videos = [
  {
    id: 0,
    image: SlideWide,
    videoLink: "/",
    progress: 50,
  },
  {
    id: 1,
    image: SlideVideo1,
    videoLink: "/",
    progress: 80,
  },
  {
    id: 2,
    image: SlideVideo2,
    videoLink: "/",
    progress: 25,
  },
  {
    id: 3,
    image: SlideVideo1,
    videoLink: "/",
    progress: 90,
  },
  {
    id: 4,
    image: SlideWide,
    videoLink: "/",
    progress: 65,
  },
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: "100%",
  position: "absolute",
  bottom: 0,
  height: 5,
  borderRadius: 0,
  zIndex: 1,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#717171",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: "#FCE181",
  },
}));

const VideoSlider = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box
      mt={{ xs: "80px", sm: "120px", md: pxToRem(150) }}
      mb={{ xs: "80px", sm: "120px", md: pxToRem(90) }}
      sx={{ "& .arrow-prev, & .arrow-next": { top: "43%" } }}
    >
      <Container disableGutters>
        <Stack
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="flex-start"
          justifyContent="space-between"
          gap="15px"
          mb={pxToRem(30)}
        >
          {loading ? (
            <Box>
              <Skeleton
                variant="text"
                animation="wave"
                width={300}
                sx={{ fontSize: "30px" }}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width={400}
                sx={{ fontSize: "40px" }}
              />
            </Box>
          ) : (
            <Box>
              <Typography
                variant="sectionTitle"
                component="h2"
                fontSize="30px"
                lineHeight="35px"
              >
                Hi <span className="highlighted"> Alex,</span>
              </Typography>
              <Typography variant="sectionTitle" component="h2">
                Continue Watching
              </Typography>
            </Box>
          )}
          {loading ? (
            <Skeleton
              variant="text"
              animation="wave"
              width={150}
              sx={{ fontSize: "20px" }}
            />
          ) : (
            <TextLink href="" sx={{ marginTop: pxToRem(15) }}>
              View All Videos
            </TextLink>
          )}
        </Stack>
      </Container>
      <Slider
        slidesPerView={"auto"}
        spaceBetween={16}
        arrows
        className="swiper-videos"
      >
        {videos.map((v) => (
          <SwiperSlide key={v.id}>
            {loading ? (
              <Skeleton
                variant="rounded"
                animation="wave"
                sx={{ borderRadius: "20px" }}
              >
                <VideoSlide
                  image={v.image}
                  videoLink={v.videoLink}
                  progress={v.progress}
                  isMobile={mobile}
                />
              </Skeleton>
            ) : (
              <VideoSlide
                image={v.image}
                videoLink={v.videoLink}
                progress={v.progress}
                isMobile={mobile}
              />
            )}
          </SwiperSlide>
        ))}
      </Slider>
    </Box>
  );
};

const VideoSlide = (props) => {
  return (
    <Box
      position="relative"
      sx={{
        transition: "0.2s ease",
        "&::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: "50%",
          width: `calc(100% - ${pxToRem(40)})`,
          height: pxToRem(20),
          backgroundColor: "#FCE181",
          borderRadius: `${pxToRem(20)} ${pxToRem(20)} 0 0`,
          transform: "translateX(-50%)",
          zIndex: -1,
          transition: "0.2s ease",
        },
        "&:hover": {
          "&::before": {
            top: pxToRem(-20),
          },
          "& .border-bottom": {
            bottom: props.progress
              ? props.isMobile
                ? pxToRem(-20)
                : pxToRem(-35)
              : pxToRem(-20),
          },
          "& .video-progress-bar": {
            bottom: "-5px",
          },
        },
      }}
    >
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={{ xs: "180px", sm: "auto" }}
        height={{ xs: "180px", sm: pxToRem(240) }}
        borderRadius="19px"
        overflow="hidden"
      >
        <Link
          to={props.videoLink}
          component={NavLink}
          sx={{ position: "absolute" }}
        >
          <PlayBtn
            width={{ xs: "60px", sm: pxToRem(96) }}
            height={{ xs: "60px", sm: pxToRem(96) }}
          >
            <Play
              color="#026670"
              width={pxToRem(20)}
              height={pxToRem(24)}
              style={{ marginLeft: "6%" }}
            />
          </PlayBtn>
        </Link>
        <BorderLinearProgress
          className="video-progress-bar"
          variant="determinate"
          value={props.progress}
        />
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: pxToRem(20),
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
          src={props.image}
          alt=""
        />
      </Box>
      <Box
        className="border-bottom"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: `calc(100% - ${pxToRem(40)})`,
          height: props.progress
            ? props.isMobile
              ? pxToRem(20)
              : pxToRem(35)
            : pxToRem(20),
          backgroundColor: "#FCE181",
          borderRadius: `0 0 ${pxToRem(20)} ${pxToRem(20)}`,
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: -1,
          transition: "0.2s ease",
        }}
      >
        {props.progress && !props.isMobile ? (
          <Typography
            color="#026670"
            fontSize={pxToRem(14)}
            lineHeight={pxToRem(18)}
            fontWeight={500}
          >
            {props.progress}% progress
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};

export default VideoSlider;
