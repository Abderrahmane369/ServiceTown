import { Box, Button, Flex, HStack, Heading, Spacer } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Flex as="nav" p="10px" alignItems="center" pl="113px" pr="113px">
            <Heading as="h1">servicetown</Heading>
            <Spacer />

            <Box pr="40px" fontWeight="500" fontSize="medium">
                Services
            </Box>
            <Box pr="20px" fontWeight="500" fontSize="medium">
                Blog
            </Box>
            <Button variant="ghost">Log In</Button>
            <Button colorScheme="blue">Sign Up</Button>
        </Flex>
    );
}
