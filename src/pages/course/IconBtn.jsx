import { styled } from "@mui/material/styles";
import IconBtnCircular from "../../components/IconBtnCircular";

const IconBtnStyled = styled(IconBtnCircular)({
  backgroundColor: "#EDECE8",
  boxShadow: "none",
});

const IconBtn = (props) => {
  return <IconBtnStyled {...props}>{props.children}</IconBtnStyled>;
};

export default IconBtn;
