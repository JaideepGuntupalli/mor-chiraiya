import * as React from "react";
import morchiraiya from "../images/mor-chiraiya-logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#8ca88e] mt-8">
            <div className="bg-[#a1c4a4] px-10 py-4 text-center">
                An Initiative by Chattisgarh Government
            </div>

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
            <div className="bg-[#5c6e5d] px-10 py-4 text-sm text-zinc-300 text-center">
                Copyright 2022. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
