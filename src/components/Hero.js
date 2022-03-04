import * as React from "react";
import sparrow from "../images/sparrow2.jpg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Hero = () => {
    return (
        <div class="relative overflow-hidden" id="home">
            <img
                src={sparrow}
                alt="Sparrow on a branch"
                className="h-[80vh] object-cover lg:h-[90vh] xl:h-max"
            />
            <div className="absolute flex flex-col top-8 sm:top-20 md:top-30 lg:top-36 left-3 md:left-16">
                <p class="p-4 sm:p-4 md:p-8 text-white text-3xl md:text-5xl text-left font-light">
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
                    className="self-start mt-4 ml-3 md:ml-8 p-4 px-6 font-semibold bg-[#76B947] text-black rounded-md"
                >
                    LEARN MORE!
                </AnchorLink>
            </div>
        </div>
    );
};

export default Hero;
