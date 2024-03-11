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
import { cities } from "../data/cities.js";
import { useEffect, useState } from "react";

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
            p: "30px",
            mx: "auto",
            mt: "3%",
            mb: "3%",
            pt: "40px",
            pb: "40px",
            w: "512px",
            bgColor: "white",
            border: "1px solid",
            borderRadius: "10px",
            borderColor: "gray.200",
            boxShadow:
                "rgba(0, 230, 179, 0.4) 0px 5px, rgba(0, 230, 179, 0.3) 0px 10px, rgba(0, 230, 179, 0.2) 0px 15px, rgba(0, 230, 179, 0.1) 0px 20px, rgba(0, 230, 179, 0.05) 0px 25px"
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
            <Heading
                as="h1"
                textAlign="center"
                fontSize="40px"
                mt="9vh"
                color="#000"
            >
                Create your account
            </Heading>
            <Box {...styles.box}>
                <Form>
                    <Stack align="center" spacing="13px">
                        <InputFullName />
                        <InputEmail />
                        <InputPassword />
                        <InputPhone />

                        <HStack width="100%" align="center" mb="25px" mt="30px">
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
                    <Box position="relative" my="5px">
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
            <Box my="10vh" mx="auto" width="100%">
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
                    variant="filled"
                    bgColor="#f1f1f1"
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
                    variant="filled"
                    type="email"
                    bgColor="#f1f1f1"
                    size="lg"
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
                    variant="filled"
                    type="password"
                    size="lg"
                    bgColor="#f1f1f1"
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
                        bgColor="#f1f1f1"
                        variant="filled"
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
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
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
                <RadioGroup colorScheme="blue">
                    <Stack direction="row">
                        <Radio value="customer">Customer</Radio>
                        <Radio value="provider">Provider</Radio>
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
                color="#00e6b3"
                width="100%"
                onClick={onClick}
            >
                Create Account
            </Button>
        </Box>
    );
};

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
