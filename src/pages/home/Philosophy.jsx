import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { pxToRem } from "px2rem2px";
import BlockBordered from "../../components/BlockBordered";

import PhilosophyImg from "../../images/philosophy-img.png";

const Philosophy = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      position="relative"
      sx={{
        "@media(max-width: 767px)": {
          "&::before": {
            content: "''",
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 50%,rgba(255,255,255,1) 75%,rgba(255,255,255,1) 100%)",
            zIndex: -1,
          },
        },
      }}
    >
      <Container
        disableGutters
        sx={{
          pb: { xs: "80px", sm: "120px", md: pxToRem(190) },
        }}
      >
        <Stack
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          gap={{ xs: "60px", sm: "72px", md: "80px" }}
        >
          <Box flexShrink={0}>
            {mobile ? <SectionTitle /> : null}
            <Box
              position="relative"
              maxWidth={{ xs: "300px", sm: "310px", md: pxToRem(500) }}
              width="100%"
              height={{ xs: "310px", md: "auto" }}
              display="flex"
              borderRadius={pxToRem(20)}
              boxShadow={`${pxToRem(30)} ${pxToRem(30)} ${pxToRem(
                50
              )} rgba(0,0,0,0.2)`}
              flexShrink={0}
              sx={{
                "&::before": {
                  content: "''",
                  position: "absolute",
                  left: { xs: "-25px", sm: "-30px", md: pxToRem(-40) },
                  bottom: { xs: "-30px", md: pxToRem(-40) },
                  width: { xs: "300px", sm: "310px", md: "88%" },
                  height: { xs: "310px", md: "74.1%" },
                  bgcolor: "#FCE181",
                  borderRadius: pxToRem(20),
                  zIndex: -1,
                },
              }}
            >
              <img src={PhilosophyImg} alt="" style={{ width: "100%" }} />
            </Box>
          </Box>
          <Box>
            {mobile ? null : <SectionTitle />}
            <BlockBordered mb={{ xs: "40px", sm: pxToRem(50) }}>
              <Typography maxWidth={pxToRem(522)} variant="large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis ullamco.
              </Typography>
            </BlockBordered>
            <Stack
              flexDirection="row"
              alignItems="center"
              flexWrap="wrap"
              gap={{
                xs: "10px",
                md: pxToRem(20),
                "& button": {
                  "@media(max-width: 767px)": { minWidth: "219px" },
                },
              }}
            >
              <Button variant="green">Contact us Today</Button>
              <Button variant="outlined">Need 1 on 1 help?</Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const SectionTitle = () => {
  return (
    <Typography
      maxWidth={pxToRem(460)}
      variant="sectionTitle"
      component="h2"
      mb={pxToRem(30)}
    >
      Philosophy of our valuable <span className="highlighted">work</span>
    </Typography>
  );
};

export default Philosophy;
