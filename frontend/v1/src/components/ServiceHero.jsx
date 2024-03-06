import {
    AbsoluteCenter,
    Box,
    Button,
    Center,
    Heading,
    Img,
    Input,
    InputGroup,
    InputLeftAddon,
    Text
} from "@chakra-ui/react";
import tvmounting from "../assets/tv-mounting.jpg";
import { FaLocationDot } from "react-icons/fa6";

export default function ServiceHero() {
    return (
        <Box
            width="100%"
            height="500px"
            backgroundImage={`url(${tvmounting})`}
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <Center>
                <Box
                    bg="white"
                    width="35%"
                    textAlign="center"
                    p="20px"
                    mt="100px"
                    transform={["scale(0.99)", "scale(0.99)"]}
                    borderRadius="5px"
                >
                    <Heading size="xl" mb="12px">
                        TV Mounting Services
                    </Heading>
                    <Text fontSize="20px" mb="30px">
                        Taskers can help with TV mount installation to get you
                        the best views.
                    </Text>
                    <Text color="gray" mb="7px" fontSize="15px">
                        Confirm your location to see quality pros near you.
                    </Text>

                    <InputGroup size="lg">
                        <InputLeftAddon>
                            <Box p="10px">
                                <FaLocationDot />
                            </Box>
                            <Text>Zip code</Text>
                        </InputLeftAddon>
                        <Input type="number" />
                    </InputGroup>
                    <br />
                    <Button colorScheme="blue" width="100%" p="25px">
                        Search
                    </Button>
                </Box>
            </Center>
        </Box>
    );
}
