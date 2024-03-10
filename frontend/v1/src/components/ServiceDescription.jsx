import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    HStack,
    Heading,
    Img,
    Text
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { currentservices } from "../data/services";

export default function ServiceDescription({ serviceData }) {
    const service = currentservices[serviceData];
    const page = service.page;
    const description = page.description;

    return (
        <Box mx="auto" w="80%">
            <BcrumObj serviceData={serviceData}/>
            <Box mx="auto" mt="12vh">
                <Heading fontSize="30px" mb="20px">
                    {description.title}
                </Heading>
                <HStack align="start" spacing="50px">
                    <Box w="70%" bgColor="white" p="20px">
                        <Text>{description.description}</Text>
                    </Box>

                    <Box alignSelf="start" bg="green" p="0px" w="90vh">
                        <Img src={description.img} w="100%" h="100%" />
                    </Box>
                </HStack>
            </Box>
        </Box>
    );
}

function BcrumObj({ serviceData }) {
    return (
        <Breadcrumb
            separator={<ChevronRightIcon />}
            fontSize="14px"
            mt="15px"
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
                    {serviceData}
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    );
}
