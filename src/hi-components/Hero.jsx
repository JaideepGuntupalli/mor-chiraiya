import * as React from "react";
import sparrow from "../images/sparrow2.webp";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Hero = () => {
    return (
        <div className="relative overflow-hidden" id="home">
            <img
                src={sparrow}
                alt="Sparrow on a branch"
                className="w-full h-[85vh] object-cover lg:h-[95vh]"
            />
            <div className="absolute flex flex-col top-8 sm:top-20 md:top-30 lg:top-36 left-3 md:left-16">
                <p className="p-4 sm:p-4 md:p-8 text-white text-3xl md:text-5xl text-left font-light">
                    साथ मिलकर,
                    <span className="block my-6 text-4xl md:text-6xl xl:text-8xl">
                        हम बचा सकते हैं
                    </span>
                    <span className="text-6xl md:text-[5.25rem] font-bold">
                        गौरैया
                    </span>
                    <span className="block text-2xl md:text-3xl mt-8">
                        उन्हें कम ना होने दें
                    </span>
                </p>
                <div className="flex flex-col md:flex-row">
                    <AnchorLink
                        to="#sparrow"
                        title="Learn More!"
                        className="self-start mt-4 ml-3 md:ml-8 p-3 text-xl px-6 font-semibold bg-yellow-400 text-[#6d5b1c] rounded-md hover:bg-yellow-300"
                    >
                        और अधिक जानें!
                    </AnchorLink>
                    <AnchorLink
                        to="#sparrow"
                        title="Learn More!"
                        className="self-start mt-4 ml-3 md:ml-4 p-3 text-xl px-6 font-semibold bg-yellow-400 text-[#6d5b1c] rounded-md hover:bg-yellow-300"
                    >
                        घोंसला ऑर्डर करें, अभी !!
                    </AnchorLink>
                </div>
            </div>
        </div>
    );
};

export default Hero;
