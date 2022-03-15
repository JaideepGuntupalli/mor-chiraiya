import * as React from "react";
import workshop from "../images/workshop.webp";
import workshopIcon from "../images/workshop.png";
import people from "../images/people.png";
import nest from "../images/nest.png";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Workshop = () => {
    return (
        <div
            className="relative flex justify-center items-center"
            id="workshop"
        >
            <div className="flex flex-col items-center gap-16 md:gap-12 justify-center absolute text-white font-semibold text-2xl">
                <div className="flex flex-col gap-8 md:gap-0 md:flex-row justify-center items-center">
                    <div className="flex flex-col items-center gap-4 w-2/3 md:w-1/4">
                        <img
                            src={workshopIcon}
                            alt="Workshop Icon"
                            className="w-1/2 md:w-2/3"
                        />
                        <p className="flex flex-col items-center">
                            <span className="block text-6xl font-black text-[#76B947]">
                                10+
                            </span>{" "}
                            सफल कार्यशाला
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 w-2/3 md:w-1/4">
                        <img src={nest} alt="Nest" className="w-1/2 md:w-2/3" />
                        <p className="flex flex-col items-center">
                            <span className="block text-6xl font-black text-[#76B947]">
                                500+
                            </span>{" "}
                            सक्रिय घोंसले
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 w-2/3 md:w-1/4">
                        <img
                            src={people}
                            alt="People"
                            className="w-1/2 md:w-2/3"
                        />
                        <p className="flex flex-col items-center">
                            <span className="block text-6xl font-black text-[#76B947]">
                                300+
                            </span>{" "}
                            लोगों ने भाग लिया
                        </p>
                    </div>
                </div>
                <div className=" h-1 w-4/5 bg-gray-300" />
                <div className="flex justify-center flex-col items-center gap-12">
                    <p className="text-lg md:text-2xl w-3/5 text-center leading-snug font-medium">
                        हम गौरैयों के संरक्षण के लिए लगातार कार्यशालाओं का आयोजन
                        कर रहे हैं। हमारे समर्पित विशेषज्ञ और उत्साही स्वयंसेवक
                        इस पहल की सफलता के लिए लगातार काम कर रहे हैं। आपका एक
                        छोटा सा योगदान इस प्रयास को बड़ी सफलता दिला सकता है। अपने
                        स्कूल, कॉलेज, ऑफिस में कार्यशाला आयोजित करने के लिए
                        संपर्क करें !!
                    </p>
                    <AnchorLink
                        to="#form"
                        className="p-4 px-6 bg-[#76B947] text-[#253526] font-bold rounded-md  hover:bg-[#6faf41] text-2xl"
                    >
                        संपर्क करें!
                    </AnchorLink>
                </div>
            </div>

            <div>
                <img
                    src={workshop}
                    alt="workshop collage"
                    className="w-full object-cover"
                />
                <img
                    src={workshop}
                    alt="workshop collage"
                    className="md:hidden w-full object-cover object-left"
                />
            </div>
        </div>
    );
};

export default Workshop;
