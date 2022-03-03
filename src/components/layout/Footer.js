import * as React from "react";
import morchiraiya from "../../images/mor-chiraiya-logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#76B947]">
            <div className="flex p-8 px-10 gap-2 flex-col md:flex-row items-start">
                <img
                    src={morchiraiya}
                    alt="Logo of the initiative Mor-Chiraiya"
                    className="h-16 md:m-0"
                />
                <p className="pt-4 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime, officiis at fugiat inventore excepturi omnis aut
                    ullam quos unde assumenda voluptas labore quis cumque est
                    nesciunt sit dolorem distinctio nemo!
                </p>
            </div>
            <div className="flex px-10 pb-8 gap-2 flex-col md:flex-row items-start text-sm">
                <h3 className="text-base">CONTACT INFO</h3>
                <p>Address: 184, Main Collins Street West Victoria 8007</p>
                <p>Phone: +1800-222-3333</p>
                <p>Email: contact@example.com</p>
            </div>
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
