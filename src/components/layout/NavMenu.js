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
                        <AnchorLink to="/#home">Home</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#sparrow">About Sparrows</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#tips">Tips</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink to="/#form">Order Now!</AnchorLink>
                    </li>
                    <li>
                        <Link to="/hi">हिन्दी (Hindi)</Link>
                    </li>
                </ul>
            </>
        );
    }
}

export default NavMenu;
