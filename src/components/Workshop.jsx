import * as React from "react";
import workshopIcon from "../images/workshop_graphic.webp";
import people from "../images/people_graphic.webp";
import nest from "../images/nest_graphic.webp";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Workshop = () => {
    return (
        <div
            className="flex flex-col items-center gap-16 md:gap-12 justify-center text-white font-semibold text-2xl py-24"
            id="workshop"
        >
            <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-center items-center">
                <div className="flex flex-col items-center gap-4 w-2/3 md:w-1/4">
                    <img
                        src={workshopIcon}
                        alt="Workshop Icon"
                        className="w-1/2 md:w-2/3"
                    />
                    <p className="flex flex-col items-center text-center">
                        <span className="block text-6xl font-black text-[#76B947]">
                            3+
                        </span>{" "}
                        Successful Workshops
                    </p>
                </div>
                <div className="flex flex-col items-center gap-4 w-2/3 md:w-1/4">
                    <img src={nest} alt="Nest" className="w-1/2 md:w-2/3" />
                    <p className="flex flex-col items-center">
                        <span className="block text-6xl font-black text-[#76B947]">
                            130+
                        </span>{" "}
                        Active Nests
                    </p>
                </div>
                <div className="flex flex-col items-center gap-4 w-2/3 md:w-1/4">
                    <img src={people} alt="People" className="w-1/2 md:w-2/3" />
                    <p className="flex flex-col items-center">
                        <span className="block text-6xl font-black text-[#76B947]">
                            120+
                        </span>{" "}
                        People Participated
                    </p>
                </div>
            </div>
            <div className=" h-1 w-4/5 bg-gray-300" />
            <div className="flex justify-center flex-col items-center gap-12">
                <p className="text-lg md:text-2xl w-4/5 md:w-2/3 text-center leading-snug">
                    We are continuously organizing workshops to conserve the
                    sparrows. Our dedicated experts and enthusiastic volunteers
                    are working round the clock towards the success of this
                    initiative. A small contribution and a small effort of
                    everyone can bring big results. To organize a workshop in
                    your schools, colleges, offices contact us, now!!
                </p>
                <AnchorLink
                    to="#contact"
                    className="p-4 px-6 bg-[#76B947] text-[#253526] font-bold rounded-md  hover:bg-[#6faf41] text-xl"
                >
                    CONTACT US!
                </AnchorLink>
            </div>
        </div>
    );
};

export default Workshop;
