import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react";

export default function Testimonials() {
    return (
        <Box mt="110px" bg="#E5F3F5" p="60px">
            <Container textAlign="center">
                <Heading as="h2" pb="30px" className="testimonials" fontSize="30px">
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
                <Box >
                    <Text fontSize="23px" color="gray.600" className="testimonials">
                        “Servicetown is arguably the best thing to come out of
                        the modern day tech revolution. Hiring a Pro can really
                        help make every facet of your life a breeze.”
                    </Text>
                    <Text mt="7px" color="gray.700" className="testimonials">
                        {" "}
                        -Bulma{" "}
                    </Text>
                </Box>

                <Box >
                    <Text fontSize="23px" color="gray.600" className="testimonials">
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
