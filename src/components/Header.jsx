import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import IconBtnCircular from "./IconBtnCircular";

import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as User } from "../images/user.svg";
import { ReactComponent as Search } from "../images/search.svg";
import { ReactComponent as Logo } from "../images/logo.svg";

const Header = () => {
  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      maxWidth="1380px"
      padding="0 30px"
      margin="auto"
    >
      <Stack flexDirection="row" alignItems="center" columnGap="15px" ml="60px">
        <IconBtnCircular>
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
    </Stack>
  );
};

export default Header;
