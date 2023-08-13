import { useState } from "react";
import { Box, Collapse } from "@mui/material";
import LinkBtn from "./LinkBtn";

const NestedMenu = (props) => {
  let currentlyHovering = false;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
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
            bottom: "-13px",
            left: 0,
            width: "100%",
            height: "23px",
          },
        },
      }}
    >
      <LinkBtn
        title={props.title}
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
            rowGap: "10px",
            pl: "20px",
            mt: "15px",
            a: {
              fontSize: "15px",
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
