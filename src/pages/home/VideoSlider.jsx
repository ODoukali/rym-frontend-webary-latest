import { Box, Container, Link, Stack, Typography } from "@mui/material";
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
    progress: "50%",
  },
  {
    id: 1,
    image: SlideVideo1,
    videoLink: "/",
  },
  {
    id: 2,
    image: SlideVideo2,
    videoLink: "/",
    progress: "25%",
  },
  {
    id: 3,
    image: SlideVideo1,
    videoLink: "/",
  },
  {
    id: 4,
    image: SlideWide,
    videoLink: "/",
  },
];

const VideoSlider = () => {
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
          <Box>
            <Typography variant="sectionTitle" component="h2">
              Hi <span className="highlighted"> Alex,</span> Continue Watching
            </Typography>
          </Box>
          <TextLink href="" sx={{ marginTop: pxToRem(15) }}>
            View All Videos
          </TextLink>
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
            <VideoSlide
              image={v.image}
              videoLink={v.videoLink}
              progress={v.progress}
            />
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
            bottom: props.progress ? pxToRem(-60) : pxToRem(-20),
          },
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={{ xs: "180px", sm: pxToRem(240) }}
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
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: pxToRem(20),
          }}
          src={props.image}
          alt=""
        />
      </Box>
      <Box
        className="border-bottom"
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: `calc(100% - ${pxToRem(40)})`,
          height: props.progress ? pxToRem(60) : pxToRem(20),
          backgroundColor: "#FCE181",
          borderRadius: `0 0 ${pxToRem(20)} ${pxToRem(20)}`,
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: -1,
          transition: "0.2s ease",
        }}
      >
        {props.progress ? (
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              color="#026670"
              fontSize={pxToRem(14)}
              lineHeight={pxToRem(18)}
              fontWeight={600}
            >
              Continue watching
            </Typography>
            <Typography
              color="#026670"
              fontSize={pxToRem(14)}
              lineHeight={pxToRem(18)}
              fontWeight={500}
            >
              ({props.progress} progress)
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default VideoSlider;
