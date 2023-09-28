import { createTheme } from "@mui/material/styles";
import { pxToRem } from "px2rem2px";

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1117,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    color: "#333",
    sectionTitle: {
      fontSize: pxToRem(45),
      fontWeight: 700,
      lineHeight: pxToRem(48),
      "@media(max-width: 767px)": {
        fontSize: "30px",
        lineHeight: "35px",
      },
    },
    sectionTitleHebrew: {
      fontFamily: "PloniBold",
      fontSize: pxToRem(54),
      lineHeight: pxToRem(48),
      "& .highlighted::after": {
        bottom: pxToRem(8),
      },
    },
    small: {
      fontSize: pxToRem(14),
      fontWeight: 500,
      lineHeight: pxToRem(24),
    },
    medium: {
      fontSize: pxToRem(16),
      fontWeight: 500,
      lineHeight: pxToRem(24),
    },
    large: {
      fontSize: pxToRem(18),
      fontWeight: 500,
      lineHeight: pxToRem(30),
      "@media(max-width: 767px)": {
        fontSize: "16px",
        lineHeight: "26px",
      },
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
          fontSize: "16px",
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
          fontSize: pxToRem(12),
          lineHeight: pxToRem(17),
          fontWeight: 600,
          color: "#fff",
          borderRadius: pxToRem(10),
          backgroundColor: "#026670",
          textAlign: "center",
          padding: `${pxToRem(1)} ${pxToRem(10)}`,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          marginBottom: pxToRem(2),
          "& .MuiAccordionSummary-root, & .MuiAccordionSummary-root.Mui-expanded":
            {
              minHeight: pxToRem(100),
              padding: `0 ${pxToRem(40)}`,
            },
          "&:first-of-type": {
            borderTopLeftRadius: pxToRem(20),
            borderTopRightRadius: pxToRem(20),
          },
          "&:last-of-type": {
            borderBottomLeftRadius: pxToRem(20),
            borderBottomRightRadius: pxToRem(20),
          },
          "&.Mui-expanded": {
            margin: `0 0 ${pxToRem(16)} 0`,
            boxShadow: `0px ${pxToRem(20)} ${pxToRem(40)} rgba(0,0,0,0.1)`,
            "&::after": {
              content: "''",
              opacity: 1,
              width: "100%",
              position: "absolute",
              height: pxToRem(16),
              top: "initial",
              bottom: pxToRem(-16),
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
            padding: `0 ${pxToRem(40)} ${pxToRem(38)}`,
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
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "30px",
          paddingRight: "30px",
          "@media(max-width: 767px)": {
            paddingLeft: "25px",
            paddingRight: "25px",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#026670",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          "& .MuiFormControlLabel-label": {
            fontSize: pxToRem(12),
            fontWeight: 600,
            color: "#026670",
            marginLeft: pxToRem(8),
          },
          "& .MuiCheckbox-root": {
            padding: 0,
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          zIndex: 1299,
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(51, 51, 51, 0.5)",
            backdropFilter: "blur(30px)",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(51, 51, 51, 0.5)",
            backdropFilter: "blur(30px)",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          zIndex: 1501,
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
          fontSize: pxToRem(16),
          fontWeight: 600,
          textTransform: "none",
          padding: `${pxToRem(23)} ${pxToRem(59)}`,
          lineHeight: pxToRem(18),
          border: "none",
          color: "#026670",
          borderRadius: pxToRem(32),
          whiteSpace: "nowrap",
          letterSpacing: pxToRem(-0.44),
          boxShadow: "none",
          "&:hover": {
            border: "none",
          },
          "& .MuiButton-endIcon": {
            marginRight: 0,
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
            "&.MuiButton-sizeSmall": {
              fontSize: pxToRem(14),
              height: pxToRem(44),
              padding: `${pxToRem(14)} ${pxToRem(40)}`,
              boxShadow: "none",
            },
            "@media(max-width: 767px)": {
              height: "54px",
              paddingLeft: "40px",
              paddingRight: "40px",
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
            "@media(max-width: 767px)": {
              height: "54px",
              paddingLeft: "40px",
              paddingRight: "40px",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            color: "#026670",
            backgroundColor: "transparent",
            border: `${pxToRem(3)} solid #026670`,
            padding: `${pxToRem(20)} ${pxToRem(59)}`,
            "&:hover": {
              color: "#FCE181",
              border: `${pxToRem(3)} solid #026670`,
              backgroundColor: "#026670",
            },
            "&.MuiButton-sizeSmall": {
              fontSize: pxToRem(14),
              height: pxToRem(44),
              padding: `${pxToRem(14)} ${pxToRem(40)}`,
              borderWidth: pxToRem(2),
              boxShadow: "none",
            },
            "@media(max-width: 767px)": {
              height: "54px",
              paddingLeft: "40px",
              paddingRight: "40px",
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
              fontSize: pxToRem(16),
              fontWeight: 600,
            },
            "&:hover": {
              color: "#333",
              backgroundColor: "transparent",
              "& span.MuiTypography-root::after": {
                content: "''",
                position: "absolute",
                left: 0,
                bottom: pxToRem(-8),
                height: pxToRem(2),
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
