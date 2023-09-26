import { useState } from "react";
import { Box, Stack, Typography, Tooltip } from "@mui/material";
import { pxToRem } from "px2rem2px";

import { ReactComponent as Check } from "../images/check.svg";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import { ReactComponent as Lock } from "../images/lock.svg";

const Sidebar = (props) => {
  return (
    <Box
      width={pxToRem(300)}
      backgroundColor="#EDECE8"
      pt={pxToRem(150)}
      mt={pxToRem(-150)}
      pl={pxToRem(40)}
      pb={pxToRem(40)}
      borderRadius={pxToRem(40)}
      flexShrink={0}
      sx={{
        "&::before": {
          content: "''",
          position: "absolute",
          bottom: 0,
          right: 0,
          left: `calc(54% + ${pxToRem(300)})`,
          height: "100%",
          backgroundColor: "#EDECE8",
          borderRadius: pxToRem(40),
          zIndex: -1,
        },
      }}
    >
      <Typography
        component="p"
        fontSize={pxToRem(20)}
        fontWeight="bold"
        lineHeight={pxToRem(30)}
      >
        Course Overview
      </Typography>
      <Typography
        component="p"
        fontSize={pxToRem(12)}
        fontWeight="700"
        lineHeight={pxToRem(18)}
        color="#026670"
        mb={pxToRem(30)}
      >
        2/25 Completed
      </Typography>
      <Stack rowGap={pxToRem(30)}>
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
        columnGap={pxToRem(10)}
        p={`0 0 ${pxToRem(30)} 0`}
        sx={{
          position: "relative",
          border: "none",
          backgroundColor: "transparent",
          borderBottom: "1px solid rgba(191, 190, 187, 0.5)",
          "& + .MuiTooltip-popper .MuiTooltip-tooltip": {
            mb: `${pxToRem(3)} !important`,
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
          "&.withTooltip:hover .checkmark-holder svg:first-of-type": {
            display: "none",
          },
          "&.withTooltip:hover .checkmark-holder svg:last-of-type": {
            display: "block !important",
          },
        }}
      >
        <Box
          className="status-ic"
          position="absolute"
          left={pxToRem(-56)}
          top={pxToRem(13)}
          width={pxToRem(32)}
          height={pxToRem(32)}
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
                <Arrow color="#026670" style={{ marginLeft: pxToRem(3) }} />
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
            fontSize={pxToRem(16)}
            fontWeight={600}
            color="secondary"
          >
            {props.title}
          </Typography>
          <Typography
            component="span"
            fontSize={pxToRem(14)}
            fontWeight={500}
            lineHeight={pxToRem(18)}
            color="#BFBEBB"
          >
            {props.description}
          </Typography>
        </Box>
        <Typography
          component="span"
          fontSize={pxToRem(16)}
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
