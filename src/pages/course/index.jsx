import { Box, Container, Stack, Typography } from "@mui/material";
import Guides from "../../components/Guides";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VideoPlayer from "../../components/VideoPlayer";
import Sidebar from "../../components/Sidebar";
import CourseTabs from "./CourseTabs";
import VideosSection from "../../components/VideosSection";

import BlockBordered from "../../components/BlockBordered";
import LinkWithIcon from "../../components/LinkWithIcon";

const Course = () => {
  return (
    <Box maxWidth="1920px" m="0 auto 30px" sx={{ overflowX: "hidden" }}>
      <Box position="relative" pt="57px" zIndex={2}>
        <Guides color="rgba(0,0,0,0.02)" zIndex={-1} pb="30px" />
        <Header />
        <Box mt="50px">
          <Container>
            <Stack
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="space-between"
              mb="36px"
              className="rtl-section"
            >
              <Box>
                <Typography variant="sectionTitleHebrew" fontSize="40px">
                  צופרידנהייט אין שטוב
                </Typography>
                <BlockBordered>
                  <Typography
                    fontFamily="FbJoker"
                    fontSize="20px"
                    fontWeight="600"
                    color="#666564"
                  >
                    וויאזוי אויסצולעשן איר עקס רעי מאשין
                  </Typography>
                </BlockBordered>
              </Box>
              <LinkWithIcon to="" sx={{ marginTop: "14px" }}>
                Back
              </LinkWithIcon>
            </Stack>
            <VideoPlayer />
          </Container>
        </Box>
      </Box>
      <Box position="relative" pt="100px" mt="-30px">
        <Guides color="rgba(0,0,0,0.06)" zIndex={-1} />

        <Box position="relative" mx="30px" pt="150px" mt="-110px" mb="150px">
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

        <VideosSection />
        <Footer />
      </Box>
    </Box>
  );
};

export default Course;
