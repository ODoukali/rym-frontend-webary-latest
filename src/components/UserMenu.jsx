import { Avatar, Button, Link, List, ListItem, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { pxToRem } from "px2rem2px";

import AvatarImg from "../images/avatar.png";
import LinkBtn from "./LinkBtn";

const UserMenu = () => {
  return (
    <>
      <Link
        to="/user/dashboard"
        component={NavLink}
        underline="none"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: pxToRem(15),
          fontSize: pxToRem(20),
          fontWeight: "bold",
          mb: pxToRem(20),
        }}
      >
        <Avatar sx={{ width: pxToRem(64), height: pxToRem(64) }}>
          <img src={AvatarImg} alt="" />
        </Avatar>{" "}
        Hi, Alex Fried
      </Link>

      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap="5px"
      >
        <Button to="" component={NavLink} size="small" variant="outlined">
          My Courses
        </Button>
        <Button to="" component={NavLink} size="small" variant="outlined">
          Favorites
        </Button>
      </Stack>

      <List
        sx={{
          my: pxToRem(40),
          p: 0,
          borderTop: "1px solid rgba(191,190,187, 0.5)",
        }}
      >
        <MenuItem
          to="/user/account-settings"
          title="Account & Activity"
        ></MenuItem>
        <MenuItem to="/user/notifications" title="Notifications"></MenuItem>
        <MenuItem to="/purchase-history" title="Purchase History"></MenuItem>
        <MenuItem to="/playback" title="Playback"></MenuItem>
        <MenuItem to="/general" title="General"></MenuItem>
      </List>

      <Stack
        gap={pxToRem(20)}
        pb={pxToRem(40)}
        borderBottom="1px solid rgba(191,190,187, 0.5)"
      >
        <TextLink to="/support">Help & Support</TextLink>
        <TextLink to="/about">About Us</TextLink>
      </Stack>

      <Button size="small" variant="outlined" sx={{ mt: pxToRem(40) }}>
        Sign Out
      </Button>
    </>
  );
};

const MenuItem = (props) => {
  return (
    <ListItem
      sx={{
        py: pxToRem(20),
        px: 0,
        borderBottom: "1px solid rgba(191,190,187, 0.5)",
        "& .MuiLink-root": {
          fontWeight: 700,
        },
      }}
    >
      <LinkBtn to={props.to} title={props.title} />
    </ListItem>
  );
};

const TextLink = (props) => {
  return (
    <Link
      to={props.to}
      component={NavLink}
      underline="none"
      sx={{
        fontSize: pxToRem(14),
        fontWeight: 600,
        "&:hover": { color: "#026670" },
      }}
    >
      {props.children}
    </Link>
  );
};

export default UserMenu;
