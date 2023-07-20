import { Box, Stack, Typography } from "@mui/material";

const lecturesList = [
  {
    id: 1,
    title: "Lecture 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Lecture 2",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
  },
  {
    id: 3,
    title: "Lecture 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    duration: "3:45",
  },
  {
    id: 4,
    title: "Lecture 4",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
  },
  {
    id: 5,
    title: "Lecture 5",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
  },
  {
    id: 6,
    title: "Lecture 6",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur",
    duration: "7:16",
  },
];

const Sidebar = () => {
  return (
    <Box
      width={300}
      backgroundColor="#EDECE8"
      pt="190px"
      mt="-190px"
      pl="40px"
      pb="100px"
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
        mb="30px"
      >
        Lectures List
      </Typography>
      <Stack rowGap="30px">
        {lecturesList.map((l) => (
          <Stack
            key={l.id}
            component="button"
            flexDirection="row"
            columnGap="10px"
            p="0 0 30px 0"
            sx={{
              border: "none",
              cursor: "pointer",
              backgroundColor: "transparent",
              borderBottom: "1px solid rgba(191, 190, 187, 0.5)",
              "&:hover": {
                borderColor: "#333",
                "& span": {
                  color: "#333",
                },
              },
            }}
          >
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
