import { Box } from "@mui/material";
import Hero from "./Hero";
import TagsCloud from "../../components/TagsCloud";
import Presentation from "./Presentation";
import Philosophy from "./Philosophy";

const Home = () => {
  return (
    <Box position="relative" mt="30px" sx={{ overflowX: "hidden" }}>
      <Box
        position="absolute"
        width="100%"
        height="100%"
        top={0}
        left={0}
        zIndex={-1}
        px="24px"
        sx={{ pointerEvents: "none" }}
      >
        <Box
          position="relative"
          maxWidth="1180px"
          height="100%"
          display="flex"
          justifyContent="space-between"
          margin="0 auto"
        >
          <Box width="1px" bgcolor="rgba(0,0,0,0.06)" />
          <Box width="1px" bgcolor="rgba(0,0,0,0.06)" />
          <Box width="1px" bgcolor="rgba(0,0,0,0.06)" />
          <Box width="1px" bgcolor="rgba(0,0,0,0.06)" />
        </Box>
      </Box>
      <Hero />
      <TagsCloud />
      <Presentation />
      <Philosophy />
    </Box>
  );
};

export default Home;
