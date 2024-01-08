import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IconBtnCircular from "../IconBtnCircular";
import { usePath } from "../../utils/PathContext";

import { ReactComponent as Close } from "../../images/close-user-menu.svg";

const CloseBtn = () => {
  const navigate = useNavigate();
  const { currentPath } = usePath();

  return (
    <Box
      display={{ xs: "block", sm: "none" }}
      sx={{ "& button": { boxShadow: "none" } }}
    >
      <IconBtnCircular onClick={() => navigate(currentPath)}>
        <Close color="#026670" />
      </IconBtnCircular>
    </Box>
  );
};

export default CloseBtn;
