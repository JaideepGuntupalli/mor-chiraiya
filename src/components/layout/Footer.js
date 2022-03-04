import * as React from "react";
import morchiraiya from "../../images/mor-chiraiya-logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#76B947]">
            <section className="md:flex">
                <div className="flex p-8 px-10 gap-2 flex-col items-start md:flex-1 md:pl-20">
                    <img
                        src={morchiraiya}
                        alt="Logo of the initiative Mor-Chiraiya"
                        className="h-16 md:m-0"
                    />
                    <p className="pt-4 text-sm">
                        It is our responsibility to make our loving bird a part
                        of our life again!!! By making the coming generation
                        realize the importance of the environment, they will
                        become sensitive towards the environment and especially
                        bird conservation. Mor-Chiraiya is an initiative to make
                        nests for birds using eco-friendly materials, in which
                        citizens and especially students will be able to make
                        nests with their own hands according to DO IT YOURSELF
                        (DIY) and put them in their homes.
                    </p>
                </div>
                <div className="flex px-10 pb-8 gap-2 flex-col items-start text-sm md:pt-8 md:flex-1 justify-evenly">
                    <h3 className="text-base md:text-lg md:font-semibold">
                        CONTACT INFO
                    </h3>
                    <p>Address: 184, Main Collins Street West Victoria 8007</p>
                    <p>Phone: +1800-222-3333</p>
                    <p>Email: contact@example.com</p>
                </div>
            </section>
            <div className="flex flex-col gap-2 md:flex-row justify-evenly bg-[#08392B] px-10 py-4 text-sm text-zinc-300 text-center">
                <p>Copyright 2022. All Rights Reserved.</p>
                <p>
                    Designed & Developed by{" "}
                    <a
                        href="https://jaideepguntupalli.com"
                        className="link link-underline link-underline-zinc"
                    >
                        Jaideep Guntupalli
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
