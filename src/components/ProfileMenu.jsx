import { useState } from "react";
import { Avatar, Button, Divider, Link, Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { pxToRem } from "px2rem2px";

import AvatarImg from "../images/avatar.png";
import { ReactComponent as Chevron } from "../images/chevron.svg";

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: "15px",
  lineHeight: "30px",
  fontWeight: 600,
  ":hover": {
    color: "#026670",
  },
}));

const ProfileMenu = () => {
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
      <Button
        onClick={handleClick}
        size="small"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={<Chevron />}
        sx={{
          p: 0,
          "& .MuiButton-endIcon": { ml: pxToRem(12) },
          "& svg": { transform: "rotate(90deg)", mt: pxToRem(3) },
        }}
      >
        <Avatar sx={{ width: pxToRem(48), height: pxToRem(48) }}>
          <img src={AvatarImg} alt="" />
        </Avatar>
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        disableScrollLock
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.16))",
            mt: "11px",
            borderRadius: "10px",
            p: "30px",
            ".MuiList-root": {
              p: 0,
              li: {
                p: 0,
                "&:hover": {
                  bgcolor: "transparent",
                },
              },
              hr: {
                my: "15px",
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            to="/user/dashboard"
            component={NavLink}
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            <Avatar sx={{ width: pxToRem(48), height: pxToRem(48) }}>
              <img src={AvatarImg} alt="" />
            </Avatar>{" "}
            Alex Fried
          </Link>
        </MenuItem>
        <Divider sx={{ mt: "10px !important" }} />
        <MenuItem onClick={handleClose}>
          <LinkStyled to="/user/courses" component={NavLink} underline="none">
            My Courses
          </LinkStyled>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkStyled to="/user/favorites" component={NavLink} underline="none">
            My Favorites
          </LinkStyled>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LinkStyled
            to="/user/account-settings"
            component={NavLink}
            underline="none"
          >
            Account
          </LinkStyled>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <LinkStyled
            to=""
            component={NavLink}
            underline="none"
            sx={{ fontSize: "12px", lineHeight: "20px", color: "#BFBEBB" }}
          >
            Help & Support
          </LinkStyled>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{
            fontSize: "12px",
            lineHeight: "20px",
            fontWeight: 600,
            color: "#BFBEBB",
            ":hover": { color: "#026670" },
          }}
        >
          Signout
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
