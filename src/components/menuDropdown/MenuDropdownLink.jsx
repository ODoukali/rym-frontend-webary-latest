import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import { pxToRem } from "px2rem2px";

const MenuDropdownLink = (props) => {
  return (
    <MuiLink
      {...props}
      to={props.to}
      underline="none"
      component={Link}
      sx={{
        fontSize: pxToRem(15),
        fontWeight: 600,
        color: "#333",
        "&:hover": { color: "secondary.main" },
      }}
    >
      {props.children}
    </MuiLink>
  );
};

export default MenuDropdownLink;
