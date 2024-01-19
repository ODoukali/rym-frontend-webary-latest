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
import { pxToRem } from "px2rem2px";
import { Link } from "react-router-dom";
import { useModal } from "mui-modal-provider";
import { useAuth } from "../../utils/AuthContext";
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
import PreviewModal from "./PreviewModal";
import LoginSubscribeModal from "./LoginSubscribeModal";
import PurchaseModal from "./PurchaseModal";
import LoginModal from "../../components/LoginModal";
import ThankModal from "./ThankModal";

import PresentationImg from "../../images/pre-subscribed-banner.jpg";
import { ReactComponent as Play } from "../../images/play.svg";
import { ReactComponent as Star } from "../../images/star.svg";
import { ReactComponent as Share } from "../../images/share.svg";
import { ReactComponent as Info } from "../../images/info.svg";
import { ReactComponent as Gift } from "../../images/gift.svg";

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
  height: pxToRem(4),
  borderRadius: pxToRem(10),
  marginLeft: pxToRem(20),
  marginRight: pxToRem(20),
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "rgba(191,190,187,0.5)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: pxToRem(10),
    backgroundColor: "#026670",
  },
}));

const PreSubscribe = () => {
  const { showModal, hideModal } = useModal();
  const { isAuthenticated } = useAuth();

  const showSubscriptionModal = () => {
    const modal = showModal(PreviewModal, {
      openSubscriptionModal: () => {
        hideModal(modal.id);
        if (isAuthenticated) {
          const modal = showModal(PurchaseModal, {
            openThankModal: () => {
              hideModal(modal.id);
              showModal(ThankModal);
            },
          });
        } else {
          const modal = showModal(LoginSubscribeModal, {
            openLoginModal: () => {
              hideModal(modal.id);
              showModal(LoginModal);
            },
          });
        }
      },
    });
  };

  return (
    <>
      <Box position="relative" zIndex={2} pt={{ xs: "27px", md: 0 }}>
        <Guides color="rgba(0,0,0,0.02)" zIndex={-1} pb={pxToRem(30)} />
        <Header menuVisible />
        <Box className="header-padding" mt={pxToRem(40)}>
          <Container disableGutters>
            <Box
              position="relative"
              pb="56.3%"
              sx={{
                "&::before": {
                  content: "''",
                  position: "absolute",
                  bottom: pxToRem(-40),
                  left: pxToRem(-40),
                  width: "46.6%",
                  height: "59.7%",
                  bgcolor: "#FCE181",
                  borderRadius: pxToRem(20),
                  zIndex: -1,
                },
              }}
            >
              <Box
                position="absolute"
                height="100%"
                width="100%"
                borderRadius={pxToRem(20)}
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
                  p={`${pxToRem(67)} ${pxToRem(60)} ${pxToRem(60)}`}
                >
                  <Box mb={pxToRem(50)}>
                    <Box className="rtl-section" mb={pxToRem(29)}>
                      <Typography
                        variant="sectionTitleHebrew"
                        fontSize={pxToRem(40)}
                      >
                        צופרידנהייט אין שטוב
                      </Typography>
                    </Box>
                    <Typography
                      component="p"
                      fontSize={pxToRem(14)}
                      fontWeight={600}
                      mb={pxToRem(10)}
                    >
                      5h 54m • Posted Jul 5, 2022
                    </Typography>
                    <Stack
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="flex-end"
                      gap={pxToRem(10)}
                      mb={pxToRem(50)}
                    >
                      <Typography fontWeight={700} mt={pxToRem(2)}>
                        4.8
                      </Typography>
                      <Rating defaultValue={4} readOnly />
                      <Typography fontWeight={700}>
                        •&nbsp;&nbsp; 766 Subscribers
                      </Typography>
                    </Stack>
                    <Button
                      onClick={showSubscriptionModal}
                      variant="green"
                      sx={{
                        height: pxToRem(54),
                        borderWidth: pxToRem(2),
                        pl: pxToRem(40),
                        pr: pxToRem(40),
                      }}
                    >
                      <Typography component="span" fontWeight={600}>
                        Subscribe:{" "}
                        <span
                          style={{ fontWeight: 700, marginLeft: pxToRem(5) }}
                        >
                          $350
                        </span>
                      </Typography>
                    </Button>
                  </Box>

                  <Stack
                    position="relative"
                    alignItems="flex-end"
                    gap={pxToRem(10)}
                  >
                    <Tooltip
                      title="Tooltip"
                      placement="left"
                      PopperProps={{ disablePortal: true }}
                    >
                      <Box
                        sx={{
                          "& + .MuiTooltip-popper .MuiTooltip-tooltip": {
                            backgroundColor: "#fce181",
                            color: "#026670",
                          },
                          "& svg": { transition: "0.2s ease" },
                          "&:hover svg": { color: "#026670" },
                        }}
                      >
                        <IconBtnCircular className="yellow-ic">
                          <Gift color="#fff" />
                        </IconBtnCircular>
                      </Box>
                    </Tooltip>
                    <Tooltip title="Share Now" placement="left">
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
                            style={{ marginRight: pxToRem(1.5) }}
                          />
                        </IconBtnCircular>
                      </Box>
                    </Tooltip>
                  </Stack>
                </Box>
              </Box>
              <Box
                onClick={showSubscriptionModal}
                position="absolute"
                top="50%"
                left="27.2%"
                sx={{
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  "& .MuiStack-root": { margin: `0 auto ${pxToRem(10)}` },
                }}
              >
                <PlayBtn width={pxToRem(96)} height={pxToRem(96)}>
                  <Play
                    color="#026670"
                    width={pxToRem(20)}
                    height={pxToRem(24)}
                    style={{ marginLeft: "6%" }}
                  />
                </PlayBtn>
                <Button
                  variant="yellow"
                  sx={{
                    height: pxToRem(32),
                    p: `${pxToRem(5)} ${pxToRem(40)}`,
                  }}
                >
                  Preview
                </Button>
              </Box>
              <Box
                display="flex"
                position="absolute"
                bgcolor="#fff"
                borderRadius={pxToRem(20)}
                zIndex={-1}
              >
                <img
                  src={PresentationImg}
                  alt=""
                  style={{ borderRadius: pxToRem(20) }}
                />
              </Box>
            </Box>
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
          <Container disableGutters>
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
                      lineHeight={pxToRem(28)}
                      mb={pxToRem(15)}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in.
                    </Typography>
                    <TextLink
                      href=""
                      sx={{ "& span": { fontSize: pxToRem(14) } }}
                    >
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

                <Box mt={pxToRem(80)}>
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={pxToRem(15)}
                    mb={pxToRem(15)}
                  >
                    <Typography
                      fontSize={pxToRem(20)}
                      lineHeight={pxToRem(30)}
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
                          py: pxToRem(4),
                        },
                      }}
                    >
                      <Box>
                        <Button
                          startIcon={<Info />}
                          sx={{
                            fontSize: pxToRem(12),
                            fontWeight: 600,
                            color: "#BFBEBB",
                          }}
                        >
                          How are ratings calculated?
                        </Button>
                      </Box>
                    </Tooltip>
                  </Stack>
                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    gap={pxToRem(10)}
                  >
                    <Typography fontWeight={700} mt={pxToRem(2)}>
                      4.8
                    </Typography>
                    <Rating defaultValue={4} readOnly />
                    <Typography fontWeight={700}>
                      •&nbsp;&nbsp; 766 Subscribers
                    </Typography>
                  </Stack>

                  <Box
                    mt={pxToRem(40)}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: pxToRem(20),
                    }}
                  >
                    <Stack
                      flexDirection="column-reverse"
                      justifyContent="space-between"
                      bgcolor="#EDECE8"
                      borderRadius={pxToRem(20)}
                      p={`${pxToRem(40)} ${pxToRem(20)}`}
                    >
                      {[...Array(5).keys()].map((val) => (
                        <Stack
                          key={val}
                          flexDirection="row"
                          alignItems="center"
                          borderRadius={pxToRem(30)}
                          p={`${pxToRem(11)} ${pxToRem(20)}`}
                          sx={{
                            "&:hover": { backgroundColor: "#F7F6F2" },
                            cursor: "pointer",
                          }}
                        >
                          <Typography
                            fontWeight={700}
                            lineHeight={pxToRem(18)}
                            mr={pxToRem(10)}
                            mt={pxToRem(1)}
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
                          <Typography fontWeight={700} lineHeight={pxToRem(18)}>
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
                    sx={{ height: pxToRem(54), mt: pxToRem(40) }}
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
        borderRadius: pxToRem(20),
        p: `${pxToRem(36)} ${pxToRem(40)} ${pxToRem(30)}`,
        mb: pxToRem(20),
      }}
    >
      <Typography
        fontSize={pxToRem(20)}
        lineHeight={pxToRem(30)}
        fontWeight={700}
        mb={pxToRem(30)}
      >
        {props.title}
      </Typography>
      <Box borderTop="1px solid rgba(191,190,187,0.5)" pt={pxToRem(30)}>
        {props.children}
      </Box>
    </Box>
  );
};

export default PreSubscribe;
