import NavMenu from "./NavMenu";
import * as React from "react";
import morchiraiya from "../../images/mor-chiraiya-logo.webp";
import morchiraiyalogo from "../../images/mor-chiraiya-text.svg";

const Header = () => {
    return (
        <header className="sticky lg:fixed z-10 w-full">
            <nav className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center p-4 pl-8 bg-[#253526] backdrop-blur shadow-lg lg:bg-opacity-70 text-center">
                <div className="flex items-center text-white font-serif">
                    <img
                        src={morchiraiya}
                        alt="Logo of the initiative Mor-Chiraiya"
                        className="hidden md:block h-16 lg:ml-20"
                    />
                    <img
                        src={morchiraiyalogo}
                        alt="Logo Text"
                        className="hidden md:block ml-6 invert-[0.95] h-16"
                    />
                </div>
                <NavMenu />
            </nav>
        </header>
    );
};

export default Header;

// bg-[#F7E2C7]
