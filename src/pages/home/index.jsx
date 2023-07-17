import { Box } from "@mui/material";
import Hero from "./Hero";
import TagsCloud from "../../components/TagsCloud";
import Presentation from "./Presentation";
import Philosophy from "./Philosophy";
import BlogNews from "./BlogNews";
import FAQ from "./FAQ";
import Parsa from "./Parsa";
import Footer from "../../components/Footer";
import Guides from "../../components/Guides";

const Home = () => {
  return (
    <Box mt="30px" sx={{ overflowX: "hidden" }}>
      <Box position="relative">
        <Guides color="rgba(0,0,0,0.06)" zIndex={-1} />
        <Hero />
        <TagsCloud />
        <Presentation />
        <Philosophy />
        <BlogNews />
        <FAQ />
        <Parsa />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
