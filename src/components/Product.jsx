import * as React from "react";
import Ingredient from "../commonComponents/orderForm/Ingredient";
import bamboo from "../images/ingredients/bamboo.webp";
import bangles from "../images/ingredients/bangles.webp";
import ring from "../images/ingredients/rings.webp";
import yarn from "../images/ingredients/yarn.webp";
import jute from "../images/ingredients/jute.webp";
import juteFabric from "../images/ingredients/jute-fabric.webp";
import bag from "../images/shipping-bag.webp";
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
            className="flex flex-col-reverse md:gap-14 md:flex-row items-center justify-center mt-8 mb-20"
            id="diy-kit"
        >
            <div className="w-full md:w-1/2 px-8 md:mt-16">
                <h3 className="hidden md:block text-4xl md:text-6xl">
                    DIY Nest Kit
                </h3>
                <p className="hidden md:block ml-2 text-xl mt-4">
                    Create your own nest for your loved birds
                </p>
                <div className="md:flex-1 mb-6 md:mb-16">
                    <h2 className="text-2xl mb-8">
                        What will you get as a part of the DIY kit?
                    </h2>
                    <ul className="flex flex-col md:flex-row justify-evenly gap-6 md:gap-0">
                        <div className="flex flex-col justify-evenly gap-6 mx-8">
                            <Ingredient
                                imagesrc={ring}
                                altText="Bamboo"
                                name="5 Rings of Bamboo"
                            />
                            <Ingredient
                                imagesrc={bangles}
                                altText="Bangles"
                                name="1 Glass Bangle/Small Bamboo ring"
                            />
                            <Ingredient
                                imagesrc={yarn}
                                altText="Thread"
                                name="Thread / Twine"
                            />
                        </div>
                        <div className="flex flex-col justify-evenly gap-6 mx-8">
                            <Ingredient
                                imagesrc={bamboo}
                                altText="bamboo Stick"
                                name="1 Bamboo Stick"
                            />
                            <Ingredient
                                imagesrc={jute}
                                altText="Jute"
                                name="A long piece of Jute Rope"
                            />
                            <Ingredient
                                imagesrc={juteFabric}
                                altText="Jute Fabric"
                                name="A piece of Jute fabric"
                            />
                        </div>
                    </ul>
                </div>
                <div className="hidden md:flex flex-col md:flex-row items-center gap-4 md:gap-0">
                    <a
                        href="https://rzp.io/l/55rZOa1HG0"
                        className="text-[#6d5b1c] p-4 px-8 bg-yellow-400 rounded-md hover:bg-yellow-300 text-2xl font-bold"
                    >
                        ORDER NOW
                    </a>
                    <button
                        onClick={copyLink}
                        className="text-[#253526] mx-8 hover:text-[#29422a] text-xl font-bold underline"
                    >
                        Share
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-5/6 md:w-2/5 justify-center mt-4 md:m-0">
                <h3 className="text-4xl md:text-6xl md:hidden">DIY Nest Kit</h3>
                <p className="text-xl mt-4 md:hidden text-zinc-800">
                    Create your own nest for your loved birds
                </p>
                <img src={bag} alt="shipping bag" />
                <div className="flex flex-col gap-2 text-[#253526] mx-auto">
                    <div className="flex gap-2">
                        <p className="text-2xl md:text-3xl">₹</p>
                        <p className="text-4xl md:text-5xl">99</p>
                        <p className="text-xl md:text-2xl self-end text-[#6d5b1c]">
                            / KIT
                        </p>
                    </div>
                    <p>+ ₹ 60 for delivery</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 my-10 md:hidden">
                    <a
                        href="https://rzp.io/l/55rZOa1HG0"
                        className="text-[#6d5b1c] p-4 px-8 bg-yellow-400 rounded-md hover:bg-yellow-300 text-2xl font-bold"
                    >
                        ORDER NOW
                    </a>
                    <button
                        onClick={copyLink}
                        className="text-[#253526] mx-8 hover:text-[#29422a] text-xl font-bold underline pb-6"
                    >
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
