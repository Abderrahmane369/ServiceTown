import {
    Flex,
    List,
    ListItem,
    Box,
    Heading,
    Link,
    HStack
} from "@chakra-ui/react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialPinterest } from "react-icons/ti";

export default function Footer() {
    return (
        <Box bg="white" position="absolute" w="100%">
            <Flex
                as="footer"
                justify="center"
                gap="100px"
                borderTop="1px solid"
                borderColor="gray.300"
                p="50px"
            >
                <Box>
                    <Heading as="h3" fontSize="15px" mb="20px">
                        {" "}
                        Servicetown <br />
                        Consider it done.{" "}
                    </Heading>
                    <List spacing="5px" >
                        <ListItem>
                            <Link > About </Link>
                        </ListItem>
                        <ListItem>
                            <Link>Careers</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Press</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Blog</Link>
                        </ListItem>
                    </List>
                    <HStack mt="15px" spacing="7px" color="gray.700">
                        <TiSocialInstagram size="25px" />
                        <RiTwitterXFill size="20px" />
                        <TiSocialPinterest size="25px" />
                        <TiSocialFacebook size="25px" />
                    </HStack>
                </Box>

                <Box>
                    <Heading as="h3" fontSize="15px" mb="20px">
                        {" "}
                        Customers{" "}
                    </Heading>
                    <List spacing="5px">
                        <ListItem>
                            <Link>How to use Servicetown</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Sign up</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Get the app</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Services near me</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Cost estimates</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Home resource center</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Small business survey</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Questions and answers</Link>
                        </ListItem>
                    </List>
                </Box>

                <Box>
                    <Heading as="h3" fontSize="15px" mb="20px">
                        {" "}
                        Pros{" "}
                    </Heading>
                    <List spacing="5px">
                        <ListItem>
                            <Link>Servicetown for pros</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Sign up as a pro</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Community</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Pro Resources</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Success stories</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Pro reviews</Link>
                        </ListItem>
                        <ListItem>
                            <Link>iPhone app for pros</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Android app for pros</Link>
                        </ListItem>
                    </List>
                </Box>

                <Box>
                    <Heading as="h3" fontSize="15px" mb="20px">
                        {" "}
                        Support{" "}
                    </Heading>
                    <List spacing="5px">
                        <ListItem>
                            <Link>Help</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Safety</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Terms of Use</Link>
                        </ListItem>
                        <ListItem>
                            <Link>Privacy Policy</Link>
                        </ListItem>
                        <ListItem>
                            <Link>CA Notice at Collection</Link>
                        </ListItem>
                        <ListItem>
                            <Link>
                                Do not Sell or Share My Personal Information
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Flex>
            <Box textAlign="center" mt="20px" color="gray.500" mb="3vh">
                © Copyright 2024 - 2061 Servicetown, Inc. All Rights Reserved
            </Box>
        </Box>
    );
}
