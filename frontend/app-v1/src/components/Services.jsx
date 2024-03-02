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
    Link,
    List,
    ListIcon,
    Text,
    ListItem,
    SimpleGrid
} from "@chakra-ui/react";


import { services } from "../data/servicesCards_data";

export default function Services() {
    return (
        <Box mt="38px">
            <Heading as="h2" fontSize="25px" textAlign="center" mb="15px">
                Hire a trusted Tasker presto.
            </Heading>
            <SimpleGrid columns={3} spacingX="24px" spacingY="34px" ml="114px" mr="114px">
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

const ServiceCard = ({ img, body, footer }) => (
    <Card variant="outline" borderColor="gray.300" overflow="hidden">
        <CardHeader
            bgImage={`url(${img})`}
            backgroundSize="cover"
            backgroundPosition="center"
            height="200px"
        />

        <CardBody maxH="120px">
            <Heading as="h3" fontSize="20px" >
                {body.h}
            </Heading>
            <Text fontSize="19px">{body.p}</Text>
        </CardBody>

        <Divider width="395px" mx="auto" borderColor="gray.500" />

        <CardFooter >
            <List>
                {footer.map((f, i) => (
                    <ListItem key={i}>
                        <Link>
                            <Text
                                href="#"
                                fontSize="19px"
                                mb="3px"
                                color="green.700"
                            >
                                {f}
                            </Text>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </CardFooter>
    </Card>
);
