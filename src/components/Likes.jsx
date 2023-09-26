import { IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { pxToRem } from "px2rem2px";

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
    <Stack flexDirection="row" alignItems="flex-end" columnGap={pxToRem(10)}>
      <Typography fontSize={pxToRem(14)} fontWeight={600} color="#BFBEBB">
        {props.number}
      </Typography>
      <Stack flexDirection="row" alignItems="center" columnGap={pxToRem(7)}>
        <IconButtonStyled sx={{ marginBottom: pxToRem(4) }}>
          <Like color="#BFBEBB" />
        </IconButtonStyled>
      </Stack>
    </Stack>
  );
};

export default Likes;
