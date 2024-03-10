import {
    Box,
    Button,
    Container,
    Divider,
    HStack,
    Link,
    Text
} from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa6";
export default function PProfileNavbar() {
    return (
        <Box>
            <Box mb="30px">
                <Button leftIcon={<FaChevronLeft />}> See pros</Button>
            </Box>
            <HStack spacing="25px" color="gray" fontSize="14px">
                <Link>About</Link>
                <Link>Photos</Link>
                <Link>Reviews</Link>
                <Link>Credentials</Link>
            </HStack>
            <Divider mt="15px" borderColor="gray.300" w="65%" />
        </Box>
    );
}
