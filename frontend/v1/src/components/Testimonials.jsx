import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react";

export default function Testimonials() {
    return (
        <Box mt="110px">
            <Container>
                <Heading as="h2" pb="30px" className="testimonials">
                    {" "}
                    These reviews say it better.{" "}
                </Heading>
            </Container>

            <Box
                width="65%"
                display="flex"
                mx="auto"
                gap="30px"
                textAlign="center"
            >
                <Box >
                    <Text fontSize="25px" color="gray.700" className="testimonials">
                        “Servicetown is arguably the best thing to come out of
                        the modern day tech revolution. Hiring a Pro can really
                        help make every facet of your life a breeze.”
                    </Text>
                    <Text mt="10px" color="gray.600" className="testimonials">
                        {" "}
                        -Bulma{" "}
                    </Text>
                </Box>

                <Box>
                    <Text fontSize="25px" color="gray.700" className="testimonials">
                        “We found so many people on Servicetown. And some of the
                        people we found on Servicetown, like our electrician, we
                        use him now. He's great.“
                    </Text>
                    <Text mt="10px" color="gray.600" className="testimonials">
                        {" "}
                        -Lawrence{" "}
                    </Text>
                </Box>
            </Box>
            <Divider
                border="1px solid"
                borderColor="green.900"
                width="65%"
                mx="auto"
                mt="60px"
            />
        </Box>
    );
}
