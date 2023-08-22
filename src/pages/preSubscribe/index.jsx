import {
  Box,
  Button,
  Container,
  LinearProgress,
  Link as MuiLink,
  Stack,
  Tooltip,
  Typography,
  linearProgressClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Guides from "../../components/Guides";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import BlockBordered from "../../components/BlockBordered";
import TextLink from "../../components/TextLink";
import Rating from "../../components/Rating";
import Testimonial from "../../components/Testimonial";
import IconBtnCircular from "../../components/IconBtnCircular";

import PresentationImg from "../../images/pre-subscribed-banner.jpg";
import { ReactComponent as Star } from "../../images/star.svg";
import { ReactComponent as Share } from "../../images/share.svg";

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
    <Box maxWidth="1920px" m="0 auto" sx={{ overflowX: "hidden" }}>
      <Box position="relative" pt="57px" zIndex={1}>
        <Guides color="rgba(0,0,0,0.02)" zIndex={-1} pb="30px" />
        <Header />
        <Box mt="90px">
          <Container>
            <Box
              position="relative"
              sx={{
                "&::before": {
                  content: "''",
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
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
                  height="100%"
                  textAlign="right"
                  p="67px 60px 60px"
                >
                  <Box mb="50px">
                    <Box className="rtl-section" mb="29px">
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
                      <Typography fontWeight={700}>4.8</Typography>
                      <Rating defaultValue={4} readOnly />
                      <Typography fontWeight={700}>
                        • 766 Subscribers
                      </Typography>
                    </Stack>
                    <Stack
                      flexDirection="row"
                      justifyContent="flex-end"
                      alignItems="center"
                      gap="10px"
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          height: "54px",
                          borderWidth: "2px",
                          pl: "40px",
                          pr: "40px",
                          "&:hover": {
                            border: "2px solid #026670",
                          },
                        }}
                      >
                        <Typography component="span" fontWeight={600}>
                          Subscribe:{" "}
                          <span style={{ fontWeight: 700, marginLeft: "5px" }}>
                            $350
                          </span>
                        </Typography>
                      </Button>
                      <Button
                        variant="yellow"
                        sx={{ height: "54px", pl: "40px", pr: "40px" }}
                      >
                        <Typography component="span" fontWeight={600}>
                          Buy:{" "}
                          <span
                            style={{
                              fontWeight: 700,
                              marginLeft: "5px",
                              color: "#333",
                            }}
                          >
                            $450
                          </span>
                        </Typography>
                      </Button>
                    </Stack>
                  </Box>

                  <Stack
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="flex-end"
                    gap="20px"
                    mt="auto"
                  >
                    <Tooltip title="Share Now" placement="left">
                      <Box>
                        <IconBtnCircular className="hover-green">
                          <Share
                            color="#026670"
                            style={{ marginRight: "1.5px" }}
                          />
                        </IconBtnCircular>
                      </Box>
                    </Tooltip>
                    <Button variant="yellow" sx={{ height: "54px" }}>
                      Preview
                    </Button>
                  </Stack>
                </Box>
              </Box>
              <Box display="flex">
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
      <Box position="relative" pt="100px" mt="-30px">
        <Guides color="rgba(0,0,0,0.06)" zIndex={-1} />

        <Box position="relative" mx="30px" pt="190px" mt="-190px" mb="150px">
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
                    <TextLink to="" sx={{ "& span": { fontSize: "14px" } }}>
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
                    <MuiLink
                      to="/"
                      component={Link}
                      underline="hover"
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#BFBEBB",
                      }}
                    >
                      How are ratings calculated?
                    </MuiLink>
                  </Stack>
                  <Stack flexDirection="row" alignItems="center" gap="10px">
                    <Typography fontWeight={700}>4.8</Typography>
                    <Rating defaultValue={4} readOnly />
                    <Typography fontWeight={700}>• 766 Subscribers</Typography>
                  </Stack>

                  <Stack
                    flexDirection="column-reverse"
                    bgcolor="#EDECE8"
                    borderRadius="20px"
                    gap="12px"
                    p="40px"
                    mt="40px"
                    mb="20px"
                  >
                    {[...Array(5).keys()].map((val) => (
                      <Stack key={val} flexDirection="row" alignItems="center">
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

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "20px",
                    }}
                  >
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
              <Sidebar />
            </Stack>
          </Container>
        </Box>
        <Footer />
      </Box>
    </Box>
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
