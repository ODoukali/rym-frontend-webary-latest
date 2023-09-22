import {
  Box,
  Button,
  Container,
  LinearProgress,
  Stack,
  Tooltip,
  Typography,
  linearProgressClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Guides from "../../components/Guides";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import BlockBordered from "../../components/BlockBordered";
import TextLink from "../../components/TextLink";
import Rating from "../../components/Rating";
import Testimonial from "../../components/Testimonial";
import IconBtnCircular from "../../components/IconBtnCircular";
import PlayBtn from "../../components/PlayBtn";
import VideosSection from "../../components/VideosSection";

import PresentationImg from "../../images/pre-subscribed-banner.jpg";
import { ReactComponent as Play } from "../../images/play.svg";
import { ReactComponent as Star } from "../../images/star.svg";
import { ReactComponent as Share } from "../../images/share.svg";
import { ReactComponent as Info } from "../../images/info.svg";

const lectureListPreSubscribed = [
  {
    id: 1,
    title: "Lecture 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    duration: "3:45",
    status: "locked",
  },
  {
    id: 2,
    title: "Lecture 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
    status: "locked",
  },
  {
    id: 3,
    title: "Lecture 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    duration: "3:45",
    status: "locked",
  },
  {
    id: 4,
    title: "Lecture 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
    status: "locked",
  },
  {
    id: 5,
    title: "Lecture 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
    status: "locked",
  },
  {
    id: 6,
    title: "Lecture 6",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
    status: "locked",
  },
];

const LinearProgressStyled = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 10,
  marginLeft: 20,
  marginRight: 20,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "rgba(191,190,187,0.5)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: "#026670",
  },
}));

