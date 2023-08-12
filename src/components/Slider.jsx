import React, { useRef } from "react";
import { Box, Container } from "@mui/material";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { ReactComponent as Arrow } from "../images/arrow.svg";

const Slider = (props) => {
  const swiperRef = useRef();
  const { arrows, ...restProps } = props;

  return (
    <Container>
      <Box position="relative">
        <Swiper
          {...restProps}
          spaceBetween={20}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {props.children}
        </Swiper>
        {arrows ? (
          <>
            <ArrowBtn
              className="arrow-prev"
              onClick={() => swiperRef.current.slidePrev()}
            />
            <ArrowBtn
              className="arrow-next"
              nextBtn
              onClick={() => swiperRef.current.slideNext()}
            />
          </>
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
        left: props.nextBtn ? "initial" : "-145px",
        right: props.nextBtn ? "-145px" : "initial",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        bgcolor: "#fff",
        boxShadow: "0px 10px 20px rgba(0,0,0,0.07)",
        border: "none",
        cursor: "pointer",
        transition: "0.2s ease",
        transform: "translateY(-50%)",
        "& svg": {
          transition: "0.2s ease",
          transform: props.nextBtn ? "rotate(0deg)" : "rotate(180deg)",
          margin: props.nextBtn ? "0 0 0 5px" : "0 3px 0 0",
        },
        "&:hover": {
          bgcolor: "#026670",
          "& svg": {
            color: "#FCE181",
          },
        },
      }}
    >
      <Arrow width={13} height={16} color="#026670" />
    </Box>
  );
};

export default Slider;
