import {
  Avatar,
  Badge,
  Box,
  Button,
  Link,
  List,
  ListItem,
  Stack,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import LinkBtn from "../LinkBtn";
import IconBtnCircular from "../IconBtnCircular";

import AvatarImg from "../../images/avatar.png";
import { ReactComponent as Close } from "../../images/close-user-menu.svg";
import { ReactComponent as Chevron } from "../../images/chevron.svg";

const UserMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{ "& .MuiIconButton-root": { width: "36px", height: "36px" } }}
      >
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

        <Box display={{ xs: "block", sm: "none" }}>
          <IconBtnCircular onClick={() => navigate("/")}>
            <Close color="#026670" />
          </IconBtnCircular>
        </Box>
      </Stack>

      <Stack
        flexDirection={{ xs: "row", sm: "column", md: "row" }}
        justifyContent={{ xs: "flex-start", sm: "space-beetwen" }}
        gap="5px"
      >
        <Button
          to="/user/courses"
          component={NavLink}
          size="small"
          variant="outlined"
        >
          My Courses
        </Button>
        <Button
          to="/user/favorites"
          component={NavLink}
          size="small"
          variant="outlined"
        >
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
          to="/user/dashboard"
          title="Dashboard"
          notificationQuantity={2}
        ></MenuItem>
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
        justifyContent: "space-between",
        "& .MuiLink-root": {
          fontWeight: 700,
        },
        "&:has(a.MuiLink-root.active) .chevron svg": {
          color: "#333",
        },
      }}
    >
      <Badge
        color="secondary"
        badgeContent={props.notificationQuantity}
        sx={{
          "& .MuiBadge-badge": {
            right: "-10px",
          },
        }}
      >
        <LinkBtn to={props.to} title={props.title} />
      </Badge>
      <Box className="chevron" display={{ xs: "block", sm: "none" }}>
        <Chevron color="#BFBEBB" />
      </Box>
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
