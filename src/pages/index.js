import * as React from "react";
import Layout from "../components/layout/Layout";
import Hero from "./../components/Hero";
import CardRow from "../components/CardRow";

const IndexPage = () => {
    return (
        <Layout pageTitle="Mor-Chiraya">
            <Hero />
            {/* <div className="bg-[#94C973] px-10 py-4 text-center">
                An initiative of Mahasamund Forest Board for sparrow
                conservation
            </div> */}
            <CardRow />
        </Layout>
    );
};

export default IndexPage;
