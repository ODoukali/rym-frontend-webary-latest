import { Box, Container, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";
import { SwiperSlide } from "swiper/react";
import Slider from "../../components/Slider";
import TextLink from "../../components/TextLink";
import Slide from "../../components/Slide";

import CourseImg1 from "../../images/course-img1.jpg";
import CourseImg2 from "../../images/course-img2.jpg";
import CourseImg3 from "../../images/course-img3.jpg";
import CourseImg4 from "../../images/course-img4.jpg";

const sliderVideos = [
  {
    id: 0,
    image: CourseImg1,
    title: "Sed ut perspiciatis unde omnis iste natus",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    videoLink: "/",
  },
  {
    id: 1,
    image: CourseImg2,
    title: "Magni dolores eos qui ratione voluptatem",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
    videoLink: "/",
  },
  {
    id: 2,
    image: CourseImg3,
    title: "Magni dolores eos qui ratione voluptatem",
    text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
    videoLink: "/",
  },
  {
    id: 3,
    image: CourseImg4,
    title: "Sed ut perspiciatis unde omnis iste natus",
    text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    videoLink: "/",
  },
];

const Courses = () => {
  return (
    <Container
      disableGutters
      sx={{
        mb: { xs: "75px", sm: "120px", md: pxToRem(150) },
        mt: { xs: "80px", sm: 0 },
      }}
    >
      <Typography
        variant="sectionTitle"
        component="h2"
        mb={{ xs: 0, sm: pxToRem(40) }}
      >
        Free <span className="highlighted">courses</span>
      </Typography>
      <Box
        sx={{
          display: { xs: "none", sm: "grid" },
          gridTemplateColumns: "1fr 1fr",
          rowGap: pxToRem(40),
          columnGap: pxToRem(20),
          mb: pxToRem(50),
        }}
      >
        {sliderVideos.map((v) => (
          <Slide
            key={v.id}
            image={v.image}
            title={v.title}
            text={v.text}
            videoLink={v.videoLink}
          />
        ))}
      </Box>
      <Box display={{ xs: "block", sm: "none" }} mx="-25px">
        <Slider
          slidesPerView={"auto"}
          spaceBetween={16}
          arrows
          init={false}
          style={{ padding: "20px 0 30px" }}
        >
          {sliderVideos.map((v) => (
            <SwiperSlide key={v.id}>
              <Slide
                key={v.id}
                image={v.image}
                title={v.title}
                text={v.text}
                videoLink={v.videoLink}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </Box>
      <TextLink href="" sx={{ marginTop: { xs: "-66px", sm: 0 } }}>
        View All Courses
      </TextLink>
    </Container>
  );
};

export default Courses;
