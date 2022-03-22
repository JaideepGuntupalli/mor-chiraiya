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
        <div
            className="flex flex-col-reverse gap-14 md:flex-row items-center justify-center mt-8 mb-20"
            id="diy-kit"
        >
            <div className="w-full md:w-1/2 px-8 mt-20">
                <h3 className="text-4xl md:text-6xl">DIY नेस्ट किट</h3>
                <p className="ml-2 text-xl mt-4">
                    अपने प्रिय पक्षियों के लिए अपना घोंसला बनाएं
                </p>
                <div className="flex-1 mt-12 mb-6 md:mb-16">
                    <h2 className="text-2xl mb-8">
                        DIY किट के हिस्से के रूप में आपको क्या मिलेगा?
                    </h2>
                    <ul className="flex flex-col md:flex-row justify-evenly gap-6 md:gap-0">
                        <div className="flex flex-col justify-evenly gap-6 mx-8">
                            <Ingredient
                                imagesrc={ring}
                                altText="Bamboo"
                                name="बांस के 5 रिंग"
                            />
                            <Ingredient
                                imagesrc={bangles}
                                altText="Bangles"
                                name="कांच की 1 चूड़ी/छोटी बांस की अंगूठी"
                            />
                            <Ingredient
                                imagesrc={yarn}
                                altText="Thread"
                                name="धागा / सुतली"
                            />
                        </div>
                        <div className="flex flex-col justify-evenly gap-6 mx-8">
                            <Ingredient
                                imagesrc={bamboo}
                                altText="bamboo Stick"
                                name="1 बांस की छड़ी"
                            />
                            <Ingredient
                                imagesrc={jute}
                                altText="Jute"
                                name="जूट की रस्सी का एक लंबा टुकड़ा"
                            />
                            <Ingredient
                                imagesrc={juteFabric}
                                altText="Jute Fabric"
                                name="जूट के कपड़े का एक टुकड़ा"
                            />
                        </div>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
                    <div className="flex flex-col items-center gap-1">
                        <a
                            href="https://rzp.io/l/55rZOa1HG0"
                            className="text-[#6d5b1c] p-3 pt-4 px-8 bg-yellow-400 rounded-md hover:bg-yellow-300 text-2xl font-bold"
                        >
                            अभी खरीदें
                        </a>
                        <img
                            src="https://cdn.razorpay.com/static/assets/powered_by_razorpay.png"
                            alt="Powered by Razorpay"
                            className="h-5"
                        />
                    </div>
                    <button
                        onClick={copyLink}
                        className="text-[#253526] mx-8 hover:text-[#29422a] text-xl font-bold underline pb-6"
                    >
                        दोस्तों को बताओ
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-5/6 md:w-2/5 items-center justify-center">
                <img src={bag} alt="shipping bag" />
                <div className="flex gap-2 text-[#253526]">
                    <p className="text-2xl md:text-3xl">₹</p>
                    <p className="text-4xl md:text-5xl">99</p>
                    <p className="text-xl md:text-2xl self-end text-[#6d5b1c]">
                        / किट
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Product;
