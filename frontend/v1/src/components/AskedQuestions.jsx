import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Container,
    Heading,
    Text
} from "@chakra-ui/react";

import { GoPlus } from "react-icons/go";
import { questions } from "../data/askedQuestions";

export default function AskedQuestions({ serviceData }) {
    const fquestions = questions[serviceData];

    return (
        <Box mt="30vh">
            <Container>
                <Heading textAlign="center" fontSize="25px" mb="5vh">
                    Frequently asked questions
                </Heading>

                <Accordion allowMultiple w="100%" mx="auto" gap="20px">
                    {fquestions.map((question, index) => (
                        <Accordo
                            key={index}
                            title={question.title}
                            content={question.content}
                        />
                    ))}
                </Accordion>
            </Container>
        </Box>
    );
}

const Accordo = ({ title, content }) => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton fontSize="25px">
                    <Box as="span" flex="1" textAlign="left">
                        {title}
                    </Box>
                    <GoPlus />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{content}</AccordionPanel>
        </AccordionItem>
    );
};
