import React, { Component } from "react";
import { Link } from "gatsby";
import menu from "../../images/nav/menu.png";
import toClose from "../../images/nav/close.png";

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
    }
}

export default NavMenu;
