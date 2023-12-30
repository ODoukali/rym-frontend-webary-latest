import { Stack } from "@mui/material";

const PlayBtn = (props) => {
  return (
    <Stack
      className="play-btn"
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
      {props.children}
    </Stack>
  );
};

export default PlayBtn;
