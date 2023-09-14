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
    sectionTitleHebrew: {
      fontFamily: "FbJoker",
      fontSize: 54,
      fontWeight: 900,
      lineHeight: "48px",
      "& .highlighted::after": {
        bottom: "-3px",
      },
    },
    small: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "24px",
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
        ".MuiTooltip-popper .MuiTooltip-tooltip": {
          fontSize: "12px",
          lineHeight: "17px",
          fontWeight: 600,
          color: "#fff",
          borderRadius: "10px",
          backgroundColor: "#026670",
          textAlign: "center",
          padding: "4px 10px",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          marginBottom: "2px",
          "& .MuiAccordionSummary-root": {
            minHeight: "100px",
            padding: "0 40px",
          },
          "& .MuiAccordionSummary-root.Mui-expanded": {
            minHeight: "100px",
            padding: "0 40px",
          },
          "&:first-of-type": {
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          },
          "&:last-of-type": {
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          },
          "&.Mui-expanded": {
            margin: "0 0 16px 0",
            boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
            "&::after": {
              content: "''",
              opacity: 1,
              width: "100%",
              position: "absolute",
              height: "16px",
              top: "initial",
              bottom: "-16px",
              backgroundColor: "#FCE181",
            },
            "&:last-of-type::after": {
              content: "none",
            },
          },
          "&::before": {
            content: "none",
          },
          "& .MuiAccordionSummary-content.Mui-expanded .MuiTypography-root": {
            color: "#333",
          },
          "& .MuiAccordionDetails-root": {
            padding: "0 40px 38px",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "& .MuiAccordionSummary-expandIconWrapper": {
            transform: "rotate(90deg)",
          },
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(-90deg)",
            "& svg": {
              color: "#333",
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
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
            backdropFilter: "blur(10px)",
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
          props: { variant: "outlined" },
          style: {
            color: "#026670",
            backgroundColor: "transparent",
            border: "3px solid #026670",
            padding: "20px 59px",
            "&:hover": {
              color: "#FCE181",
              border: "3px solid #026670",
              backgroundColor: "#026670",
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            padding: 0,
            backgroundColor: "transparent",
            boxShadow: "none",
            minWidth: "auto",
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
