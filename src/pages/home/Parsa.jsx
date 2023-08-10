import { Box, Container, Stack, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import Slider from "../../components/Slider";
import TextLink from "../../components/TextLink";
import Slide from "../../components/Slide";

import Parsa1 from "../../images/parsa1.jpg";
import Parsa2 from "../../images/parsa2.jpg";
const Parsa = () => {
  return (
    <Box mb="100px">
      <Container>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb="40px"
        >
          <Typography variant="sectionTitle" component="h2">
            Reb Yakov Moshe <span className="highlighted">Parsa</span>
          </Typography>
          <TextLink to="">Visit Parsa</TextLink>
        </Stack>
      </Container>
      <Slider
        slidesPerView={2}
        arrows
        style={{
          padding: "40px 20px 50px",
          margin: "0 -20px",
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
