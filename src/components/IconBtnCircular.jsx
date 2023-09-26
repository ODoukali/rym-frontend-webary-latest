import { pxToRem } from "px2rem2px";
import { IconButton } from "@mui/material";

const IconBtnCircular = (props) => {
  return (
    <IconButton
      {...props}
      sx={{
        width: pxToRem(48),
        height: pxToRem(48),
        backgroundColor: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(10px)",
        boxShadow: `0px ${pxToRem(10)} ${pxToRem(20)} rgba(0,0,0,0.1)`,
        "&:hover": {
          backgroundColor: "#FCE181",
        },
      }}
    >
      {props.children}
    </IconButton>
  );
};

export default IconBtnCircular;
