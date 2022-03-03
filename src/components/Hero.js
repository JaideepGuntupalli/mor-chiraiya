import * as React from "react";
import sparrow from "../images/sparrow2.jpg";

const Hero = () => {
    return (
        <div class="relative overflow-hidden">
            <img
                src={sparrow}
                alt="Sparrow on a branch"
                className="h-[80vh] object-cover md:h-max"
            />
            <p class="absolute p-4 sm:p-4 md:p-8 top-8 sm:top-20 md:top-44 right-16 rounded-sm bg-white text-4xl sm:text-5xl md:text-7xl text-center w-min font-semibold">
                Slogan Goes{" "}
                <span className="text-5xl sm:text-6xl md:text-8xl font-bold">
                    Here!
                </span>
            </p>
        </div>
    );
};

export default Hero;
