import { IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ReactComponent as Like } from "../images/like.svg";

const IconButtonStyled = styled(IconButton)(() => {
  return {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
      "& svg": {
        color: "#026670",
      },
    },
  };
});

const Likes = (props) => {
  return (
    <Stack flexDirection="row" alignItems="flex-end" columnGap="10px">
      <Typography fontSize="14px" fontWeight={600} color="#BFBEBB">
        {props.number}
      </Typography>
      <Stack flexDirection="row" alignItems="center" columnGap="7px">
        <IconButtonStyled sx={{ marginBottom: "4px" }}>
          <Like color="#BFBEBB" />
        </IconButtonStyled>
      </Stack>
    </Stack>
  );
};

export default Likes;
