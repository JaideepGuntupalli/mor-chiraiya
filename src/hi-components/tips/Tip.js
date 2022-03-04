import * as React from "react";

const Tip = ({ imgsrc, altText, content }) => {
    return (
        <li className="flex gap-8 items-center">
            <img
                src={imgsrc}
                alt={altText}
                className="w-1/4 bg-slate-200 p-2 rounded-full md:w-1/6"
            />
            <p className="py-8 md:text-xl">{content}</p>
        </li>
    );
};

export default Tip;
