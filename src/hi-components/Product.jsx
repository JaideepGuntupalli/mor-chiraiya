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
        navigator.clipboard.writeText("https://mor-chiraiya.org/hi/#diy-kit");
        toast("Link Copied to Clipboard", {
            icon: { type: "custom", content: "🔗" },
            theme: {
                type: "custom",
                style: { background: "#253526", color: "white" },
            },
        });
    };

    return (
        <div className="flex items-center justify-center my-24" id="diy-kit">
            <div className="w-1/2 px-8 ">
                <h3 className="text-6xl">मोर-चिरैया DIY नेस्ट किट</h3>
                <div className="my-12 flex gap-2 text-[#253526]">
                    <p className="text-3xl">₹</p>
                    <p className="text-5xl">99</p>
                    <p className="text-2xl self-end text-[#6d5b1c]">/ किट</p>
                </div>
                <div className="flex-1 mb-16">
                    <h2 className="text-2xl mb-8">
                        DIY किट के हिस्से के रूप में आपको क्या मिलेगा?
                    </h2>
                    <ul className="flex flex-row justify-evenly">
                        <div className="flex flex-col justify-evenly gap-6 mx-8">
                            <Ingredient
                                imagesrc={bamboo}
                                altText="Bamboo"
                                name="बांस के 5 रिंग"
                            />
                            <Ingredient
                                imagesrc={bangles}
                                altText="Bangles"
                                name="कांच की 1 चूड़ी"
                            />
                            <Ingredient
                                imagesrc={yarn}
                                altText="Thread"
                                name="धागा / सुतली"
                            />
                        </div>
                        <div className="flex flex-col justify-evenly gap-6 mx-8">
                            <Ingredient
                                imagesrc={jute}
                                altText="Jute"
                                name="जूट का टुकड़ा"
                            />
                            <Ingredient
                                imagesrc={gum}
                                altText="gum"
                                name="गोंद / फेविकोल "
                            />
                            <Ingredient
                                imagesrc={coir}
                                altText="Coir"
                                name="नारियल-जटा / कोईर"
                            />
                        </div>
                    </ul>
                </div>
                <a
                    href="https://rzp.io/l/55rZOa1HG0"
                    className="text-[#6d5b1c] p-4 px-8 bg-yellow-400 rounded-md hover:bg-yellow-300 text-2xl font-bold"
                >
                    अभी खरीदें
                </a>
                <button
                    onClick={copyLink}
                    className="text-[#253526] mx-8 hover:text-[#29422a] text-xl font-bold underline"
                >
                    दोस्तों को बताओ
                </button>
            </div>
            <img src={bag} alt="shipping bag" className="w-2/5" />
        </div>
    );
};

export default Product;
