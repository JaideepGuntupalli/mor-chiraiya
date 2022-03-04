import * as React from "react";
import Layout from "../components/layout/Layout";
import Hero from "./../components/Hero";
import CardRow from "../components/CardRow";
import MainCard from "../components/MainCard";
import TipSection from "./../components/TipSection";
import logo from "../images/gov_logo.png";
import Order from "../components/Order";
import Campaign from "../components/Campaign";

const IndexPage = () => {
    return (
        <Layout pageTitle="Mor-Chiraya">
            <Hero />
            <CardRow />
            <MainCard />
            <Campaign />
            <Order />
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
