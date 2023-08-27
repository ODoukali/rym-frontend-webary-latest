import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import { ReactComponent as Chevron } from "../images/chevron.svg";

const TextLink = (props) => {
  return (
    <Button
      {...props}
      variant="text"
      to={props.to}
      component={NavLink}
      endIcon={<Chevron />}
    >
      <Typography component="span">{props.children}</Typography>
    </Button>
  );
};

export default TextLink;
