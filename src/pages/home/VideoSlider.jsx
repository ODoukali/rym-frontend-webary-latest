import { Box, Container, Stack, Typography } from "@mui/material";
import TextLink from "../../components/TextLink";
import BlockBordered from "../../components/BlockBordered";

const VideoSlider = () => {
  return (
    <Container sx={{ mt: "150px" }}>
      <Stack
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        mb="40px"
      >
        <Box>
          <Typography variant="sectionTitle" component="h2" mb="14px">
            Hi <span className="highlighted"> Alex,</span> welcome back!
          </Typography>
          <BlockBordered>
            <Typography>Continue Watching…</Typography>
          </BlockBordered>
        </Box>
        <TextLink to="" sx={{ marginTop: "15px" }}>
          View All Videos
        </TextLink>
      </Stack>
    </Container>
  );
};

export default VideoSlider;
