import * as React from "react";
import sparrow from "../images/sparrow2.webp";
import sparrowm from "../images/sparrow2m.webp";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Hero = () => {
    return (
        <div className="relative overflow-hidden" id="home">
            <img
                src={sparrow}
                alt="Sparrow on a branch"
                className="hidden sm:block h-[80vh] object-cover lg:h-[90vh] xl:h-max"
            />
            <img
                src={sparrowm}
                alt="Sparrow on a branch"
                className="object-cover min-h-[90vh] h-max sm:hidden"
            />
            <div className="absolute flex flex-col top-8 sm:top-20 md:top-30 lg:top-36 left-3 md:left-16">
                <p className="p-4 sm:p-4 md:p-8 text-white text-3xl md:text-5xl text-left font-light">
                    साथ में,
                    <span className="block my-6 text-4xl md:text-6xl xl:text-8xl">
                        हम बचा सकते हैं
                    </span>
                    <span className="text-6xl md:text-[5.25rem] font-bold">
                        गौरैयों
                    </span>
                    <span className="block text-2xl md:text-3xl mt-8">
                        उन्हें फीका न पड़ने दें!
                    </span>
                </p>
                <AnchorLink
                    to="#sparrow"
                    title="Learn More!"
                    className="self-start mt-4 ml-3 md:ml-8 p-4 px-6 font-semibold bg-[#76B947] text-black rounded-md"
                >
                    और अधिक जानें!
                </AnchorLink>
            </div>
        </div>
    );
};

export default Hero;
