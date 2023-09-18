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
import IconBtnCircular from "./IconBtnCircular";
import LinkBtn from "./LinkBtn";
import NestedMenu from "./NestedMenu";
import MenuDropdownLink from "./menuDropdown/MenuDropdownLink";
import MenuDropdown from "./menuDropdown/MenuDropdown";
import LoginModal from "./LoginModal";

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
  const header = useRef(null);

  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

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

      if (window.scrollY > sticky + 28) {
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
        p="70px 110px"
      >
        <Button
          onClick={() => showModal(LoginModal)}
          variant="yellow"
          sx={{
            height: "40px",
            fontSize: "14px",
            p: "20px 47px",
            boxShadow: "none",
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
        gap="20px"
        p="40px 110px 30px"
        sx={{
          "& > a, & > .MuiBox-root > a": { fontSize: "30px", fontWeight: 700 },
        }}
      >
        <LinkBtn to="/" title="Main" />
        <Hr />
        <NestedMenu title="Philosophy">
          <MenuDropdownLink to="/course">Submenu link 01</MenuDropdownLink>
          <MenuDropdownLink to="/pre-subscribe">
            Another link 02
          </MenuDropdownLink>
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
          py="60px"
          gap="25px"
          borderTop="1px solid rgba(191,190,187,0.5)"
          borderBottom="1px solid rgba(191,190,187,0.5)"
          sx={{ "& a": { fontSize: "16px" } }}
        >
          <MenuDropdownLink to="/">Account</MenuDropdownLink>
          <MenuDropdownLink to="/">Subscriptions</MenuDropdownLink>
          <MenuDropdownLink to="/">Settings</MenuDropdownLink>
          <MenuDropdownLink to="/">Help</MenuDropdownLink>
        </Stack>
        <Button
          variant="outlined"
          sx={{
            height: "40px",
            fontSize: "14px",
            p: "18px 40px",
            borderWidth: "2px",
            mt: "35px",
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
    <Box
      ref={header}
      className={isSticky ? "sticky" : ""}
      width="100%"
      zIndex={100}
    >
      <Stack
        maxWidth="1380px"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="10px 30px"
        m="auto"
      >
        <Stack flexDirection="row" alignItems="center" columnGap="15px">
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
              columnGap="56px"
              ml="25px"
            >
              <LinkBtn to="/" title="Main" />
              <MenuDropdown title="Philosophy">
                <MenuDropdownLink to="/course">
                  Submenu link 01
                </MenuDropdownLink>
                <MenuDropdownLink to="/">Another link 02</MenuDropdownLink>
                <MenuDropdownLink to="/">Submenu link 03</MenuDropdownLink>
                <MenuDropdownLink to="/">Another link 04</MenuDropdownLink>
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
          sx={{
            zIndex: 1500,
            "& .MuiPaper-root": {
              maxWidth: "470px",
              width: "100%",
              bgcolor: "#F7F6F2",
              borderRadius: "0 40px 40px 0",
              overflowY: "initial",
              overflow: "hidden",
            },
          }}
        >
          <MenuInner />
        </Drawer>
      </Stack>
    </Box>
  );
};

export default Header;
