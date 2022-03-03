import * as React from "react";

const TransparentCard = ({ title, content, cta }) => {
    return (
        <div className="bg-yellow-500/75 backdrop-blur-sm p-8 w-5/6 mx-auto md:px-14">
            <h2 className="font-semibold text-3xl leading-10 my-4">{title}</h2>
            <p className="py-4">{content}</p>
            <button className="my-4 p-4 bg-black text-white rounded-md">
                {cta}
            </button>
        </div>
    );
};

export default TransparentCard;
