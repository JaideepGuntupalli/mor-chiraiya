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
                className="hidden sm:block h-[80vh] object-cover lg:h-[95vh]"
            />
            <img
                src={sparrowm}
                alt="Sparrow on a branch"
                className="object-cover min-h-[90vh] h-max sm:hidden"
            />
            <div className="absolute flex flex-col top-8 sm:top-20 md:top-30 lg:top-36 left-3 md:left-16">
                <p className="p-4 sm:p-4 md:p-8 text-white text-3xl md:text-5xl text-left font-light">
                    Together,
                    <span className="block my-4 text-4xl md:text-8xl">
                        We can save
                    </span>
                    <span className="text-6xl md:text-[5.25rem] font-bold">
                        Sparrows
                    </span>
                    <span className="block text-2xl md:text-3xl mt-8">
                        Don't let them fade away!
                    </span>
                </p>
                <AnchorLink
                    to="/#sparrow"
                    title="Learn More!"
                    className="self-start mt-4 ml-3 md:ml-8 p-4 px-6 font-black text-xl bg-yellow-400 text-[#6d5b1c] rounded-md hover:bg-yellow-300"
                >
                    LEARN MORE!
                </AnchorLink>
            </div>
        </div>
    );
};

export default Hero;
