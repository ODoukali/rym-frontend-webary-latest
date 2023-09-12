import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import BlockBordered from "../../components/BlockBordered";
import IconBtn from "./IconBtn";

import { ReactComponent as Chevron } from "../../images/chevron.svg";
import { ReactComponent as Download } from "../../images/writing.svg";
import { ReactComponent as Print } from "../../images/printer.svg";

const ResourcesTab = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box className="rtl-section" mb="40px">
        <Typography variant="sectionTitleHebrew" fontSize="30px">
          וואס טוט מען ווען דער מאן ארבעט צופרי פאר’ן דאווענען?
        </Typography>
        <Box
          display="inline-flex"
          bgcolor="#FCE181"
          borderRadius="20px"
          p="3px 20px"
        >
          <Typography fontSize="18px" fontWeight="700" color="#026670">
            Showing Resources for the active lecture only
          </Typography>
        </Box>
      </Box>

      <Accordion
        className="accordion-white"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<Chevron color="#026670" />}>
          <Typography fontSize="20px" fontWeight={700} color="secondary">
            Course Summary
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box borderTop="1px solid rgba(191,190,187,0.5)" p="30px 0 10px">
            <BlockBordered>
              <Typography
                variant="medium"
                component="p"
                lineHeight="28px"
                mb="30px"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <ul className="list-items">
                <li>Sed ut perspiciatis unde omnis iste natus</li>
                <li>Sit voluptatem accusantium doloremque totam</li>
                <li>Rem aperiam, eaque ipsa quae ab illo</li>
              </ul>
            </BlockBordered>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="accordion-white"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<Chevron color="#026670" />}>
          <Stack
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            mr="30px"
          >
            <Typography fontSize="20px" fontWeight={700} color="secondary">
              Course References
            </Typography>
            <Stack
              flexDirection="row"
              gap="10px"
              sx={{ "& button": { backgroundColor: "#EDECE8" } }}
            >
              <Tooltip
                title="Download Resources to text file"
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
                title="Print Resources"
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
        </AccordionSummary>
        <AccordionDetails>
          <Box borderTop="1px solid rgba(191,190,187,0.5)" p="30px 0 10px">
            <BlockBordered>
              <Typography variant="medium" component="p" lineHeight="28px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </BlockBordered>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="accordion-white"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ "& .MuiAccordionDetails-root": { pb: "10px !important" } }}
      >
        <AccordionSummary expandIcon={<Chevron color="#026670" />}>
          <Stack
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            mr="30px"
          >
            <Typography fontSize="20px" fontWeight={700} color="secondary">
              Downloads
            </Typography>
            <Button variant="text">Download All</Button>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            {[...Array(3).keys()].map((val) => (
              <Stack
                key={val}
                component={Link}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                gap="15px"
                borderTop="1px solid rgba(191,190,187,0.5)"
                p="30px 0"
                sx={{
                  "&:hover": {
                    "& .badge": {
                      backgroundColor: "#FCE181",
                      span: { color: "#026670" },
                    },
                    "& .list-item-title": { color: "#333" },
                  },
                }}
              >
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  gap="15px"
                  component="span"
                >
                  <Box
                    className="badge"
                    bgcolor="#EDECE8"
                    borderRadius="20px"
                    p="4.5px 7.3px"
                    component="span"
                  >
                    <Typography
                      fontSize="12px"
                      fontWeight={700}
                      color="#BFBEBB"
                      component="span"
                      display="block"
                    >
                      PDF
                    </Typography>
                  </Box>
                  <Typography
                    className="list-item-title"
                    color="secondary"
                    fontWeight={600}
                    component="span"
                  >
                    This is the title of the downloadable file
                  </Typography>
                </Stack>
                <Typography color="primary" fontWeight={600} component="span">
                  53kb
                </Typography>
              </Stack>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ResourcesTab;
