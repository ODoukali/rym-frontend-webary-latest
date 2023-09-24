import { useState } from "react";
import { Box, Stack, Typography, Tooltip } from "@mui/material";

import { ReactComponent as Check } from "../images/check.svg";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import { ReactComponent as Lock } from "../images/lock.svg";

const Sidebar = (props) => {
  return (
    <Box
      width={300}
      backgroundColor="#EDECE8"
      pt="150px"
      mt="-150px"
      pl="40px"
      pb="40px"
      borderRadius="40px"
      flexShrink={0}
      sx={{
        "&::before": {
          content: "''",
          position: "absolute",
          bottom: 0,
          right: 0,
          left: "calc(54% + 300px)",
          height: "100%",
          backgroundColor: "#EDECE8",
          borderRadius: "40px",
          zIndex: -1,
        },
      }}
    >
      <Typography
        component="p"
        fontSize="20px"
        fontWeight="bold"
        lineHeight="30px"
      >
        Course Overview
      </Typography>
      <Typography
        component="p"
        fontSize="12px"
        fontWeight="700"
        lineHeight="18px"
        color="#026670"
        mb="30px"
      >
        2/25 Completed
      </Typography>
      <Stack rowGap="30px">
        {props.arr.map((l) => (
          <ListItem
            key={l.id}
            title={l.title}
            description={l.description}
            duration={l.duration}
            status={l.status}
            isTooltip={l.isTooltip}
          />
        ))}
      </Stack>
    </Box>
  );
};

const ListItem = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    props.isTooltip && setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Tooltip
      title="Complete previous lectures to unlock"
      placement="top"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      enterDelay={0}
      enterTouchDelay={0}
      leaveTouchDelay={0}
      PopperProps={{ disablePortal: true }}
    >
      <Stack
        className={`${
          props.status === "playing"
            ? "active"
            : props.status === "completed"
            ? "completed"
            : props.isTooltip
            ? "withTooltip"
            : ""
        }`}
        component="button"
        flexDirection="row"
        columnGap="10px"
        p="0 0 30px 0"
        sx={{
          position: "relative",
          border: "none",
          backgroundColor: "transparent",
          borderBottom: "1px solid rgba(191, 190, 187, 0.5)",
          "& + .MuiTooltip-popper .MuiTooltip-tooltip": {
            mb: "3px !important",
          },
          "&:hover .status-ic": {
            display: "flex",
          },
          "&.active, &.completed:hover": {
            borderColor: "#333",
            cursor: "pointer",
            "& span": {
              color: "#333",
            },
          },
          "&.withTooltip:hover .checkmark-holder svg:first-child": {
            display: "none",
          },
          "&.withTooltip:hover .checkmark-holder svg:last-child": {
            display: "block !important",
          },
        }}
      >
        <Box
          className="status-ic"
          position="absolute"
          left={-56}
          top={13}
          width={32}
          height={32}
          borderRadius="100%"
          bgcolor={
            props.status === "playing" && props.status !== "locked"
              ? "#FCE181"
              : "#fff"
          }
          sx={{ display: props.status === "locked" ? "none" : "flex" }}
          alignItems="center"
          justifyContent="center"
        >
          {props.status === "locked" ? (
            <Lock />
          ) : (
            <>
              {props.status === "playing" ? (
                <Arrow color="#026670" style={{ marginLeft: "3px" }} />
              ) : (
                <Box className="checkmark-holder">
                  <Check
                    color={props.status === "completed" ? "#026670" : "#EDECE8"}
                  />
                  <Lock style={{ display: "none" }} />
                </Box>
              )}
            </>
          )}
        </Box>
        <Box component="span" textAlign="left">
          <Typography
            component="span"
            display="block"
            fontSize="16px"
            fontWeight={600}
            color="secondary"
          >
            {props.title}
          </Typography>
          <Typography
            component="span"
            fontSize="14px"
            fontWeight={500}
            lineHeight="18px"
            color="#BFBEBB"
          >
            {props.description}
          </Typography>
        </Box>
        <Typography
          component="span"
          fontSize="16px"
          fontWeight={600}
          color="primary"
        >
          {props.duration}
        </Typography>
      </Stack>
    </Tooltip>
  );
};

export default Sidebar;
