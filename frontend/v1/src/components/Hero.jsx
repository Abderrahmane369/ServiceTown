import {
    Box,
    Button,
    Center,
    Divider,
    HStack,
    Heading,
    Input,
    InputGroup,
    InputRightAddon,
    TabList,
    Tabs,
    VStack
} from "@chakra-ui/react";
import heroImg from "../assets/hero.png";
import { FaSearch } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineFormatPaint } from "react-icons/md";
import { TiTree } from "react-icons/ti";
import { FaFireAlt } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { MdOutlineHandyman } from "react-icons/md";
import { Link } from "react-router-dom";
import DisplayServiceContainerTabs from "./DisplayServiceContainer";
import { useState } from "react";
import cleaning from "../assets/cleaning.png";
import painting from "../assets/painting.png";
import lounge from "../assets/lounge.png";

export default function Hero({ onServiceSelect }) {
    return (
        <Box
            w="100%"
            h="100vh"
            pos="relative"
            _after={{
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "120%",
                backgroundImage: `url(${lounge})`, // Use backgroundImage instead of bgImg
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
                backgroundSize: "310vh",
                zIndex: -1
            }}
        >
            <Center w="100%" h="100%">
                <VStack p="30px">
                    <Box w="65%">
                        <Heading
                            textAlign={"center"}
                            fontSize="60px"
                            fontWeight={1000}
                        >
                            Book trusted help for all home needs
                        </Heading>
                    </Box>

                    <Box mt="20vh" w="60%" mx="auto">
                        <InputGroup size="lg" variant="filled">
                            <Input
                                type="search"
                                bg="#dfdfdf"
                                borderRadius="50px"
                                placeholder="What do you need help with?"
                                //placeholder color
                                _placeholder={{
                                    color: "gray.400",
                                    fontWeight: 400,
                                    p: "10px",
                                }}
                                _focus={{
                                    bg: "#FaFaFa",
                                    borderColor: "#00e6b3"
                                }}
                                sx={{
                                    "&::-webkit-search-cancel-button": {
                                        WebkitAppearance: ""
                                    }
                                }}
                            />
                            <InputRightAddon
                                as={Button}
                                bg="#dfdfdf"
                                borderRightRadius="60px"
                                _hover={{ bg: "#00e6b3" }}
                            >
                                <FaSearch />
                            </InputRightAddon>
                        </InputGroup>
                    </Box>
                    <ServicesBarAdvanced_hero
                        onServiceSelect={onServiceSelect}
                    />
                </VStack>
            </Center>
        </Box>
    );
}

