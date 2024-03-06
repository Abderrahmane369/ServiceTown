import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

export default function SlctorStickyRight() {
    return (
        <Box pos="sticky">
            <HStack>
                <Box>
                    <Text>$50/service call (waived if hired)</Text>
                </Box>
            </HStack>
        </Box>
    );
}
