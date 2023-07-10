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
        "&.active::before": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: "-12px",
          height: 2,
          width: "calc(100% + 10px)",
          bgcolor: "primary.main",
        },
      }}
    >
      {props.title}
    </Link>
  );
};

export default LinkBtn;
