import React, { Component } from "react";
import { Link } from "gatsby";
import menu from "../../images/nav/menu.png";
import toClose from "../../images/nav/close.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";

class NavMenu extends Component {
    state = {
        open: true,
    };
    toggleImage = () => {
        this.setState((state) => ({ open: !state.open }));
    };

    getImage = () => {
        if (this.state.open) {
            return menu;
        } else {
            return toClose;
        }
    };

    render() {
        return (
            <>
                <button
                    onClick={this.toggleImage}
                    className="absolute top-9 right-14 md:hidden"
                >
                    <img
                        src={this.getImage()}
                        alt="Menu button"
                        className="h-6"
                    />
                </button>
                <ul className="flex flex-col gap-2 font-semibold text-lg md:flex-row md:gap-12 lg:text-xl">
                    <li>
                        <AnchorLink to="/hi/#home">घर</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/hi/#sparrow">
                            गौरैया के बारे में
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/hi/#tips">गौरैया बचाओ</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink
                            to="/hi/#form"
                            className="text-gray-100 p-2 px-4 bg-[#76b947] rounded-md"
                        >
                            अब सहेजें!
                        </AnchorLink>
                    </li>
                </ul>
            </>
        );
    }
}

export default NavMenu;
