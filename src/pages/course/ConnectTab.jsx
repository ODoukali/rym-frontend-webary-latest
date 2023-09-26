import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { pxToRem } from "px2rem2px";
import Question from "./Question";
import BlockBordered from "../../components/BlockBordered";

import { ReactComponent as Chevron } from "../../images/chevron.svg";

const faqArr = [
  {
    id: 1,
    question: "פארוואס פייניג איך און איך טשעפע אזויפיל מיין מאן?",
    answer:
      "איך בין זייער אנטוישט פון מיין מאן, ער שטייט אויף שפעט, און עס אינטערעסירט אים נישט דאס דאווענען בכלל. ער שטייט אויף צען אזייגער, טרינקט קאווע מיט מזונות, דערנאך עפנט ער זיין קאמפיוטער צו קוקן וואס טוט זיך אין באנק, מאכט די חשבונות און רופט דעם און יענעם, און ערשט דערנאך, ווען מיין נשמה איז שוין ארויסגעפלויגן פון צער, גייט ער ערשט דאווענען.",
  },
  {
    id: 2,
    question: "וואס טוט מען ווען דער מאן ארבעט צופרי פאר’ן דאווענען?",
    answer:
      "איך בין זייער אנטוישט פון מיין מאן, ער שטייט אויף שפעט, און עס אינטערעסירט אים נישט דאס דאווענען בכלל. ער שטייט אויף צען אזייגער, טרינקט קאווע מיט מזונות, דערנאך עפנט ער זיין קאמפיוטער צו קוקן וואס טוט זיך אין באנק, מאכט די חשבונות און רופט דעם און יענעם, און ערשט דערנאך, ווען מיין נשמה איז שוין ארויסגעפלויגן פון צער, גייט ער ערשט דאווענען.",
  },
  {
    id: 3,
    question:
      "ווי אזוי מאך איך פרייליך אין שטוב, ווען מיין ווייב איז אלץ אנגעצויגן און נערוועז?",
    answer:
      "איך בין זייער אנטוישט פון מיין מאן, ער שטייט אויף שפעט, און עס אינטערעסירט אים נישט דאס דאווענען בכלל. ער שטייט אויף צען אזייגער, טרינקט קאווע מיט מזונות, דערנאך עפנט ער זיין קאמפיוטער צו קוקן וואס טוט זיך אין באנק, מאכט די חשבונות און רופט דעם און יענעם, און ערשט דערנאך, ווען מיין נשמה איז שוין ארויסגעפלויגן פון צער, גייט ער ערשט דאווענען.",
  },
  {
    id: 4,
    question: "פארוואס פייניג איך און איך טשעפע אזויפיל מיין מאן?",
    answer:
      "איך בין זייער אנטוישט פון מיין מאן, ער שטייט אויף שפעט, און עס אינטערעסירט אים נישט דאס דאווענען בכלל. ער שטייט אויף צען אזייגער, טרינקט קאווע מיט מזונות, דערנאך עפנט ער זיין קאמפיוטער צו קוקן וואס טוט זיך אין באנק, מאכט די חשבונות און רופט דעם און יענעם, און ערשט דערנאך, ווען מיין נשמה איז שוין ארויסגעפלויגן פון צער, גייט ער ערשט דאווענען.",
  },
  {
    id: 5,
    question: "וואס טוט מען ווען דער מאן ארבעט צופרי פאר’ן דאווענען?",
    answer:
      "איך בין זייער אנטוישט פון מיין מאן, ער שטייט אויף שפעט, און עס אינטערעסירט אים נישט דאס דאווענען בכלל. ער שטייט אויף צען אזייגער, טרינקט קאווע מיט מזונות, דערנאך עפנט ער זיין קאמפיוטער צו קוקן וואס טוט זיך אין באנק, מאכט די חשבונות און רופט דעם און יענעם, און ערשט דערנאך, ווען מיין נשמה איז שוין ארויסגעפלויגן פון צער, גייט ער ערשט דאווענען.",
  },
];

