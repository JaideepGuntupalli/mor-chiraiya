import * as React from "react";
import workshop from "../images/workshop.webp";
import workshopIcon from "../images/event_graphic.webp";
import people from "../images/workshop_graphic.webp";
import nest from "../images/nest_graphic.webp";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Workshop = () => {
    return (
        <div className="relative flex justify-center items-center">
            <div className="flex flex-col items-center gap-20 md:gap-12 justify-center absolute text-white font-semibold text-2xl">
                <div className="flex flex-col gap-16 md:gap-0 md:flex-row justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <img
                            src={workshopIcon}
                            alt="Workshop Icon"
                            className="w-1/3 md:w-1/2"
                        />
                        <p className="flex flex-col items-center">
                            <span className="block text-6xl font-black text-[#76B947]">
                                10+
                            </span>{" "}
                            Successful Workshops
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <img src={nest} alt="nest" className="w-1/3 md:w-1/2" />
                        <p className="flex flex-col items-center">
                            <span className="block text-6xl font-black text-[#76B947]">
                                500+
                            </span>{" "}
                            Active Nests
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <img
                            src={people}
                            alt="People"
                            className="w-1/3 md:w-1/2"
                        />
                        <p className="flex flex-col items-center">
                            <span className="block text-6xl font-black text-[#76B947]">
                                300+
                            </span>{" "}
                            People Participated
                        </p>
                    </div>
                </div>
                <div className=" h-1 w-4/5 bg-gray-300" />
                <div className="flex justify-center flex-col items-center gap-20 md:gap-12">
                    <h3 className="text-4xl md:text-5xl w-4/5 text-center font-bold leading-snug">
                        Come and Contribute to make our mornings chirpy again!
                    </h3>
                    <AnchorLink
                        to="#form"
                        className="text-gray-100 text-3xl p-4 px-6 md:ml-8 bg-[#76b947] rounded-md"
                    >
                        Buy A Nest!
                    </AnchorLink>
                </div>
            </div>

            <div>
                <img
                    src={workshop}
                    alt="workshop collage"
                    className="h-screen object-cover"
                />
                <img
                    src={workshop}
                    alt="workshop collage"
                    className="md:hidden h-screen object-cover object-left"
                />
            </div>
        </div>
    );
};

export default Workshop;