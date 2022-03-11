import * as React from "react";
import { Link } from "gatsby";
import logo from "../images/mor-chiraiya-logo.webp";

// markup
const NotFoundPage = () => {
    return (
        <main className="bg-[#F7E2C7] h-screen flex flex-col justify-center gap-10 text-center p-4">
            <title>Not found</title>
            <div className="flex justify-center items-center md:gap-10 m-10">
                <img src={logo} alt="Logo" className="w-1/3 md:w-1/12" />
                <h2 className="font-semibold text-3xl">Mor-Chiraya</h2>
            </div>
            <h1 className="self-center font-bold text-5xl">404</h1>
            <section className="flex flex-col md:flex-row justify-evenly items-center">
                <div>
                    <h2 className="font-semibold text-4xl my-4">
                        Page not found
                    </h2>
                    <div className="flex flex-col">
                        <p className="text-lg">
                            Sorry{" "}
                            <span role="img" aria-label="Pensive emoji">
                                😔
                            </span>{" "}
                            we couldn’t find what you were looking for.
                        </p>
                        <Link
                            className="self-center mt-4 p-4 bg-black text-white rounded-md"
                            to="/"
                        >
                            Go to English(अंग्रेज़ी) Version
                        </Link>
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <h2 className="font-semibold text-4xl my-4">
                        पृष्ठ नहीं मिला
                    </h2>
                    <div className="flex flex-col">
                        <p className="text-lg">
                            क्षमा करें,{" "}
                            <span role="img" aria-label="Pensive emoji">
                                😔
                            </span>{" "}
                            हमें वह नहीं मिला जिसकी आप तलाश कर रहे थे।
                        </p>
                        <Link
                            className="self-center mt-4 p-4 bg-black text-white rounded-md"
                            to="/hi"
                        >
                            हिन्दी(Hindi) संस्करण पर जाएं|
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NotFoundPage;
