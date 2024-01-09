import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { pxToRem } from "px2rem2px";
import BlockHeading from "../../components/BlockHeading";

import { ReactComponent as Chevron } from "../../images/chevron.svg";
import { ReactComponent as FilterMenu } from "../../images/filter-menu.svg";
import { ReactComponent as Arrows } from "../../images/down-arrow.svg";
import Slider from "../../components/Slider";
import { SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ButtonStyled = styled(Button)({
  position: "static",
  maxWidth: "134px",
  "&::before": {
    content: "''",
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  "&:hover": {
    color: "#026670",
    backgroundColor: "#FCE181",
    borderColor: "#FCE181",
  },
});

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#026670",
  },
  "& .MuiRating-iconHover": {
    color: "#026670",
  },
});

const questions = [
  {
    id: 0,
    date: "7th of August 2023",
    question:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu doloremque laudantium, totam rem aperiam, eaque ipsa?",
  },
  {
    id: 1,
    date: "7th of August 2023",
    question:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu doloremque laudantium, totam rem aperiam, eaque ipsa?",
  },
  {
    id: 2,
    date: "7th of August 2023",
    question:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu doloremque laudantium, totam rem aperiam, eaque ipsa?",
  },
  {
    id: 3,
    date: "7th of August 2023",
    question:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu doloremque laudantium, totam rem aperiam, eaque ipsa?",
  },
];

const Questions = () => {
  return (
    <Box mt="30px">
      <BlockHeading>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="20px"
          flexWrap="wrap"
        >
          <Typography component="h3" variant="blockTitle">
            Questions & Answers
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
        </Stack>
      </BlockHeading>

      <Box
        sx={{
          "& .MuiContainer-root": { p: 0 },
          "& .swiper": {
            "@media(max-width: 1330px)": {
              pb: "30px",
            },
          },
          "& .arrow-prev": { left: "-90px" },
          "& .arrow-next": { right: "-90px" },
        }}
      >
        <Slider
          slidesPerView={1}
          spaceBetween={18}
          arrows
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {questions.map((q) => (
            <SwiperSlide key={q.id}>
              <Question date={q.date} question={q.question} />
            </SwiperSlide>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

const Question = (props) => {
  return (
    <Box
      bgcolor="#fff"
      border="1px solid #EDECE8"
      borderRadius="10px"
      p={pxToRem(30)}
      sx={{
        "&:hover": { backgroundColor: "#F7F6F2", "& time": { color: "#333" } },
      }}
    >
      <Typography
        display="block"
        component="time"
        fontSize="12px"
        fontWeight={600}
        color="#BFBEBB"
        mb={pxToRem(20)}
      >
        {props.date}
      </Typography>
      <Typography
        component="p"
        fontSize="16px"
        fontWeight={700}
        color="#BFBEBB"
      >
        QUESTION
      </Typography>
      <Typography component="p" variant="medium">
        {props.question}
      </Typography>
      <Stack
        flexDirection="row"
        alignItems="center"
        gap="10px"
        mt={pxToRem(20)}
      >
        <ButtonStyled to="" component={NavLink} size="small" variant="outlined">
          View
        </ButtonStyled>
        <StyledRating
          max={1}
          icon={<FavoriteIcon />}
          emptyIcon={<FavoriteBorderIcon />}
          sx={{ position: "relative", zIndex: 1 }}
        />
      </Stack>
    </Box>
  );
};

export default Questions;
