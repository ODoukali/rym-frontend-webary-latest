import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import BlockBordered from "../../components/BlockBordered";

import { ReactComponent as Arrow } from "../../images/arrow.svg";

const arr = [
  {
    id: 1,
    question: "Lecture 1",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.",
  },
  {
    id: 2,
    question: "Lecture 2",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.",
  },
  {
    id: 3,
    question: "Lecture 3",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.",
  },
  {
    id: 4,
    question: "Lecture 1",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore.",
  },
];

const ResourcesTab = () => {
  return (
    <>
      {arr.map((a) => (
        <Accordion key={a.id}>
          <AccordionSummary
            id={a.id}
            expandIcon={<Arrow width={14} height={11} color="#026670" />}
          >
            <Typography
              position="relative"
              fontSize="20px"
              fontWeight={500}
              color="secondary"
            >
              {a.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <BlockBordered>
              <Typography variant="large" component="p">
                {a.answer}
              </Typography>
            </BlockBordered>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default ResourcesTab;
