import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    HStack
} from "@chakra-ui/react";
import PProfileAbout from "../components/PProfileAbout";
import PProfileNavbar from "../components/PProfileNavbar";
import { FiMessageCircle } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import SlctorStickyRight from "../components/SlctorStickyRight";
import PProfilePhotos from "../components/PProfilePhotos";
import PProfileReviews from "../components/PProfileReviews";

export default function ProviderProfile() {
    return (
        <Box borderBottom="1px solid" borderColor="gray.200">
            <Container maxW="70%" mt="20px" bg="white" p="30px" pt="25px">
                <PProfileNavbar />

                <HStack align="start">
                    <Box>
                        <PProfileAbout />
                        <Contacting />
                        <Divider borderColor="gray.300" w="95%" />
                        <PProfilePhotos />
                        <Divider borderColor="gray.300" w="95%" />
                        <PProfileReviews />
                    </Box>
                    <SlctorStickyRight />
                </HStack>
            </Container>
        </Box>
    );
}

function Contacting() {
    return (
        <Flex w="95%" gap="15px" mt="30px" mb="30px">
            {" "}
            <Button
                flex="1"
                h="50px"
                variant="outline"
                color="blue.400"
                border="2px solid"
                borderColor="gray.300"
                leftIcon={<FiMessageCircle size={20} />}
            >
                Message
            </Button>
            <Button
                flex="1"
                h="50px"
                variant="outline"
                color="blue.400"
                border="2px solid"
                borderColor="gray.300"
                leftIcon={<IoCallOutline size={20} />}
            >
                Request a call
            </Button>
        </Flex>
    );
}
