import {
    Avatar,
    Box,
    Button,
    Circle,
    Divider,
    HStack,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Progress,
    Select,
    Spacer,
    Text,
    VStack,
    Wrap
} from "@chakra-ui/react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";
import { RxCheck } from "react-icons/rx";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function PProfileReviews() {
    return (
        <Box my="25px">
            <Heading fontSize="18px">Reviews</Heading>
            <Text fontSize="13px" my="5px">
                Customers rated this pro highly for <b>responsiveness</b>,
                <b>professionalism</b>, and <b>work quality</b>.
            </Text>
            <HStack mt="25px">
                <Box>
                    <Heading fontSize="20px" fontWeight="700" color="green.500">
                        Very good 4.6
                    </Heading>
                    <HStack
                        spacing="0"
                        color="green.500"
                        fontSize="32px"
                        my="2px"
                        ml="-3px"
                    >
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStarHalf />
                    </HStack>
                    <Text fontSize="14px" color="gray.700">
                        58 reviews
                    </Text>
                </Box>
                <Divider
                    orientation="vertical"
                    border="0.5px solid"
                    borderColor="gray.200"
                    mx="20px"
                    ml="25px"
                    h="100px"
                />
                <VStack alignItems="start" spacing="2px">
                    {[83, 7, 3, 0, 7].map((_, i) => (
                        <HStack
                            key={i}
                            alignItems="center"
                            spacing="5px"
                            ml={i == 4 ? "3px" : 0}
                        >
                            <Text fontSize="12px">{5 - i}</Text>
                            <Box>
                                <IoMdStar color="#d3d4d5" size="12px" />
                            </Box>
                            <Progress
                                value={_}
                                ml="2px"
                                h="8px"
                                w="105px"
                                bg="#e9eced"
                                colorScheme="green"
                                borderRadius="5px"
                            />
                            <Text fontSize="12px" ml="10px">
                                {_}%
                            </Text>
                        </HStack>
                    ))}
                </VStack>
            </HStack>
            <Text fontSize="13px" mt="19px" mb="24px">
                Your trust means everything to us.{" "}
                <Link color="blue.400">Learn about our review guidelines.</Link>
            </Text>

            <InputGroup w="95%" gap="16px">
                <InputLeftElement>
                    <IoSearchSharp />
                </InputLeftElement>
                <Input
                    type="search"
                    w="full"
                    placeholder="Search reviews"
                    fontSize="13px"
                />
                <Select w="50%" fontSize="13px">
                    <option>Most relevant</option>
                    <option>Highest rated</option>
                    <option>Lowest rated</option>
                    <option>Newest first</option>
                    <option>Oldest first</option>
                </Select>
            </InputGroup>
            <Text mt="15px" fontSize="13px">
                <b>Read reviews that mention:</b>
            </Text>
            <Wrap mt="10px">
                {[
                    "issue",
                    "fix",
                    "plumber",
                    "pipe",
                    "leak",
                    "water",
                    "problem",
                    "drain",
                    "repair"
                ].map((word, i) => (
                    <Button
                        key={i}
                        variant="outline"
                        border="2px solid"
                        borderColor="gray.300"
                        color="blue.400"
                        borderRadius="50px"
                        fontSize="11px"
                    >
                        {word}
                    </Button>
                ))}
            </Wrap>
            {[0, 1, 2].map((_, i) => (
                <Review key={i} />
            ))}
            <Divider
                orientation="vertical"
                border="0.5px solid"
                borderColor="gray.200"
                mt="40px"
                mb="25px"
                w="98%"
            />
            <Credentials />
        </Box>
    );
}

function Review() {
    return (
        <Box my="20px" w="95%">
            <Divider borderColor="gray.400" w="100%" mb="20px" />
            <Box>
                <HStack>
                    <Avatar src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" />
                    <Box>
                        <Heading fontSize="14px">Francis J.</Heading>
                        <HStack spacing="5px" alignItems="center">
                            <HStack
                                spacing="0"
                                color="#2db783"
                                fontSize="24px"
                                my="2px"
                                ml="-3px"
                                gap="-3px"
                            >
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </HStack>
                            <Circle p="2px" bg="gray.600" mr="4px" />
                            <LuShieldCheck size="18px" color="#009fd9" />
                            <Text fontSize="14px" color="gray.600">
                                Hired on Servicetown
                            </Text>
                        </HStack>
                    </Box>{" "}
                    <Spacer />
                    <Text fontSize="14px" color="gray.600">
                        Jul 5, 2023
                    </Text>
                </HStack>
                <Text
                    fontSize="13px"
                    mt="5px"
                    lineHeight="20px"
                    color="gray.700"
                >
                    Francisco did an excellent job.
                    <br /> Most other <b>plumbers</b> will not give us a quote
                    for “unclogging” a toilet prior to their arrival. We are
                    glad that Knockout Plumbing gave us a quote prior to their
                    arrival.
                </Text>
                <Text mt="7px" color="gray.500" fontSize="13px">
                    Details: Yes, repair is urgent • Clogging • House
                </Text>
                <Text mt="18px" color="gray.500" fontSize="12px">
                    Plumbing Drain Repair
                </Text>
            </Box>
        </Box>
    );
}

const Credentials = () => {
    return (
        <Box>
            <HStack spacing="5px">
                <Heading fontSize="18px">Credentials</Heading>
                <IoMdInformationCircleOutline color="#686e74" size="18px" />
            </HStack>
            {/*  */}
            <HStack spacing="30px" align="start">
                <Box>
                    <HStack spacing="0px">
                        <Heading fontSize="15px" mt="10px" mb="4px">
                            License
                        </Heading>
                        <Box alignSelf="end" mb="2px">
                            <RxCheck gap="0" size="23px" />
                        </Box>
                    </HStack>
                    <Text fontSize="13px">
                        License Type: C36 – Plumbing Contractor
                        <br /> (CA)
                        <br /> License verified on 4/28/2022
                    </Text>
                </Box>
                {/*  */}
                <Box>
                    <HStack spacing="0px">
                        <Heading fontSize="15px" mt="10px" mb="4px">
                            Background Check
                        </Heading>
                        <Box alignSelf="end" mb="2px">
                            <RxCheck gap="0" size="23px" />
                        </Box>
                    </HStack>
                    <Text fontSize="13px">Edgar Ramirez Gonzalez</Text>
                </Box>
            </HStack>
            <Box mt="10px">
                <Link color="blue.400" fontSize="13px" fontWeight="bold">
                    View credential details
                </Link>
            </Box>
        </Box>
    );
};
