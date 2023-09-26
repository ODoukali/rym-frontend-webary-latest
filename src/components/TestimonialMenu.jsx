import React, { useState } from "react";
import { IconButton, Menu } from "@mui/material";
import { pxToRem } from "px2rem2px";

import { ReactComponent as DotIc } from "../images/dots-menu.svg";

const TestimonialMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{ height: pxToRem(38), marginTop: pxToRem(5) }}
      >
        <DotIc color="#026670" />
      </IconButton>
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableAutoFocus
        disableScrollLock
        sx={{
          "& .MuiPaper-root": {
            minWidth: pxToRem(155),
            boxShadow: `0px ${pxToRem(10)} ${pxToRem(20)} rgba(0,0,0,0.1)`,
            borderRadius: pxToRem(10),
          },
          "& .MuiList-root": {
            display: "flex",
            flexDirection: "column",
            rowGap: pxToRem(10),
            p: `${pxToRem(25)} ${pxToRem(30)}`,
          },
          "& .MuiMenuItem-root": {
            fontSize: pxToRem(15),
            fontWeight: 600,
            color: "#333",
            p: 0,
            "&:hover": {
              color: "secondary.main",
              backgroundColor: "transparent",
            },
          },
        }}
      >
        {React.Children.map(props.children, (child) => {
          return React.cloneElement(child, {
            onClick: (event) => {
              handleClose();
              child.props.onClick(event);
            },
          });
        })}
      </Menu>
    </>
  );
};

export default TestimonialMenu;
