import * as React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const TransparentCard = ({ title, content, cta, link }) => {
    return (
        <div className="bg-yellow-500/75 backdrop-blur-sm p-8 w-5/6 mx-auto md:px-14 pb-16 flex flex-col justify-between items-center">
            <div>
                <h2 className="text-3xl leading-10 my-4 text-[#253526]">
                    {title}
                </h2>
                <p className="py-4 pb-12">{content}</p>
            </div>
            <AnchorLink
                to={link}
                title={cta}
                className="p-4 px-6 bg-[#253526] text-gray-200 font-bold rounded-md hover:bg-[#29422a] self-start"
            >
                {cta}
            </AnchorLink>
        </div>
    );
};

export default TransparentCard;
