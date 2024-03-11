import {
    Box,
    Center,
    Container,
    HStack,
    Heading,
    Img,
    Stack,
    Text
} from "@chakra-ui/react";
import { FaFireAlt } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

export default function DisplayServiceContainerTabs({ d }) {
    console.log(d);

    const data = d != null
        ? d
        : {
              title: "Trending",
              description: [
                  "Discover the hottest tasks that will level up your space.",
                  "Explore these trending tasks and book a skilled Tasker to enjoy the convenience and peace of mind that comes with it all!"
              ],
              image: "https://images.ctfassets.net/vwt5n1ljn95x/2nfa2ouVwN7lG7FREVwmB0/ae3f6acd5b31680e9d998a24c1da851e/HomeRepair_3_950x491.jpg?w=1200&q=75&fm=webp",
              illust: false
          };
    const title = data.title;
    const description = data.description;
    const image = data.image;
    const illust = data.illust;
    return (
        <Center maxW="100%" mb="15vh">
            <Center
                bg="red"
                width="70%"
                bgColor="#ecebea"
                h="80vh"
                borderRadius={15}
                pos="relative"
            >
                <Box
                    w="36%"
                    h="65%"
                    bg="#fafafa"
                    borderRadius={15}
                    zIndex={2}
                    pos="absolute"
                    left={10}
                    p="35px"
                >
                    <Heading fontSize="30px" fontWeight={600}>
                        {title}
                    </Heading>
                    <Stack p="15px" spacing="30px" w="">
                        <HStack align="start" spacing="10px">
                            <Box>
                                <IoCheckmark size="27px" />
                            </Box>

                            <Text fontSize="18px">{description[0]}</Text>
                        </HStack>
                        <HStack align="start">
                            <Box>
                                <IoCheckmark size="27px" spacing="10px" />
                            </Box>

                            <Text fontSize="18px">{description[1]}</Text>
                        </HStack>
                    </Stack>
                </Box>
                <Box
                    w="80%"
                    h="90%"
                    borderRadius={15}
                    pos="absolute"
                    bgImage={`url(${image})`}
                    right={10}
                    {...(illust
                        ? {
                              bgSize: "70vh",
                              bgRepeat: "no-repeat",
                              bgPos: "40vh ",
                              bgColor: "rgba(255,255,255,0.5)"
                          }
                        : { bgSize: "cover", bgPos: "center" })}
                ></Box>
            </Center>
        </Center>
    );
}
