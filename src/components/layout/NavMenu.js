import React, { Component } from "react";
import menu from "../../images/nav/menu.png";
import toClose from "../../images/nav/close.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import morchiraiya from "../../images/mor-chiraiya-logo.png";

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
                        className="absolute top-5 right-0"
                    >
                        <img
                            src={this.getImage()}
                            alt="Menu button"
                            className="h-6"
                        />
                    </button>
                </div>
                <ul
                    className={`flex flex-col gap-4 font-semibold text-lg md:flex-row md:gap-12 lg:text-xl text-center ${
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
                </ul>
            </>
        );
    }
}

export default NavMenu;
