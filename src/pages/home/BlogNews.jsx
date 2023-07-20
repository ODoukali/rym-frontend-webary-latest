import { Box, Container, Stack, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import Slider from "../../components/Slider";
import TextLink from "../../components/TextLink";
import Slide from "../../components/Slide";

import SlideBlog1 from "../../images/slide-blog1.jpg";
import SlideBlog2 from "../../images/slide-blog2.jpg";
import SlideBlog3 from "../../images/slide-blog3.jpg";

const BlogNews = () => {
  return (
    <Box pb="110px">
      <Container>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb="40px"
        >
          <Typography variant="sectionTitle" component="h2">
            Our <span className="highlighted">blog</span> &{" "}
            <span className="highlighted">news</span>
          </Typography>
          <TextLink to="">Visit Blog & News</TextLink>
        </Stack>
      </Container>
      <Slider slidesPerView={3} arrows>
        <SwiperSlide>
          <Slide
            image={SlideBlog1}
            title="Ut enim ad minim elit venia quis ullamco sit"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu doloremque laudantium, totam rem aperiam, eaque ipsa."
            blogLink="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={SlideBlog2}
            title="Neque porro quisquam est, qui dolorem ipsum quia"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq magni dolores eos qui ratione."
            blogLink="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={SlideBlog3}
            title="Ut enim ad minima venia, nostrum exercitationem"
            text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi."
            blogLink="/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={SlideBlog2}
            title="Neque porro quisquam est, qui dolorem ipsum quia"
            text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseq magni dolores eos qui ratione."
            blogLink="/"
          />
        </SwiperSlide>
      </Slider>
    </Box>
  );
};

export default BlogNews;
