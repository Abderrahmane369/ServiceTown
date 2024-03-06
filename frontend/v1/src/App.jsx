import { Component } from "react";
import "./App.sass";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import LoginPage from "./pages/LoginPage";
import TermsPage from "./pages/TermsPage";
import ServicePage from "./pages/ServicePage";
import ProviderProfile from "./pages/ProviderProfile";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/pprofile" element={<ProviderProfile />} />
            </Route>
        </>
    )
);

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "#f9fafb"
            }
        }
    }
});

export default class App extends Component {
    render() {
        return (
            <ChakraProvider theme={theme}>
                <RouterProvider router={router} />;
            </ChakraProvider>
        );
    }
}
