import * as React from "react";
import logo from "../images/mor-chiraiya-logo.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Campaign = ({ title, content, cta }) => {
    return (
        <section className="flex flex-col items-center gap-8 p-8 md:flex-row bg-[#F7E2C7]">
            <img
                src={logo}
                alt="Mor-Chiraya logo"
                className=" w-1/2 md:w-3/5 md:m-8 md:ml-16"
            />
            <div className="flex flex-col gap-4  md:m-8">
                <h2 className="font-semibold text-2xl md:text-4xl">{title}</h2>
                <p className="md:text-lg">{content}</p>
                <AnchorLink
                    to="/#form"
                    title="Order Now!"
                    className="self-start mt-2 p-4 bg-[#76B947] text-black font-semibold rounded-md"
                >
                    {cta}
                </AnchorLink>
                <AnchorLink
                    to="/#people"
                    title="Order Now!"
                    className="self-start text-black font-semibold rounded-md underline"
                >
                    Learn More About the Campaign
                </AnchorLink>
            </div>
        </section>
    );
};

export default Campaign;
