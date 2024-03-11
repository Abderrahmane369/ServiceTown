import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/ServiceHIW";
import OurParteners from "../components/OurParteners";
import DisplayServiceContainerTabs from "../components/DisplayServiceContainer";
import { useState } from "react";

export default function HomePage() {
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceSelect = (service) => {
        setSelectedService(service);
    };
    return (
        <>
            <Hero onServiceSelect={handleServiceSelect}/>
            <DisplayServiceContainerTabs d={selectedService}/>
            <Services />
            <HowItWorks />
            <Testimonials />
            <OurParteners />
        </>
    );
}
