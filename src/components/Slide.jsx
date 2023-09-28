import { Box, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import BlockBordered from "./BlockBordered";
import TextLink from "./TextLink";
import PlayBtn from "./PlayBtn";

import { ReactComponent as Play } from "../images/play.svg";

const Slide = (props) => {
  return (
    <Box
      position="relative"
      bgcolor="#fff"
      borderRadius={pxToRem(20)}
      sx={{
        transition: "0.2s ease",
        "&::before": {
          content: "''",
          position: "absolute",
          top: "50%",
          left: "50%",
          width: `calc(100% - ${pxToRem(40)})`,
          height: "100%",
          backgroundColor: "#FCE181",
          borderRadius: pxToRem(20),
          transform: "translate(-50%,-50%)",
          zIndex: -1,
          transition: "0.2s ease",
        },
        "&:hover": {
          boxShadow: {
            xs: "none",
            sm: `0px ${pxToRem(20)} ${pxToRem(24)} rgba(0,0,0,0.1)`,
          },
          "&::before": {
            height: `calc(100% + ${pxToRem(40)})`,
          },
          "& .slideTitle": {
            color: "primary.main",
          },
          "& .MuiButton-root": {
            color: "#333",
            backgroundColor: "transparent",
            "& span.MuiTypography-root::after": {
              content: "''",
              position: "absolute",
              left: 0,
              bottom: pxToRem(-8),
              height: pxToRem(2),
              width: "100%",
              backgroundColor: "#333",
            },
          },
        },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={pxToRem(240)}
        borderRadius={`${pxToRem(20)} ${pxToRem(20)} 0 0`}
        overflow="hidden"
      >
        {props.videoLink ? (
          <Link
            to={props.videoLink}
            component={NavLink}
            sx={{ position: "absolute" }}
          >
            <PlayBtn
              width={{ xs: "64px", md: pxToRem(96) }}
              height={{ xs: "64px", md: pxToRem(96) }}
            >
              <Play
                color="#026670"
                width={pxToRem(20)}
                height={pxToRem(24)}
                style={{ marginLeft: "6%" }}
              />
            </PlayBtn>
          </Link>
        ) : null}
        <img
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src={props.image}
          alt=""
        />
      </Box>
      <Box
        p={pxToRem(40)}
        bgcolor="#fff"
        borderRadius={`0 0 ${pxToRem(20)} ${pxToRem(20)}`}
        overflow="hidden"
      >
        <Typography
          className="slideTitle"
          fontSize={pxToRem(22)}
          fontWeight={700}
          lineHeight={pxToRem(30)}
          color="secondary.main"
          mb={pxToRem(20)}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {props.title}
        </Typography>
        <BlockBordered mb={props.blogLink ? pxToRem(20) : 0}>
          <Typography variant="medium" component="p">
            {props.text}
          </Typography>
        </BlockBordered>
        {props.blogLink ? (
          <TextLink href={props.blogLink}>Read More</TextLink>
        ) : null}
      </Box>
    </Box>
  );
};

export default Slide;
