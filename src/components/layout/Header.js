import NavMenu from "./NavMenu";
import * as React from "react";
import morchiraiya from "../../images/mor-chiraiya-logo.png";

const Header = () => {
    return (
        <header className="md:fixed md:z-10 w-full">
            <nav className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center p-4 px-20 bg-[#F7E2C7] shadow-lg md:opacity-90">
                <img
                    src={morchiraiya}
                    alt="Logo of the initiative Mor-Chiraiya"
                    className="mx-auto h-16 md:m-0"
                />
                <NavMenu />
            </nav>
        </header>
    );
};

export default Header;
