import * as React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import CardRow from "../components/CardRow";
import MainCard from "../components/MainCard";
import logo from "../images/gov_logo.webp";
import Campaign from "../commonComponents/Campaign";
// import Video from "../commonComponents/Video";
import Workshop from "../components/Workshop";
import Social from "../commonComponents/Social";
import Product from "../components/Product";
import WorkshopSec from "../commonComponents/WorkshopSec";

const IndexPage = () => {
    return (
        <Layout pageTitle="Mor-Chiraya">
            <Hero />
            <Campaign
                title="What is Mor-Chiraiya?"
                content="Mahasamund Forest Division has started a public initiative called Mor-Chiraiya, in which we will encourage the coming generation to be sensitive towards birds. In this line, our first initiative will be to prepare the nest for sparrows by the hands of children and environmental lovers. Under this initiative, Mahasamund Forest Division will arrange for a DIY (Do It Yourself) kit so that the participants can prepare the nest in the workshop organized or at their own home."
                cta="ORDER A NEST, TODAY!"
                lang="eng"
            />
            <CardRow />
            <MainCard />
            {/* <Video
                heading="Learn how to easily build the nest"
                content="Saving the sparrow is not a very difficult task. If you want, you can also help with this work, for this only you have to set up some birdhouses, wooden boxes in which the bird can make its nest near your house."
            /> */}
            <Product />
            <WorkshopSec
                title="Workshops"
                content="We are continuously organizing workshops to conserve the sparrows. Our dedicated experts and enthusiastic volunteers are working round the clock towards the success of this initiative. A small contribution and a small effort of everyone can bring big results. To organize a workshop in your schools, colleges, offices contact us, now!!"
                cta="CONTACT US!"
            />
            <Workshop />
            {/* <TipSection /> */}
            <Social phrase="Follow us on Socials to receive updates!" />
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
