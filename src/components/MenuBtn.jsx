import React, { useState } from "react";
import { Menu } from "@mui/material";
import LinkBtn from "./LinkBtn";

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
    <>
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
        sx={{ top: "23px" }}
      >
        {props.children}
      </Menu>
    </>
  );
};

export default MenuBtn;
