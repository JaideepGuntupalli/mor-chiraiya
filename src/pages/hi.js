import * as React from "react";
import Layout from "../hi-components/layout/Layout";
import Hero from "./../hi-components/Hero";
import CardRow from "../hi-components/aboutSparrow/CardRow";
import MainCard from "../hi-components/main/MainCard";
import TipSection from "../hi-components/tips/TipSection";
import logo from "../images/gov_logo.png";
import Order from "../hi-components/orderForm/Order";
import Campaign from "../hi-components/aboutMorChiraiya/Campaign";

const Hindi = () => {
    return (
        <Layout pageTitle="मोर चिरैया">
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
                    गौरैया संरक्षण के लिए{" "}
                    <span className="font-semibold">महासमुंद वन मंडल</span> की
                    एक पहल|
                </p>
            </div>
        </Layout>
    );
};

export default Hindi;
