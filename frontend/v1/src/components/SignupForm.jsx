import {
    FormControl,
    Heading,
    Input,
    Box,
    Stack,
    Flex,
    FormLabel,
    FormHelperText,
    List,
    ListItem,
    UnorderedList,
    Text,
    Link,
    Button,
    Container,
    Divider,
    AbsoluteCenter,
    Spacer
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function FormSignUp() {
    return (
        <Box>
            <Box
                p="30px"
                mx="auto"
                my="7%"
                w="512px"
                bg="white"
                border="1px solid"
                borderRadius="5px"
                borderColor="gray.200"
            >
                <Heading as="h1" mb="33" textAlign="center" fontSize="30px">
                    Create your account
                </Heading>
                <Form>
                    <Stack align="center" spacing="26px">
                        <Flex w="446px" gap="15px">
                            <Box width="100%">
                                <FormControl isRequired>
                                    <FormLabel>First name</FormLabel>
                                    <Input
                                        type="text"
                                        fontSize="15px"
                                        borderColor="gray.400"
                                        size="lg"
                                        focusBorderColor="black"
                                    />
                                </FormControl>
                            </Box>
                            <Box width="100%">
                                <FormControl isRequired>
                                    <FormLabel>Last name</FormLabel>
                                    <Input
                                        fontSize="15px"
                                        type="text"
                                        size="lg"
                                        borderColor="gray.400"
                                        focusBorderColor="black"
                                    />
                                </FormControl>
                            </Box>
                        </Flex>
                        <Box>
                            <FormControl isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    fontSize="15px"
                                    type="email"
                                    size="lg"
                                    w="446px"
                                    borderColor="gray.400"
                                    focusBorderColor="black"
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    size="lg"
                                    fontSize="15px"
                                    w="446px"
                                    borderColor="gray.400"
                                    focusBorderColor="black"
                                />
                                <FormHelperText>
                                    Your password must:
                                    <UnorderedList>
                                        <ListItem>
                                            Be 8-20 characters long
                                        </ListItem>
                                        <ListItem>
                                            Contain at least one letter and one
                                            number
                                        </ListItem>
                                        <ListItem>
                                            Not contain spaces, special
                                            characters, or emoji
                                        </ListItem>
                                    </UnorderedList>
                                </FormHelperText>
                            </FormControl>
                        </Box>
                        <Box>
                            <Text fontSize="15px">
                                By clicking Create Account, you agree to the{" "}
                                <Link color="blue.400">Terms of Use</Link> and{" "}
                                <Link color="blue.400">Privacy Policy</Link>.
                            </Text>
                        </Box>
                        <Box width="100%">
                            <Button size="lg" width="100%" colorScheme="blue">
                                Create Account
                            </Button>
                        </Box>
                    </Stack>
                </Form>
                <Stack>
                    <br />
                    <Box position="relative">
                        <Divider border="1px solid" borderColor="gray.300" />
                        <AbsoluteCenter bg="white" px="4" color="gray.600">
                            OR
                        </AbsoluteCenter>
                    </Box>
                    <Box mt="15px">
                        <Text fontSize="15px">
                            By clicking Sign up with Facebook or Sign up with
                            Google, you agree to the{" "}
                            <Link href="/terms" color="blue.400">Terms of Use</Link> and{" "}
                            <Link href="/privacy" color="blue.400">Privacy Policy</Link>.
                        </Text>
                    </Box>
                    <Box width="100%">
                        <Button
                            size="lg"
                            variant="outline"
                            width="100%"
                            leftIcon={<FcGoogle size="20px" />}
                        >
                            Sign up with Google
                        </Button>
                    </Box>
                </Stack>
            </Box>
            <Box mt="-50px" mx="auto" width="100%">
                <Text textAlign="center">
                    {" "}
                    Already have an account? <Link href="/login" color="blue.400">Log in</Link>.
                </Text>
            </Box>
        </Box>
    );
}
