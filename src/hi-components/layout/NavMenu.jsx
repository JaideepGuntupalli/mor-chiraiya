import React, { Component } from "react";
import menu from "../../images/nav/menu.webp";
import toClose from "../../images/nav/close.webp";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import morchiraiya from "../../images/mor-chiraiya-logo.webp";
import morchiraiyalogo from "../../images/mor-chiraiya-text.svg";
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
                    <div className="flex items-center justify-center">
                        <img
                            src={morchiraiya}
                            alt="Logo of the initiative Mor-Chiraiya"
                            className="h-12 sm:h-16"
                        />
                        <img
                            src={morchiraiyalogo}
                            alt="Text of the initiative Mor-Chiraiya"
                            className="ml-2 invert-[0.95] h-10 sm:h-14"
                        />
                    </div>
                    <button
                        onClick={this.toggleMenu}
                        className="absolute top-3 left-0 sm:top-5"
                    >
                        <img
                            src={this.getImage()}
                            alt="Menu button"
                            className="h-6 invert-[0.95]"
                        />
                    </button>
                </div>
                <ul
                    className={`flex flex-col gap-6 items-center font-semibold text-xl md:flex-row md:gap-0 text-white text-center ${
                        isOpen ? "hidden" : ""
                    } md:flex`}
                >
                    <li>
                        <AnchorLink
                            to="/hi/#home"
                            className="hover:text-[#90ba92]"
                        >
                            घर
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink
                            to="/hi/#sparrow"
                            className="md:ml-8 hover:text-[#90ba92]"
                        >
                            गौरैया बचाओ
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink
                            to="/hi/#workshop"
                            className="md:ml-8 hover:text-[#90ba92]"
                        >
                            कार्यशालाएं
                        </AnchorLink>
                    </li>
                    {/* <li>
                        <AnchorLink
                            to="/hi/#tips"
                            className="md:ml-8 hover:text-[#90ba92]"
                        >
                            हमारे बारे में
                        </AnchorLink>
                    </li> */}
                    <li>
                        <AnchorLink
                            to="/hi/#diy-kit"
                            className="text-[#6d5b1c] p-1 px-4 md:ml-8 bg-yellow-400 rounded-md hover:bg-yellow-300"
                        >
                            सहयोग दें!
                        </AnchorLink>
                    </li>
                    <li className="relative min-w-[11.5rem] md:min-w-[6rem] md:mx-4">
                        <button onClick={this.toggleLang}>
                            <div className="p-3 rounded-full hover:bg-[#00000021] flex items-center hover:text-[#90ba92]">
                                <img
                                    src={language}
                                    alt="Language Switcher"
                                    className="w-8 inline md:m-0 invert-[0.95]"
                                />
                                <p className="ml-3 text-center inline font-semibold">
                                    भाषा
                                </p>
                            </div>
                        </button>
                        <div
                            className={`absolute top-16 opacity-95 flex flex-row md:flex-col border-2 text-center border-yellow-700 mx-auto w-full ${
                                isLang ? "hidden" : ""
                            }`}
                        >
                            <Link
                                to="/"
                                className="font-bold font-sans bg-yellow-500 px-2 py-1 pl-2"
                            >
                                English
                            </Link>
                            <Link
                                to=""
                                className="font-bold bg-yellow-600 text-xl px-2 py-1 pt-2 w-1/2 md:w-full"
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
