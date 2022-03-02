import React from "react";
import { Link } from "gatsby";
import menu from "../images/nav/menu.png";
import close from "../images/nav/close.png";

const NavMenu = () => {
    return (
        <>
            <button>Oh GOD!</button>
            <img
                src={menu}
                alt="Menu button"
                className="h-6 absolute top-9 right-14 md:hidden"
            />
            <ul className="flex flex-col gap-2 font-semibold text-lg md:flex-row md:gap-12 md:text-xl">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </>
    );
};

export default NavMenu;
