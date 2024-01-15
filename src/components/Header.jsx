import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  useTheme,
  useMediaQuery,
  Avatar,
  Typography,
} from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useModal } from "mui-modal-provider";
import { pxToRem } from "px2rem2px";
import IconBtnCircular from "./IconBtnCircular";
import LinkBtn from "./LinkBtn";
import NestedMenu from "./NestedMenu";
import MenuDropdownLink from "./menuDropdown/MenuDropdownLink";
import MenuDropdown from "./menuDropdown/MenuDropdown";
import LoginModal from "./LoginModal";
import Toast from "./Toast";
import ToastCookie from "./ToastCookie";
import ProfileMenu from "./ProfileMenu";
import { useAuth } from "../utils/AuthContext";

import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as Search } from "../images/search.svg";
import { ReactComponent as Alarm } from "../images/alarm.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Close } from "../images/close.svg";
import AvatarImg from "../images/avatar.png";

const Hr = styled(Divider)({
  width: "100%",
  borderColor: "rgba(191,190,187,0.5)",
});

const Header = (props) => {
  const { showModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [toast1, setToast1] = useState(false);
  const [toast2, setToast2] = useState(false);
  const [toast3, setToast3] = useState(false);
  const header = useRef(null);
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth();

  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down("md"));
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToast1(false);
    setToast2(false);
    setToast3(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const openPopup = () => {
    toggleDrawer(false)({ type: "click" });
    showModal(LoginModal);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sticky = header.current.offsetTop;

      if (window.scrollY > sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MenuInner = () => (
    <Box sx={{ height: "100%", overflowY: "auto" }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="#EDECE8"
        p={`${pxToRem(40)} ${pxToRem(80)}`}
        sx={{
          "& button": { boxShadow: "none" },
          "@media(max-width: 400px)": {
            paddingX: "30px",
          },
        }}
      >
        {isAuthenticated ? (
          <Box>
            <Avatar sx={{ width: pxToRem(48), height: pxToRem(48) }}>
              <img src={AvatarImg} alt="" />
            </Avatar>{" "}
            <Typography fontSize="15px" fontWeight={700} mt="10px">
              Hi, Alex Fried
            </Typography>
          </Box>
        ) : (
          <Button
            onClick={openPopup}
            variant="yellow"
            sx={{
              height: `${pxToRem(40)} !important`,
              fontSize: pxToRem(14),
              p: `${pxToRem(20)} ${pxToRem(47)} !important`,
            }}
          >
            Sign In
          </Button>
        )}
        <IconBtnCircular onClick={toggleDrawer(false)}>
          <Close color="#026670" />
        </IconBtnCircular>
      </Stack>
      <Stack
        alignItems="flex-start"
        gap={pxToRem(15)}
        p={`${pxToRem(30)} ${pxToRem(80)} ${pxToRem(30)}`}
        sx={{
          "& > a, & > .MuiBox-root > a": {
            fontSize: pxToRem(25),
            fontWeight: 700,
          },
          "@media(max-width: 400px)": {
            paddingX: "30px",
          },
        }}
      >
        <LinkBtn to="/" title="Main" />
        <Hr />
        <NestedMenu title="Philosophy">
          <MenuDropdownLink to="/course">Course</MenuDropdownLink>
          <MenuDropdownLink to="/pre-subscribe">Presubscribed</MenuDropdownLink>
          <MenuDropdownLink to="/">Submenu link 03</MenuDropdownLink>
          <MenuDropdownLink to="/">Another link 04</MenuDropdownLink>
        </NestedMenu>
        <Hr />
        <LinkBtn to="/blog" title="Blog" />
        <Hr />
        <LinkBtn to="/parsha" title="Parsha" />
        <Hr />
        <LinkBtn to="/qa" title="Q&A" />
        <Hr />
        <LinkBtn to="/contact" title="Contact" />
        <Stack
          width="100%"
          py={pxToRem(30)}
          gap={pxToRem(20)}
          borderTop="1px solid rgba(191,190,187,0.5)"
          borderBottom="1px solid rgba(191,190,187,0.5)"
          sx={{ "& a": { fontSize: pxToRem(16) } }}
        >
          <MenuDropdownLink
            to={tablet && !mobile ? "/user/dashboard" : "/user"}
            state={{ referer: pathname }}
          >
            Account
          </MenuDropdownLink>
          <MenuDropdownLink to="/">Subscriptions</MenuDropdownLink>
          <MenuDropdownLink to="/">Settings</MenuDropdownLink>
          <MenuDropdownLink to="/">Help</MenuDropdownLink>
        </Stack>
        <Button
          variant="outlined"
          sx={{
            height: `${pxToRem(40)} !important`,
            fontSize: pxToRem(14),
            p: `${pxToRem(18)} ${pxToRem(40)} !important`,
            borderWidth: pxToRem(2),
            mt: pxToRem(25),
            "&:hover": {
              border: "2px solid #026670",
            },
          }}
        >
          Sign Out
        </Button>
      </Stack>
    </Box>
  );

  return (
    <>
      <Box
        ref={header}
        className={isSticky ? "sticky" : ""}
        width="100%"
        zIndex={100}
      >
        <Stack
          maxWidth={pxToRem(1380)}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          py="10px"
          px={{ xs: "25px", sm: "30px" }}
          m="auto"
        >
          <Stack
            flex={1}
            flexDirection="row"
            alignItems="center"
            columnGap={{ xs: 0, lg: pxToRem(15) }}
          >
            {!props.menuVisible || tablet ? (
              <Box mr="10px">
                <IconBtnCircular onClick={toggleDrawer(true)}>
                  <Menu />
                </IconBtnCircular>
              </Box>
            ) : null}
            <Link to="/" style={{ display: "flex" }}>
              <Logo color="#333" />
            </Link>
            {props.menuVisible && !tablet ? (
              <Stack
                flex={1}
                flexDirection="row"
                alignItems="center"
                justifyContent={{ xs: "space-between", lg: "flex-start" }}
                columnGap={{ xs: pxToRem(15), lg: pxToRem(56) }}
                mx={pxToRem(40)}
              >
                <LinkBtn to="/" title="Main" />
                <MenuDropdown title="Philosophy">
                  <MenuDropdownLink to="/course">Course</MenuDropdownLink>
                  <MenuDropdownLink to="/pre-subscribe">
                    Presubscribed
                  </MenuDropdownLink>
                  <MenuDropdownLink onClick={() => setToast1(true)}>
                    Toast1
                  </MenuDropdownLink>
                  <MenuDropdownLink onClick={() => setToast2(true)}>
                    Toast2
                  </MenuDropdownLink>
                  <MenuDropdownLink onClick={() => setToast3(true)}>
                    Cookie Policy
                  </MenuDropdownLink>
                </MenuDropdown>
                <LinkBtn to="/blog" title="Blog" />
                <LinkBtn to="/parsha" title="Parsha" />
                <LinkBtn to="/qa" title="Q&A" />
                <LinkBtn to="/contact" title="Contact" />
              </Stack>
            ) : null}
          </Stack>
          <Stack flexDirection="row" alignItems="center" gap="10px">
            <IconBtnCircular>
              <Search />
            </IconBtnCircular>
            <IconBtnCircular to="/user/dashboard" component={NavLink}>
              <Alarm />
            </IconBtnCircular>
            {mobile || props.hideUserProfile ? null : <ProfileMenu />}
          </Stack>
          <Drawer
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer(false)}
            sx={{
              zIndex: 1500,
              "& .MuiPaper-root": {
                maxWidth: pxToRem(420),
                width: "100%",
                bgcolor: "#F7F6F2",
                borderRadius: `0 ${pxToRem(40)} ${pxToRem(40)} 0`,
                overflowY: "initial",
                overflow: "hidden",
                "@media(max-width: 400px)": {
                  borderRadius: 0,
                },
              },
            }}
          >
            <MenuInner />
          </Drawer>
        </Stack>
      </Box>
      <Toast
        open={toast1}
        onClose={handleClose}
        message="Toast notification text here"
        button
      />
      <Toast
        open={toast2}
        onClose={handleClose}
        message="Toast notification text here"
      />
      <ToastCookie
        open={toast3}
        onClose={handleClose}
        message="Nemo enim ipsam voluptatem
        quia voluptas sit aspernatur."
      />
    </>
  );
};

export default Header;
