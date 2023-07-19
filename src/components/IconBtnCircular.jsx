import React from "react";
import { IconButton } from "@mui/material";

const IconBtnCircular = (props) => {
  return (
    <IconButton
      sx={{
        width: 48,
        height: 48,
        backgroundColor: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(10px)",
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
        "&:hover": {
          backgroundColor: "rgba(255,255,255,1)",
        },
      }}
    >
      {props.children}
    </IconButton>
  );
};

export default IconBtnCircular;
