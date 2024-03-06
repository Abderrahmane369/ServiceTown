import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Divider,
    Flex,
    Grid,
    GridItem,
    HStack,
    Heading,
    Image,
    Img,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VStack,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import prson from "../assets/120.webp";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { MdOutlineIosShare } from "react-icons/md";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BiTrophy } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiShieldCheckBold } from "react-icons/pi";
import { AiOutlineTeam } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import Star2023 from "../assets/2023_Star.png";
import Star2022 from "../assets/2022_Star.png";

export default function PProfileAbout() {
    return (
        <Box mt="15px" w="70%">
            <HStack alignItems="flex-end">
                <Img
                    src={prson}
                    boxSize="139px"
                    objectFit="cover"
                    borderRadius="5px"
                />

                <Box ml="10px">
                    <Heading fontSize="25px" mb="10px">
                        Knockout Plumbing & Repipe Inc.
                    </Heading>
                    <HStack fontSize="14px" mb="10px">
                        <Text color="#2db783" fontWeight="bold">
                            {"     "}
                            Very Good
                        </Text>
                        <HStack spacing="0" color="#2db783">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStarHalf />
                        </HStack>
                        <Text> (58)</Text>
                    </HStack>
                    <Button leftIcon={<MdOutlineIosShare />} w="120px">
                        Share{" "}
                    </Button>
                </Box>
            </HStack>
            <BCrumb />
            <Introduction />
            <Informations />
        </Box>
    );
}

function BCrumb() {
    return (
        <Breadcrumb
            fontSize="11px"
            spacing="3px"
            separator={<ChevronRightIcon />}
            color="gray"
            mt="25px"
            mb="15px"
        >
            <BreadcrumbItem>
                <BreadcrumbLink>Servicetown</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                {" "}
                <BreadcrumbLink>Affordable Plumbing Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                {" "}
                <BreadcrumbLink>Knockout Plumbing & Repipe Inc.</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}

function Introduction() {
    return (
        <Text as="p" fontSize="13px">
            <strong>Introduction: </strong>Hello this is Edgar Ramirez, lead
            Field Supervisor at Knockout Plumbing & Repipe Inc. We offer the
            best affordable solutions that will meet all your plumbing needs!
            Knockout Plumbing & Repipe Inc. has worked with multiple management
            companies and residential home owners over the years and we
            specialize in water heater replacements, water and/or drain line
            leaks for residential single-family and multi-family units. With our
            diverse skillset, we can take on any small service repair project
            and/or full-scale pipe replacement for water, waste/sewer/drain, and
            gas systems.
        </Text>
    );
}

function Informations() {
    return (
        <HStack>
            <Stack mt="25px" spacing="15px" align="start">
                <Overview />
                <BusinessHours />
                <SchedulingPolicy />
            </Stack>
            <Stack mt="25px" spacing="15px" align="start">
                <PaymentMethods />
                <SocialMedia />
                <TopProstatus />
            </Stack>
        </HStack>
    );
}

function Overview() {
    return (
        <Box w="90%">
            <Heading as="h5" fontSize="14px" mb="5px">
                Overview
            </Heading>
            <Box>
                <HStack mb="5px">
                    <BiTrophy size="20px" />
                    <Text fontSize="13px">Hired 381 times</Text>
                </HStack>
                <HStack mb="5px">
                    <GrLocation size="20px" />
                    <Text fontSize="13px">6 similar jobs done near you</Text>
                </HStack>
                <HStack mb="5px">
                    <IoMdCheckmarkCircleOutline size="20px" />
                    <Text fontSize="13px">Background checked</Text>
                </HStack>
                <HStack mb="5px">
                    <PiShieldCheckBold size="20px" />
                    <Text fontSize="13px">License verified</Text>
                </HStack>
                <HStack mb="5px">
                    <AiOutlineTeam size="20px" />
                    <Text fontSize="13px">8 employees</Text>
                </HStack>
                <HStack mb="5px">
                    <FiClock size="17px" />
                    <Text fontSize="13px">3 years in business</Text>
                </HStack>
            </Box>
        </Box>
    );
}

function BusinessHours() {
    return (
        <Box w="90%">
            <Heading as="h5" fontSize="14px" mb="5px">
                Business hours
            </Heading>
            <Text fontSize="13px">
                This pro hasn't listed their business hours.
            </Text>
        </Box>
    );
}

function SchedulingPolicy() {
    return (
        <Box w="90%">
            <Heading as="h5" fontSize="14px" mb="5px">
                Scheduling policy
            </Heading>
            <Text fontSize="13px">
                You can reserve this pro up to 28 days in advance. They'll need
                at least 4 hours' notice to prepare for the job.
            </Text>
        </Box>
    );
}

function PaymentMethods() {
    return (
        <Box w="90%">
            <Heading as="h5" fontSize="14px" mb="5px">
                Payment methods
            </Heading>
            <Text fontSize="13px">
                This pro accepts payments via Cash, Check, Credit card, and
                Zelle.
            </Text>
        </Box>
    );
}
function SocialMedia() {
    return (
        <Box w="90%">
            <Heading as="h5" fontSize="14px" mb="5px">
                Social media
            </Heading>
            <Text fontSize="13px">
                <Link fontWeight="500" color="blue.400">
                    Facebook
                </Link>
                ,{" "}
                <Link fontWeight="500" color="blue.400">
                    Instagram
                </Link>
            </Text>
        </Box>
    );
}
function TopProstatus() {
    return (
        <Box w="90%">
            <Heading as="h5" fontSize="14px" mb="5px">
                Top Pro status
            </Heading>
            <Text fontSize="13px">
                Top Pros are among the highest-rated, most popular professionals
                on Thumbtack.
                <HStack mt="10px" spacing="15px">
                    <VStack>
                        <Img src={Star2022} boxSize="50px" />
                        <Text color="gray">2022</Text>
                    </VStack>
                    <VStack>
                        <Img src={Star2022} boxSize="50px" />
                        <Text color="gray">2023</Text>
                    </VStack>
                    <VStack>
                        <Img src={Star2022} boxSize="50px" />
                        <Text color="gray">2024</Text>
                    </VStack>
                </HStack>
            </Text>
        </Box>
    );
}
