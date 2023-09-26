import React, { useState } from "react";
import { Box, Menu } from "@mui/material";
import { pxToRem } from "px2rem2px";
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
        display: "flex",
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
            bottom: pxToRem(-23),
            left: 0,
            width: "100%",
            height: pxToRem(23),
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
        disableScrollLock
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
        disableRestoreFocus
        sx={{
          top: pxToRem(23),
          pointerEvents: "none",
          "& .MuiPaper-root": {
            boxShadow: `0px ${pxToRem(10)} ${pxToRem(20)} rgba(0,0,0,0.1)`,
            borderRadius: pxToRem(10),
          },
          "& .MuiList-root": {
            display: "flex",
            flexDirection: "column",
            rowGap: pxToRem(10),
            p: `${pxToRem(25)} ${pxToRem(30)}`,
          },
        }}
      >
        {props.children}
      </Menu>
    </Box>
  );
};

export default MenuBtn;
