import { Box, Container, Heading, Img } from "@chakra-ui/react";
import heroImg from "../assets/hero.png";

export default function Hero() {
    return (
        <Box>
            <Img src={heroImg} userSelect="none" />
        </Box>
    );
}
