import { Box, Container, Stack, Typography } from "@mui/material";
import Guides from "../../components/Guides";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import BlockBordered from "../../components/BlockBordered";
import TextLink from "../../components/TextLink";

import PresentationImg from "../../images/presentation-img.jpg";

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
              <img
                src={PresentationImg}
                alt=""
                style={{ borderRadius: "20px" }}
              />
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
