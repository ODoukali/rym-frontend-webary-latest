import { useState } from "react";
import {
  Box,
  Collapse,
  ListItemButton,
  Stack,
  Typography,
} from "@mui/material";
import { pxToRem } from "px2rem2px";
import DeleteBtn from "./DeleteBtn";

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
          p: `${pxToRem(10)} 0`,
          "&:hover": {
            backgroundColor: "transparent",
            "& .deleteBtn": {
              display: "flex",
            },
          },
        }}
      >
        <Stack
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          gap="10px"
          flex={1}
        >
          <Typography
            component="span"
            display="block"
            fontSize={pxToRem(16)}
            fontWeight={600}
            color="secondary"
          >
            Lecture name comes here 1
          </Typography>
          <Stack
            flexDirection="row"
            alignItems="center"
            gap="5px"
            sx={{ "& svg": { mb: "1px" } }}
          >
            <DeleteBtn />
            <Typography
              component="span"
              fontSize={pxToRem(16)}
              fontWeight={600}
              color="primary"
              mr={pxToRem(20)}
            >
              3:45
            </Typography>
          </Stack>
        </Stack>
        <Box
          sx={{
            "& svg": {
              transform: open ? "rotate(-90deg)" : "rotate(90deg)",
              mr: pxToRem(2),
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
