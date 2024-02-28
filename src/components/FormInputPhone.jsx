import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Controller } from "react-hook-form";
import { pxToRem } from "px2rem2px";
import ReactPhoneInput from "react-phone-input-material-ui";

const TextFieldStyled = styled(TextField)({
  width: "100%",
  "& .MuiInputBase-root": {
    borderRadius: pxToRem(30),
    backgroundColor: "#EDECE8",
    height: pxToRem(54),
  },
  "& input": {
    borderRadius: `${pxToRem(30)} !important`,
    padding: `${pxToRem(15)} ${pxToRem(40)}`,
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
});

const FormInputPhone = ({ name, control, rules, placeholder, muiProps }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState }) => {
        return (
          <ReactPhoneInput
            inputProps={{
              ...muiProps,
              label: "",
              placeholder: placeholder,
              error: !!fieldState.error,
              helperText: fieldState.error && fieldState.error.message,
              margin: "none",
              fullWidth: true,
              variant: "outlined",
            }}
            value={value}
            onChange={onChange}
            component={TextFieldStyled}
            disableDropdown
          />
        );
      }}
    />
  );
};

export default FormInputPhone;
