import { Box, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import BlockBordered from "./BlockBordered";
import TextLink from "./TextLink";
import PlayBtn from "./PlayBtn";

const Slide = (props) => {
  return (
    <Box
      position="relative"
      bgcolor="#fff"
      borderRadius="20px"
      sx={{
        transition: "0.2s ease",
        "&::before": {
          content: "''",
          position: "absolute",
          left: "50%",
          width: "calc(100% - 40px)",
          height: "100%",
          backgroundColor: "#FCE181",
          borderRadius: "20px",
          transform: "translateX(-50%)",
          zIndex: -1,
          transition: "0.2s ease",
        },
        "&:hover": {
          transform: "scale(1,1.03)",
          boxShadow: "0px 20px 24px rgba(0,0,0,0.1)",
          "&::before": {
            transform: "translateX(-50%) scale(1,1.07)",
          },
          "& .slideTitle": {
            color: "primary.main",
          },
          "& .MuiButton-link": {
            color: "#333",
            backgroundColor: "transparent",
            "& span.MuiTypography-root::after": {
              content: "''",
              position: "absolute",
              left: 0,
              bottom: -8,
              height: 2,
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
        height={240}
        borderRadius="20px 20px 0 0"
        overflow="hidden"
      >
        {props.videoLink ? (
          <Link
            to={props.videoLink}
            component={NavLink}
            sx={{ position: "absolute" }}
          >
            <PlayBtn width="96px" height="96px" />
          </Link>
        ) : null}
        <img
          style={{ objectFit: "cover", width: "100%" }}
          src={props.image}
          alt=""
        />
      </Box>
      <Box
        p="40px"
        bgcolor="#fff"
        borderRadius="0 0 20px 20px"
        overflow="hidden"
      >
        <Typography
          className="slideTitle"
          fontSize="22px"
          fontWeight={700}
          lineHeight="30px"
          color="secondary.main"
          mb="20px"
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
        <BlockBordered mb="20px">
          <Typography variant="medium" component="p">
            {props.text}
          </Typography>
        </BlockBordered>
        {props.blogLink ? (
          <TextLink to={props.blogLink}>Read More</TextLink>
        ) : null}
      </Box>
    </Box>
  );
};

export default Slide;
