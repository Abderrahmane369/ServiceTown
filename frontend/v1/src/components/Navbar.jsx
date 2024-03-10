import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    Heading,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
    Text
} from "@chakra-ui/react";
import styles from "./styles";
import { IoIosLogOut } from "react-icons/io";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { get } from "react-hook-form";
// import Dropdown from "react-bootstrap/Dropdown";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                console.log("User is signed in");
            } else {
                setUser(null);
                console.log("No user is signed in");
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [auth]);

    return (
        <Flex {...styles.navbar} >
            <Logo />

            <Spacer />

            <Box pr="40px">
                <Services_DropDown />
            </Box>
            <Box pr="20px">
                <Link href="/blog" fontWeight="500" fontSize="medium">
                    Blog
                </Link>
            </Box>

            {user ? (
                <>
                    <UserInfo />
                </>
            ) : (
                <GetAuthened />
            )}
        </Flex>
    );
}

const Logo = () => {
    return (
        <Box>
            <Link
                href="/"
                _hover={{ textDecoration: "none" }}
                draggable={false}
            >
                <Heading as="h1" className="logo" fontSize={30}>
                    <Text
                        display="inline"
                        color="#302f34"className="logo"
                    >
                        service
                    </Text>
                    <Text
                        display="inline"
                        color="#21c351"className="logo"
                    >
                        town
                    </Text>
                </Heading>
            </Link>
        </Box>
    );
};

const GetAuthened = () => {
    return (
        <Box>
            <Button
                variant="ghost"
                mr="5px"
                _hover={{ textDecoration: "none" }}
            >
                <Link href="/login" fontWeight="500" fontSize="medium">
                    Log In
                </Link>
            </Button>

            <Button colorScheme="blue">
                <Link
                    href="/signup"
                    fontWeight="500"
                    fontSize="medium"
                    _hover={{ textDecoration: "none" }}
                >
                    Sign Up
                </Link>
            </Button>
        </Box>
    );
};

const LogOut = () => {
    const auth = getAuth();
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <Box>
            <Button
                variant="ghost"
                mr="5px"
                _hover={{ textDecoration: "none" }}
                colorScheme="red"
                rightIcon={<IoIosLogOut size={23} />}
                onClick={logout}
                p="0px"
            >
                <Link href="/login" fontWeight="500" fontSize="medium">
                    Log Out
                </Link>
            </Button>
        </Box>
    );
};

const UserInfo = () => {
    const auth = getAuth();
    const { displayName, photoURL } = auth.currentUser;

    return (
        <HStack ml="14px">
            {" "}
            <Menu autoSelect={false}>
                <MenuButton>
                    <HStack>
                        <Avatar name={displayName} src={photoURL} size="sm" />{" "}
                        <Text fontSize="md" fontWeight="400" color="gray.700">
                            {displayName}
                        </Text>
                    </HStack>
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <LogOut />
                    </MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    );
};

const Services_DropDown = (p) => {
    return (
        <Menu>
            <MenuButton>
                <Box fontWeight="500" fontSize="medium">
                    Services
                </Box>
            </MenuButton>
            <MenuList>
                <Heading fontSize="18px" ml="10px" mb="5px" fontWeight="500">
                    Popular Tasks
                </Heading>
                <MenuItem>Furniture Assembly</MenuItem>
                <MenuItem>TV Mounting</MenuItem>
                <MenuItem>Help Moving</MenuItem>
                <MenuItem>Handyman</MenuItem>
                <MenuItem>Yard Work</MenuItem>
                <MenuItem>Painting</MenuItem>
                <MenuItem>Mounting Services</MenuItem>

                <MenuItem>Electrical Help</MenuItem>
                <MenuItem>Plumbing</MenuItem>
                <MenuItem>Hang Pictures</MenuItem>
                <MenuItem>Lighting Installation</MenuItem>
                <MenuItem>Cleaning Services</MenuItem>
                <MenuItem>Delivery Service</MenuItem>
                <MenuItem>Contactless Tasks</MenuItem>
                <MenuItem>IKEA Services</MenuItem>
                <MenuItem>All Services</MenuItem>
            </MenuList>
        </Menu>
    );
};
