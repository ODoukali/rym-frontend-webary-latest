import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";
import FormInputText from "../../components/FormInputText";
import { useForm } from "react-hook-form";
import FormInputPhone from "../../components/FormInputPhone";

const inputStyles = {
  "& .MuiInputBase-root": {
    borderRadius: pxToRem(30),
    height: pxToRem(54),
    outline: "2px solid #333",
    outlineOffset: "-2px",
    backgroundColor: "#fff",
    "&.Mui-disabled": {
      backgroundColor: "#EDECE8",
      outline: "none",
    },
    "&.Mui-error": {
      outlineColor: "#d32f2f",
    },
  },
  "& input": {
    borderRadius: `${pxToRem(30)} !important`,
    padding: `${pxToRem(15)} ${pxToRem(40)}`,
    color: "#333",
    fontWeight: 600,
    "&.Mui-disabled": {
      color: "#BFBEBB",
    },
  },
};

const InputGroup = (props) => {
  const [savedValue, setSavedValue] = useState(props.value);
  const [disabled, setDisabled] = useState(true);

  const { control, handleSubmit, setValue } = useForm({
    values: {
      value: props.value,
    },
  });

  const onSubmit = (data) => {
    setSavedValue(data.value);
    setDisabled(true);
  };

  const resetForm = () => {
    setValue("value", savedValue, { shouldValidate: true });
    setDisabled(true);
  };

  return (
    <Stack
      flexDirection={{ xs: "column", lg: "row" }}
      alignItems={{ xs: "flex-start", lg: "flex-start" }}
      gap={{ xs: "10px", lg: 0 }}
    >
      <Typography
        width={{ xs: "auto", lg: "130px" }}
        mt={{ xs: 0, lg: "13px" }}
        variant="medium"
      >
        {props.label}
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack flex={1} flexDirection="row" gap={pxToRem(20)}>
          {props.phone ? (
            <FormInputPhone
              name="value"
              control={control}
              setValue={setValue}
              rules={props.rules}
              muiProps={{
                disabled: disabled,
                sx: inputStyles,
              }}
            />
          ) : (
            <FormInputText
              name="value"
              control={control}
              setValue={setValue}
              rules={props.rules}
              passwordEye={props.passwordEye}
              muiProps={{
                type: props.type,
                disabled: disabled,
                sx: inputStyles,
              }}
            />
          )}

          <Stack alignItems="flex-start" width="42px">
            {disabled ? (
              <Button
                onClick={() => setDisabled(false)}
                sx={{ fontSize: "12px", mt: "16px" }}
              >
                Edit
              </Button>
            ) : (
              <Stack alignItems="flex-start" mt="10px">
                <Button
                  onClick={resetForm}
                  sx={{ color: "#BFBEBB", fontSize: "12px" }}
                >
                  Cancel
                </Button>
                <Button type="submit" sx={{ fontSize: "12px" }}>
                  Save
                </Button>
              </Stack>
            )}
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default InputGroup;
