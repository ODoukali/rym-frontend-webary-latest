import {
  Box,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import { pxToRem } from "px2rem2px";

import Slider from "../../components/Slider";
import PlayBtn from "../../components/PlayBtn";
import Alert from "./Alert";
import BlockHeading from "../../components/BlockHeading";

import SlideVideo1 from "../../images/video-slide2.jpg";
import SlideVideo2 from "../../images/video-slide3.jpg";
import { ReactComponent as Play } from "../../images/play.svg";

const videos = [
  {
    id: 0,
    image: SlideVideo1,
    videoLink: "/",
    title: "Course Name Comes Here",
  },
  {
    id: 1,
    image: SlideVideo2,
    videoLink: "/",
    title: "Course Name Comes Here",
  },
  {
    id: 2,
    image: SlideVideo1,
    videoLink: "/",
    title: "Course Name Comes Here",
  },
  {
    id: 3,
    image: SlideVideo2,
    videoLink: "/",
    title: "Course Name Comes Here",
  },
  {
    id: 4,
    image: SlideVideo1,
    videoLink: "/",
    title: "Course Name Comes Here",
  },
];

const Dashboard = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Typography
        variant="sectionTitle"
        component="h2"
        fontSize={pxToRem(35)}
        pl={pxToRem(60)}
        mb={pxToRem(27)}
      >
        Dashboard
      </Typography>

      <Box
        position="relative"
        bgcolor="#fff"
        borderRadius="20px"
        p={pxToRem(60)}
      >
        <BlockHeading>
          <Typography component="h3" variant="blockTitle">
            Alerts & Notifications
          </Typography>
        </BlockHeading>

        <Stack gap={pxToRem(20)} mb={pxToRem(60)}>
          <Alert severity="error" title="Payment Issue">
            Sed ut perspiciatis unde omnis iste natus accusantium.
          </Alert>
          <Alert severity="success" title="Account Created">
            Sed ut perspiciatis unde omnis iste natus error sit accusantium.
          </Alert>
        </Stack>

        <BlockHeading>
          <Typography component="h3" variant="blockTitle">
            Recently Watched
          </Typography>
        </BlockHeading>

        <Box
          sx={{
            "& .MuiContainer-root": { p: 0 },
            "& .swiper-slide": { width: "auto" },
            "& .arrow-prev": { left: "-90px", top: "40%" },
            "& .arrow-next": { right: "-90px", top: "40%" },
          }}
        >
          <Slider slidesPerView={"auto"} spaceBetween={20} arrows>
            {videos.map((v) => (
              <SwiperSlide key={v.id}>
                <VideoSlide
                  image={v.image}
                  videoLink={v.videoLink}
                  title={v.title}
                  isMobile={mobile}
                />
              </SwiperSlide>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

const VideoSlide = (props) => {
  return (
    <Link
      to={props.videoLink}
      component={NavLink}
      underline="none"
      sx={{
        width: { xs: "180px", sm: "auto" },
        "&:hover": {
          ".MuiTypography-root": { color: "#333" },
          ".play-btn": {
            backgroundColor: "#fff",
            "& svg": {
              color: "#333",
            },
          },
        },
      }}
    >
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={{ xs: "180px", sm: "auto" }}
        height={{ xs: "180px", sm: pxToRem(190) }}
        borderRadius="19px"
        overflow="hidden"
      >
        <Box sx={{ position: "absolute", zIndex: 1 }}>
          <PlayBtn
            width={{ xs: "60px", sm: pxToRem(64) }}
            height={{ xs: "60px", sm: pxToRem(64) }}
          >
            <Play
              color="#026670"
              width={pxToRem(20)}
              height={pxToRem(24)}
              style={{ marginLeft: "8%" }}
            />
          </PlayBtn>
        </Box>
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: pxToRem(20),
          }}
          src={props.image}
          alt=""
        />
      </Box>
      <Typography
        maxWidth={{ xs: "180px", sm: pxToRem(190) }}
        component="p"
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(20)}
        fontWeight={600}
        textAlign="center"
        color="#026670"
        pt={pxToRem(15)}
        px="12px"
        boxSizing="border-box"
      >
        {props.title}
      </Typography>
    </Link>
  );
};

export default Dashboard;
