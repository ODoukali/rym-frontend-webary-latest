import { Button, Typography } from "@mui/material";

import { ReactComponent as Chevron } from "../images/chevron.svg";

const TextLink = (props) => {
  return (
    <Button {...props} variant="text" endIcon={<Chevron />}>
      <Typography component="span">{props.children}</Typography>
    </Button>
  );
};

export default TextLink;
