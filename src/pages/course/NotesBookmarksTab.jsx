import { Badge, Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import TextLink from "../../components/TextLink";
import BlockBordered from "../../components/BlockBordered";
import Note from "./Note";
import IconBtn from "./IconBtn";

import { ReactComponent as Download } from "../../images/writing.svg";
import { ReactComponent as Print } from "../../images/printer.svg";

const Block = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: "20px",
  padding: "30px 40px 40px 40px",
});

const NotesBookmarks = () => {
  const bookmarksQuantity = 7;

  return (
    <>
      <Box>
        <Block>
          <Stack
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            mb="24px"
          >
            <Stack flexDirection="row">
              <Badge
                badgeContent={
                  <Typography
                    fontSize="12px"
                    fontWeight={700}
                    color="#BFBEBB !important"
                  >
                    4 / 10
                  </Typography>
                }
                sx={{
                  mr: "90px",
                  "& .MuiBadge-badge": {
                    right: "-33px",
                    height: "27px",
                    borderRadius: "20px",
                    backgroundColor: "#EDECE8",
                    p: "5px 10px",
                  },
                }}
              >
                <Typography
                  position="relative"
                  fontSize="20px"
                  fontWeight={700}
                >
                  Bookmarks
                </Typography>
              </Badge>
            </Stack>
            <Button
              variant="yellow"
              sx={{ height: "40px", fontSize: "14px", p: "20px 30px" }}
            >
              Jump to Latest Progress
            </Button>
          </Stack>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: bookmarksQuantity > 4 ? "1fr 1fr" : "1fr",
              gap: "10px 40px",
              overflow: "hidden",
            }}
          >
            {[...Array(bookmarksQuantity).keys()].map((val) => (
              <Stack
                key={val}
                to="/"
                component={Link}
                flexDirection="row"
                alignItems="flex-start"
                justifyContent="space-between"
                pt="10px"
                sx={{
                  position: "relative",
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100vw",
                    height: "1px",
                    backgroundColor: "#DFDEDD",
                  },
                  "&:hover": {
                    "& .text span": {
                      color: "#333",
                    },
                    "& .bookmark-number": {
                      backgroundColor: "#FCE181",
                      span: {
                        color: "#026670",
                      },
                    },
                  },
                }}
              >
                <Stack flexDirection="row" columnGap="15px" component="span">
                  <Box
                    className="bookmark-number"
                    component="span"
                    width={27}
                    height={27}
                    borderRadius="100%"
                    bgcolor="#EDECE8"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography
                      component="span"
                      fontSize="12px"
                      fontWeight={700}
                      color="#BFBEBB"
                    >
                      {val + 1}
                    </Typography>
                  </Box>
                  <Typography
                    component="span"
                    display="block"
                    fontSize="16px"
                    fontWeight={600}
                    color="secondary"
                  >
                    Lecture name comes here 1
                  </Typography>
                </Stack>
                <Typography
                  component="span"
                  fontSize="16px"
                  fontWeight={600}
                  color="primary"
                >
                  3:45
                </Typography>
              </Stack>
            ))}
          </Box>
        </Block>
        <Box display="flex" justifyContent="flex-end">
          <TextLink to="/" sx={{ marginTop: "20px" }}>
            Add Bookmark
          </TextLink>
        </Box>
      </Box>

      <Box mt="60px">
        <Block>
          <Stack
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            mb="24px"
          >
            <Stack flexDirection="row">
              <Typography fontSize="20px" fontWeight={700}>
                Course Notes
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap="10px">
              <IconBtn>
                <Download />
              </IconBtn>
              <IconBtn>
                <Print />
              </IconBtn>
            </Stack>
          </Stack>
          <Stack>
            <Note>
              <BlockBordered mb="20px">
                <Typography variant="medium" lineHeight="22px">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </Typography>
              </BlockBordered>
              <TextLink
                to=""
                sx={{ marginBottom: "10px", "& span": { fontSize: "14px" } }}
              >
                Edit Note
              </TextLink>
            </Note>
            <Note>
              <BlockBordered mb="20px">
                <Box className="note-edited">
                  <Typography variant="medium" lineHeight="22px">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </Typography>
                </Box>
              </BlockBordered>
              <TextLink
                to=""
                sx={{ marginBottom: "10px", "& span": { fontSize: "14px" } }}
              >
                Save Note
              </TextLink>
            </Note>
          </Stack>
        </Block>
        <Box display="flex" justifyContent="flex-end">
          <TextLink to="/" sx={{ marginTop: "20px" }}>
            Add Note
          </TextLink>
        </Box>
      </Box>
    </>
  );
};

export default NotesBookmarks;
