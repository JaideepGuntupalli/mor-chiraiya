import React, { Component } from "react";
import menu from "../../images/nav/menu.webp";
import toClose from "../../images/nav/close.webp";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import morchiraiya from "../../images/mor-chiraiya-logo.webp";
import language from "../../images/language.webp";

class NavMenu extends Component {
    state = {
        isOpen: true,
        isLang: true,
    };

    toggleMenu = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    toggleLang = () => {
        this.setState((prevState) => ({
            isLang: !prevState.isLang,
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
        const { isOpen, isLang } = this.state;

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
                    className={`flex flex-col gap-6 items-center font-semibold text-lg md:flex-row md:gap-0 lg:text-xl text-center ${
                        isOpen ? "hidden" : ""
                    } md:flex`}
                >
                    <li>
                        <AnchorLink to="/#home">Home</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="md:ml-8" to="/#sparrow">
                            About Sparrows
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink className="md:ml-8" to="/#tips">
                            Save Sparrows
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink
                            to="/#form"
                            className="text-gray-100 p-2 px-4 md:ml-8 bg-[#76b947] rounded-md"
                        >
                            Act Now!
                        </AnchorLink>
                    </li>
                    <li className="relative min-w-[6rem]">
                        <button onClick={this.toggleLang}>
                            <div className="p-3 rounded-full hover:bg-[#00000021] flex">
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
                        <div
                            className={`absolute top-16 bg-[#F7E2C7] opacity-95 flex flex-row md:flex-col border-2 text-center border-[#443e37] z-10 mx-auto w-full ${
                                isLang ? "hidden" : ""
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
                                className="font-bold font-serif text-xl px-2 py-1 pt-2 w-1/2 md:w-full"
                            >
                                हिंदी
                            </Link>
                        </div>
                    </li>
                </ul>
            </>
        );
    }
}

export default NavMenu;
