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
import { pxToRem } from "px2rem2px";
import BlockBordered from "../../components/BlockBordered";
import TextLink from "../../components/TextLink";

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

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container
      disableGutters
      sx={{ mb: { xs: "86px", sm: "100px", md: pxToRem(150) } }}
    >
      <Box maxWidth={pxToRem(553)} className="rtl-section" marginLeft="auto">
        <Typography
          variant="sectionTitleHebrew"
          component="h2"
          mb={pxToRem(30)}
        >
          פראגעס און <span className="highlighted">ענטפערס</span>
        </Typography>
        <BlockBordered mb={{ xs: "40px", md: pxToRem(50) }}>
          <Typography
            maxWidth={pxToRem(522)}
            variant="large"
            fontFamily="Noto Sans Hebrew"
            fontWeight={700}
          >
            האט איר א פראגע? די איז די פלאץ וואו איר קענט פרעגן אייער פראגע און
            ר’ יעקב משה וועט אי”ה ענטפערן בתשואת חן. עס קען ווערן געפרעגט אויפן
            אופן אז יעדער וועט קענען זעהן (נאכן ווערן איבערגעקוקט) אדער קען דאס
            זיין אנאנום און מ’וועט דאס נישט ארויפשטעלן.
          </Typography>
        </BlockBordered>
      </Box>
      <Box
        position="relative"
        maxWidth={pxToRem(960)}
        mx={{ xs: "-25px", sm: 0 }}
        mr="auto"
        mt="50px"
        className="rtl-section"
      >
        {faqArr.map((a) => (
          <Accordion
            key={a.id}
            expanded={expanded === `panel${a.id}`}
            onChange={handleChange(`panel${a.id}`)}
            sx={{
              "& .MuiAccordionSummary-root, & .MuiAccordionSummary-root.Mui-expanded":
                {
                  py: 0,
                  px: pxToRem(60),
                },
            }}
          >
            <AccordionSummary
              id={a.id}
              expandIcon={<Chevron color="#026670" />}
            >
              <Typography
                position="relative"
                fontFamily="PloniBold"
                fontSize={pxToRem(30)}
                lineHeight={pxToRem(30)}
                color="secondary"
                sx={{
                  isolation: "isolate",
                  "&::before": {
                    content: "'Q'",
                    fontFamily: "Poppins",
                    position: "absolute",
                    fontSize: pxToRem(80),
                    fontWeight: "700",
                    color: "#F7F6F2",
                    right: { xs: 0, sm: pxToRem(-27) },
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
              sx={{
                padding: {
                  xs: "0 25px 30px !important",
                  sm: `0 ${pxToRem(60)} ${pxToRem(38)} !important`,
                },
              }}
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
      <Stack
        flexDirection="row"
        alignItems="center"
        flexWrap="wrap"
        gap={{
          xs: "10px",
          md: pxToRem(20),
          "& button": {
            "@media(max-width: 767px)": { width: "219px" },
          },
        }}
        mt="40px"
      >
        <Button variant="outlined">Explore All Q&A</Button>
        <Button variant="yellow">Send us Your Question</Button>
      </Stack>
    </Container>
  );
};

export default FAQ;
