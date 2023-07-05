import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    color: "#000",
    sidebarLabel: {
      display: "block",
      fontSize: 11,
      letterSpacing: "0.8px",
      fontWeight: "bold",
      padding: "0 16px",
    },
    pageTitle: {
      fontSize: 23,
      fontWeight: 600,
    },
    label: {
      fontSize: 16,
      fontWeight: 500,
      color: "#000",
    },
    inputLabel: {
      color: "#313131",
      marginBottom: 5,
    },
    link: {
      fontSize: 13,
      color: "#000 !important",
    },
  },
  palette: {
    primary: {
      main: "#6576FF",
    },
    secondary: {
      main: "#000",
    },
    black: {
      main: "#000",
    },
    white: {
      main: "#fff",
    },
    success: {
      main: "#3FC6A5",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 400,
          backgroundColor: "#F6F6F7",
        },
        a: {
          textDecoration: "none",
          textDecorationColor: "inherit !important",
        },
        img: {
          maxWidth: "100%",
        },
        ".MuiPickersPopper-root": {
          zIndex: "1500 !important",
        },
        ".MuiDialog-root": {
          zIndex: "1500 !important",
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
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#000",
          fontWeight: 500,
          marginBottom: 6,
          "&.Mui-focused": {
            color: "#000",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          backgroundColor: "#E4E5E7",
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
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "#fff",
            border: "1px solid #DBDFEA",
            "&:hover": {
              color: "#fff",
              border: "1px solid #526484",
              backgroundColor: "#526484;",
            },
          },
        },
        {
          props: { variant: "outlinedBlue" },
          style: {
            backgroundColor: "#fff",
            border: "1px solid #E2E2E2",
            fontSize: "14px",
            fontWeight: 500,
            color: "#535151",
            padding: "10px 13px",
            "&.MuiButton-sizeSmall": {
              padding: "5px 9px",
            },
            "&:hover": {
              color: "#fff",
              border: "1px solid #E2E2E2",
              backgroundColor: "#3F75C6",
              "& svg": {
                fill: "#fff",
              },
            },
          },
        },
        {
          props: { variant: "gray" },
          style: {
            backgroundColor: "#F6F6F7",
            border: "1px solid #DBDFEA",
            fontWeight: 600,
            "&:hover": {
              color: "#fff",
              border: "1px solid #526484",
              backgroundColor: "#526484;",
            },
            "&.MuiButton-sizeSmall": {
              fontSize: "12px",
              fontWeight: 400,
              color: "#535151",
              border: "none",
              padding: "5px 9px",
              "&:hover": {
                color: "#fff",
                "& svg": {
                  fill: "#fff",
                },
              },
            },
          },
        },
      ],
    },
  },
});

export default theme;
