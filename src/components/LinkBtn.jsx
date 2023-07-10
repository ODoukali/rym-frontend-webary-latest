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
        color: "secondary.main",
        fontSize: "16px",
        fontWeight: 600,
        "&.active": {
          color: "primary.main",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: "-12px",
          height: 2,
          width: 0,
          bgcolor: "primary.main",
          transition: "0.2s ease",
        },
        "&:hover": {
          color: "primary.main",
          "&::before": {
            width: "calc(100% + 10px)",
          },
        },
        "&.active::before": {
          width: "calc(100% + 10px)",
        },
      }}
    >
      {props.title}
    </Link>
  );
};

export default LinkBtn;
