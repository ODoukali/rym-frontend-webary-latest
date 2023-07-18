import { Box, Container, Stack, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import Guides from "../../components/Guides";
import Footer from "../../components/Footer";
import TextLink from "../../components/TextLink";
import Slider from "../../components/Slider";
import Slide from "../../components/Slide";

import SlideBlog1 from "../../images/slide-blog1.jpg";
import SlideBlog2 from "../../images/slide-blog2.jpg";
import SlideBlog3 from "../../images/slide-blog3.jpg";

const sliderVideos = [
  {
    id: 0,
    image: SlideBlog1,
    title: "Ut enim ad minim elit",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu doloremque laudantium, totam rem aperiam, eaque ipsa.",
    videoLink: "/",
  },
  {
    id: 1,
    image: SlideBlog2,
    title: "Qui dolorem ipsum quia",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
    videoLink: "/",
  },
  {
    id: 2,
    image: SlideBlog3,
    title: "Neque porro quisquam est",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq magni dolores eos qui ratione.",
    videoLink: "/",
  },
  {
    id: 3,
    image: SlideBlog2,
    title: "Qui dolorem ipsum quia",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
    videoLink: "/",
  },
];

const Course = () => {
  return (
    <Box position="relative">
      <Guides color="rgba(0,0,0,0.06)" zIndex={-1} />
      <Box pb="110px">
        <Container>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            mb="40px"
          >
            <Typography variant="sectionTitle" component="h2">
              You <span className="highlighted">may</span> also{" "}
              <span className="highlighted">like</span>
            </Typography>
            <TextLink to="">View All Videos</TextLink>
          </Stack>
        </Container>
        <Slider slidesPerView={3}>
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
      <Footer />
    </Box>
  );
};

export default Course;
