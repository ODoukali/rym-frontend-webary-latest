import { Box, Container, Typography } from "@mui/material";
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
    <Container sx={{ mb: "150px" }}>
      <Typography variant="sectionTitle" component="h2" mb="40px">
        Free <span className="highlighted">courses</span>
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px 20px",
          mb: "50px",
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
      <TextLink to="">View All Courses</TextLink>
    </Container>
  );
};

export default Courses;
