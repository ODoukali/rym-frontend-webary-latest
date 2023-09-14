import { Box, Stack, Typography } from "@mui/material";

import { ReactComponent as Check } from "../images/check.svg";
import { ReactComponent as Arrow } from "../images/arrow.svg";
import { ReactComponent as Lock } from "../images/lock.svg";

const lecturesList = [
  {
    id: 1,
    title: "Lecture 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    duration: "3:45",
    status: "completed",
  },
  {
    id: 2,
    title: "Lecture 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
    status: "playing",
  },
  {
    id: 3,
    title: "Lecture 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    duration: "3:45",
    status: "notCompleted",
  },
  {
    id: 4,
    title: "Lecture 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
    status: "notCompleted",
  },
  {
    id: 5,
    title: "Lecture 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
    status: "notCompleted",
  },
  {
    id: 6,
    title: "Lecture 6",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
    status: "notCompleted",
  },
];

const Sidebar = (props) => {
  return (
    <Box
      width={300}
      backgroundColor="#EDECE8"
      pt="190px"
      mt="-190px"
      pl="40px"
      pb="40px"
      borderRadius="40px"
      flexShrink={0}
      sx={{
        "&::before": {
          content: "''",
          position: "absolute",
          bottom: 0,
          right: 0,
          left: "calc(54% + 300px)",
          height: "100%",
          backgroundColor: "#EDECE8",
          borderRadius: "40px",
          zIndex: -1,
        },
      }}
    >
      <Typography
        component="p"
        fontSize="20px"
        fontWeight="bold"
        lineHeight="30px"
      >
        Course Overview
      </Typography>
      <Typography
        component="p"
        fontSize="12px"
        fontWeight="700"
        lineHeight="18px"
        color="#026670"
        mb="30px"
      >
        2/25 Completed
      </Typography>
      <Stack rowGap="30px">
        {lecturesList.map((l) => (
          <Stack
            key={l.id}
            component="button"
            disabled={props.locked ? true : false}
            flexDirection="row"
            columnGap="10px"
            p="0 0 30px 0"
            sx={{
              position: "relative",
              border: "none",
              backgroundColor: "transparent",
              borderBottom: "1px solid rgba(191, 190, 187, 0.5)",
              "&:disabled:hover .status-ic": {
                display: "flex",
              },
              "&:not(:disabled):hover": {
                borderColor: "#333",
                cursor: "pointer",
                "& span": {
                  color: "#333",
                },
              },
            }}
          >
            <Box
              className="status-ic"
              position="absolute"
              left={-56}
              top={13}
              width={32}
              height={32}
              borderRadius="100%"
              bgcolor={
                l.status === "playing" && !props.locked ? "#FCE181" : "#fff"
              }
              sx={{ display: props.locked ? "none" : "flex" }}
              alignItems="center"
              justifyContent="center"
            >
              {props.locked ? (
                <Lock />
              ) : (
                <>
                  {l.status === "playing" ? (
                    <Arrow color="#026670" style={{ marginLeft: "3px" }} />
                  ) : (
                    <Check
                      color={l.status === "completed" ? "#026670" : "#EDECE8"}
                    />
                  )}
                </>
              )}
            </Box>
            <Box component="span" textAlign="left">
              <Typography
                component="span"
                display="block"
                fontSize="16px"
                fontWeight={600}
                color="secondary"
              >
                {l.title}
              </Typography>
              <Typography
                component="span"
                fontSize="14px"
                fontWeight={500}
                lineHeight="18px"
                color="#BFBEBB"
              >
                {l.description}
              </Typography>
            </Box>
            <Typography
              component="span"
              fontSize="16px"
              fontWeight={600}
              color="primary"
            >
              {l.duration}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
