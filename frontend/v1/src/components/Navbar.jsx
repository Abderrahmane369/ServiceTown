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
import { getAuth, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { get } from "react-hook-form";
// import Dropdown from "react-bootstrap/Dropdown";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    const [user, setUser] = useState(null);
    const [localUser, setLocalUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((u) => {
            if (u) {
                setUser(u);
                console.log("User is signed in");
            } else {
                setUser(null);
                console.log("No user is signed in");
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [auth]);

    useEffect(() => {
        if (localStorage.getItem("user_id")) {
            setLocalUser({
                id: localStorage.getItem("user_id"),
                name: localStorage.getItem("user_name"),
                email: localStorage.getItem("user_email"),
                phone: localStorage.getItem("user_phone"),
                role: localStorage.getItem("user_role")
            });
        }
    }, [localUser]);

    return (
        <Flex {...styles.navbar}>
            <Logo />

            <Spacer />

            <Box pr="40px">
                <Services_DropDown />
            </Box>
            <Box pr="20px">
                <Link href="https://github.com/Abderrahmane369/ServiceTown" fontWeight="500" fontSize="medium">
                    Blog
                </Link>
            </Box>

            {user || localUser ? (
                <>
                    <UserInfo localUser={localUser} />
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
                <Heading as="h1" className="logo" fontSize={35}>
                    <Text display="inline" color="#1a202c" className="logo1">
                        service
                    </Text>
                    <Text display="inline" color="#ff2e93" className="logo2">
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

            <Button bgColor="#00e6b3" color="white">
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
    const clearLocalStorage = () => {
        localStorage.clear();
    };
    return (
        <Box>
            <Button
                variant="ghost"
                mr="5px"
                _hover={{ textDecoration: "none" }}
                colorScheme="red"
                rightIcon={<IoIosLogOut size={23} />}
                onClick={() => {
                    logout();
                    clearLocalStorage();
                }}
                p="0px"
            >
                <Link href="/login" fontWeight="500" fontSize="medium">
                    Log Out
                </Link>
            </Button>
        </Box>
    );
};

const UserInfo = ({ localUser }) => {
    const auth = getAuth();
    const { displayName, photoURL } = auth.currentUser
        ? auth.currentUser
        : { displayName: localUser.name, photoURL: null };

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
                <MenuItem><Link href="/services/landscaping">Landscaping</Link> </MenuItem>
                <MenuItem><Link href="/services/tv-mounting">TV Mounting</Link></MenuItem>
                <MenuItem isDisabled>Help Moving</MenuItem>
                <MenuItem><Link href="/services/handyman">Handyman</Link></MenuItem>
                <MenuItem isDisabled>Yard Work</MenuItem>
                <MenuItem><Link href="/services/painting">Painting</Link></MenuItem>
                <MenuItem isDisabled>Mounting Services</MenuItem>

                <MenuItem><Link href="/services/electrical-help">Electrical Help</Link></MenuItem>
                <MenuItem><Link href="/services/plumbing">Plumbing</Link></MenuItem>
                <MenuItem isDisabled>Hang Pictures</MenuItem>
                <MenuItem isDisabled>Lighting Installation</MenuItem>
                <MenuItem isDisabled>Cleaning Services</MenuItem>
                <MenuItem isDisabled>Delivery Service</MenuItem>
                <MenuItem isDisabled>Contactless Tasks</MenuItem>
                <MenuItem isDisabled>IKEA Services</MenuItem>
                <MenuItem isDisabled>All Services</MenuItem>
            </MenuList>
        </Menu>
    );
};
