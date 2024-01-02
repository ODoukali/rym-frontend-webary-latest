import { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { pxToRem } from "px2rem2px";

const TextFieldStyled = styled(TextField)({
  width: "100%",
  "& .MuiInputBase-root": {
    borderRadius: pxToRem(30),
    height: pxToRem(54),
    outline: "2px solid #333",
    outlineOffset: "-2px",
    "&.Mui-disabled": {
      backgroundColor: "#EDECE8",
      outline: "none",
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
});

const InputGroup = (props) => {
  const [value, setValue] = useState(props.value);
  const [disabled, setDisabled] = useState(true);

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography width="130px" variant="medium">
        {props.label}
      </Typography>

      <Stack flex={1} flexDirection="row" alignItems="center" gap={pxToRem(20)}>
        <TextFieldStyled
          margin="none"
          type={props.type}
          fullWidth
          disabled={disabled}
          variant="outlined"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <Stack alignItems="flex-start">
          {disabled ? (
            <Button
              onClick={() => setDisabled(false)}
              sx={{ fontSize: "12px" }}
            >
              Edit
            </Button>
          ) : (
            <>
              <Button
                onClick={() => setDisabled(true)}
                sx={{ color: "#BFBEBB", fontSize: "12px" }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => setDisabled(true)}
                sx={{ fontSize: "12px" }}
              >
                Save
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default InputGroup;
