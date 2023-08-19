import { useState } from "react";
import {
  Box,
  Collapse,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";

import { ReactComponent as Arrow } from "../../images/arrow.svg";

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
          p: "30px 0",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          flex={1}
        >
          <Box>
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
              display="block"
              fontSize="14px"
              fontWeight={500}
              lineHeight="18px"
              color="#BFBEBB"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </Typography>
          </Box>
          <Box
            sx={{
              pt: open ? "1px" : "3px",
              "& svg": {
                transform: open ? "rotate(-90deg)" : "rotate(90deg)",
                transition: "0.1s ease",
              },
            }}
          >
            <Arrow color={open ? "#333" : "#BFBEBB"} />
          </Box>
        </Stack>
        <Typography
          width="64px"
          component="span"
          fontSize="16px"
          fontWeight={600}
          color="primary"
          textAlign="right"
        >
          3:45
        </Typography>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {props.children}
      </Collapse>
    </Box>
  );
};

export default Note;