const PreSubscribe = () => {
  return (
    <>
      <Box position="relative" zIndex={2}>
        <Guides color="rgba(0,0,0,0.02)" zIndex={-1} pb="30px" />
        <Header />
        <Box className="header-padding" mt="40px">
          <Container>
            <Box
              position="relative"
              pb="56.3%"
              sx={{
                "&::before": {
                  content: "''",
                  position: "absolute",
                  bottom: "-40px",
                  left: "-40px",
                  width: "46.6%",
                  height: "59.7%",
                  bgcolor: "#FCE181",
                  borderRadius: "20px",
                  zIndex: -1,
                },
              }}
            >
              <Box
                position="absolute"
                height="100%"
                width="100%"
                borderRadius="20px"
                sx={{
                  background:
                    "linear-gradient(to right, rgba(255,255,255,0) 30%,rgba(255,255,255,1) 65%,rgba(255,255,255,1) 100%)",
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%"
                  textAlign="right"
                  p="67px 60px 60px"
                >
                  <Box mb="50px">
                    <Box className="rtl-section" mb="29px">
                      <Typography variant="sectionTitleHebrew" fontSize="40px">
                        צופרידנהייט אין שטוב
                      </Typography>
                    </Box>
                    <Typography
                      component="p"
                      fontSize="14px"
                      fontWeight={600}
                      mb="10px"
                    >
                      5h 54m • Posted Jul 5, 2022
                    </Typography>
                    <Stack
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="flex-end"
                      gap="10px"
                      mb="50px"
                    >
                      <Typography fontWeight={700} mt="2px">
                        4.8
                      </Typography>
                      <Rating defaultValue={4} readOnly />
                      <Typography fontWeight={700}>
                        •&nbsp;&nbsp; 766 Subscribers
                      </Typography>
                    </Stack>
                    <Button
                      variant="green"
                      sx={{
                        height: "54px",
                        borderWidth: "2px",
                        pl: "40px",
                        pr: "40px",
                      }}
                    >
                      <Typography component="span" fontWeight={600}>
                        Subscribe:{" "}
                        <span style={{ fontWeight: 700, marginLeft: "5px" }}>
                          $350
                        </span>
                      </Typography>
                    </Button>
                  </Box>

                  <Stack
                    flexDirection="row"
                    position="relative"
                    justifyContent="flex-end"
                  >
                    <Tooltip open={true} title="Share Now" placement="left">
                      <Box
                        sx={{
                          "& button:hover": {
                            backgroundColor: "#00545d !important",
                          },
                        }}
                      >
                        <IconBtnCircular className="hover-green active">
                          <Share
                            color="#026670"
                            style={{ marginRight: "1.5px" }}
                          />
                        </IconBtnCircular>
                      </Box>
                    </Tooltip>
                  </Stack>
                </Box>
              </Box>
              <Box
                position="absolute"
                top="50%"
                left="27.2%"
                sx={{
                  transform: "translateY(-50%)",
                  "& .MuiStack-root": { margin: "0 auto 10px" },
                }}
              >
                <PlayBtn width="96px" height="96px">
                  <Play
                    color="#026670"
                    width={20}
                    height={24}
                    style={{ marginLeft: "6%" }}
                  />
                </PlayBtn>
                <Button variant="yellow" sx={{ height: "32px", p: "5px 40px" }}>
                  Preview
                </Button>
              </Box>
              <Box
                display="flex"
                position="absolute"
                bgcolor="#fff"
                borderRadius="20px"
                zIndex={-1}
              >
                <img
                  src={PresentationImg}
                  alt=""
                  style={{ borderRadius: "20px" }}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
      <Box position="relative" pt="173px" mt="-30px">
        <Guides color="rgba(0,0,0,0.06)" zIndex={-1} />

        <Box position="relative" pt="190px" mt="-190px" mb="150px">
          <Container>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              gap="6.5%"
            >
              <Box width="100%">
                <InfoBlock title="Whats Included?">
                  <BlockBordered>
                    <ul className="list-items">
                      <li>16 lecture</li>
                      <li>1 project file</li>
                      <li>download resource file</li>
                      <li>Exercise file</li>
                      <li>Access on tablet and phone</li>
                      <li>Ask questions direct on the course 3 Poll</li>
                      <li>Access through hot line</li>
                    </ul>
                  </BlockBordered>
                </InfoBlock>
                <InfoBlock title="Course Description">
                  <BlockBordered>
                    <Typography
                      component="p"
                      variant="medium"
                      lineHeight="28px"
                      mb="15px"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in.
                    </Typography>
                    <TextLink href="" sx={{ "& span": { fontSize: "14px" } }}>
                      Read More
                    </TextLink>
                  </BlockBordered>
                </InfoBlock>
                <InfoBlock title="What You’ll Learn?">
                  <BlockBordered>
                    <ul className="list-items">
                      <li>16 lecture</li>
                      <li>1 project file</li>
                      <li>download resource file</li>
                      <li>Exercise file</li>
                      <li>Access on tablet and phone</li>
                      <li>Ask questions direct on the course 3 Poll</li>
                      <li>Access through hot line</li>
                    </ul>
                  </BlockBordered>
                </InfoBlock>

                <Box mt="80px">
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    gap="15px"
                    mb="15px"
                  >
                    <Typography
                      fontSize="20px"
                      lineHeight="30px"
                      fontWeight={700}
                    >
                      Reviews & Ratings
                    </Typography>
                    <Tooltip
                      title="The overall rating is calculated using the average of submitted ratings. Ratings and reviews can only be submitted when learners complete at least 40% of the course. This helps us avoid fake reviews and spam."
                      enterDelay={0}
                      enterTouchDelay={0}
                      PopperProps={{ disablePortal: true }}
                      placement="top"
                      sx={{
                        "& + .MuiTooltip-popper .MuiTooltip-tooltip": {
                          py: "4px",
                        },
                      }}
                    >
                      <Box>
                        <Button
                          startIcon={<Info />}
                          sx={{
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "#BFBEBB",
                          }}
                        >
                          How are ratings calculated?
                        </Button>
                      </Box>
                    </Tooltip>
                  </Stack>
                  <Stack flexDirection="row" alignItems="center" gap="10px">
                    <Typography fontWeight={700} mt="2px">
                      4.8
                    </Typography>
                    <Rating defaultValue={4} readOnly />
                    <Typography fontWeight={700}>
                      •&nbsp;&nbsp; 766 Subscribers
                    </Typography>
                  </Stack>

                  <Box
                    mt="40px"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "20px",
                    }}
                  >
                    <Stack
                      flexDirection="column-reverse"
                      justifyContent="space-between"
                      bgcolor="#EDECE8"
                      borderRadius="20px"
                      p="40px 20px"
                    >
                      {[...Array(5).keys()].map((val) => (
                        <Stack
                          key={val}
                          flexDirection="row"
                          alignItems="center"
                          borderRadius="30px"
                          p="11px 20px"
                          sx={{
                            "&:hover": { backgroundColor: "#F7F6F2" },
                            cursor: "pointer",
                          }}
                        >
                          <Typography
                            fontWeight={700}
                            lineHeight="18px"
                            mr="10px"
                            mt="1px"
                          >
                            {val + 1}
                          </Typography>
                          <Star color="#FCE181" />
                          <Box sx={{ flexGrow: 1 }}>
                            <LinearProgressStyled
                              variant="determinate"
                              value={60}
                            />
                          </Box>{" "}
                          <Typography fontWeight={700} lineHeight="18px">
                            164
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                    <Testimonial avatar />
                    <Testimonial avatar />
                    <Testimonial />
                    <Testimonial />
                    <Testimonial avatar />
                  </Box>
                  <Button
                    to="/"
                    component={Link}
                    variant="yellow"
                    sx={{ height: "54px", mt: "40px" }}
                  >
                    See all Reviews
                  </Button>
                </Box>
              </Box>
              <Sidebar arr={lectureListPreSubscribed} />
            </Stack>
          </Container>
        </Box>
        <VideosSection />
      </Box>
    </>
  );
};

const InfoBlock = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        p: "36px 40px 30px",
        mb: "20px",
      }}
    >
      <Typography fontSize="20px" lineHeight="30px" fontWeight={700} mb="30px">
        {props.title}
      </Typography>
      <Box borderTop="1px solid rgba(191,190,187,0.5)" pt="30px">
        {props.children}
      </Box>
    </Box>
  );
};

export default PreSubscribe;
