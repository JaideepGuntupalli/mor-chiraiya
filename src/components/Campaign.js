import * as React from "react";
import logo from "../images/mor-chiraiya-logo.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Campaign = () => {
    return (
        <section className="flex flex-col items-center gap-8 p-8 md:flex-row bg-[#F7E2C7]">
            <img
                src={logo}
                alt="Mor-Chiraya logo"
                className=" w-1/2 md:w-3/5 md:m-8 md:ml-16"
            />
            <div className="flex flex-col gap-4  md:m-8">
                <h2 className="font-semibold text-2xl md:text-4xl">
                    What is Mor-Chiraiya?
                </h2>
                <p className="md:text-lg">
                    Mahasamund Forest Board is going to start a public
                    initiative called Mor-Chiraiya, in which we will encourage
                    the coming generation to be sensitive towards birds. In this
                    line, our first initiative will be to prepare the nest for
                    sparrows by the hands of children and environmental lovers.
                    Under this initiative, Mahasamund Forest Board will provide
                    DIY kit items so that the participants can prepare the nest
                    in the workshop organized or at their own home.
                </p>
                <AnchorLink
                    to="/#form"
                    title="Order Now!"
                    className="self-start mt-4 p-4 bg-[#76B947] text-black font-semibold rounded-md"
                >
                    ORDER A KIT, TODAY!
                </AnchorLink>
            </div>
        </section>
    );
};

export default Campaign;
