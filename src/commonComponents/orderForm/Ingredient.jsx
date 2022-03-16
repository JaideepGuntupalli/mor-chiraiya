import * as React from "react";

const Ingredient = ({ imagesrc, altText, name }) => {
    return (
        <li className="flex items-center gap-8 md:w-full mx-auto max-w-xs">
            <img src={imagesrc} alt={altText} className="w-1/6 rounded-full" />{" "}
            <p className="text-xl inline">{name}</p>
        </li>
    );
};

export default Ingredient;
