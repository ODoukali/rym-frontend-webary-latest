import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1328,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Poppins",
    color: "#333",
  },
  palette: {
    primary: {
      main: "#333",
    },
    secondary: {
      main: "#026670",
    },
    success: {
      main: "#3FC6A5",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          backgroundColor: "#f7f6f2",
          color: "#333",
        },
        a: {
          textDecoration: "none",
          textDecorationColor: "inherit !important",
        },
        img: {
          maxWidth: "100%",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiSelect-select": {
            padding: "11.5px 14px",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#6576FF",
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#313131",
          backgroundColor: "#fff",
          fontSize: 16,
          borderRadius: "5px",
          overflow: "hidden",
          "& input": {
            padding: "11.5px 12px",
            fontSize: "16px",
            "&::placeholder": {
              color: "#A0A0A0",
              opacity: 0.6,
            },
          },
          "&.MuiInputBase-root:hover fieldset": {
            borderColor: "#b7b6be",
          },
          "&.MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
            borderColor: "rgb(73, 0, 133)",
          },
          "&.MuiInputBase-root fieldset": {
            border: "1px solid #DBDFEA",
            transition: "border-color .05s linear",
          },
          "&.MuiInputBase-sizeSmall input": {
            padding: "6px 12px 7px",
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 13,
          fontWeight: 700,
          color: "#303030",
          letterSpacing: "0.26px",
          textTransform: "none",
          padding: "6px 18px",
          lineHeight: 1.65,
          border: "none",
          whiteSpace: "nowrap",
          boxShadow: "none",
          "&:hover": {
            border: "none",
          },
          "& svg": {
            transition: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
          },
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "#fff",
          },
        },
      ],
    },
  },
});

export default theme;
