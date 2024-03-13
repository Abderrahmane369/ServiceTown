import {
    Box,
    Button,
    Circle,
    Container,
    Flex,
    Link,
    HStack,
    Heading,
    Text,
    VStack,
    Divider,
    Card,
    Badge,
    Center
} from "@chakra-ui/react";
import { GrCircleInformation } from "react-icons/gr";
import { IoMdStar } from "react-icons/io";
import { GrTrophy } from "react-icons/gr";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import sqLegacy from "../assets/400square-legacy.jpeg";
import { providers } from "../data/servicesProviders";

export default function ServicesList({ serviceData }) {
    const cproviders = providers[serviceData];
    const providerers = {
        handyman: "Handyman",
        "electrical-help": "Electricians",
        plumbing: "Plumbers",
        landscaping: "Landscapers",
        "tv-mounting": "TV Mounters",
        painting: "Painters"
    };
    return (
        <Container maxW="65%" mt="10vh" p="20px" borderRadius="2px">
            <Box>
                <HStack>
                    <Heading as="h3" textAlign="left" fontSize="18px">
                        Top 10 {providerers[serviceData]} near you
                    </Heading>
                    <GrCircleInformation color="#676d73" />
                </HStack>
            </Box>
            <Box>
                <VStack mt="40px">
                    {cproviders.map((provider, index) => (
                        <>
                            <Divider key={index} />
                            <ServiceCard key={index} provider={provider} />
                        </>
                    ))}
                    <Divider />
                </VStack>
            </Box>{" "}
            <Center>
                <Button
                    mt="30px"
                    variant="outline"
                    border="1px solid"
                    colorScheme="gray"
                >
                    See more
                </Button>
            </Center>
        </Container>
    );
}

function ServiceCard({ provider }) {
    return (
        <Flex mb="10px" transform={["scale(0.99)", "scale(0.99)"]} w="100%">
            <Box p="10px">
                <Box
                    bg="blue"
                    bgImage={provider.imgURL}
                    bgPos="center"
                    bgSize="contain"
                    p="70px"
                    border="0px solid"
                    borderRadius="5px"
                ></Box>
            </Box>
            <Box p="10px" fontSize="14px" color="gray.600" w="85%">
                <Heading
                    as="h4"
                    fontSize="15px"
                    fontWeight="700"
                    color="black"
                    mb="5px"
                >
                    {provider.providerName}
                </Heading>

                <HStack mb="7px">
                    {provider.isTopPro && (
                        <>
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
                        </>
                    )}

                    <Text color="#ff2e93" fontWeight="bold">
                        {" "}
                        {provider.rating}
                    </Text>
                    <HStack spacing="0" color="#ff2e93" mb="3px">
                        <IoMdStar size="17px" />
                        <IoMdStar size="17px" />
                        <IoMdStar size="17px" />
                        <IoMdStar size="17px" />
                        <IoMdStar size="17px" />
                    </HStack>
                    <Text> ({provider.ratingCount}) </Text>
                </HStack>

                <Box>
                    <Text width="85%">{provider.serviceDescription}</Text>
                </Box>

                <HStack mb="10px" mt="5px">
                    {provider.inHighDemand && (
                        <Badge colorScheme="blue">
                            <HStack>
                                <GrTrophy />
                                <Text fontWeight="bold">in high demand</Text>
                            </HStack>
                        </Badge>
                    )}
                    {provider.isGreatValue && (
                        <Badge colorScheme="green">
                            <HStack>
                                <FaDollarSign />
                                <Text fontWeight="bold">Great value</Text>
                            </HStack>
                        </Badge>
                    )}
                    {provider.isLiscensed && (
                        <Badge colorScheme="purple">
                            <HStack>
                                <LuShieldCheck size="15px" />
                                <Text fontWeight="bold">Liscensed Pro</Text>
                            </HStack>
                        </Badge>
                    )}
                </HStack>
                <Box my="7px">
                    {provider.showHires && (
                        <HStack>
                            <GrTrophy size="17px" />
                            <Text> {provider.hires} hires on Servicetown</Text>
                        </HStack>
                    )}
                    {provider.showSimilarJobs && (
                        <HStack>
                            <MdOutlineLocationOn size="17px" />
                            <Text>
                                {" "}
                                {provider.similarJobs} similar jobs done near
                                you
                            </Text>
                        </HStack>
                    )}
                    {provider.showRespondTime && (
                        <HStack>
                            <AiOutlineMessage size="17px" />
                            <Text>
                                {" "}
                                Responds in about <b>{provider.respondTime}</b>
                            </Text>
                        </HStack>
                    )}
                </Box>

                {provider.isOnline && (
                    <HStack mt="5px" mb="10px" ml="5px">
                        <Circle p="5px" bg="green.500"></Circle>
                        <Text ml="4px">Online now</Text>
                    </HStack>
                )}

                <Text width="85%">
                    {provider.comment}
                    <Link href="/" color="blue.400">
                        {" "}
                        See more{" "}
                    </Link>
                </Text>
                {provider.isAvailable && (
                    <Text mt="9px" color="black">
                        Available for a service call <strong>tommorow</strong>
                    </Text>
                )}
            </Box>
            <Box p="10px" textAlign="right" w="30vh">
                <Text>{provider.callPrice}</Text>

                <Button
                    bgColor="#00e6b3"
                    fontSize="15px"
                    color="white"
                    mt="110%"
                    p="20px"
                    
                >
                    <Link href="/pprofile" color="white">
                    View profile
                    </Link>
                </Button>
            </Box>
        </Flex>
    );
}
