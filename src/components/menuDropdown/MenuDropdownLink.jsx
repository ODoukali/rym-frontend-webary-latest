import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const MenuDropdownLink = (props) => {
  return (
    <MuiLink
      to={props.to}
      underline="none"
      component={Link}
      sx={{
        fontSize: "15px",
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
