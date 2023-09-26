import { Box, Container, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";
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
        <Guides color="rgba(0,0,0,0.02)" zIndex={-1} pb={pxToRem(30)} />
        <Header />
        <Box className="header-padding" mt={pxToRem(40)}>
          <Container>
            <Stack
              className="rtl-section"
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="space-between"
              mb={pxToRem(36)}
            >
              <Box>
                <Typography variant="sectionTitleHebrew" fontSize={pxToRem(40)}>
                  צופרידנהייט אין שטוב
                </Typography>
                <BlockBordered>
                  <Typography
                    fontFamily="PloniDBold"
                    fontSize={pxToRem(20)}
                    fontWeight="600"
                    color="#666564"
                  >
                    וויאזוי אויסצולעשן איר עקס רעי מאשין
                  </Typography>
                </BlockBordered>
              </Box>
              <LinkWithIcon to="" sx={{ marginTop: pxToRem(14) }}>
                Back
              </LinkWithIcon>
            </Stack>
            <VideoPlayer />
          </Container>
        </Box>
      </Box>
      <Box position="relative" pt={pxToRem(100)} mt={pxToRem(-30)}>
        <Guides color="rgba(0,0,0,0.06)" zIndex={-1} />

        <Box
          position="relative"
          pt={pxToRem(150)}
          mt={pxToRem(-110)}
          mb={pxToRem(150)}
        >
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
