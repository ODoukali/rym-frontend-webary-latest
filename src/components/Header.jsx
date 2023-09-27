import { useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
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

import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as Search } from "../images/search.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Close } from "../images/close.svg";

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

  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

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

  useEffect(() => {
    const handleScroll = () => {
      const sticky = header.current.offsetTop;

      if (window.scrollY > sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
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
        p={`${pxToRem(70)} ${pxToRem(110)}`}
        sx={{ "& button": { boxShadow: "none" } }}
      >
        <Button
          onClick={() => showModal(LoginModal)}
          variant="yellow"
          sx={{
            height: pxToRem(40),
            fontSize: pxToRem(14),
            p: `${pxToRem(20)} ${pxToRem(47)}`,
          }}
        >
          Sign In
        </Button>
        <IconBtnCircular onClick={toggleDrawer(false)}>
          <Close color="#026670" />
        </IconBtnCircular>
      </Stack>
      <Stack
        alignItems="flex-start"
        gap={pxToRem(20)}
        p={`${pxToRem(40)} ${pxToRem(110)} ${pxToRem(30)}`}
        sx={{
          "& > a, & > .MuiBox-root > a": {
            fontSize: pxToRem(30),
            fontWeight: 700,
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
          py={pxToRem(60)}
          gap={pxToRem(25)}
          borderTop="1px solid rgba(191,190,187,0.5)"
          borderBottom="1px solid rgba(191,190,187,0.5)"
          sx={{ "& a": { fontSize: pxToRem(16) } }}
        >
          <MenuDropdownLink to="/">Account</MenuDropdownLink>
          <MenuDropdownLink to="/">Subscriptions</MenuDropdownLink>
          <MenuDropdownLink to="/">Settings</MenuDropdownLink>
          <MenuDropdownLink to="/">Help</MenuDropdownLink>
        </Stack>
        <Button
          variant="outlined"
          sx={{
            height: pxToRem(40),
            fontSize: pxToRem(14),
            p: `${pxToRem(18)} ${pxToRem(40)}`,
            borderWidth: pxToRem(2),
            mt: pxToRem(35),
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
          padding={`${pxToRem(10)} ${pxToRem(30)}`}
          m="auto"
        >
          <Stack
            flexDirection="row"
            alignItems="center"
            columnGap={pxToRem(15)}
          >
            {!props.menuVisible || tablet ? (
              <IconBtnCircular onClick={toggleDrawer(true)}>
                <Menu />
              </IconBtnCircular>
            ) : null}
            <IconBtnCircular>
              <Search />
            </IconBtnCircular>
            {props.menuVisible && !tablet ? (
              <Stack
                flexDirection="row"
                alignItems="center"
                columnGap={pxToRem(56)}
                ml={pxToRem(25)}
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
          <Link to="/" style={{ display: "flex" }}>
            <Logo color="#333" />
          </Link>
          <Drawer
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer(false)}
            disableScrollLock
            sx={{
              zIndex: 1500,
              "& .MuiPaper-root": {
                maxWidth: pxToRem(470),
                width: "100%",
                bgcolor: "#F7F6F2",
                borderRadius: `0 ${pxToRem(40)} ${pxToRem(40)} 0`,
                overflowY: "initial",
                overflow: "hidden",
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
