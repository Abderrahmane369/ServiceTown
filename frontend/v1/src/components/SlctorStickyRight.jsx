import {
    Box,
    Checkbox,
    Divider,
    FormControl,
    FormLabel,
    HStack,
    Heading,
    Select as ChSelect,
    TagLabel,
    Text,
    VStack,
    Button,
    Input,
    Circle,
    Badge
} from "@chakra-ui/react";
import Select from "react-select";
import { BiBulb } from "react-icons/bi";

export default function SlctorStickyRight() {
    const options = [
        { label: "Plumbing Pipe Repair", value: "option1" },
        { label: "Plumbing Drain Repair", value: "option2" },
        {
            label: "Plumbing Pipe Installation or Replacement",
            value: "option3"
        },
        { label: "Plumbing Inspection", value: "option4" }
    ];

    return (
        <Box
            pos="sticky"
            width="175%"
            shadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
            p="15px"
            borderTop="4px solid"
            borderColor="blue.400"
            fontSize="12px"
            ml="20px"
            top="80px"
        >
            <VStack spacing="10px">
                <HStack mb="10px">
                    <Box mr="10px">
                        <Heading as="h5" fontSize="15px">
                            $50/service call
                        </Heading>
                        <Text color="gray.500">(waived if hired)</Text>
                    </Box>
                    <Box>
                        <Heading as="h5" fontSize="15px">
                            Plenty of availability
                        </Heading>
                        <Text color="gray.500">in the next 3 days</Text>
                    </Box>
                </HStack>
                <Divider />
                <FormControl>
                    <FormLabel>Select a service</FormLabel>
                    <ChSelect fontSize="14px">
                        <option value="option1">Plumbing Pipe Repair</option>
                        <option value="option2">Plumbing Drain Repair</option>
                        <option value="option1">
                            Plumbing Pipe Installation or Replacement
                        </option>
                        <option value="option1">Plumbing Inspection</option>
                    </ChSelect>
                </FormControl>
                <FormControl>
                    <FormLabel>Zip code</FormLabel>
                    <Input
                        type="number"
                        placeholder="Enter your zip code"
                        fontSize="14px"
                        value="94040"
                    />
                </FormControl>{" "}
                <FormControl>
                    <FormLabel>Pipe issues</FormLabel>
                    <Select
                        options={options}
                        placeholder="Select answer(s)"
                        isMulti
                    />
                </FormControl>
                <FormControl mb="10px">
                    <FormLabel>Repair urgency</FormLabel>
                    <ChSelect fontSize="14px">
                        <option value="option1">
                            No, repair is not urgent
                        </option>
                        <option value="option2">Yes, repair is urgent</option>
                    </ChSelect>
                </FormControl>
                <HStack>
                    <BiBulb size={70} mr="10px" color="#fec42a" />
                    <Text>
                        A service call at your home will allow the pro to
                        identify the issue and get you an accurate quote. They
                        can usually do the job same-day.
                    </Text>
                </HStack>
                <Button w="full" h="55px" colorScheme="blue">
                    Check availability
                </Button>
                <HStack mt="10px">
                    <Circle p="5px" bg="green.400" />
                    <Text fontSize="13px" color="gray.500">
                        Online now
                    </Text>
                </HStack>
            </VStack>
        </Box>
    );
}
