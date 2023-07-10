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
          fontSize: 16,
          fontWeight: 600,
          textTransform: "none",
          padding: "23px 59px",
          lineHeight: "18px",
          border: "none",
          borderRadius: "32px",
          whiteSpace: "nowrap",
          boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
          "&:hover": {
            border: "none",
          },
        },
      },
      variants: [
        {
          props: { variant: "white" },
          style: {
            backgroundColor: "rgba(255,255,255,0.5)",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,1)",
            },
          },
        },
      ],
    },
  },
});

export default theme;
