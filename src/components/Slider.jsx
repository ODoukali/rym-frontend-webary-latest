import React, { useRef, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { pxToRem } from "px2rem2px";

import { ReactComponent as Chevron } from "../images/chevron.svg";

const Slider = (props) => {
  const swiperRef = useRef();
  const { arrows, ...restProps } = props;
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: false,
  });

  return (
    <Container disableGutters>
      <Box position="relative">
        <Swiper
          {...restProps}
          onSlideChange={(swipe) =>
            setSlideConfig({
              isBeginning: swipe.isBeginning,
              isEnd: swipe.isEnd,
            })
          }
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {props.children}
        </Swiper>
        {arrows ? (
          <Stack
            flexDirection="row"
            justifyContent={{ xs: "flex-end", sm: "center" }}
            alignItems="center"
            gap={{ xs: "10px", sm: "15px" }}
            sx={{
              "@media (max-width: 1330px)": {
                marginTop: "5px",
              },
            }}
          >
            <ArrowBtn
              className={`arrow-prev ${
                slideConfig.isBeginning ? "disabled" : ""
              }`}
              onClick={() => swiperRef.current.slidePrev()}
            />
            <ArrowBtn
              className={`arrow-next ${slideConfig.isEnd ? "disabled" : ""}`}
              nextBtn
              onClick={() => swiperRef.current.slideNext()}
            />
          </Stack>
        ) : null}
      </Box>
    </Container>
  );
};

const ArrowBtn = (props) => {
  const { nextBtn, ...restProps } = props;
  return (
    <Box
      {...restProps}
      component="button"
      onClick={props.onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: props.nextBtn ? "initial" : pxToRem(-145),
        right: props.nextBtn ? pxToRem(-145) : "initial",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "40px", sm: pxToRem(80) },
        height: { xs: "40px", sm: pxToRem(80) },
        borderRadius: "50%",
        bgcolor: "#fff",
        boxShadow: `0px ${pxToRem(10)} ${pxToRem(20)} rgba(0,0,0,0.07)`,
        border: "none",
        cursor: "pointer",
        transition: "0.2s ease",
        transform: "translateY(-50%)",
        "& svg": {
          transition: "0.2s ease",
          transform: props.nextBtn ? "rotate(0deg)" : "rotate(180deg)",
          margin: props.nextBtn ? `0 0 0 ${pxToRem(5)}` : `0 ${pxToRem(3)} 0 0`,
        },
        "&:hover": {
          bgcolor: "#026670",
          "@media (max-width: 899px)": {
            transform: "scale(1.1) !important",
          },
          "@media (max-width: 767px)": {
            transform: "scale(1.2) !important",
          },
          "& svg": {
            color: "#FCE181",
          },
        },
      }}
    >
      <Chevron color="#026670" />
    </Box>
  );
};

export default Slider;
