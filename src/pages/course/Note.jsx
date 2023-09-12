import { useState } from "react";
import {
  Box,
  Collapse,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";

import { ReactComponent as Chevron } from "../../images/chevron.svg";

const Note = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box borderTop="1px solid rgba(191,190,187,0.5)">
      <ListItemButton
        onClick={handleClick}
        sx={{
          alignItems: "flex-start",
          p: "10px 0",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          flex={1}
        >
          <Typography
            component="span"
            display="block"
            fontSize="16px"
            fontWeight={600}
            color="secondary"
          >
            Lecture name comes here 1
          </Typography>
          <Typography
            component="span"
            fontSize="16px"
            fontWeight={600}
            color="primary"
            mr="20px"
          >
            3:45
          </Typography>
        </Stack>
        <Box
          sx={{
            "& svg": {
              transform: open ? "rotate(-90deg)" : "rotate(90deg)",
              mr: "2px",
              transition: "0.1s ease",
            },
          }}
        >
          <Chevron color={open ? "#333" : "#BFBEBB"} />
        </Box>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {props.children}
      </Collapse>
    </Box>
  );
};

export default Note;
