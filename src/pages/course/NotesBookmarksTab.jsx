import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import TextLink from "../../components/TextLink";
import BlockBordered from "../../components/BlockBordered";
import Note from "./Note";
import IconBtn from "./IconBtn";

import { ReactComponent as Arrow } from "../../images/arrow.svg";
import { ReactComponent as Download } from "../../images/writing.svg";
import { ReactComponent as Print } from "../../images/printer.svg";

const NotesBookmarks = () => {
  return (
    <>
      <Accordion className="accordion-white">
        <AccordionSummary expandIcon={<Arrow color="#026670" />}>
          <Stack
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            mr="30px"
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
                  color="secondary"
                >
                  Bookmarks
                </Typography>
              </Badge>
              <TextLink
                to="/"
                sx={{ "& span": { color: "#026670 !important" } }}
              >
                Add Bookmark
              </TextLink>
            </Stack>
            <Button
              variant="yellow"
              sx={{ height: "40px", fontSize: "14px", p: "20px 30px" }}
            >
              Jump to Latest Progress
            </Button>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack gap="30px">
            {[...Array(4).keys()].map((val) => (
              <Stack
                key={val}
                to="/"
                component={Link}
                flexDirection="row"
                alignItems="flex-start"
                justifyContent="space-between"
                borderTop="1px solid rgba(191,190,187,0.5)"
                pt="30px"
                sx={{
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
                  <Box component="span" className="text">
                    <Typography
                      component="span"
                      display="block"
                      fontSize="16px"
                      fontWeight={600}
                      color="secondary"
                    >
                      Lecture name comes here 1
                    </Typography>
                    <Typography
                      component="span"
                      display="block"
                      fontSize="14px"
                      fontWeight={500}
                      lineHeight="18px"
                      color="#BFBEBB"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                    </Typography>
                  </Box>
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
          </Stack>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="accordion-white"
        sx={{ "& .MuiAccordionDetails-root": { pb: "0 !important" } }}
      >
        <AccordionSummary expandIcon={<Arrow color="#026670" />}>
          <Stack
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            mr="30px"
          >
            <Stack flexDirection="row">
              <Typography
                position="relative"
                fontSize="20px"
                fontWeight={700}
                color="secondary"
                mr="30px"
              >
                Course Notes
              </Typography>
              <TextLink
                to="/"
                sx={{ "& span": { color: "#026670 !important" } }}
              >
                Add Note
              </TextLink>
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
        </AccordionSummary>
        <AccordionDetails>
          <Stack>
            {[...Array(3).keys()].map((val) => (
              <Note key={val}>
                <BlockBordered mb="20px">
                  <Typography variant="medium" lineHeight="22px">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </Typography>
                </BlockBordered>
                <TextLink
                  to=""
                  sx={{ marginBottom: "30px", "& span": { fontSize: "14px" } }}
                >
                  Edit Note
                </TextLink>
              </Note>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default NotesBookmarks;
