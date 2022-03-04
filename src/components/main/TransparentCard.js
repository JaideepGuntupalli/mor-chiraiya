import * as React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const TransparentCard = ({ title, content, cta, link }) => {
    return (
        <div className="bg-yellow-500/75 backdrop-blur-sm p-8 w-5/6 mx-auto md:px-14 pb-16">
            <h2 className="font-semibold text-3xl leading-10 my-4">{title}</h2>
            <p className="py-4 pb-12">{content}</p>
            <AnchorLink
                to={link}
                title={cta}
                className="p-4 bg-black text-white rounded-md my-4"
            >
                {cta}
            </AnchorLink>
        </div>
    );
};

export default TransparentCard;
