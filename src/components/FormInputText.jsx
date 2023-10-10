import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Controller } from "react-hook-form";
import { pxToRem } from "px2rem2px";

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
}) => {
  const handleInputChange = (name, value) => {
    setValue(name, value.trim());
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { ref, onChange, value }, fieldState }) => {
        return (
          <FormGroup>
            {value}
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
                  inputRef={ref}
                  placeholder={placeholder}
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
