import React from "react";
import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

const LinkBtn = (props) => {
  return (
    <Link
      to={props.to}
      component={NavLink}
      underline="none"
      sx={{
        position: "relative",
        color: props.footerLink ? "#BFBEBB" : "secondary.main",
        fontSize: "16px",
        fontWeight: 600,
        "&.active": {
          color: props.footerLink ? "#fff" : "primary.main",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: "-8px",
          height: 2,
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
        "&.active::before": {
          width: "100%",
        },
      }}
    >
      {props.title}
    </Link>
  );
};

export default LinkBtn;
