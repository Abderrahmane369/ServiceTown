import {
    AbsoluteCenter,
    Box,
    Button,
    Center,
    HStack,
    Heading,
    Img,
    Input,
    InputGroup,
    InputLeftAddon,
    Text,
    VStack
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { currentservices } from "../data/services";

export default function ServiceHero({ serviceData }) {
    const service = currentservices[serviceData];
    const page = service.page;
    const hero = page.hero;

    return (
        <Box
            position="relative"
            width="100%"
            height="500px"
            backgroundImage={hero.img}
            backgroundSize="cover"
            backgroundPosition="center"
            _before={{
                content: '""',
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: "rgba(0, 0, 0, 0.12)"
            }}
        >
            <Center>
                <Box
                    bg="white"
                    width="37%"
                    textAlign="center"
                    p="30px"
                    mt="80px"
                    transform={["scale(0.9789)", "scale(0.9789)"]}
                    borderRadius="5px"
                >
                    <Heading fontSize="35px" mb="11px">
                        {hero.title} Services
                    </Heading>
                    <Text fontSize="18px" mb="30px" w="90%" mx="auto">
                        {hero.subtitle}
                    </Text>
                    <Text color="gray.500" mb="7px" fontSize="15px">
                        Confirm your location to see quality pros near you.
                    </Text>
                    <InputGroup
                        size="lg"
                        variant="filled"
                        colorScheme="red"
                        bgColor="white"
                    >
                        <InputLeftAddon>
                            <Box p="10px">
                                <FaLocationDot />
                            </Box>
                            <Text>Zip code</Text>
                        </InputLeftAddon>
                        <Input type="number" />

                        <br />
                    </InputGroup>
                    <Button bgColor="#ff2e93" color="white" w="full" p="25px" mt="10px">
                        Search
                    </Button>
                </Box>
            </Center>
        </Box>
    );
}
