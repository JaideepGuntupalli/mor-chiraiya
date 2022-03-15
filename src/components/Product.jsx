import * as React from "react";
import Ingredient from "../commonComponents/orderForm/Ingredient";
import bamboo from "../images/ingredients/bamboo.webp";
import bangles from "../images/ingredients/bangles.webp";
import gum from "../images/ingredients/gum.webp";
import yarn from "../images/ingredients/yarn.webp";
import jute from "../images/ingredients/jute.webp";
import coir from "../images/ingredients/coir.webp";
import bag from "../images/shipping-bag.png";
import { toast } from "wc-toast";

const Product = () => {
    const copyLink = () => {
        navigator.clipboard.writeText("https://mor-chiraiya.org/#diy-kit");
        toast("Link Copied to Clipboard", {
            icon: { type: "custom", content: "🔗" },
            theme: {
                type: "custom",
                style: { background: "#253526", color: "white" },
            },
        });
    };

    return (
        <div
            className="flex flex-col-reverse gap-14 md:flex-row items-center justify-center my-24"
            id="diy-kit"
        >
            <div className="w-full md:w-1/2 px-8 ">
                <h3 className="text-4xl md:text-6xl">
                    Mor-Chiraiya DIY Nest Kit
                </h3>
                <div className="my-12 flex gap-2 text-[#253526]">
                    <p className="text-2xl md:text-3xl">₹</p>
                    <p className="text-4xl md:text-5xl">99</p>
                    <p className="text-xl md:text-2xl self-end text-[#6d5b1c]">
                        / KIT
                    </p>
                </div>
                <div className="flex-1 mb-6 md:mb-16">
                    <h2 className="text-2xl mb-8">
                        What will you get as part of DIY Kit?
                    </h2>
                    <ul className="flex flex-col md:flex-row justify-evenly gap-6 md:gap-0">
                        <div className="flex flex-col justify-evenly gap-6 mx-8">
                            <Ingredient
                                imagesrc={bamboo}
                                altText="Bamboo"
                                name="5 Rings of Bamboo"
                            />
                            <Ingredient
                                imagesrc={bangles}
                                altText="Bangles"
                                name="1 Glass Bangle"
                            />
                            <Ingredient
                                imagesrc={yarn}
                                altText="Thread"
                                name="Thread / Twine"
                            />
                        </div>
                        <div className="flex flex-col justify-evenly gap-6 mx-8">
                            <Ingredient
                                imagesrc={jute}
                                altText="Jute"
                                name="Piece of Jute"
                            />
                            <Ingredient
                                imagesrc={gum}
                                altText="gum"
                                name="Gum / Fevicol"
                            />
                            <Ingredient
                                imagesrc={coir}
                                altText="Coir"
                                name="Coir"
                            />
                        </div>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
                    <a
                        href="https://rzp.io/l/55rZOa1HG0"
                        className="text-[#6d5b1c] p-4 px-8 bg-yellow-400 rounded-md hover:bg-yellow-300 text-2xl font-bold"
                    >
                        BUY NOW
                    </a>
                    <button
                        onClick={copyLink}
                        className="text-[#253526] mx-8 hover:text-[#29422a] text-xl font-bold underline"
                    >
                        Share about Kit
                    </button>
                </div>
            </div>
            <img
                src={bag}
                alt="shipping bag"
                className="w-5/6 md:w-2/5 rounded-lg"
            />
        </div>
    );
};

export default Product;
