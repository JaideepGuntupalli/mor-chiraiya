import * as React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import CardRow from "../components/CardRow";
import MainCard from "../components/MainCard";
import TipSection from "../components/TipSection";
import logo from "../images/gov_logo.webp";
import Order from "../components/Order";
import Campaign from "../commonComponents/Campaign";
import Video from "../commonComponents/video";
import Workshop from "../components/Workshop";

const IndexPage = () => {
    return (
        <Layout pageTitle="Mor-Chiraya">
            <Hero />
            <Campaign
                title="What is Mor-Chiraiya?"
                content="Mahasamund Forest Board has started a public initiative called Mor-Chiraiya, in which we will encourage the coming generation to be sensitive towards birds. In this line, our first initiative will be to prepare the nest for sparrows by the hands of children and environmental lovers. Under this initiative, Mahasamund Forest Board will provide DIY kit items so that the participants can prepare the nest in the workshop organized or at their own home."
                cta="ORDER A KIT, TODAY!"
            />
            <CardRow />
            <MainCard />
            <Video heading="Learn how to easily build the nest" />
            <Order />
            <Workshop />
            <TipSection />
            <div className="bg-[#94C973] px-10 py-8 text-center flex items-center gap-4 justify-center md:py-4 md:text-xl">
                <img
                    src={logo}
                    alt="Mahasamund District Logo"
                    className="h-20"
                />
                <p>
                    An initiative by{" "}
                    <span className="font-semibold">
                        Mahasamund Forest Division
                    </span>{" "}
                    for sparrow conservation
                </p>
            </div>
        </Layout>
    );
};

export default IndexPage;
