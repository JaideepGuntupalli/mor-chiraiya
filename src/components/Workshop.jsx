import * as React from "react";
import workshopIcon from "../images/workshop_graphic.webp";
import people from "../images/people_graphic.webp";
import nest from "../images/nest_graphic.webp";
import data from "../data";

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
                            {data.workshop}+
                        </span>{" "}
                        Successful Workshops
                    </p>
                </div>
                <div className="flex flex-col items-center gap-4 w-2/3 md:w-1/4">
                    <img src={nest} alt="Nest" className="w-1/2 md:w-2/3" />
                    <p className="flex flex-col items-center">
                        <span className="block text-6xl font-black text-[#76B947]">
                            {data.nests}+
                        </span>{" "}
                        Active Nests
                    </p>
                </div>
                <div className="flex flex-col items-center gap-4 w-2/3 md:w-1/4">
                    <img src={people} alt="People" className="w-1/2 md:w-2/3" />
                    <p className="flex flex-col items-center">
                        <span className="block text-6xl font-black text-[#76B947]">
                            {data.participants}+
                        </span>{" "}
                        People Participated
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Workshop;
