import * as React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const TransparentCard = ({ title, content, cta, link }) => {
    return (
        <div className="bg-yellow-500/75 backdrop-blur-sm p-8 w-5/6 mx-auto md:px-14 pb-16">
            <h2 className="font-semibold text-3xl leading-10 my-4 text-[#253526]">
                {title}
            </h2>
            <p className="py-4 pb-12">{content}</p>
            <AnchorLink
                to={link}
                title={cta}
                className="p-3 px-4 bg-[#253526] text-gray-200 font-semibold rounded-md  hover:bg-[#29422a]"
            >
                {cta}
            </AnchorLink>
        </div>
    );
};

export default TransparentCard;
