import {
  Box,
  Button,
  Container,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { pxToRem } from "px2rem2px";
import Slider from "../../components/Slider";
import TextLink from "../../components/TextLink";
import Slide from "../../components/Slide";

import SlideBlog1 from "../../images/slide-blog1.jpg";
import SlideBlog2 from "../../images/slide-blog2.jpg";
import SlideBlog3 from "../../images/slide-blog3.jpg";
import Guides from "../../components/Guides";

const BlogNews = () => {
  return (
    <Box mb={pxToRem(150)}>
      <Container>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb={pxToRem(40)}
        >
          <Typography variant="sectionTitle" component="h2">
            Our <span className="highlighted">blog</span> &{" "}
            <span className="highlighted">news</span>
          </Typography>
          <TextLink href="">Visit Blog & News</TextLink>
        </Stack>
      </Container>
      <Slider
        slidesPerView={3}
        arrows
        style={{
          paddingTop: pxToRem(40),
          paddingBottom: pxToRem(50),
          paddingLeft: pxToRem(20),
          paddingRight: pxToRem(20),
          marginTop: 0,
          marginBottom: 0,
          marginLeft: pxToRem(-20),
          marginRight: pxToRem(-20),
        }}
      >
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
      <Container sx={{ position: "relative" }}>
        <Box
          bgcolor="#026670"
          borderRadius={pxToRem(30)}
          textAlign="center"
          py={pxToRem(60)}
          px={pxToRem(30)}
          mt={pxToRem(40)}
        >
          <Box position="relative" zIndex={1}>
            <Typography
              component="h3"
              fontSize={pxToRem(22)}
              fontWeight={700}
              color="#fff"
              mb={pxToRem(20)}
            >
              Subscribe to our newsletter:
            </Typography>
            <Box maxWidth={pxToRem(380)} m="auto">
              <form>
                <OutlinedInput
                  fullWidth
                  placeholder="Your Email Address"
                  sx={{
                    height: pxToRem(54),
                    border: "2px solid #BFBEBB",
                    borderRadius: pxToRem(32),
                    outline: 0,
                    backgroundColor: "#167078",
                    mb: pxToRem(20),
                    "& input": {
                      textAlign: "center",
                      color: "#fff",
                      outline: 0,
                      "&::placeholder": {
                        fontSize: pxToRem(16),
                        color: "#BFBEBB",
                        fontWeight: 500,
                        opacity: 1,
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="yellow"
                  sx={{ height: pxToRem(54), position: "relative", zIndex: 1 }}
                >
                  Subscribe
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
        <Guides color="rgba(0,0,0,0.06)" zIndex="0" />
      </Container>
    </Box>
  );
};

export default BlogNews;
