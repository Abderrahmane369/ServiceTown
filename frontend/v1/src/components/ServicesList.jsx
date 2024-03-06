import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Circle,
    Container,
    Flex,
    Link,
    HStack,
    Heading,
    Text,
    VStack,
    Divider
} from "@chakra-ui/react";
import { GrCircleInformation } from "react-icons/gr";
import { IoMdStar } from "react-icons/io";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import sqLegacy from "../assets/400square-legacy.jpeg";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function ServicesList() {
    return (
        <Container maxW="65%" mt="30px">
            <Box>
                <HStack>
                    <Heading as="h3" textAlign="left" fontSize="18px">
                        Top 10 Plumbers near you
                    </Heading>
                    <GrCircleInformation color="#676d73" />
                </HStack>
            </Box>
            <BcrumObj />
            <Box>
                <VStack mt="40px">
                    <Divider mb="5px" />
                    <ServiceCard />
                    <Divider mb="5px" />
                    <ServiceCard />
                    <Divider mb="5px" />
                    <ServiceCard />
                    <Divider mb="5px" />
                    <ServiceCard />
                    <Divider mb="5px" />
                    <ServiceCard />
                </VStack>
            </Box>
        </Container>
    );
}

function BcrumObj() {
    return (
        <Breadcrumb
            separator={<ChevronRightIcon />}
            fontSize="12px"
            mt="5px"
            color="gray"
        >
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/services">
                    Services
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                    Plumbers
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}

function ServiceCard() {
    return (
        <Flex>
            <Box p="10px">
                <Box
                    bg="blue"
                    bgImage={sqLegacy}
                    bgPos="center"
                    bgSize="contain"
                    p="70px"
                    borderRadius="5px"
                ></Box>
            </Box>
            <Box p="10px" fontSize="15px" color="gray.500">
                <Heading
                    as="h4"
                    fontSize="15px"
                    fontWeight="700"
                    color="black"
                    mb="5px"
                >
                    1. Jose Plumbing
                </Heading>

                <HStack mb="7px">
                    <Box
                        bgGradient="linear-gradient(to right, #079ed8, #0dbae3)"
                        p="2px"
                        borderRadius="50%"
                    >
                        <IoMdStar
                            color="febe14"
                            style={{
                                width: 14,
                                height: 14
                            }}
                        />
                    </Box>
                    <Text color="black">Top Pro</Text>
                    <Text color="#2db783" fontWeight="bold">
                        {" "}
                        Exceptional 5.0
                    </Text>
                    <HStack spacing="0" color="#2db783">
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                    </HStack>
                    <Text> (10)</Text>
                </HStack>
                <Box>
                    <Text width="75%">
                        Plumbing Drain Repair, Water Heater Installation or
                        Replacement, Toilet Repair, Sink or Faucet Installation
                        or Replacement, Plumbing Pipe Repair,...
                    </Text>
                </Box>
                <HStack mt="5px">
                    <EmojiEventsIcon fontSize="small" />
                    <Text> 66 hires on Servicetown</Text>
                </HStack>
                <HStack mt="5px" mb="10px" ml="5px">
                    <Circle p="5px" bg="green.500"></Circle>
                    <Text ml="4px">Online now</Text>
                </HStack>
                <Text ml="7px" width="75%">
                    Charels X. says, "If you're in search of a reliable and
                    trustworthy plumber for the long term, look no further than
                    Jose."
                    <Link href="/" color="blue.400">
                        {" "}
                        See more{" "}
                    </Link>
                </Text>
                <Text mt="10px" color="black">
                    Available for a service call <strong>tommorow</strong>
                </Text>
            </Box>
            <Box p="10px">
                <Text fontWeight="bold">Free service call</Text>

                <Button colorScheme="blue" mt="160%">
                    View profile
                </Button>
            </Box>
        </Flex>
    );
}
