import { useState } from "react";
import { Box, Divider, Drawer, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import IconBtnCircular from "./IconBtnCircular";
import LinkBtn from "./LinkBtn";
import NestedMenu from "./NestedMenu";
import MenuDropdownLink from "./menuDropdown/MenuDropdownLink";

import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as User } from "../images/user.svg";
import { ReactComponent as Search } from "../images/search.svg";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Close } from "../images/close.svg";

const Hr = styled(Divider)({
  width: "100%",
  borderColor: "rgba(191,190,187,0.5)",
});

const Header = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const MenuInner = () => (
    <Box sx={{ height: "100%", overflowY: "auto" }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        bgcolor="#EDECE8"
        p="70px 110px"
      >
        <Logo color="#333" />
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
      </Stack>
    </Box>
  );

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      maxWidth="1380px"
      padding="0 30px"
      margin="auto"
    >
      <Stack flexDirection="row" alignItems="center" columnGap="15px">
        <IconBtnCircular onClick={toggleDrawer(true)}>
          <Menu />
        </IconBtnCircular>
        <IconBtnCircular>
          <User />
        </IconBtnCircular>
        <IconBtnCircular>
          <Search />
        </IconBtnCircular>
      </Stack>
      <Link to="/">
        <Logo color="#333" />
      </Link>
      <Drawer
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiPaper-root": {
            maxWidth: "470px",
            width: "100%",
            bgcolor: "#F7F6F2",
            borderRadius: "0 40px 40px 0",
            overflowY: "initial",
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(191,190,187,0.4)",
            backdropFilter: "blur(30px)",
          },
        }}
      >
        <MenuInner />
      </Drawer>
    </Stack>
  );
};

export default Header;
