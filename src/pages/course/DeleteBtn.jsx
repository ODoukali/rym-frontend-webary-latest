import { useState } from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";

import { ReactComponent as Delete } from "../../images/delete.svg";
import { ReactComponent as Close } from "../../images/close-circle.svg";

const DeleteBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box className="deleteBtn" position="relative" display="none">
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setOpen(true);
        }}
        sx={{
          p: 0,
          "&:hover": {
            backgroundColor: "#fff",
            "& svg": { color: "rgb(211, 47, 47)" },
          },
        }}
      >
        <Delete width={18} height={18} color="#333" />
      </IconButton>
      <Stack
        className="deleteBtnGroup"
        display={open ? "flex" : "none"}
        flexDirection="row"
        alignItems="center"
        position="absolute"
        left="42%"
        top="50%"
        zIndex={1}
        sx={{ transform: "translate(-50%,-50%)" }}
      >
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setOpen(false);
          }}
          sx={{
            padding: "4px",
            backgroundColor: "#fff",
            "&:hover": {
              backgroundColor: "#fff",
              "& svg": { color: "#333" },
            },
          }}
        >
          <Close width={18} height={18} />
        </IconButton>
        <Button
          size="small"
          variant="contained"
          disableElevation
          onClick={(e) => {
            e.preventDefault();
          }}
          sx={{
            backgroundColor: "rgb(211, 47, 47)",
            color: "#fff",
            fontSize: "12px",
            padding: "5px 10px",
            "&:hover": {
              backgroundColor: "rgb(162, 11, 11)",
            },
          }}
        >
          Delete?
        </Button>
      </Stack>
    </Box>
  );
};

export default DeleteBtn;
