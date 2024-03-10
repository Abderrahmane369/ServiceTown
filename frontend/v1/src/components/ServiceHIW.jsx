import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Container,
    HStack,
    Heading,
    Img,
    Text
} from "@chakra-ui/react";
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";

export default function HowItWorks() {
    return (
        <Container maxW="75%" mt="15vh" textAlign="center">
            <Heading fontSize="30px" mb="15px">
                How it works
            </Heading>
            <HStack spacing="10vh" align="start" textAlign="left">
                <Box w="550px" transform={["scale(0.9189)", "scale(0.9189)"]}>
                    <Img
                        mx="auto"
                        boxSize="150px"
                        src="https://res.cloudinary.com/taskrabbit-com/image/upload/h_195,f_auto,q_auto/static/how-it-works-step-1"
                    ></Img>
                    <Box>
                        <Box>
                            <HStack>
                                <TbCircleNumber1 size="30px" color="gray" />
                                <Heading fontSize="22px" fontWeight={500}>
                                    Describe your task
                                </Heading>
                            </HStack>
                            <Text color="gray.600">
                                Tell us what you need done, when and where it
                                works for you.
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box w="550px" transform={["scale(0.9189)", "scale(0.9189)"]}>
                    <Img
                        boxSize="150px"
                        mx="auto"
                        src="https://res.cloudinary.com/taskrabbit-com/image/upload/h_195,f_auto,q_auto/static/how-it-works-step-2"
                    ></Img>
                    <Box>
                        <Box>
                            <HStack>
                                <TbCircleNumber2 size="30px" color="gray" />
                                <Heading fontSize="22px" fontWeight={500}>
                                    Choose Your Tasker
                                </Heading>
                            </HStack>
                            <Text color="gray.600">
                                Browse trusted Taskers by skills, reviews, and
                                price. Chat with them to confirm details.
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box w="550px" transform={["scale(0.9189)", "scale(0.9189)"]}>
                    <Img
                        boxSize="150px"
                        mx="auto"
                        src="https://res.cloudinary.com/taskrabbit-com/image/upload/h_195,f_auto,q_auto/static/how-it-works-step-3"
                    ></Img>
                    <Box>
                        <Box>
                            <HStack>
                                <TbCircleNumber3 size="30px" color="gray" />
                                <Heading fontSize="22px" fontWeight={500}>
                                    Get It Done!
                                </Heading>
                            </HStack>
                            <Text color="gray.600">
                                Your Tasker arrives and gets the job done. Pay
                                securely and leave a review, all through
                                Servictown.
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </HStack>
        </Container>
    );
}
