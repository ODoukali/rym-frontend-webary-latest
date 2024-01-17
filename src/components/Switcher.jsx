import { FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: "36px",
  height: "20px",
  padding: 0,
  margin: "0 !important",
  "& .MuiSwitch-switchBase": {
    padding: 0,
    marginTop: "2px",
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
    width: "16px",
    height: "16px",
    boxShadow: "none",
    color: "#fff",
  },
  "& .MuiSwitch-track": {
    borderRadius: "20px",
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
