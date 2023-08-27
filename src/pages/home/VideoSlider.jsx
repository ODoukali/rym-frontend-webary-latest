import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
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
      mt="150px"
      mb="90px"
      sx={{ "& .arrow-prev, & .arrow-next": { top: "43%" } }}
    >
      <Container>
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          mb="30px"
        >
          <Box>
            <Typography variant="sectionTitle" component="h2" mb="14px">
              Hi <span className="highlighted"> Alex,</span> Continue Watching
            </Typography>
          </Box>
          <TextLink to="" sx={{ marginTop: "15px" }}>
            View All Videos
          </TextLink>
        </Stack>
      </Container>
      <Slider
        slidesPerView={"auto"}
        spaceBetween={20}
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
          width: "calc(100% - 40px)",
          height: "20px",
          backgroundColor: "#FCE181",
          borderRadius: "20px 20px 0 0",
          transform: "translateX(-50%)",
          zIndex: -1,
          transition: "0.2s ease",
        },
        "&:hover": {
          "&::before": {
            top: "-20px",
          },
          "& .border-bottom": {
            bottom: props.progress ? "-60px" : "-20px",
          },
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={240}
      >
        <Link
          to={props.videoLink}
          component={NavLink}
          sx={{ position: "absolute" }}
        >
          <PlayBtn width="96px" height="96px">
            <Play color="#026670" style={{ marginLeft: "6%" }} />
          </PlayBtn>
        </Link>
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: "20px",
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
          width: "calc(100% - 40px)",
          height: props.progress ? "60px" : "20px",
          backgroundColor: "#FCE181",
          borderRadius: "0 0 20px 20px",
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
              fontSize="14px"
              lineHeight="18px"
              fontWeight={600}
            >
              Continue watching
            </Typography>
            <Typography
              color="#026670"
              fontSize="14px"
              lineHeight="18px"
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
