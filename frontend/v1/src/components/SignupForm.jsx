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
    HStack,
    FormErrorMessage,
    Fade,
    ScaleFade,
    useToast
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, gprovider } from "../config/firebase";
import { _cities } from "../data/cities.js";
import { Formik, Field } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Sign in with google
export const googleSignIn = async () => {
    const result = await signInWithPopup(auth, gprovider);

    if (result?.user) console.log("User signed in with google", result.user);
    else console.log("User did not sign in with google");

    return result;
};

// Styles
const styles = {
    box: {
        p: "30px",
        mx: "auto",
        mt: "2%",
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

export default function FormSignUp() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const toastSuccesfullyCreatedAccount = useToast();

    // Create a new user
    async function submit(values) {
        setLoading(true);
        try {
            await fetch("http://127.0.0.1:3000/api/v1/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: `${values.firstname} ${values.lastname}`,
                    email: values.email,
                    password: values.password,
                    phone: values.phone,
                    city_id: values.city_id,
                    role: values.role
                })
            });

            setTimeout(() => {
                navigate("/login");
                toastSuccesfullyCreatedAccount({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 5173,
                    isClosable: true,
                    position: "top",

                });
            }, 4500);
        } catch (error) {
            toastSuccesfullyCreatedAccount({
                title: "An error occurred.",
                description: "Unable to create your account.",
                status: "error",
                duration: 9000,
                isClosable: true
            });
            console.error("Error:", error);
        }
    }

    return (
        <Box>
            <Heading
                as="h1"
                textAlign="center"
                fontSize="30px"
                mt="9vh"
                color="#000"
            >
                Create an account
            </Heading>
            <Text
                textAlign="center"
                fontSize="20px"
                mt="8px"
                color="gray.600"
                fontWeight="light"
            >
                It's quick and easy.
            </Text>
            <Box sx={{ ...styles.box }}>
                <Formik
                    initialValues={{
                        firstname: "",
                        lastname: "",
                        email: "",
                        password: "",
                        phone: "",
                        city_id: "",
                        role: ""
                    }}
                    onSubmit={(v) => submit(v)}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <Stack align="center" spacing="13px">
                                <HStack align="start" spacing="10px" w="full">
                                    <InputFirstName
                                        errors={errors.firstname}
                                        touched={touched.firstname}
                                    />
                                    <InputLastName
                                        errors={errors.lastname}
                                        touched={touched.lastname}
                                    />
                                </HStack>
                                <InputEmail
                                    errors={errors.email}
                                    touched={touched.email}
                                />
                                <InputPassword
                                    errors={errors.password}
                                    touched={touched.password}
                                />
                                <InputPhone
                                    errors={errors.phone}
                                    touched={touched.phone}
                                />

                                <HStack
                                    width="100%"
                                    align="center"
                                    mb="25px"
                                    mt="30px"
                                >
                                    <RadioRole />
                                    <CitySelector />
                                </HStack>
                                <Box>
                                    <Text fontSize="15px">
                                        By clicking Create Account, you agree to
                                        the{" "}
                                        <Link color="blue.400">
                                            Terms of Use
                                        </Link>{" "}
                                        and{" "}
                                        <Link color="blue.400">
                                            Privacy Policy
                                        </Link>
                                        .
                                    </Text>
                                </Box>
                                <CreateAccButton loading={loading} />
                            </Stack>
                        </form>
                    )}
                </Formik>

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

const InputFirstName = ({ errors, touched }) => {
    return (
        <Stack width="100%" align="end">
            <FormControl isRequired isInvalid={!!errors && touched}>
                <FormLabel>First name</FormLabel>
                <Field
                    as={Input}
                    type="text"
                    fontSize="15px"
                    name="firstname"
                    variant="outline"
                    borderColor="gray.300"
                    size="lg"
                    focusBorderColor="black"
                    validate={(value) => {
                        if (!value) {
                            return "First name is required";
                        }
                        if (value.length < 2) {
                            return "First name must be at least 2 characters long";
                        }
                    }}
                />
                <Fade in={errors}>
                    <FormErrorMessage transition="all 0.15s ease">
                        {errors}
                    </FormErrorMessage>
                </Fade>
            </FormControl>
        </Stack>
    );
};

