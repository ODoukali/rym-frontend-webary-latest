import { Box } from "@mui/material";
import Hero from "./Hero";
import TagsCloud from "../../components/TagsCloud";
import Presentation from "./Presentation";
import Philosophy from "./Philosophy";
import BlogNews from "./BlogNews";
import FAQ from "./FAQ";
import Parsa from "./Parsa";
import Guides from "../../components/Guides";
import Courses from "./Courses";
import Promotion from "./Promotion";
import VideoSlider from "./VideoSlider";

const Home = () => {
  return (
    <Box position="relative">
      <Guides color="rgba(0,0,0,0.06)" zIndex={-1} />
      <Hero />
      <TagsCloud />
      <VideoSlider />
      <Presentation />
      <Philosophy />
      <Courses />
      <BlogNews />
      <FAQ />
      <Parsa />
      <Promotion />
    </Box>
  );
};

export default Home;
