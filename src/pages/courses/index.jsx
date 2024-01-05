import { Box, Button, Stack, Typography } from "@mui/material";
import { pxToRem } from "px2rem2px";
import BlockHeading from "../../components/BlockHeading";
import Course from "../../components/user/Course";

import { ReactComponent as Chevron } from "../../images/chevron.svg";
import { ReactComponent as FilterMenu } from "../../images/filter-menu.svg";
import { ReactComponent as Arrows } from "../../images/down-arrow.svg";

const Courses = () => {
  return (
    <>
      <Typography
        variant="sectionTitle"
        component="h2"
        fontSize={pxToRem(35)}
        pl={pxToRem(60)}
        mb={pxToRem(27)}
      >
        My Courses
      </Typography>

      <Box
        position="relative"
        bgcolor="#fff"
        borderRadius="20px"
        p={pxToRem(60)}
      >
        <BlockHeading>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-end"
            gap="30px"
          >
            <Button
              startIcon={<FilterMenu />}
              endIcon={<Chevron />}
              sx={{
                color: "#333",
                fontSize: "14px",
                "& .MuiButton-endIcon": {
                  ml: pxToRem(12),
                  "& svg": { transform: "rotate(90deg)", mt: pxToRem(3) },
                },
              }}
            >
              Active
            </Button>

            <Button
              startIcon={<Arrows />}
              endIcon={<Chevron />}
              sx={{
                color: "#333",
                fontSize: "14px",
                "& .MuiButton-endIcon": {
                  ml: pxToRem(12),
                  "& svg": { transform: "rotate(90deg)", mt: pxToRem(3) },
                },
              }}
            >
              Active
            </Button>
          </Stack>
        </BlockHeading>

        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          <Course></Course>
        </Box>
      </Box>
    </>
  );
};

export default Courses;
