import * as React from "react";
import { Link } from "gatsby";

const SocialApp = ({ url, img, name }) => {
    return (
        <Link to={url} target="blank" className="flex items-center">
            <img src={img} alt={`${name} logo`} className="w-10" />
            <p className="font-semibold text-2xl ml-4 link link-underline link-underline-black">
                {name}
            </p>
        </Link>
    );
};

export default SocialApp;
