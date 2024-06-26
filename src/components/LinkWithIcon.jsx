import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import IconBtnCircular from "./IconBtnCircular";

import { ReactComponent as Chevron } from "../images/chevron.svg";

const LinkWithIcon = (props) => {
  return (
    <Button
      {...props}
      to={props.to}
      component={NavLink}
      sx={{
        "&:hover": {
          "& button": {
            backgroundColor: "#FCE181",
          },
          "span.MuiTypography-root::after": {
            content: "none",
          },
        },
        "& .MuiButton-endIcon": {
          marginInlineEnd: "0px",
          marginInlineStart: pxToRem(15),
          svg: {
            marginRight: pxToRem(3),
            transform: "rotate(180deg)",
          },
        },
      }}
      endIcon={
        <IconBtnCircular>
          <Chevron color="#026670" />
        </IconBtnCircular>
      }
    >
      <Typography component="span">{props.children}</Typography>
    </Button>
  );
};

export default LinkWithIcon;
