import { Box, Container, Stack, Typography } from "@mui/material";
import Guides from "../../components/Guides";
import Header from "../../components/Header";
import VideoPlayer from "../../components/VideoPlayer";
import Sidebar from "../../components/Sidebar";
import CourseTabs from "./CourseTabs";
import VideosSection from "../../components/VideosSection";

import BlockBordered from "../../components/BlockBordered";
import LinkWithIcon from "../../components/LinkWithIcon";

const lectureListCourse = [
  {
    id: 1,
    title: "Lecture 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    duration: "3:45",
    status: "completed",
  },
  {
    id: 2,
    title: "Lecture 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
    status: "playing",
  },
  {
    id: 3,
    title: "Lecture 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    duration: "3:45",
    status: "notCompleted",
    isTooltip: true,
  },
  {
    id: 4,
    title: "Lecture 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
    status: "notCompleted",
  },
  {
    id: 5,
    title: "Lecture 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
    status: "notCompleted",
  },
  {
    id: 6,
    title: "Lecture 6",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
    status: "notCompleted",
  },
];

const Course = () => {
  return (
    <>
      <Box position="relative" zIndex={2}>
        <Guides color="rgba(0,0,0,0.02)" zIndex={-1} pb="30px" />
        <Header />
        <Box className="header-padding" mt="40px">
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
                    fontFamily="PloniDBold"
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

        <Box position="relative" pt="150px" mt="-110px" mb="150px">
          <Container>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              gap="6.5%"
            >
              <CourseTabs />
              <Sidebar arr={lectureListCourse} />
            </Stack>
          </Container>
        </Box>

        <VideosSection />
      </Box>
    </>
  );
};

export default Course;