const InputLastName = ({ errors, touched }) => {
    return (
        <Stack width="100%" align="end">
            <FormControl isRequired isInvalid={!!errors && touched}>
                <FormLabel>Last name</FormLabel>
                <Field
                    as={Input}
                    type="text"
                    fontSize="15px"
                    name="lastname"
                    variant="outline"
                    borderColor="gray.300"
                    size="lg"
                    focusBorderColor="black"
                    validate={(value) => {
                        if (!value) {
                            return "Last name is required";
                        }
                        if (value.length < 2) {
                            return "Last name must be at least 2 characters long";
                        }
                    }}
                />
                <ScaleFade initialScale={0.9} in={errors}>
                    <FormErrorMessage transition="all 0.15s ease">
                        {errors}
                    </FormErrorMessage>
                </ScaleFade>{" "}
            </FormControl>
        </Stack>
    );
};

const InputEmail = ({ errors, touched }) => {
    return (
        <Box width="100%">
            <FormControl isRequired isInvalid={!!errors && touched}>
                <FormLabel>Email</FormLabel>
                <Field
                    as={Input}
                    fontSize="15px"
                    variant="outline"
                    borderColor="gray.300"
                    type="email"
                    name="email"
                    size="lg"
                    focusBorderColor="black"
                    validate={(value) => {
                        if (!value) return "Email address is required";
                        else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                                value
                            )
                        )
                            return "Invalid email address";
                    }}
                />
                <Fade in={errors}>
                    <FormErrorMessage transition="all 0.15s ease">
                        {errors}
                    </FormErrorMessage>
                </Fade>{" "}
            </FormControl>
        </Box>
    );
};

const InputPassword = ({ errors, touched }) => {
    return (
        <Box width="100%">
            <FormControl isInvalid={!!errors && touched} isRequired>
                <FormLabel>Password</FormLabel>
                <Field
                    as={Input}
                    fontSize="15px"
                    variant="outline"
                    borderColor="gray.300"
                    name="password"
                    type="password"
                    size="lg"
                    focusBorderColor="black"
                    validate={(value) => {
                        if (!value) {
                            return "Password name is required";
                        }
                        if (value.length <= 6) {
                            return "Password must be at least 6 characters long";
                        }
                    }}
                />
                <Fade in={errors}>
                    <FormErrorMessage transition="all 0.15s ease">
                        {errors}
                    </FormErrorMessage>
                </Fade>{" "}
            </FormControl>
        </Box>
    );
};

const InputPhone = ({ errors, touched }) => {
    return (
        <Box width="100%">
            <FormControl isRequired isInvalid={!!errors && touched}>
                <FormLabel>Phone number</FormLabel>
                <InputGroup size="lg">
                    <Field
                        as={Input}
                        borderColor="gray.300"
                        fontSize="15px"
                        type="tel"
                        name="phone"
                        variant="outline"
                        focusBorderColor="black"
                        pattern="^\+?[0-9]{7,15}$"
                        validate={(value) => {
                            let error = "";
                            const phoneRegex = /^\+?[0-9]{7,15}$/;
                            if (!value) {
                                error = "Phone number is required";
                            } else if (!phoneRegex.test(value)) {
                                error = "Phone number  is invalid";
                            }
                            return error;
                        }}
                    />
                </InputGroup>
                <Fade in={errors}>
                    <FormErrorMessage transition="all 0.15s ease">
                        {errors}
                    </FormErrorMessage>
                </Fade>{" "}
            </FormControl>
        </Box>
    );
};

const CitySelector = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        (async () => setCities(await _cities()))();
    }, []);

    return (
        <Box h="55px" w="40vh">
            <FormControl isRequired>
                <FormLabel>City</FormLabel>
                <Field
                    as={Select}
                    placeholder="Select city"
                    variant="flushed"
                    name="city_id"
                >
                    {cities.map((city, index) => (
                        <option key={index} value={city.id}>
                            {city.name}
                        </option>
                    ))}
                </Field>
            </FormControl>
        </Box>
    );
};

const RadioRole = () => {
    return (
        <Box width="100%">
            <FormControl isRequired>
                <FormLabel>Become a tasker</FormLabel>
                <RadioGroup colorScheme="blue" name="role">
                    <Stack direction="row">
                        <Field as={Radio} value="customer">
                            Yes
                        </Field>
                        <Field as={Radio} value="provider">
                            No
                        </Field>
                    </Stack>
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

const CreateAccButton = ({ loading }) => {
    return (
        <Box width="100%">
            <Button
                size="lg"
                type="submit"
                variant="solid"
                bgColor="#00e6b3"
                color="white"
                width="100%"
                isLoading={loading}
            >
                Create Account
            </Button>
        </Box>
    );
};

// fetch('http://localhost:4567/users')
//   .then(response => response.json())
//   .then(data => console.log(data));
