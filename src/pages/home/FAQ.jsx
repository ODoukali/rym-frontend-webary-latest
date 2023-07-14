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

const faqArr = [
  {
    id: 1,
    question: "Itaque earum rerum hic tenetur a sapiente delectus reiciendis?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.",
  },
  {
    id: 2,
    question: "Et harum quidem rerum facilis est et expedita distinctio?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.",
  },
  {
    id: 3,
    question: "At vero eos et accusamus et iusto odio dignissimos ducimus?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.",
  },
  {
    id: 4,
    question:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.",
  },
  {
    id: 5,
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.",
  },
];

const FAQ = () => {
  return (
    <Container sx={{ mb: "150px" }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="sectionTitle" component="h2" mb="30px">
            Questions & <span className="highlighted">Answers</span>
          </Typography>
          <BlockBordered mb="50px">
            <Typography maxWidth="522px" variant="large">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore.
            </Typography>
          </BlockBordered>
          <Button variant="yellow" sx={{ position: "relative", zIndex: 1 }}>
            Send us Your Question
          </Button>
        </Box>
        <TextLink to="">Explore all Q&A</TextLink>
      </Stack>
      <Box
        position="relative"
        maxWidth="960px"
        bgcolor="#FCE181"
        borderRadius="20px"
        ml="auto"
        mt="-32px"
        overflow="hidden"
      >
        {faqArr.map((a) => (
          <Accordion
            sx={{
              boxShadow: "none",
              "&.Mui-expanded": {
                margin: "0 0 16px 0",
              },
              // "&::before": {
              //   content: "none",
              // },
              // "& .MuiAccordionSummary-root.Mui-expanded": {
              //   minHeight: "49px",
              // },
              // "& .MuiAccordionSummary-content.Mui-expanded": {
              //   margin: 0,
              // },
            }}
          >
            <AccordionSummary id={a.id}>
              <Typography>{a.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "0 14px 14px" }}>
              <BlockBordered>
                <Typography variant="large">{a.answer}</Typography>
              </BlockBordered>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