function ServicesBarAdvanced_hero({ onServiceSelect }) {
    const iconSize = 40;

    const services = [
        {
            icon: <MdOutlineCleaningServices size={iconSize} />,
            text: "Cleaning",
            box: {
                title: "Cleaning",
                description: [
                    "Clean your home or office; deep clean appliances and other spaces.",
                    "Now Trending: Eco-friendly products, home cleaning checklists, and cleaning hacks."
                ],
                image: cleaning,
                illust: true,

            },
            isSelected: false
        },
        {
            icon: <GiAutoRepair size={iconSize} />,
            text: "Home Repairs",
            box: {
                title: "Home Repairs",
                description: [
                    "Home improvements like plumbing, electrical, and appliance installation.",
                    "Now Trending: Chandeliers, brass faucets, and smart toilets."
                ],
                image: "https://images.ctfassets.net/vwt5n1ljn95x/2zLfFEV2MrXbcska0MocE7/32575342bd9f30397d58ccb663c71744/Homepage_Assembly.png?w=1200&q=75&fm=webp",
                illust: false,
            },
            isSelected: false
        },
        {
            icon: <MdOutlineFormatPaint size={iconSize} />,
            text: "Painting",
            box: {
                title: "Painting",
                description: [
                    " Paint walls, ceilings, molding, and doors; includes prep and cleanup.",
                    "Now Trending: Color blocking, stripe details, and statement colors."
                ],
                image: painting,
                illust: true,
            },
            isSelected: false
        },
        {
            icon: <TiTree size={iconSize} />,
            text: "Outdoor Help",
            box: {
                title: "Outdoor Help",
                description: [
                    "Outdoor help like gardening, weeding, gutter cleaning, and mowing the lawn.",
                    "Now Trending: Native plants, enhanced walkways, and outdoor lighting installation."
                ],
                image: "https://images.ctfassets.net/vwt5n1ljn95x/2ru8T5M6EoTz6aZ9Nzqh6G/ff41fd05c148e91c9642bde2b59b021a/Homepage_YardWork.png?w=1200&q=75&fm=webp",
                illust: false,
            },
            isSelected: false
        },
        {
            icon: <FiTruck size={iconSize} />,
            text: "Moving",
            box: {
                title: "Moving",
                description: [
                    "Moving help such as packing/unpacking, loading, and lifting heavy items.",
                    "Now Trending: Single-item moves, apartment moves, and junk removal."
                ],
                image: "https://images.ctfassets.net/vwt5n1ljn95x/1yzzyx2EqAdFjES7LImaEa/cb848bba9d6af5474b1b7c3309539824/Homepage_Moving.png?w=1200&q=75&fm=webp",
                illust: false,
            },
            isSelected: false
        },
        {
            icon: <MdOutlineHandyman size={iconSize} />,
            text: "Assembly",
            box: {
                title: "Assembly",
                description: [
                    "Assemble or disassemble furniture items by unboxing, building, and any cleanup.",
                    "Now Trending: Curved sofas, computer desks, and sustainable materials."
                ],
                image: "https://images.ctfassets.net/vwt5n1ljn95x/2zLfFEV2MrXbcska0MocE7/32575342bd9f30397d58ccb663c71744/Homepage_Assembly.png?w=1200&q=75&fm=webp",
                illust: false,
                
            },
            isSelected: false
        },
        {
            icon: <FaFireAlt size={iconSize} />,
            text: "Trending",
            box: {
                title: "Trending",
                description: [
                    "Discover the hottest tasks that will level up your space.",
                    "Explore these trending tasks and book a skilled Tasker to enjoy the convenience and peace of mind that comes with it all!"
                ],
                image: "https://images.ctfassets.net/vwt5n1ljn95x/2nfa2ouVwN7lG7FREVwmB0/ae3f6acd5b31680e9d998a24c1da851e/HomeRepair_3_950x491.jpg?w=1200&q=75&fm=webp",
                illust: false,
                isSelected: false
            },
            isSelected: false
        }
    ];

    return (
        <Box>
            <HStack
                spacing="70px"
                // bg="palegoldenrod"
                h="15vh"
                mt="5vh"
                p="20px"
            >
                {services.map((service, index) => (
                    <Box
                        key={index}
                        height="100%"
                        transition="all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)"
                        {... (service.isSelected && {
                            _after: {
                                content: "''",
                                display: "block",
                                marginX: "auto",
                                width: "0px",
                                height: "17px",
                                borderColor: "#ff2e93",
                                borderBottom: "3px solid"
                            }
                        })}

                        _after={{
                            content: "''",
                            display: "block",
                            marginX: "auto",
                            width: "0px",
                            height: "17px",
                            borderColor: "#ff2e93",
                            borderBottom: "3px solid"
                        }}
                        _hover={{
                            color: "#ff2e93",
                            paddingTop: "2px",
                            _after: {
                                content: "''",
                                display: "block",
                                marginX: "auto",
                                width: "50px",
                                height: "17px",
                                borderColor: "#ff2e93",
                                borderBottom: "3px solid",
                                _hover: {
                                    width: "60px",
                                    borderColor: "#ff2e93"
                                },
                                transition:
                                    "all 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)"
                            }
                        }}
                        _active={{
                            color: "gray"
                        }}
                    >
                        <Button
                            key={index}
                            variant="link"
                            borderRadius="0%"
                            colorScheme="black"
                            _hover={{ color: "#00e6b3" }}
                            _active={{
                                color: "gray",
                                borderRadius: "70%"
                            }}
                            
                            onClick={() => {onServiceSelect(service.box)}}
                        >
                            <Box>
                                <Center p="15px">{service.icon}</Center>
                                <Heading fontSize="17px" fontWeight="600">
                                    {service.text}
                                </Heading>
                            </Box>
                        </Button>
                    </Box>
                ))}
            </HStack>
            <Center>
                <Divider borderColor="gray.400" mt="22px" w="120%" />
            </Center>
        </Box>
    );
}

// export default function Hero() {
//     return (
//         <Box>
//             <Img src={heroImg} userSelect="none" w="100%"/>
//         </Box>
//     );
// }
