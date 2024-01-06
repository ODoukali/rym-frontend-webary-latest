import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Controller } from "react-hook-form";
import { pxToRem } from "px2rem2px";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
  },
});

const FormInputText = ({
  name,
  control,
  rules,
  muiProps,
  label,
  placeholder,
  setValue,
  preventPaste,
  passwordEye,
}) => {
  const handleInputChange = (name, value) => {
    setValue(name, value.trim());
  };

  const handlePaste = (e) => {
    if (preventPaste) {
      e.preventDefault();
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { ref, onChange, value }, fieldState }) => {
        return (
          <FormGroup>
            <FormControlLabel
              label={label}
              labelPlacement="top"
              sx={{
                alignItems: "flex-start",
                margin: 0,
                "& p": { color: "#605F6D" },
              }}
              control={
                <TextFieldStyled
                  error={!!fieldState.error}
                  {...muiProps}
                  helperText={fieldState.error && fieldState.error.message}
                  margin="none"
                  fullWidth
                  variant="outlined"
                  value={value || ""}
                  onChange={onChange}
                  onBlur={(e) => {
                    //https://github.com/facebook/react/issues/14897
                    if (e.target.type === "email") {
                      e.target.value = value.trim();
                    }

                    handleInputChange(name, value);
                  }}
                  onPaste={handlePaste}
                  inputRef={ref}
                  placeholder={placeholder}
                  type={
                    passwordEye
                      ? showPassword && !muiProps.disabled
                        ? "text"
                        : "password"
                      : muiProps.type
                  }
                  InputProps={{
                    endAdornment:
                      passwordEye && !muiProps.disabled ? (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ) : undefined,
                  }}
                />
              }
            />
          </FormGroup>
        );
      }}
    />
  );
};

export default FormInputText;
