import { Button, Stack, Typography, Link, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { pxToRem } from "px2rem2px";
import BlockBordered from "../../components/BlockBordered";
import TextLink from "../../components/TextLink";
import Rating from "../../components/Rating";
import Testimonial from "../../components/Testimonial";

import { ReactComponent as Chevron } from "../../images/chevron.svg";

const LinkStyled = styled(Link)({
  color: "#026670",
  fontWeight: "600",
  cursor: "pointer",
  "&:hover": { color: "#333", borderBottom: "2px solid #333" },
});

const TypographyStyled = styled(Typography)({
  display: "flex",
  alignItems: "center",
  gap: pxToRem(2),
  fontSize: pxToRem(14),
  fontWeight: 600,
  lineHeight: pxToRem(18),
  color: "#BFBEBB",
  "& span": {
    color: "#333",
  },
});

const OverviewTab = () => {
  return (
    <>
      <Typography
        variant="sectionTitle"
        component="h2"
        fontSize={pxToRem(35)}
        mb={pxToRem(20)}
      >
        Course Details
      </Typography>
      <BlockBordered mb={pxToRem(36)}>
        <Typography variant="large" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in{" "}
          <LinkStyled href="" underline="none">
            voluptate velit esse cillum
          </LinkStyled>{" "}
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in{" "}
          <LinkStyled href="" underline="none">
            culpa qui officia deserunt
          </LinkStyled>{" "}
          mollit anim id est laborum.
          <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Typography>
      </BlockBordered>
      <Button
        endIcon={<Chevron />}
        sx={{
          "& .MuiButton-endIcon": { ml: pxToRem(12) },
          "& svg": { transform: "rotate(90deg)", mt: pxToRem(3) },
        }}
      >
        Read More
      </Button>
      <Stack
        flexDirection="row"
        alignItems="center"
        flexWrap="wrap"
        columnGap={pxToRem(20)}
        rowGap={pxToRem(10)}
        mt={pxToRem(40)}
      >
        <TypographyStyled>
          Lenght: <span>2h 53m</span>
        </TypographyStyled>
        <TypographyStyled>
          Release: <span>30 June 2023</span>
        </TypographyStyled>
        <TypographyStyled>
          Subscribers: <span>257</span>
        </TypographyStyled>
        <TypographyStyled>
          Lectures: <span>15</span>
        </TypographyStyled>
        <TypographyStyled>
          Rating:{" "}
          <Rating
            defaultValue={4}
            readOnly
            sx={{ mx: pxToRem(8), mb: pxToRem(2) }}
          />{" "}
          <span>28</span>
        </TypographyStyled>
      </Stack>
      <Divider sx={{ backgroundColor: "#BFBEBB", my: pxToRem(60) }} />
      <Typography fontSize={pxToRem(22)} fontWeight={700} mb={pxToRem(20)}>
        Course Questions
      </Typography>
      <Swiper slidesPerView={2} spaceBetween={20}>
        <SwiperSlide>
          <Testimonial modal avatar reply />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial modal reply />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial modal avatar reply />
        </SwiperSlide>
      </Swiper>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={pxToRem(50)}
      >
        <Button variant="yellow" sx={{ height: pxToRem(54) }}>
          Rate & Comment
        </Button>
        <TextLink href="">View all 28 Comments</TextLink>
      </Stack>
    </>
  );
};

export default OverviewTab;
