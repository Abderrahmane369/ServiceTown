import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import HowItWorks from "../components/ServiceHIW";
import OurParteners from "../components/OurParteners";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <HowItWorks />
            <Testimonials />
            <OurParteners />
        </>
    );
}
