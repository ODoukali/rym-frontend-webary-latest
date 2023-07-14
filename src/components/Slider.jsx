import React from "react";
import { Container } from "@mui/material";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Slider = (props) => {
  return (
    <Container>
      <Swiper
        {...props}
        modules={[Navigation]}
        spaceBetween={20}
        // navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ padding: "40px 20px 50px", margin: "0 -20px" }}
      >
        {props.children}
      </Swiper>
    </Container>
  );
};

export default Slider;
