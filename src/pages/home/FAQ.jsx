import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import BlockBordered from "../../components/BlockBordered";
import TextLink from "../../components/TextLink";

import { ReactComponent as Arrow } from "../../images/arrow.svg";

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

const FAQ = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ mb: "150px" }}>
      <Stack
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <TextLink to="" sx={{ marginTop: "14px" }}>
          Explore all Q&A
        </TextLink>
        <Box maxWidth="553px" className="rtl-section">
          <Typography variant="sectionTitleHebrew" component="h2" mb="30px">
            פראגעס און <span className="highlighted">ענטפערס</span>
          </Typography>
          <BlockBordered mb="50px">
            <Typography
              maxWidth="522px"
              variant="large"
              fontFamily="FbJoker"
              fontWeight={700}
            >
              האט איר א פראגע? די איז די פלאץ וואו איר קענט פרעגן אייער פראגע
              און ר’ יעקב משה וועט אי”ה ענטפערן בתשואת חן. עס קען ווערן געפרעגט
              אויפן אופן אז יעדער וועט קענען זעהן (נאכן ווערן איבערגעקוקט) אדער
              קען דאס זיין אנאנום און מ’וועט דאס נישט ארויפשטעלן.
            </Typography>
          </BlockBordered>
          <Button variant="yellow" sx={{ position: "relative", zIndex: 1 }}>
            Send us Your Question
          </Button>
        </Box>
      </Stack>
      <Box
        position="relative"
        maxWidth="960px"
        mr="auto"
        mt="-32px"
        className="rtl-section"
      >
        {faqArr.map((a) => (
          <Accordion
            key={a.id}
            expanded={expanded === `panel${a.id}`}
            onChange={handleChange(`panel${a.id}`)}
            sx={{
              "& .MuiAccordionSummary-root": {
                padding: "0 60px",
              },
              "& .MuiAccordionSummary-root.Mui-expanded": {
                padding: "0 60px",
              },
            }}
          >
            <AccordionSummary id={a.id} expandIcon={<Arrow color="#026670" />}>
              <Typography
                position="relative"
                fontFamily="FbJoker"
                fontSize="30px"
                fontWeight={900}
                color="secondary"
                sx={{
                  isolation: "isolate",
                  "&::before": {
                    content: "'Q'",
                    fontFamily: "Poppins",
                    position: "absolute",
                    fontSize: "80px",
                    fontWeight: "700",
                    color: "#F7F6F2",
                    right: "-27px",
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
    </Container>
  );
};

export default FAQ;
