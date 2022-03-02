import * as React from "react";
import sparrow from "../images/sparrow.jpg";

const Hero = () => {
    return (
        <div className="">
            <div class="relative overflow-hidden">
                <img src={sparrow} alt="Sparrow on a branch" className="" />
                <p class="absolute p-2 sm:p-4 md:p-8 top-8 sm:top-20 md:top-44 left-4 md:left-16 rounded-sm bg-white text-3xl sm:text-5xl md:text-7xl text-center w-2/5 font-semibold">
                    Slogan Goes{" "}
                    <span className="text-4xl sm:text-6xl md:text-8xl font-bold">
                        Here!
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Hero;
