import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import PlayBtn from "../PlayBtn";

import { ReactComponent as Play } from "../../images/play.svg";

const ButtonStyled = styled(Button)({
  position: "static",
  maxWidth: "134px",
  marginTop: "10px",
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

const Course = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "180px", sm: "auto" },
        pb: "20px",
        "&:hover": {
          bgcolor: "#F7F6F2",
          outline: "10px solid #F7F6F2",
          borderRadius: "20px",
          ".play-btn": {
            backgroundColor: "#fff",
            "& svg": {
              color: "#333",
            },
          },
          "@media(max-width: 767px)": {
            outline: 0,
          },
        },
      }}
    >
      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={{ xs: "180px", sm: "auto" }}
        height={{ xs: "180px", sm: pxToRem(190) }}
        borderRadius="19px"
        overflow="hidden"
      >
        <Box sx={{ position: "absolute", zIndex: 1 }}>
          <PlayBtn
            width={{ xs: "60px", sm: pxToRem(64) }}
            height={{ xs: "60px", sm: pxToRem(64) }}
          >
            <Play
              color="#026670"
              width={pxToRem(20)}
              height={pxToRem(24)}
              style={{ marginLeft: "8%" }}
            />
          </PlayBtn>
        </Box>
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            borderRadius: pxToRem(20),
          }}
          src={props.image}
          alt=""
        />
      </Box>
      <Box textAlign="center" pt={pxToRem(20)} px={{ xs: "5px", sm: "12px" }}>
        <Typography
          component="p"
          fontSize="12px"
          fontWeight={600}
          color="#BFBEBB"
          mb="5px"
        >
          Subscribed {props.subscribed}
        </Typography>
        <Typography
          // maxWidth={{ xs: "180px", sm: pxToRem(190) }}
          component="p"
          fontSize={pxToRem(16)}
          lineHeight={pxToRem(20)}
          fontWeight={600}
          boxSizing="border-box"
        >
          {props.title}
        </Typography>
        <Stack flexDirection="row" alignItems="center" justifyContent="center">
          <ButtonStyled
            to={props.videoLink}
            component={NavLink}
            size="small"
            variant="outlined"
          >
            {props.subscription ? "Watch" : "ReSubscribe"}
          </ButtonStyled>
        </Stack>
      </Box>
    </Box>
  );
};

export default Course;
