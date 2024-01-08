import { Box, Button, Stack } from "@mui/material";
import { pxToRem } from "px2rem2px";
import BlockHeading from "../../components/BlockHeading";
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

const Courses = () => {
  return (
    <>
      <BlockHeading>
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
                "& svg": { transform: "rotate(90deg)" },
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
                "& svg": { transform: "rotate(90deg)" },
              },
            }}
          >
            Date Subscribed
          </Button>
        </Stack>
      </BlockHeading>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            ssm: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          gap: "30px 20px",
          "@media(max-width: 575px)": {
            gap: "20px 11px",
          },
        }}
      >
        {videos.map((v) => (
          <Course
            key={v.id}
            image={v.image}
            videoLink={v.videoLink}
            title={v.title}
            subscription={v.subscription}
            subscribed={v.subscribed}
          />
        ))}
      </Box>
    </>
  );
};

export default Courses;
