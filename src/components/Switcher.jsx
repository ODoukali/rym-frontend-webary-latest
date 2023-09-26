import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { pxToRem } from "px2rem2px";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: pxToRem(36),
  height: pxToRem(20),
  padding: 0,
  margin: "0 !important",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    marginTop: pxToRem(2),
    transitionDuration: "300ms",
    transform: `translateX(${pxToRem(2)})`,
    "&.Mui-checked": {
      transform: `translateX(${pxToRem(18)})`,
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
      border: `${pxToRem(6)} solid #fff`,
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
    width: pxToRem(16),
    height: pxToRem(16),
    boxShadow: "none",
    color: "#fff",
  },
  "& .MuiSwitch-track": {
    borderRadius: pxToRem(20),
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
        />
      }
      label={label}
    />
  );
};

export default Switcher;
