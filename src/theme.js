import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1228,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Poppins",
    color: "#333",
    sectionTitle: {
      fontSize: 45,
      fontWeight: 700,
      lineHeight: "48px",
    },
    medium: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "24px",
    },
    large: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: "30px",
    },
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
          letterSpacing: "-0.44px",
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
          color: "#026670",
          borderRadius: "32px",
          whiteSpace: "nowrap",
          letterSpacing: "-0.44px",
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
        {
          props: { variant: "yellow" },
          style: {
            backgroundColor: "#FCE181",
            "&:hover": {
              backgroundColor: "#ebcf6a",
            },
          },
        },
        {
          props: { variant: "green" },
          style: {
            color: "#FCE181",
            backgroundColor: "#026670",
            "&:hover": {
              backgroundColor: "#00545d",
            },
          },
        },
        {
          props: { variant: "link" },
          style: {
            padding: 0,
            backgroundColor: "transparent",
            boxShadow: "none",
            "& span": {
              position: "relative",
              fontSize: 16,
              fontWeight: 600,
            },
            "&:hover": {
              color: "#333",
              backgroundColor: "transparent",
              "& span.MuiTypography-root::after": {
                content: "''",
                position: "absolute",
                left: 0,
                bottom: -8,
                height: 2,
                width: "100%",
                backgroundColor: "#333",
              },
            },
          },
        },
      ],
    },
  },
});

export default theme;
