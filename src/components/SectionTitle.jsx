import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const SectionTitle = (props) => {
  const Title = styled(Typography)(() => {
    return {
      position: "relative",
      fontSize: props.fontSize,
      fontWeight: "bold",
      lineHeight: props.lineHeight,
      letterSpacing: "-2px",
    };
  });

  const Highlighted = styled(Typography)(() => {
    return {
      position: "relative",
      fontSize: props.fontSize,
      fontWeight: "bold",
      lineHeight: props.lineHeight,
      letterSpacing: "-2px",
      "&::after": {
        content: "''",
        width: "104%",
        height: "15px",
        position: "absolute",
        left: "50%",
        bottom: "8.5px",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(252,225,129,0.5)",
      },
    };
  });

  return (
    <Title component={props.component} maxWidth={props.maxWidth} mb={props.mb}>
      {props.title} <Highlighted component="span">{props.lastWord}</Highlighted>
    </Title>
  );
};

export default SectionTitle;
