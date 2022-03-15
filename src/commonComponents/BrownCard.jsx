import * as React from "react";

const BrownCard = ({ cardTitle, imagesrc, alt, content }) => {
    return (
        <div className="w-5/6 bg-[#3F3221] p-6 text-center md:mx-4">
            <img
                src={imagesrc}
                alt={alt}
                className="invert-[.75] w-1/3 mx-auto my-4 md:my-8"
            />
            <h2 className="text-2xl mb-4 text-[#76B947]">{cardTitle}</h2>
            <p className="text-[#909090] text-sm leading-6 w-11/12 mx-auto my-4">
                {content}
            </p>
        </div>
    );
};

export default BrownCard;
