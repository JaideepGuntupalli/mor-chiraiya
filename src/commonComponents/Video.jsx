import * as React from "react";
import arrow from "../images/arrow.webp";
import box from "../images/box.webp";
import nest from "../images/nest.webp";

const Video = ({ heading, content }) => {
    return (
        <div
            className="flex flex-col-reverse md:flex-row gap-10 md:gap-0 items-center justify-around py-20 bg-[#253526]"
            id="tips"
        >
            <iframe
                className="w-5/6 md:w-3/5 md:h-64 md:ml-20 md:mr-10"
                src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />

            <div className="flex flex-col items-center text-center w-4/5">
                <h3 className="font-bold text-5xl md:text-center mb-8 text-yellow-400 w-5/6">
                    {heading}
                </h3>
                <div className="flex items-center justify-around w-2/3 md:w-1/3">
                    <img src={box} alt="" className="w-1/4" />
                    <img src={arrow} alt="" className="w-1/5 invert" />
                    <img src={nest} alt="" className="w-1/6" />
                </div>
                <p className="text-gray-100 text-xl mt-8 w-4/5 md:w-2/3">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default Video;
