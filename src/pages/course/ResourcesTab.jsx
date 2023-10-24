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
import { pxToRem } from "px2rem2px";
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
      <Box className="rtl-section" mb={pxToRem(40)}>
        <Typography
          component="p"
          variant="sectionTitleHebrew"
          fontSize={pxToRem(30)}
          lineHeight={pxToRem(36)}
          mb="10px"
        >
          וואס טוט מען ווען דער מאן ארבעט צופרי פאר’ן דאווענען?
        </Typography>
        <Box
          display="inline-flex"
          bgcolor="#FCE181"
          borderRadius={pxToRem(20)}
          p={`${pxToRem(3)} ${pxToRem(20)}`}
        >
          <Typography
            component="p"
            fontSize={pxToRem(18)}
            fontWeight="700"
            color="#026670"
          >
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
          <AccordionTitle>Course Summary</AccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            borderTop="1px solid rgba(191,190,187,0.5)"
            p={`${pxToRem(30)} 0 ${pxToRem(10)}`}
          >
            <BlockBordered>
              <Typography
                variant="medium"
                component="p"
                lineHeight={pxToRem(28)}
                mb={pxToRem(30)}
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
            mr={pxToRem(30)}
          >
            <AccordionTitle>Course References</AccordionTitle>
            <Stack
              flexDirection="row"
              gap={pxToRem(10)}
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
          <Box
            borderTop="1px solid rgba(191,190,187,0.5)"
            p={`${pxToRem(30)} 0 ${pxToRem(10)}`}
          >
            <BlockBordered>
              <Typography
                variant="medium"
                component="p"
                lineHeight={pxToRem(28)}
              >
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
        sx={{
          "& .MuiAccordionDetails-root": { pb: `${pxToRem(10)} !important` },
        }}
      >
        <AccordionSummary expandIcon={<Chevron color="#026670" />}>
          <Stack
            width="100%"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            mr={pxToRem(30)}
          >
            <AccordionTitle>Downloads</AccordionTitle>
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
                gap={pxToRem(15)}
                borderTop="1px solid rgba(191,190,187,0.5)"
                p={`${pxToRem(30)} 0`}
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
                  gap={pxToRem(15)}
                  component="span"
                >
                  <Box
                    className="badge"
                    bgcolor="#EDECE8"
                    borderRadius={pxToRem(20)}
                    p={`${pxToRem(4.5)} ${pxToRem(7.3)}`}
                    component="span"
                  >
                    <Typography
                      fontSize={pxToRem(12)}
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

const AccordionTitle = (props) => {
  return (
    <Typography fontSize="20px" fontWeight={700} color="secondary" {...props}>
      {props.children}
    </Typography>
  );
};

export default ResourcesTab;
