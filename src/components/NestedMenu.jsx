import { useState } from "react";
import { Box, Collapse } from "@mui/material";
import LinkBtn from "./LinkBtn";

const NestedMenu = (props) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <LinkBtn title={props.title} onClick={handleClick} />
      <Collapse in={open} timeout="auto" unmountOnExit>
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
