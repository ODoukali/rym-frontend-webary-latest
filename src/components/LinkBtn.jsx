import React from "react";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { pxToRem } from "px2rem2px";

const LinkBtn = (props) => {
  const { title, footerLink, component, ...rest } = props;
  return (
    <Link
      {...rest}
      to={props.to}
      component={component ?? NavLink}
      underline="none"
      sx={{
        position: "relative",
        color: props.footerLink ? "#BFBEBB" : "secondary.main",
        fontSize: pxToRem(16),
        fontWeight: 600,
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: pxToRem(-8),
          height: "2px",
          width: 0,
          bgcolor: props.footerLink ? "#fff" : "primary.main",
          transition: "0.2s ease",
        },
        "&:hover": {
          color: props.footerLink ? "#fff" : "primary.main",
          "&::before": {
            width: "100%",
          },
        },
        "&.active": {
          color: props.footerLink ? "#fff" : "#333",
        },
      }}
    >
      {props.title}
    </Link>
  );
};

export default LinkBtn;
