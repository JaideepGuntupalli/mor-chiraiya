import React, { Component } from "react";
import menu from "../../images/nav/menu.png";
import toClose from "../../images/nav/close.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import morchiraiya from "../../images/mor-chiraiya-logo.png";
import language from "../../images/language.png";

class NavMenu extends Component {
    state = {
        isOpen: true,
    };

    toggleMenu = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    getImage = () => {
        if (this.state.isOpen) {
            return menu;
        } else {
            return toClose;
        }
    };

    render() {
        const { isOpen } = this.state;

        return (
            <>
                <div className="relative w-full md:hidden">
                    <img
                        src={morchiraiya}
                        alt="Logo of the initiative Mor-Chiraiya"
                        className="h-16 mx-auto"
                    />
                    <button
                        onClick={this.toggleMenu}
                        className="absolute top-5 left-0"
                    >
                        <img
                            src={this.getImage()}
                            alt="Menu button"
                            className="h-6"
                        />
                    </button>
                </div>
                <ul
                    className={`flex flex-col gap-6 items-center font-semibold text-lg md:flex-row md:gap-8 lg:text-xl text-center ${
                        isOpen ? "hidden" : ""
                    } md:flex`}
                >
                    <li>
                        <AnchorLink to="/#home">Home</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#sparrow">About Sparrows</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#tips">Save Sparrows</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink
                            to="/#form"
                            className="text-gray-100 p-2 px-4 bg-[#76b947] rounded-md"
                        >
                            Act Now!
                        </AnchorLink>
                    </li>
                    <li>
                        <button onClick={this.toggleMenu} className="">
                            <div className="p-3 rounded-full hover:bg-[#00000021]">
                                <img
                                    src={language}
                                    alt="Language Switcher"
                                    className="w-8 inline mr-4 md:m-0"
                                />
                                <p className="font-semibold text-lg md:hidden text-center inline">
                                    Language
                                </p>
                            </div>
                        </button>
                    </li>
                </ul>
                <div
                    className={`absolute right-6 top-20 bg-[#F7E2C7] opacity-95 flex flex-col border-2 text-center border-[#443e37] ${
                        isOpen ? "hidden" : ""
                    }`}
                >
                    <Link
                        to=""
                        className="font-bold bg-[#c9b8a2] px-2 py-1 pl-2"
                    >
                        English
                    </Link>
                    <Link
                        to="/hi"
                        className="font-bold font-serif text-xl px-2 py-1 pt-2"
                    >
                        हिंदी
                    </Link>
                </div>
            </>
        );
    }
}

export default NavMenu;
