import { Box, Stack, Tooltip } from "@mui/material";
import { pxToRem } from "px2rem2px";
import IconBtnCircular from "../IconBtnCircular";

import { ReactComponent as Bookmark } from "../../images/bookmark.svg";
import { ReactComponent as Notes } from "../../images/notes.svg";
import { ReactComponent as Share } from "../../images/share.svg";
import { ReactComponent as Volume } from "../../images/volume.svg";

const SidePanel = (props) => {
  return (
    <Stack
      className="media-controls-group"
      position="absolute"
      top={pxToRem(40)}
      right={pxToRem(40)}
      gap={pxToRem(10)}
      zIndex={27}
      sx={{
        "& button": {
          backgroundColor: "#fff",
        },
      }}
    >
      {props.preview ? null : (
        <Tooltip
          title="Bookmark"
          enterDelay={0}
          enterTouchDelay={0}
          PopperProps={{ disablePortal: true }}
          placement="left"
        >
          <Box className="tooltip-fix">
            <IconBtnCircular className="hover-green">
              <Bookmark color="#026670" />
            </IconBtnCircular>
          </Box>
        </Tooltip>
      )}
      {props.preview ? null : (
        <Tooltip
          title="Notes"
          enterDelay={0}
          enterTouchDelay={0}
          PopperProps={{ disablePortal: true }}
          placement="left"
        >
          <Box>
            <IconBtnCircular className="hover-green">
              <Notes color="#026670" />
            </IconBtnCircular>
          </Box>
        </Tooltip>
      )}
      <Tooltip
        title="Share Now"
        enterDelay={0}
        enterTouchDelay={0}
        PopperProps={{ disablePortal: true }}
        placement="left"
        sx={{
          "& + .MuiTooltip-popper .MuiTooltip-tooltip": {
            whiteSpace: "nowrap",
          },
        }}
      >
        <Box>
          <IconBtnCircular className="hover-green">
            <Share color="#026670" style={{ marginRight: pxToRem(1.5) }} />
          </IconBtnCircular>
        </Box>
      </Tooltip>
      {props.preview ? null : (
        <Box position="relative">
          <IconBtnCircular className="yellow-ic">
            <Volume color="#026670" />
          </IconBtnCircular>
          <Box
            className="toggle-tooltip"
            sx={{
              position: "absolute",
              top: "50%",
              right: pxToRem(62),
              transform: "translateY(-50%)",
              fontSize: pxToRem(12),
              fontWeight: 600,
              color: "#026670",
              borderRadius: pxToRem(10),
              backgroundColor: "#FCE181",
              whiteSpace: "nowrap",
              padding: `${pxToRem(1)} ${pxToRem(10)}`,
              opacity: 0,
              transition: "opacity 0.1s ease",
            }}
          >
            Listen / Watch
          </Box>
        </Box>
      )}
    </Stack>
  );
};

export default SidePanel;
