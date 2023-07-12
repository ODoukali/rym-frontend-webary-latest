import { Box } from "@mui/material";
import React from "react";

const TagsCloud = () => {
  return (
    <Box
      height="700px"
      borderRadius="40px"
      mx={{ lg: "30px", xs: "24px" }}
      sx={{
        backgroundImage: "linear-gradient(to bottom, transparent,#ffffff 100%)",
      }}
    ></Box>
  );
};

export default TagsCloud;
