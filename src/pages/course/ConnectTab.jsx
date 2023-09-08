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
          fontSize="22px"
          fontWeight="bold"
          lineHeight="30px"
          mb="20px"
        >
          Have a Question? Ask the Rabbi!
        </Typography>
        <Stack
          position="relative"
          flexDirection="row"
          alignItems="flex-start"
          gap="36px"
        >
          <Box
            className="rtl-section"
            sx={{
              "&::before": {
                content: "''",
                position: "absolute",
                top: 0,
                right: "246px",
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
                  "& .MuiAccordionSummary-root": {
                    padding: "0 50px 0 25px",
                  },
                  "& .MuiAccordionSummary-root.Mui-expanded": {
                    padding: "0 50px 0 25px",
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
                    fontFamily="FbJoker"
                    fontSize="30px"
                    lineHeight="30px"
                    fontWeight={900}
                    color="secondary"
                    ml="20px"
                    sx={{
                      isolation: "isolate",
                      "&::before": {
                        content: "'Q'",
                        fontFamily: "Poppins",
                        position: "absolute",
                        fontSize: "80px",
                        fontWeight: "700",
                        color: "#F7F6F2",
                        right: "27px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: -1,
                      },
                    }}
                  >
                    {a.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: "0 60px 38px !important" }}>
                  <BlockBordered>
                    <Typography
                      variant="large"
                      fontFamily="FbJoker"
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
          <Box maxWidth="230px" bgcolor="#026670" borderRadius="10px" p="30px">
            <Typography
              color="#fff"
              fontSize="22px"
              fontWeight={700}
              lineHeight="30px"
              letterSpacing="-0.86px"
              mb="15px"
            >
              Need 1 on 1 help?
            </Typography>
            <Typography
              color="#fff"
              fontSize="14px"
              fontWeight={700}
              lineHeight="21px"
              mb="24px"
            >
              Book an Appointment with the Rabbi Today and improve your
              marriage.
            </Typography>
            <Typography
              color="#fff"
              fontSize="13px"
              fontWeight={500}
              lineHeight="21px"
              letterSpacing="-0.39px"
              mb="25px"
            >
              One-on-one appointments with the Reb Yakov Moshe are a great way
              to get personalized advice and support. He can tailor his guidance
              to your specific needs and help you create a plan to strengthen
              your marriage.
            </Typography>
            <Button
              variant="yellow"
              sx={{
                height: "40px",
                fontSize: "14px",
                p: "20px",
                maxWidth: "170px",
              }}
            >
              Book Appointment
            </Button>
          </Box>
        </Stack>
        <Button variant="yellow" sx={{ height: "54px", m: "26px 0 60px" }}>
          Send us Your Question
        </Button>

        <Box borderTop="1px solid #BFBEBB" pt="60px">
          <Typography
            component="h2"
            fontSize="22px"
            fontWeight="bold"
            lineHeight="30px"
            mb="20px"
          >
            View Your Submited Questions
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "16px",
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
