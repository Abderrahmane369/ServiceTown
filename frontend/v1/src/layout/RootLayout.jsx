import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";

export default function RootLayout() {
    return (
        <Box position="relative">
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    );
}
