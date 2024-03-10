import {
    FormControl,
    Heading,
    Input,
    Box,
    Stack,
    FormLabel,
    Text,
    Link,
    Button,
    Divider,
    AbsoluteCenter,
    InputGroup,
    RadioGroup,
    Radio,
    Select,
    HStack
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, gprovider } from "../config/firebase";

// Sign in with google
export const googleSignIn = async () => {
    const result = await signInWithPopup(auth, gprovider);

    if (result?.user) console.log("User signed in with google", result.user);
    else console.log("User did not sign in with google");

    return result;
};

export default function FormSignUp() {
    // Create a new user
    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
    };

    // Styles
    const styles = {
        box: {
            p: "35px",
            mx: "auto",
            mt: "2%",
            mb: "7%",
            w: "512px",
            bg: "white",
            border: "1px solid",
            borderRadius: "5px",
            borderColor: "gray.200"
        },
        googleBtn: {
            size: "lg",
            variant: "outline",
            width: "100%",
            leftIcon: <FcGoogle size="20px" />
        }
    };

    return (
        <Box>
            <Heading as="h1" textAlign="center" fontSize="35px" mt="10vh">
                Create your account
            </Heading>
            <Box {...styles.box}>
                <Form>
                    <Stack align="center" spacing="20px">
                        <InputFullName />
                        <InputEmail />
                        <InputPassword />
                        <InputPhone />

                        <HStack width="100%" align="center" mb="35px">
                            <RadioRole />
                            <CitySelector />
                        </HStack>
                        <Box>
                            <Text fontSize="15px">
                                By clicking Create Account, you agree to the{" "}
                                <Link color="blue.400">Terms of Use</Link> and{" "}
                                <Link color="blue.400">Privacy Policy</Link>.
                            </Text>
                        </Box>
                        <CreateAccButton onClick={signIn} />
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
                        <Button {...styles.googleBtn} onClick={googleSignIn}>
                            Sign up with Google
                        </Button>
                    </Box>
                </Stack>
            </Box>
            <Box mt="-50px" mx="auto" width="100%">
                <Text textAlign="center">
                    {" "}
                    Already have an account?{" "}
                    <Link href="/login" color="blue.400">
                        Log in
                    </Link>
                    .
                </Text>
            </Box>
        </Box>
    );
}

const InputFullName = () => {
    return (
        <Box width="100%">
            <FormControl isRequired>
                <FormLabel>Full name</FormLabel>
                <Input
                    type="text"
                    fontSize="15px"
                    borderColor="gray.400"
                    size="lg"
                    focusBorderColor="black"
                />
            </FormControl>
        </Box>
    );
};

const InputEmail = ({ setEmail }) => {
    return (
        <Box width="100%">
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    fontSize="15px"
                    type="email"
                    size="lg"
                    borderColor="gray.400"
                    focusBorderColor="black"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </FormControl>
        </Box>
    );
};

const InputPassword = ({ setPassword }) => {
    return (
        <Box width="100%">
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                    fontSize="15px"
                    type="password"
                    size="lg"
                    borderColor="gray.400"
                    focusBorderColor="black"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </FormControl>
        </Box>
    );
};

const InputPhone = () => {
    return (
        <Box width="100%">
            <FormControl isRequired>
                <FormLabel>Phone number</FormLabel>

                <InputGroup size="lg">
                    <Input
                        fontSize="15px"
                        type="tel"
                        borderColor="gray.400"
                        focusBorderColor="black"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </InputGroup>
            </FormControl>
        </Box>
    );
};

const CitySelector = () => {
    return (
        <Box h="55px" w="40vh">
            <FormControl isRequired>
                <FormLabel>City</FormLabel>
                <Select placeholder="Select city" variant="flushed">
                    <option value="option1">Option 1</option>
                    <option value="option1">Option 1</option>
                    <option value="option1">Option 1</option>
                </Select>
            </FormControl>
        </Box>
    );
};

const RadioRole = () => {
    return (
        <Box width="100%">
            <FormControl isRequired>
                <FormLabel>Role</FormLabel>
                <RadioGroup>
                    <Stack direction="row">
                        <Radio value="1">Customer</Radio>
                        <Radio value="2">Provider</Radio>
                    </Stack>
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

const CreateAccButton = ({ onClick }) => {
    return (
        <Box width="100%">
            <Button
                size="lg"
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="100%"
                onClick={onClick}
            >
                Create Account
            </Button>
        </Box>
    );
};
