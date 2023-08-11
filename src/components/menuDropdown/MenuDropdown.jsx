import React, { useState } from "react";
import { Box, Menu } from "@mui/material";
import LinkBtn from "../LinkBtn";

const MenuBtn = (props) => {
  let currentlyHovering = false;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };
  function handleHover() {
    currentlyHovering = true;
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleCloseHover() {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        handleClose();
      }
    }, 50);
  }

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
          "&::after": {
            content: "''",
            position: "absolute",
            bottom: "-23px",
            left: 0,
            width: "100%",
            height: "23px",
          },
        },
      }}
    >
      <LinkBtn
        title={props.title}
        onClick={handleClick}
        onMouseOver={handleClick}
        onMouseLeave={handleCloseHover}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          onMouseEnter: handleHover,
          onMouseLeave: handleCloseHover,
          style: { pointerEvents: "auto" },
        }}
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
          pointerEvents: "none",
          "& .MuiPaper-root": {
            boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
            borderRadius: "10px",
          },
          "& .MuiList-root": {
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
            p: "25px 30px",
          },
        }}
      >
        {props.children}
      </Menu>
    </Box>
  );
};

export default MenuBtn;
