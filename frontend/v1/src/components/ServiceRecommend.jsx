import {
    Box,
    Center,
    Container,
    HStack,
    Heading,
    Text,
    VStack
} from "@chakra-ui/react";
import { PiCurrencyCircleDollarLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";

export default function ServiceRecommend() {
    return (
        <Box
            maxW="100%"
            border="none"
            borderTop="1px solid #dadada"
            mt="15vh"
            p="5vh"
        >
            <Container>
                <Heading fontSize="20px" textAlign="center" mb="5vh">
                    Why hire professionals in Servicetown?
                </Heading>
                <Center>
                    <HStack align="start" spacing="20px">
                        <VStack>
                            <PiCurrencyCircleDollarLight
                                size="4.5vh"
                                color="#5968e2"
                            />
                            <Heading fontSize="17px" mt="20px">
                                Free to use
                            </Heading>
                            <Box w="40vh" textAlign={"center"}>
                                <Text fontSize="15px">
                                    You never pay to use Servicetown: Get cost
                                    estimates, contact pros, and even book the
                                    job—all for no cost.
                                </Text>
                            </Box>
                        </VStack>
                        <VStack>
                            <GoPeople size="4vh" color="#5968e2" />
                            <Heading fontSize="17px" mt="20px">
                                Compare prices side-by-side{" "}
                            </Heading>
                            <Box w="40vh" textAlign={"center"}>
                                <Text fontSize="15px">
                                    You’ll know how much your project costs even
                                    before booking a pro.
                                </Text>
                            </Box>
                        </VStack>
                        <VStack>
                            <IoMdCheckmark size="4vh" color="#5968e2" />
                            <Heading fontSize="17px" mt="20px">
                                Hire with confidence{" "}
                            </Heading>
                            <Box w="40vh" textAlign={"center"}>
                                <Text fontSize="15px">
                                    With access to 1M+ customer reviews and the
                                    pros’ work history, you’ll have all the info
                                    you need to make a hire.
                                </Text>
                            </Box>
                        </VStack>
                    </HStack>
                </Center>
            </Container>
        </Box>
    );
}
