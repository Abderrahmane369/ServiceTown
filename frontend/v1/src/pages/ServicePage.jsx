import ServiceDescription from "../components/ServiceDescription";
import ServiceHero from "../components/ServiceHero";
import ServiceRecommend from "../components/ServiceRecommend";
import ServicesList from "../components/ServicesList";
import AskedQuestions from "../components/AskedQuestions";
import OurParteners from "../components/OurParteners";
import { useParams } from "react-router-dom";

export default function ServicePage() {
    const { servicename } = useParams();

    return (
        <>
            <ServiceHero serviceData={servicename}/>
            <ServiceDescription serviceData={servicename}/>
            <ServicesList serviceData={servicename}/>
            <ServiceRecommend />
            <AskedQuestions serviceData={servicename}/>
            <OurParteners />
        </>
    );
}
