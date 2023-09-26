import { Rating as MuiRating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { pxToRem } from "px2rem2px";

import { ReactComponent as Star } from "../images/star.svg";

const StyledRating = styled(MuiRating)({
  gap: pxToRem(2),
  "& .MuiRating-iconFilled": {
    color: "#FCE181",
  },
  "& .MuiRating-iconHover": {
    color: "#BFBEBB",
  },
});

const Rating = (props) => {
  return (
    <StyledRating
      {...props}
      icon={<Star />}
      emptyIcon={<Star color="rgba(191,190,187, 0.5)" />}
    />
  );
};

export default Rating;
