import React, { useState } from "react";
import { IconButton, Menu } from "@mui/material";

import { ReactComponent as DotIc } from "../images/dots-menu.svg";

const TestimonialMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{ height: "34px", marginTop: "5px" }}
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
        sx={{
          "& .MuiPaper-root": {
            minWidth: "155px",
            boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
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
