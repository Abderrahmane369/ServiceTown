import {
    Box,
    Button,
    Flex,
    HStack,
    Heading,
    Link,
    Spacer
} from "@chakra-ui/react";
import styles from "./styles";

export default function Navbar() {
    return (
        <Flex {...styles.navbar}>
            <Link href="/" _hover={{ textDecoration: "none" }}>
                <Heading as="h1" className="logo">
                    servicetown
                </Heading>
            </Link>

            <Spacer />

            <Box pr="40px">
                <Link href="/services" fontWeight="500" fontSize="medium">
                    Services
                </Link>
            </Box>
            <Box pr="20px">
                <Link href="/blog" fontWeight="500" fontSize="medium">
                    Blog
                </Link>
            </Box>
            <Button variant="ghost" mr="5px" _hover={{ textDecoration: "none" }}>
                <Link href="/login" fontWeight="500" fontSize="medium">
                    Log In
                </Link>
            </Button>

            <Button colorScheme="blue">
                <Link href="/signup" fontWeight="500" fontSize="medium" _hover={{ textDecoration: "none" }}>
                    Sign Up
                </Link>
            </Button>
        </Flex>
    );
}
