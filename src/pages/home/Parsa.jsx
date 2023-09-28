import { Box, Container, Stack, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { pxToRem } from "px2rem2px";
import Slider from "../../components/Slider";
import TextLink from "../../components/TextLink";
import Slide from "../../components/Slide";

import Parsa1 from "../../images/parsa1.jpg";
import Parsa2 from "../../images/parsa2.jpg";
const Parsa = () => {
  return (
    <Box
      mb={pxToRem(100)}
      sx={{
        "@media (max-width: 1330px)": { mb: "120px" },
        "@media (max-width: 767px)": { mb: "80px" },
      }}
    >
      <Container disableGutters>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
          gap="15px"
          mb={{ xs: 0, md: pxToRem(40) }}
        >
          <Typography variant="sectionTitle" component="h2">
            Reb Yakov Moshe <span className="highlighted">Parsa</span>
          </Typography>
          <TextLink href="">Visit Parsa</TextLink>
        </Stack>
      </Container>
      <Slider
        slidesPerView={1}
        spaceBetween={20}
        arrows
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
        }}
        style={{
          padding: `${pxToRem(40)} ${pxToRem(20)} ${pxToRem(50)}`,
          margin: `0 ${pxToRem(-20)}`,
        }}
      >
        <SwiperSlide>
          <Slide
            image={Parsa1}
            title="Sed ut perspiciatis unde omnis iste natus"
            text="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
            blogLink="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={Parsa2}
            title="Magni dolores eos qui ratione voluptatem"
            text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam."
            blogLink="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={Parsa1}
            title="Sed ut perspiciatis unde omnis iste natus"
            text="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
            blogLink="/"
          />
        </SwiperSlide>
      </Slider>
    </Box>
  );
};

export default Parsa;
