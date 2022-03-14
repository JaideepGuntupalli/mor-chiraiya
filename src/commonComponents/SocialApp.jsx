import * as React from "react";

const SocialApp = ({ url, img, name }) => {
    return (
        <a href={url} target="blank" className="flex items-center">
            <img src={img} alt={`${name} logo`} className="w-10" />
            <p className="font-semibold text-2xl ml-4 link link-underline link-underline-black">
                {name}
            </p>
        </a>
    );
};

export default SocialApp;
