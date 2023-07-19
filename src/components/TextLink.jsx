import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import { ReactComponent as Arrow } from "../images/arrow.svg";

const TextLink = (props) => {
  return (
    <Button
      variant="text"
      to={props.to}
      component={NavLink}
      endIcon={<Arrow width={16} height={13} />}
    >
      <Typography component="span">{props.children}</Typography>
    </Button>
  );
};

export default TextLink;
