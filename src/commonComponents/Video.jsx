import * as React from "react";
import arrow from "../images/arrow.png";
import box from "../images/box.png";
import nest from "../images/nest.png";

const Video = ({ heading }) => {
    return (
        <div className="flex items-center justify-around py-20 bg-[#4F4F3D]">
            <iframe
                className="ml-20 mr-10"
                width="850"
                height="315"
                src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
            <div className="flex flex-col items-center">
                <h3 className="font-bold text-5xl md:text-center mb-8 text-gray-300">
                    {heading}
                </h3>
                <div className="flex items-center justify-around w-1/3">
                    <img src={box} alt="" className="w-1/4" />
                    <img src={arrow} alt="" className="w-1/5 invert" />
                    <img src={nest} alt="" className="w-1/6" />
                </div>
            </div>
        </div>
    );
};

export default Video;
