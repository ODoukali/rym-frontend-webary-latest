import { Box, Container, Stack, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import Guides from "../../components/Guides";
import Footer from "../../components/Footer";
import TextLink from "../../components/TextLink";
import Slider from "../../components/Slider";
import Slide from "../../components/Slide";
import Header from "../../components/Header";
import VideoPlayer from "./VideoPlayer";
import Sidebar from "./Sidebar";
import CourseTabs from "./CourseTabs";

import SlideVideo1 from "../../images/slide-blog1.jpg";
import SlideVideo2 from "../../images/slide-blog2.jpg";
import SlideVideo3 from "../../images/slide-blog3.jpg";

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

const Course = () => {
  return (
    <>
      <Box position="relative" pt="57px" zIndex={1}>
        <Guides color="rgba(0,0,0,0.02)" zIndex={-1} pb="30px" />
        <Header />
        <Box mt="80px">
          <Container>
            <VideoPlayer />
          </Container>
        </Box>
      </Box>
      <Box position="relative" pt="100px" mt="-30px">
        <Guides color="rgba(0,0,0,0.06)" zIndex={-1} />

        <Box
          position="relative"
          mx="30px"
          pt="190px"
          mt="-190px"
          mb="150px"
          sx={{ overflowX: "hidden" }}
        >
          <Container>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              gap="6.5%"
            >
              <CourseTabs />
              <Sidebar />
            </Stack>
          </Container>
        </Box>

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
    </>
  );
};

export default Course;
