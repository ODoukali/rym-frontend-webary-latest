import { Box, Container, Stack, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { pxToRem } from "px2rem2px";
import TextLink from "./TextLink";
import Slider from "./Slider";
import Slide from "./Slide";

import SlideVideo1 from "../images/slide-blog1.jpg";
import SlideVideo2 from "../images/slide-blog2.jpg";
import SlideVideo3 from "../images/slide-blog3.jpg";

const sliderVideos = [
  {
    id: 0,
    image: SlideVideo1,
    title: "Ut enim ad minim elit",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu doloremque laudantium, totam rem aperiam, eaque ipsa.",
    videoLink: "/",
  },
  {
    id: 1,
    image: SlideVideo2,
    title: "Qui dolorem ipsum quia",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
    videoLink: "/",
  },
  {
    id: 2,
    image: SlideVideo3,
    title: "Neque porro quisquam est",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq magni dolores eos qui ratione.",
    videoLink: "/",
  },
  {
    id: 3,
    image: SlideVideo2,
    title: "Qui dolorem ipsum quia",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
    videoLink: "/",
  },
];

const VideosSection = () => {
  return (
    <Box pb={pxToRem(110)}>
      <Container disableGutters>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb={pxToRem(40)}
        >
          <Typography variant="sectionTitle" component="h2">
            You <span className="highlighted">may</span> also{" "}
            <span className="highlighted">like</span>
          </Typography>
          <TextLink href="">View All Videos</TextLink>
        </Stack>
      </Container>
      <Slider
        slidesPerView={3}
        spaceBetween={20}
        arrows
        style={{
          padding: `${pxToRem(40)} ${pxToRem(20)} ${pxToRem(50)}`,
          margin: `0 ${pxToRem(-20)}`,
        }}
      >
        {sliderVideos.map((v) => (
          <SwiperSlide key={v.id}>
            <Slide
              image={v.image}
              title={v.title}
              text={v.text}
              videoLink={v.videoLink}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </Box>
  );
};

export default VideosSection;
