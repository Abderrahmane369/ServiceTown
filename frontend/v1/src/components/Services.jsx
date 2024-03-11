import {
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Divider,
    Flex,
    Heading,
    Link as ChaLink,
    List,
    ListIcon,
    Text,
    ListItem,
    SimpleGrid
} from "@chakra-ui/react";

import { services } from "../data/servicesCards_data";
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <Box mt="38px">
            <Heading as="h2" fontSize="30px" textAlign="center" mb="25px">
                hire a trusted pro quickly.
            </Heading>
            <SimpleGrid
                columns={3}
                spacingX="24px"
                spacingY="34px"
                ml="114px"
                mr="114px"
            >
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        img={service.img}
                        body={service.body}
                        footer={service.footer}
                    />
                ))}
            </SimpleGrid>
        </Box>
    );
}

const ServiceCard = ({ img, body, footer }) => {
    const availableServices = [
        "TV Mounting",
        "Painting",
        "Electrical Help",
        "Handyman",
        "Plumbing"
    ];
    return (
        <Card variant="outline" borderColor="gray.300" overflow="hidden" >
            <CardHeader
                bgImage={`url(${img})`}
                backgroundSize="cover"
                backgroundPosition="center"
                height="200px"
            />

            <CardBody flexGrow={0}>
                <Heading as="h3" fontSize="20px" color="#142664">
                    {body.h}
                </Heading>
                <Text fontSize="19px" >{body.p}</Text>
            </CardBody>

            <Divider width="100%" mx="auto" borderColor="gray.500" />

            <CardFooter>
                <List>
                    {footer.map((f, i) => (
                        <ListItem key={i}>
                            <Link to="/services/tv-mounting">
                                <ChaLink
                                    href="#"
                                    fontSize="19px"
                                    mb="3px"
                                    color={
                                        availableServices.includes(f) ||
                                        availableServices.includes(body.h)
                                            ? "gray.700"
                                            : "gray.300"
                                    }
                                >
                                    {f}
                                    {!(
                                        availableServices.includes(f) ||
                                        availableServices.includes(body.h)
                                    ) && "  (UNAVAILABLE)"}
                                </ChaLink>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </CardFooter>
        </Card>
    );
};
