import {
    FormControl,
    Heading,
    Input,
    Box,
    Stack,
    FormLabel,
    FormHelperText,
    Text,
    Link,
    Button,
    Divider,
    AbsoluteCenter,
    Spacer,
    Checkbox,
    HStack,
    Fade,
    FormErrorMessage
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import styles from "./styles";
import { Field, Formik } from "formik";
import { auth, gprovider } from "../config/firebase";
import { signInWithPopup, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";
import { useState } from "react";

export const googleSignIn = async () => {
    const result = await signInWithPopup(auth, gprovider);

    if (result?.user) console.log("User signed in with google", result.user);
    else console.log("User did not sign in with google");

    return result;
};

export default function FormLogin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    function submit(values) {
        fetch("http://localhost:3000/api/v1/users/")
            .then((response) => response.json())
            .then((data) => {
                const user = data.find(
                    (user) =>
                        user.email === values.email &&
                        user.password === values.password
                );

                if (user) {
                    console.log("User found");
                    console.log(user);

                    localStorage.clear();

                    if (values.checkbox) {
                        localStorage.setItem("user_role", user.role);
                        localStorage.setItem("user_phone", user.phone);
                        localStorage.setItem("user_id", user.id);
                        localStorage.setItem("user_name", user.name);
                        localStorage.setItem("user_email", user.email);
                    }

                    
                    setLoading(true);
                    setTimeout(() => {
                        navigate("/");
                        setTimeout(() => navigate(0), 1000)
                    }, 4573)

                    
                } else console.log("User not found");
            });
    }
    return (
        <Box>
            <Box sx={styles.form.box1}>
                <Heading sx={styles.form.heading}>Welcome back!</Heading>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        checkbox: false
                    }}
                    onSubmit={(v) => submit(v)}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <Stack align="center" spacing="15px">
                                <InputEmail
                                    errors={errors.firstname}
                                    touched={touched.firstname}
                                />
                                <InputPassword
                                    errors={errors.firstname}
                                    touched={touched.firstname}
                                />
                                <ButtonSubmit loading={loading}/>
                            </Stack>
                        </form>
                    )}
                </Formik>
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
                        <Button
                            {...styles.form.button_google}
                            onClick={() => {
                                googleSignIn();
                                setTimeout(() => {
                                    navigate("/");
                                }, 3500);
                            }}
                        >
                            Sign up with Google
                        </Button>
                    </Box>
                </Stack>
            </Box>
            <Box my="50px" mx="auto" width="100%">
                <Text textAlign="center">
                    {" "}
                    Don’t have an account?{" "}
                    <Link color="blue.400" href="/signup">
                        Sign up
                    </Link>
                    .
                </Text>
            </Box>
        </Box>
    );
}

const InputEmail = ({ errors, touched }) => {
    return (
        <Box>
            <FormControl isRequired isInvalid={!!errors && touched}>
                <FormLabel>Email address</FormLabel>
                <Field
                    as={Input}
                    type="email"
                    {...styles.form.input}
                    name="email"
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
        <Box>
            <FormControl isRequired isInvalid={!!errors && touched}>
                <FormLabel>Password</FormLabel>
                <Field
                    as={Input}
                    type="password"
                    name="password"
                    {...styles.form.input}
                    validate={(value) => {
                        if (!value) {
                            return "Password name is required";
                        }
                    }}
                />
                <FormHelperText>
                    <HStack>
                        <Box>
                            <FormControl isRequired={false} display="block">
                                <HStack>
                                    <Field
                                        as={Checkbox}
                                        size="lg"
                                        colorScheme="blue"
                                        name="checkbox"
                                    />
                                    <Text> Remember me</Text>
                                </HStack>
                            </FormControl>
                        </Box>

                        <Spacer />

                        <Box>
                            <Link color="blue.400">Forgot password?</Link>
                        </Box>
                    </HStack>
                </FormHelperText>
                <Fade in={errors}>
                    <FormErrorMessage transition="all 0.15s ease">
                        {errors}
                    </FormErrorMessage>
                </Fade>{" "}
            </FormControl>
        </Box>
    );
};

const ButtonSubmit = ({ loading }) => {
    return (
        <Box width="100%" mt="25px">
            <Button
                size="lg"
                width="100%"
                color="#00e6b3"
                type="submit"
                isLoading={loading}
            >
                Login
            </Button>
        </Box>
    );
};
