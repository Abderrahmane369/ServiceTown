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

export default function ProviderProfile() {
    return (
        <Container maxW="65%" mt="20px" bg="white" p="20px">
                <Box>
                    <PProfileNavbar />
                    <PProfileAbout />
                    <Contacting />
                    <Divider />
                </Box>
                <SlctorStickyRight />
        </Container>
    );
}

function Contacting() {
    return (
        <Flex w="70%" gap="15px" mt="30px" mb="30px">
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
