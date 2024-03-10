import {
    AbsoluteCenter,
    Box,
    Button,
    Center,
    HStack,
    Heading,
    Img,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    SimpleGrid,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img0 from "../assets/centered_large_thumb.jpeg";
import img1 from "../assets/centered_large_thumb (1).jpeg";
import img2 from "../assets/centered_large_thumb (2).jpeg";
import img3 from "../assets/centered_large_thumb (3).jpeg";
import img4 from "../assets/centered_large_thumb (4).jpeg";
import img5 from "../assets/centered_large_thumb (5).jpeg";
import img6 from "../assets/centered_large_thumb (6).jpeg";
import img7 from "../assets/centered_large_thumb (7).jpeg";
import img8 from "../assets/centered_large_thumb (8).jpeg";
import img9 from "../assets/centered_large_thumb (9).jpeg";
import img10 from "../assets/centered_large_thumb (10).jpeg";
import img11 from "../assets/centered_large_thumb (11).jpeg";
import img12 from "../assets/centered_large_thumb (12).jpeg";
import img13 from "../assets/centered_large_thumb (13).jpeg";
import img14 from "../assets/centered_large_thumb (14).jpeg";
import img15 from "../assets/centered_large_thumb (15).jpeg";
import img16 from "../assets/centered_large_thumb (16).jpeg";
import img17 from "../assets/centered_large_thumb (17).jpeg";
import img18 from "../assets/centered_large_thumb (18).jpeg";
import { IoCameraOutline } from "react-icons/io5";

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
    }
};

export default function PProfilePhotos() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box maxWidth="617px" my="25px">
            <Heading fontSize="18px">Featured Projects</Heading>
            <Text fontSize="13px" my="5px">17 photos</Text>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                <Img src={img0} mr="5px" />
                <Img src={img1} mr="5px" />
                <Img src={img2} mr="5px" />
                <Img src={img3} mr="5px" />
                <Img src={img4} mr="5px" />
                <Img src={img5} mr="5px" />
                <Img src={img6} mr="5px" />
                <Img src={img7} mr="5px" />
                <Box>
                    <Img
                        pos="absolute"
                        zIndex={-1}
                        src={img8}
                        mr="5px"
                        bg="red"
                    />
                    <Button
                        pos="absolute"
                        bgColor="rgba(0, 0, 0, 0.52)"
                        zIndex={1}
                        boxSize="100%"
                        color="white"
                        textAlign="center"
                        fontSize="17px"
                        _hover="none"
                        _active="none"
                        onClick={onOpen}
                    >
                        <AbsoluteCenter>
                            <Center>
                                <IoCameraOutline size="26px" />
                            </Center>
                            <Text>See all (17)</Text>
                        </AbsoluteCenter>
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose} p="0">
                        <ModalOverlay bg="rgba(25, 25, 26, 0.7)" />

                        <ModalContent
                            size="full"
                            maxW="800px"
                            maxH="600px"
                            p="0"
                        >
                            <ModalHeader textAlign="center">
                                Knockout Plumbing & Repipe Inc.
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody overflowY="scroll" p="0">
                                <SimpleGrid columns={3} spacing="4px">
                                    <Img src={img0} boxSize="260px" />
                                    <Img src={img1} boxSize="260px" />
                                    <Img src={img2} boxSize="260px" />
                                    <Img src={img3} boxSize="260px" />
                                    <Img src={img4} boxSize="260px" />
                                    <Img src={img5} boxSize="260px" />
                                    <Img src={img6} boxSize="260px" />
                                    <Img src={img7} boxSize="260px" />
                                    <Img src={img8} boxSize="260px" />
                                    <Img src={img9} boxSize="260px" />
                                    <Img src={img10} boxSize="260px" />
                                    <Img src={img11} boxSize="260px" />
                                    <Img src={img12} boxSize="260px" />
                                    <Img src={img13} boxSize="260px" />
                                    <Img src={img14} boxSize="260px" />
                                    <Img src={img15} boxSize="260px" />
                                    <Img src={img16} boxSize="260px" />
                                    <Img src={img17} boxSize="260px" />
                                    <Img src={img18} boxSize="260px" />
                                </SimpleGrid>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme="blue">
                                    Check availability
                                </Button>
                                <Button
                                    variant="ghost"
                                    mr={3}
                                    onClick={onClose}
                                >
                                    Close
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </Carousel>
        </Box>
    );
}
