import { Box, Stack, Typography } from "@mui/material";
import IconBtn from "./IconBtn";

import Menu from "../images/menu.svg";
import User from "../images/user.svg";
import Search from "../images/search.svg";
import BlockBordered from "./BlockBordered";

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
        <IconBtn icon={Menu} />
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
        <IconBtn icon={User} />
        <IconBtn icon={Search} />
      </Stack>
    </Stack>
  );
};

export default Header;
