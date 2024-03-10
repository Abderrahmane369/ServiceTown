import {
    AbsoluteCenter,
    Box,
    Button,
    Center,
    Container,
    HStack,
    Heading,
    Img,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    VStack
} from "@chakra-ui/react";
import heroImg from "../assets/hero.png";
import { FaSearch } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineFormatPaint } from "react-icons/md";
import { TiTree } from "react-icons/ti";
import { FaFireAlt } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa6";
import { MdOutlineHandyman } from "react-icons/md";

export default function Hero() {
    return (
        <Box w="100%" h="70vh">
            <Center w="100%" h="100%">
                <VStack p="30px">
                    <Box w="65%" >
                        <Heading
                            textAlign={"center"}
                            fontSize="50px"
                            fontWeight={1000}
                        >
                            Book trusted help for all home needs
                        </Heading>
                    </Box>

                    <Box mt="10vh" w="75%" mx="auto">
                        <InputGroup size="lg" variant="filled">
                            <Input
                                type="search"
                                bg="#dfdfdf"
                                borderRadius="50px"
                            />
                            <InputRightAddon as={Button}
                            bg="#dfdfdf"
                                borderRightRadius="50px"
                                _hover={{ bg: "#21c351" }}
                            >
                                    <FaSearch />
                            </InputRightAddon>
                        </InputGroup>
                    </Box>
                </VStack>
                <ServicesBarAdvanced_hero />
            </Center>
        </Box>
    );
}

function ServicesBarAdvanced_hero() {
    return (
        <Box>
            <HStack>
                <Box>
                    <MdOutlineCleaningServices/>
                    <Heading fontSize="20px">Cleaning</Heading>
                </Box>
            </HStack>
        </Box>
    )
}

// export default function Hero() {
//     return (
//         <Box>
//             <Img src={heroImg} userSelect="none" w="100%"/>
//         </Box>
//     );
// }
