import { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import CloseBtn from "./CloseBtn";

import AvatarImg from "../../images/avatar.png";
import { ReactComponent as Chevron } from "../../images/chevron.svg";

const UserMenu = (props) => {
  const navigate = useNavigate();
  const [activeRoute, setActiveRoute] = useState();

  const handleItemClick = (route) => {
    navigate(route);
    props.setIsMenuVisible(false);
    setActiveRoute(route);
  };

  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{ "& .MuiIconButton-root": { width: "36px", height: "36px" } }}
      >
        <Link
          onClick={() => handleItemClick("/user/dashboard")}
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

        <CloseBtn />
      </Stack>

      <Stack
        flexDirection={{ xs: "row", sm: "column", md: "row" }}
        justifyContent={{ xs: "flex-start", sm: "space-beetwen" }}
        gap="5px"
      >
        <Button
          onClick={() => handleItemClick("/user/courses")}
          size="small"
          variant="outlined"
        >
          My Courses
        </Button>
        <Button
          onClick={() => handleItemClick("/user/favorites")}
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
          onClick={() => handleItemClick("/user/dashboard")}
          isActive={activeRoute === "/user/dashboard"}
          title="Dashboard"
          notificationQuantity={2}
        ></MenuItem>
        <MenuItem
          onClick={() => handleItemClick("/user/account-settings")}
          isActive={activeRoute === "/user/account-settings"}
          title="Account & Activity"
        ></MenuItem>
        <MenuItem
          onClick={() => handleItemClick("/user/notifications")}
          isActive={activeRoute === "/user/notifications"}
          title="Notifications"
        ></MenuItem>
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
        p: 0,
        borderBottom: "1px solid rgba(191,190,187, 0.5)",
        justifyContent: "space-between",
        "& .MuiLink-root": {
          display: "block",
          width: "100%",
          textAlign: "left",
          color: props.isActive ? "#333" : "#026670",
          py: pxToRem(20),
          "& .MuiTypography-root::before": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: pxToRem(-8),
            height: "2px",
            width: 0,
            bgcolor: props.footerLink ? "#fff" : "primary.main",
            transition: "0.2s ease",
          },
          "&:hover": {
            color: "#333",
            "& .MuiTypography-root::before": {
              width: "100%",
            },
          },
        },
        "& .chevron svg": {
          color: props.isActive ? "#333" : "#BFBEBB",
        },
        "& .link-wrapper::before": {
          content: "''",
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Link component="button" onClick={props.onClick}>
        <Badge
          color="secondary"
          badgeContent={props.notificationQuantity}
          sx={{
            "& .MuiBadge-badge": {
              right: "-10px",
            },
          }}
        >
          <Typography component="span" position="relative" fontWeight={700}>
            {props.title}
          </Typography>
        </Badge>
      </Link>
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
