import React, { useState } from "react";
import { Box, Menu } from "@mui/material";
import LinkBtn from "../LinkBtn";

const MenuBtn = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        "& .MuiLink-root:hover": {
          color: "primary.main",
          "&::before": {
            width: "100%",
          },
        },
        "& .MuiLink-root": {
          color: open ? "primary.main" : "secondary.main",
          "&::before": {
            width: open ? "100%" : 0,
          },
        },
      }}
    >
      <LinkBtn onClick={handleClick} title={props.title} />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{
          top: "23px",
          "& .MuiPaper-root": {
            boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            p: "30px",
          },
          "& .MuiList-root": {
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
            p: 0,
          },
        }}
      >
        {props.children}
      </Menu>
    </Box>
  );
};

export default MenuBtn;
