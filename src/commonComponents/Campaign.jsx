import * as React from "react";
import logo from "../images/mor-chiraiya-logo.webp";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Campaign = ({ title, content, cta, learn }) => {
    return (
        <section className="flex flex-col items-center gap-8 p-8 md:flex-row bg-yellow-500">
            <img
                src={logo}
                alt="Mor-Chiraya logo"
                className=" w-1/2 md:w-1/5 md:m-8 md:ml-16"
            />
            <div className="flex flex-col gap-4  md:m-8">
                <h2 className="text-2xl md:text-4xl">{title}</h2>
                <p className="md:text-lg">{content}</p>
                <AnchorLink
                    to="#form"
                    title="Order Now!"
                    className="self-start mt-2 p-4 px-6 bg-[#76B947] text-[#253526] font-black rounded-md  hover:bg-[#6faf41]"
                >
                    {cta}
                </AnchorLink>
                {/* <AnchorLink
                    to="#people"
                    title="Order Now!"
                    className="self-start text-[#253526] font-bold rounded-md underline"
                >
                    {learn}
                </AnchorLink> */}
            </div>
        </section>
    );
};

export default Campaign;
