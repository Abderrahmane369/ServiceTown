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
    Spacer,
    Checkbox,
    VStack,
    HStack
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import styles from "./styles";

export default function FormLogin() {
    return (
        <Box>
            <Box sx={styles.form.box1}>
                <Heading sx={styles.form.heading}>Welcome back!</Heading>
                <Form>
                    <Stack align="center" spacing="26px">
                        <Box>
                            <FormControl>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" {...styles.form.input} />
                            </FormControl>
                        </Box>

                        <Box>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input type="password" {...styles.form.input} />
                                <FormHelperText>
                                    <HStack>
                                        <Checkbox
                                            size="lg"
                                            colorScheme="blue"
                                        />
                                        <Text> Remember me</Text>
                                        <Spacer />

                                        <Box>
                                            <Link color="blue.400">
                                                Forgot password?
                                            </Link>
                                        </Box>
                                    </HStack>
                                </FormHelperText>
                            </FormControl>
                        </Box>
                        <Box width="100%">
                            <Button size="lg" width="100%" colorScheme="blue">
                                Login
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
                    <Box mt="15px" mb="5px">
                        <Text fontSize="15px">
                            By clicking Continue with Facebook or Sign up with
                            Google, you agree to the{" "}
                            <Link href="/terms" color="blue.400">
                                Terms of Use
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" color="blue.400">
                                Privacy Policy
                            </Link>
                            .
                        </Text>
                    </Box>
                    <Box width="100%">
                        <Button {...styles.form.button_google}>
                            Sign up with Google
                        </Button>
                    </Box>
                </Stack>
            </Box>
            <Box mt="-50px" mx="auto" width="100%">
                <Text textAlign="center">
                    {" "}
                    Don’t have an account? <Link color="blue.400" href="/signup">Sign up</Link>
                    .
                </Text>
            </Box>
        </Box>
    );
}
