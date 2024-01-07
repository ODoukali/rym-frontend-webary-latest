import { Box, Button, Stack, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import { pxToRem } from "px2rem2px";
import BlockHeading from "../../components/BlockHeading";
import Slider from "../../components/Slider";
import Course from "../../components/user/Course";

import { ReactComponent as Chevron } from "../../images/chevron.svg";
import { ReactComponent as FilterMenu } from "../../images/filter-menu.svg";
import { ReactComponent as Arrows } from "../../images/down-arrow.svg";
import SlideVideo1 from "../../images/video-slide2.jpg";
import SlideVideo2 from "../../images/video-slide3.jpg";

const videos = [
  {
    id: 0,
    image: SlideVideo1,
    videoLink: "/",
    title: "Course name title comes here",
    subscribed: "11/31/23",
    subscription: true,
  },
  {
    id: 1,
    image: SlideVideo2,
    videoLink: "/",
    title: "Course name title comes here",
    subscribed: "11/31/23",
    subscription: true,
  },
  {
    id: 2,
    image: SlideVideo1,
    videoLink: "/",
    title: "Course name title comes here",
    subscribed: "11/31/23",
    subscription: false,
  },
  {
    id: 3,
    image: SlideVideo1,
    videoLink: "/",
    title: "Course name title comes here",
    subscribed: "11/31/23",
    subscription: true,
  },
  {
    id: 4,
    image: SlideVideo1,
    videoLink: "/",
    title: "Course name title comes here",
    subscribed: "11/31/23",
    subscription: true,
  },
  {
    id: 5,
    image: SlideVideo1,
    videoLink: "/",
    title: "Course name title comes here",
    subscribed: "11/31/23",
    subscription: true,
  },
  {
    id: 6,
    image: SlideVideo1,
    videoLink: "/",
    title: "Course name title comes here",
    subscribed: "11/31/23",
    subscription: false,
  },
  {
    id: 7,
    image: SlideVideo1,
    videoLink: "/",
    title: "Course name title comes here",
    subscribed: "11/31/23",
    subscription: true,
  },
];

const Favorites = () => {
  return (
    <>
      <BlockHeading>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="20px"
          flexWrap="wrap"
        >
          <Typography component="h3" variant="blockTitle">
            Recently Watched
          </Typography>

          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent={{ xs: "space-between", ssm: "flex-end" }}
            gap={{ xs: "15px", ssm: "30px" }}
          >
            <Button
              startIcon={<FilterMenu />}
              endIcon={<Chevron />}
              sx={{
                color: "#333",
                fontSize: "14px",
                "& .MuiButton-endIcon": {
                  ml: pxToRem(12),
                  "& svg": { transform: "rotate(90deg)", mt: pxToRem(3) },
                },
              }}
            >
              Active
            </Button>

            <Button
              startIcon={<Arrows />}
              endIcon={<Chevron />}
              sx={{
                color: "#333",
                fontSize: "14px",
                "& .MuiButton-endIcon": {
                  ml: pxToRem(12),
                  "& svg": { transform: "rotate(90deg)", mt: pxToRem(3) },
                },
              }}
            >
              Date Subscribed
            </Button>
          </Stack>
        </Stack>
      </BlockHeading>

      <Box
        sx={{
          "& .MuiContainer-root": { p: 0 },
          "& .swiper": { pb: "35px" },
          "& .swiper-slide": { width: "auto" },
          "& .arrow-prev": { left: "-90px", top: "40%" },
          "& .arrow-next": { right: "-90px", top: "40%" },
        }}
      >
        <Slider
          slidesPerView={2}
          spaceBetween={20}
          arrows
          modules={[Grid]}
          breakpoints={{
            320: {
              slidesPerView: 2,
              grid: {
                rows: 2,
                fill: "row",
              },
            },
            600: {
              slidesPerView: 3,
            },
            1060: {
              slidesPerView: 4,
            },
          }}
        >
          {videos.map((v) => (
            <SwiperSlide key={v.id}>
              <Course
                key={v.id}
                favorite
                image={v.image}
                videoLink={v.videoLink}
                title={v.title}
                subscription={v.subscription}
                subscribed={v.subscribed}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Favorites;
