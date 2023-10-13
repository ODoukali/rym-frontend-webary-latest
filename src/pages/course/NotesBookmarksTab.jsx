import { Badge, Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { pxToRem } from "px2rem2px";
import TextLink from "../../components/TextLink";
import BlockBordered from "../../components/BlockBordered";
import Note from "./Note";
import IconBtn from "./IconBtn";
import DeleteBtn from "./DeleteBtn";

import { ReactComponent as Download } from "../../images/writing.svg";
import { ReactComponent as Print } from "../../images/printer.svg";

const Block = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: pxToRem(20),
  padding: `${pxToRem(30)} ${pxToRem(40)} ${pxToRem(40)} ${pxToRem(40)}`,
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
            mb={pxToRem(24)}
          >
            <Stack flexDirection="row">
              <Badge
                badgeContent={
                  <Typography
                    fontSize={pxToRem(12)}
                    fontWeight={700}
                    color="#BFBEBB !important"
                  >
                    4 / 10
                  </Typography>
                }
                sx={{
                  mr: pxToRem(90),
                  "& .MuiBadge-badge": {
                    right: pxToRem(-33),
                    height: pxToRem(27),
                    borderRadius: pxToRem(20),
                    backgroundColor: "#EDECE8",
                    p: `${pxToRem(5)} ${pxToRem(10)}`,
                  },
                }}
              >
                <Typography
                  position="relative"
                  fontSize={pxToRem(20)}
                  fontWeight={700}
                >
                  Bookmarks
                </Typography>
              </Badge>
            </Stack>
            <Button
              variant="yellow"
              sx={{
                height: pxToRem(40),
                fontSize: pxToRem(14),
                p: `${pxToRem(20)} ${pxToRem(30)}`,
                boxShadow: "none",
              }}
            >
              Jump to Latest Progress
            </Button>
          </Stack>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: bookmarksQuantity > 4 ? "1fr 1fr" : "1fr",
              gap: `0 ${pxToRem(40)}`,
              overflow: "hidden",
            }}
          >
            {[...Array(bookmarksQuantity).keys()].map((val) => (
              <Stack
                key={val}
                to="/"
                component={Link}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap="10px"
                py={pxToRem(10)}
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
                    "& .text": {
                      color: "#333",
                    },
                    "& .bookmark-number": {
                      backgroundColor: "#FCE181",
                      span: {
                        color: "#026670",
                      },
                    },
                    "& .deleteBtn": {
                      display: "flex",
                    },
                  },
                }}
              >
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  columnGap={pxToRem(15)}
                >
                  <Box
                    className="bookmark-number"
                    width={pxToRem(27)}
                    height={pxToRem(27)}
                    borderRadius="100%"
                    bgcolor="#EDECE8"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexShrink={0}
                  >
                    <Typography
                      component="span"
                      fontSize={pxToRem(12)}
                      fontWeight={700}
                      color="#BFBEBB"
                    >
                      {val + 1}
                    </Typography>
                  </Box>
                  <Typography
                    className="text"
                    display="block"
                    fontSize={pxToRem(16)}
                    lineHeight={pxToRem(20)}
                    fontWeight={600}
                    color="secondary"
                  >
                    Lecture name comes here 1
                  </Typography>
                </Stack>
                <Stack flexDirection="row" alignItems="center" gap="5px">
                  <DeleteBtn />
                  <Typography
                    fontSize={pxToRem(16)}
                    fontWeight={600}
                    color="primary"
                  >
                    3:45
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Box>
        </Block>
        <Box display="flex" justifyContent="flex-end">
          <TextLink
            href="/"
            sx={{ marginTop: pxToRem(20), marginRight: pxToRem(40) }}
          >
            Add Bookmark
          </TextLink>
        </Box>
      </Box>

      <Box mt={pxToRem(60)}>
        <Block>
          <Stack
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            mb={pxToRem(24)}
          >
            <Stack flexDirection="row">
              <Typography fontSize={pxToRem(20)} fontWeight={700}>
                Course Notes
              </Typography>
            </Stack>
            <Stack
              flexDirection="row"
              gap={pxToRem(10)}
              sx={{ "& button": { backgroundColor: "#EDECE8" } }}
            >
              <Tooltip
                title="Download notes to text file"
                enterDelay={0}
                enterTouchDelay={0}
                placement="top"
              >
                <Box>
                  <IconBtn className="hover-green">
                    <Download color="#026670" />
                  </IconBtn>
                </Box>
              </Tooltip>
              <Tooltip
                title="Print Notes"
                enterDelay={0}
                enterTouchDelay={0}
                placement="top"
              >
                <Box>
                  <IconBtn className="hover-green">
                    <Print color="#026670" />
                  </IconBtn>
                </Box>
              </Tooltip>
            </Stack>
          </Stack>
          <Stack>
            <Note>
              <BlockBordered mb={pxToRem(20)}>
                <Typography variant="medium" lineHeight={pxToRem(22)}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </Typography>
              </BlockBordered>
              <TextLink
                href=""
                sx={{
                  marginBottom: pxToRem(10),
                  "& span": { fontSize: pxToRem(14) },
                }}
              >
                Edit Note
              </TextLink>
            </Note>
            <Note>
              <BlockBordered mb={pxToRem(20)}>
                <Box className="note-edited">
                  <Typography variant="medium" lineHeight={pxToRem(22)}>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </Typography>
                </Box>
              </BlockBordered>
              <TextLink
                href=""
                sx={{
                  marginBottom: pxToRem(10),
                  "& span": { fontSize: pxToRem(14) },
                }}
              >
                Save Note
              </TextLink>
            </Note>
          </Stack>
        </Block>
        <Box display="flex" justifyContent="flex-end">
          <TextLink
            href="/"
            sx={{ marginTop: pxToRem(20), marginRight: pxToRem(40) }}
          >
            Add Note
          </TextLink>
        </Box>
      </Box>
    </>
  );
};

export default NotesBookmarks;
