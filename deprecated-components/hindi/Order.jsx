import * as React from "react";
import { Link } from "gatsby";
import Form from "../commonComponents/orderForm/Form";
import Ingredient from "../commonComponents/orderForm/Ingredient";
import bamboo from "../images/ingredients/bamboo.webp";
import bangles from "../images/ingredients/bangles.webp";
import gum from "../images/ingredients/gum.webp";
import yarn from "../images/ingredients/yarn.webp";
import jute from "../images/ingredients/jute.webp";
import coir from "../images/ingredients/coir.webp";

const Order = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between py-16 md:mx-8">
            <div className="p-8 flex-1">
                <h2 className="font-bold text-4xl md:text-center mb-8">
                    गौरैया के घोसला बनाने हेतु सामान :
                </h2>
                <ul className="flex flex-col justify-evenly gap-6 md:gap-9">
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
                </ul>
            </div>
            <Form title="तो आइये और अपना योगदान दीजिये" />
            <input
                type="submit"
                value="Order it!"
                className="bg-black px-4 py-2 rounded-md font-semibold text-2xl text-white"
            />
            <Link
                to="https://rzp.io/l/55rZOa1HG0"
                className="bg-black px-4 py-2 rounded-md font-semibold text-2xl text-white"
            >
                Order it!
            </Link>
            {/* https://rzp.io/l/55rZOa1HG0 */}
        </section>
    );
};

// We are continuously organizing workshops to conserve the sparrows. Our dedicated experts and enthusiastic volunteers are working round the clock towards the success of this initiative. A small contribution and a small effort of everyone can bring big results. To organize a workshop in your schools, colleges, offices contact us, now!!

// हम गौरैयों के संरक्षण के लिए लगातार कार्यशालाओं का आयोजन कर रहे हैं। हमारे समर्पित विशेषज्ञ और उत्साही स्वयंसेवक इस पहल की सफलता के लिए लगातार काम कर रहे हैं। आपका एक छोटा सा योगदान इस प्रयास को बड़ी सफलता दिला सकता है। अपने स्कूल, कॉलेज, ऑफिस में कार्यशाला आयोजित करने के लिए संपर्क करें !!

export default Order;