const ConnectTab = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box>
        <Typography
          component="h2"
          fontSize={pxToRem(22)}
          fontWeight="bold"
          lineHeight={pxToRem(30)}
          mb={pxToRem(20)}
        >
          Have a Question? Ask the Rabbi!
        </Typography>
        <Stack
          position="relative"
          flexDirection="row"
          alignItems="flex-start"
          gap={pxToRem(36)}
        >
          <Box
            className="rtl-section"
            sx={{
              "&::before": {
                content: "''",
                position: "absolute",
                top: 0,
                right: pxToRem(246),
                height: "100%",
                borderLeft: "2px solid #BFBEBB",
              },
            }}
          >
            {faqArr.map((a) => (
              <Accordion
                key={a.id}
                expanded={expanded === `panel${a.id}`}
                onChange={handleChange(`panel${a.id}`)}
                sx={{
                  "& .MuiAccordionSummary-root, & .MuiAccordionSummary-root.Mui-expanded":
                    {
                      padding: `0 ${pxToRem(50)} 0 ${pxToRem(25)}`,
                    },
                }}
              >
                <AccordionSummary
                  id={a.id}
                  expandIcon={<Chevron color="#026670" />}
                  sx={{
                    "& .MuiAccordionSummary-content": { overflow: "hidden" },
                  }}
                >
                  <Typography
                    fontFamily="PloniBold"
                    fontSize={pxToRem(30)}
                    lineHeight={pxToRem(30)}
                    color="secondary"
                    ml={pxToRem(20)}
                    sx={{
                      isolation: "isolate",
                      "&::before": {
                        content: "'Q'",
                        fontFamily: "Poppins",
                        position: "absolute",
                        fontSize: pxToRem(80),
                        fontWeight: "700",
                        color: "#F7F6F2",
                        right: pxToRem(27),
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: -1,
                      },
                    }}
                  >
                    {a.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ padding: `0 ${pxToRem(60)} ${pxToRem(38)} !important` }}
                >
                  <BlockBordered>
                    <Typography
                      variant="large"
                      fontFamily="Noto Sans Hebrew"
                      fontWeight={700}
                      component="p"
                    >
                      {a.answer}
                    </Typography>
                  </BlockBordered>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
          <Box
            maxWidth={pxToRem(230)}
            bgcolor="#026670"
            borderRadius={pxToRem(10)}
            p={pxToRem(30)}
          >
            <Typography
              color="#fff"
              fontSize={pxToRem(22)}
              fontWeight={700}
              lineHeight={pxToRem(30)}
              letterSpacing={pxToRem(-0.86)}
              mb={pxToRem(15)}
            >
              Need 1 on 1 help?
            </Typography>
            <Typography
              color="#fff"
              fontSize={pxToRem(14)}
              fontWeight={700}
              lineHeight={pxToRem(21)}
              mb={pxToRem(24)}
            >
              Book an Appointment with the Rabbi Today and improve your
              marriage.
            </Typography>
            <Typography
              color="#fff"
              fontSize={pxToRem(13)}
              fontWeight={500}
              lineHeight={pxToRem(21)}
              letterSpacing={pxToRem(-0.39)}
              mb={pxToRem(25)}
            >
              One-on-one appointments with the Reb Yakov Moshe are a great way
              to get personalized advice and support. He can tailor his guidance
              to your specific needs and help you create a plan to strengthen
              your marriage.
            </Typography>
            <Button
              variant="yellow"
              sx={{
                height: pxToRem(40),
                fontSize: pxToRem(14),
                p: pxToRem(20),
                maxWidth: pxToRem(170),
              }}
            >
              Book Appointment
            </Button>
          </Box>
        </Stack>
        <Button
          variant="yellow"
          sx={{ height: pxToRem(54), m: `${pxToRem(26)} 0 ${pxToRem(60)}` }}
        >
          Send us Your Question
        </Button>

        <Box borderTop="1px solid #BFBEBB" pt={pxToRem(60)}>
          <Typography
            component="h2"
            fontSize={pxToRem(22)}
            fontWeight="bold"
            lineHeight={pxToRem(30)}
            mb={pxToRem(20)}
          >
            View Your Submited Questions
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: pxToRem(16),
            }}
          >
            <Question />
            <Question awaiting />
            <Question />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ConnectTab;
