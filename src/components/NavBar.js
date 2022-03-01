import * as React from "react";
import { Link } from "gatsby";
import morchiraiya from "../images/mor-chiraiya-logo.png";
import menu from "../images/nav/menu.png";
import close from "../images/nav/close.png";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-4 px-20 bg-[#f2efe0] shadow-2xl">
            <img
                src={morchiraiya}
                alt="Logo of the initiative Mor-Chiraiya"
                className="mx-auto h-16 md:m-0"
            />
            <ul className="hidden md:flex gap-12 font-semibold text-xl">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <img
                src={menu}
                alt="Menu button"
                className="h-6 absolute right-14 md:hidden"
            />
        </nav>
    );
}
