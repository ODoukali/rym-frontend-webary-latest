import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  margin: "0 !important",
  "& + .MuiTypography-root": {
    fontSize: 12,
    fontWeight: 600,
    color: "#026670",
    marginLeft: "8px",
  },
  "& .MuiSwitch-switchBase": {
    padding: 0,
    marginTop: 2,
    transitionDuration: "300ms",
    transform: "translateX(2px)",
    "&.Mui-checked": {
      transform: "translateX(18px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#026670",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
    boxShadow: "none",
    color: "#fff",
  },
  "& .MuiSwitch-track": {
    borderRadius: 20,
    backgroundColor: "#ccc",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 300,
    }),
  },
}));

const Switcher = ({ label, checked, defaultChecked, onChange, name }) => {
  return (
    <FormControlLabel
      sx={{ margin: 0 }}
      control={
        <IOSSwitch
          name={name}
          checked={checked}
          onChange={onChange}
          defaultChecked={defaultChecked}
          sx={{ m: 1 }}
        />
      }
      label={label}
    />
  );
};

export default Switcher;
