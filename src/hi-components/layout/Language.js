import React, { Component } from "react";
import cross from "../../images/nav/close.png";
import { Link } from "gatsby";

class Language extends Component {
    state = {
        isBoxVisible: true,
    };
    toggleBox = () => {
        this.setState((prevState) => ({
            isBoxVisible: !prevState.isBoxVisible,
        }));
    };

    render() {
        const { isBoxVisible } = this.state;

        return (
            <section
                className={`bg-gray-100 flex justify-center items-center px-4 text-center transition-height duration-500 ease-in-out ${
                    isBoxVisible ? "" : "hidden"
                }`}
            >
                <button
                    onClick={this.toggleBox}
                    className="p-2 bg-rose-500 rounded-full"
                >
                    <img
                        src={cross}
                        alt="close"
                        className="h-1 md:h-2 invert"
                    />
                </button>
                <p className="p-2 md:text-lg font-sans">
                    Switch to{" "}
                    <Link to="/" className="font-bold text-blue-700 underline">
                        English version
                    </Link>{" "}
                    of the website!
                </p>
            </section>
        );
    }
}

export default Language;
