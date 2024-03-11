import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react";
import loung2 from "../assets/loung2.svg";

export default function Testimonials() {
    return (
        <Box
            mt="110px"
            bg="#a8e7bf8f"
            p="60px"
            position="relative"
            _after={{
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${loung2})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100vh",
                zIndex: -1
            }}
        >
            <Container textAlign="center">
                <Heading
                    as="h2"
                    pb="30px"
                    className="testimonials"
                    fontSize="30px"
                >
                    {" "}
                    These reviews say it better.{" "}
                </Heading>
            </Container>

            <Box
                width="60%"
                display="flex"
                mx="auto"
                gap="40px"
                textAlign="left"
            >
                <Box>
                    <Text
                        fontSize="23px"
                        color="gray.600"
                        className="testimonials"
                    >
                        “Servicetown is arguably the best thing to come out of
                        the modern day tech revolution. Hiring a Pro can really
                        help make every facet of your life a breeze.”
                    </Text>
                    <Text mt="7px" color="gray.700" className="testimonials">
                        {" "}
                        -Bulma{" "}
                    </Text>
                </Box>

                <Box>
                    <Text
                        fontSize="23px"
                        color="gray.600"
                        className="testimonials"
                    >
                        “We found so many people on Servicetown. And some of the
                        people we found on Servicetown, like our electrician, we
                        use him now. He's great.“
                    </Text>
                    <Text mt="7px" color="gray.700" className="testimonials">
                        {" "}
                        -Lawrence{" "}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}
