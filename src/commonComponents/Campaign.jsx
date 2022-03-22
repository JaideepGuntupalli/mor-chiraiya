import * as React from "react";
import logo from "../images/mor-chiraiya-logo.webp";

const Campaign = ({ title, content }) => {
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
            </div>
        </section>
    );
};

export default Campaign;
