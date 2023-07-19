import { Box, Stack, Typography } from "@mui/material";
import IconBtnCircular from "./IconBtnCircular";
import BlockBordered from "./BlockBordered";

import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as User } from "../images/user.svg";
import { ReactComponent as Search } from "../images/search.svg";

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
      <Stack flexDirection="row" alignItems="center">
        <IconBtnCircular>
          <Menu />
        </IconBtnCircular>
        <Box ml="22px">
          <Typography fontSize="35px" fontWeight={700} lineHeight="48px">
            Lorem ipsum dolor amet consectetur{" "}
          </Typography>
          <BlockBordered>
            <Typography variant="large" color="#666564">
              Sed do eiusmod tempor incididunt ut labore et dolore aliqua
            </Typography>
          </BlockBordered>
        </Box>
      </Stack>
      <Stack flexDirection="row" alignItems="center" columnGap="15px" ml="60px">
        <IconBtnCircular>
          <User />
        </IconBtnCircular>
        <IconBtnCircular>
          <Search />
        </IconBtnCircular>
      </Stack>
    </Stack>
  );
};

export default Header;
