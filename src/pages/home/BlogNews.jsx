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
    <Box mb={{ xs: "80px", sm: pxToRem(150) }}>
      <Container disableGutters>
        <Stack
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          gap="15px"
          mb={{ xs: 0, md: pxToRem(40) }}
        >
          <Typography variant="sectionTitle" component="h2">
            Our <span className="highlighted">blog</span> &{" "}
            <span className="highlighted">news</span>
          </Typography>
          <TextLink href="">Visit Blog & News</TextLink>
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
          900: {
            slidesPerView: 3,
          },
        }}
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
      <Container
        disableGutters
        sx={{ position: "relative", px: { xs: 0, md: "30px" } }}
      >
        <Box
          bgcolor="#026670"
          borderRadius={{ xs: 0, md: pxToRem(30) }}
          textAlign="center"
          py={pxToRem(60)}
          px={{ xs: "25px", sm: pxToRem(30) }}
          mt={pxToRem(40)}
          sx={{
            "@media (max-width: 1330px)": { mt: "120px" },
            "@media (max-width: 767px)": { mt: "80px" },
          }}
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
