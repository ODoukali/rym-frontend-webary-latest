import { Stack } from "@mui/material";

import { ReactComponent as Play } from "../images/arrow.svg";

const PlayBtn = (props) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      width={props.width}
      height={props.height}
      borderRadius="50%"
      backgroundColor="rgba(255, 255, 255, 0.5)"
      sx={{
        backdropFilter: "blur(10px)",
        transition: "0.2s ease",
        "&:hover": {
          backgroundColor: "#fff",
          "& svg": {
            color: "#333",
          },
        },
      }}
    >
      <Play color="#026670" style={{ marginLeft: "6%" }} />
    </Stack>
  );
};

export default PlayBtn;
