import { Box, HStack, Img } from "@chakra-ui/react";

export default function OurParteners() {
    return (
        <Box w="100%" mt="100px" bgColor="#F9FAFB" py="50px" mb="0px">
            <HStack spacing="70px" mx="auto"w="50%">
                <Box>
                    <Img
                        src="https://www.taskrabbit.com/v3/assets/static/homepage/publications/brit-co.svg"
                        width="250px"
                    />
                </Box>
                <Box>
                    <Img
                        src="https://www.taskrabbit.com/v3/assets/static/homepage/publications/marie-claire.svg"
                        width="250px"
                    />
                </Box>
                <Box>
                    <Img
                        src="https://www.taskrabbit.com/v3/assets/static/homepage/publications/refinery-29.svg"
                        width="250px"
                    />
                </Box>
            </HStack>
        </Box>
    );
}
