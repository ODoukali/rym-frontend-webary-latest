import { useState } from "react";
import { Box, Collapse } from "@mui/material";
import { pxToRem } from "px2rem2px";
import { Link } from "react-router-dom";
import LinkBtn from "./LinkBtn";

const NestedMenu = (props) => {
  let currentlyHovering = false;
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  function handleHover() {
    currentlyHovering = true;
  }

  function handleCloseHover() {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        setOpen(false);
      }
    }, 50);
  }

  return (
    <Box
      sx={{
        "& .MuiLink-root": {
          "&::after": {
            content: "''",
            position: "absolute",
            bottom: pxToRem(-13),
            left: 0,
            width: "100%",
            height: pxToRem(23),
          },
        },
      }}
    >
      <LinkBtn
        title={props.title}
        component={Link}
        onClick={handleClick}
        onMouseOver={handleClick}
        onMouseLeave={handleCloseHover}
      />
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        onMouseEnter={handleHover}
        onMouseLeave={handleCloseHover}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: pxToRem(10),
            pl: pxToRem(20),
            mt: pxToRem(15),
            a: {
              fontSize: pxToRem(15),
              fontWeight: 600,
            },
          }}
        >
          {props.children}
        </Box>
      </Collapse>
    </Box>
  );
};

export default NestedMenu;
