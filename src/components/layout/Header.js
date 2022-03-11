import NavMenu from "./NavMenu";
import * as React from "react";
import morchiraiya from "../../images/mor-chiraiya-logo.png";

const Header = () => {
    return (
        <header className="lg:fixed lg:z-10 w-full">
            <nav className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center p-4 pl-8 bg-[#F7E2C7] shadow-lg lg:opacity-90 text-center">
                <img
                    src={morchiraiya}
                    alt="Logo of the initiative Mor-Chiraiya"
                    className="hidden md:block h-16  ml-20"
                />
                <NavMenu />
            </nav>
        </header>
    );
};

export default Header;
