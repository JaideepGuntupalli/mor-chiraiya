import * as React from "react";
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
                <h2 className="font-bold text-[2rem] md:text-center mb-8">
                    What will you get as part of DIY Kit?
                </h2>
                <ul className="flex flex-col justify-evenly gap-6 md:gap-9">
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
                    <Ingredient imagesrc={coir} altText="Coir" name="Coir" />
                </ul>
            </div>
            <Form title="Buy Nests, to save our Chirpy Friends!" isEng={true} />
        </section>
    );
};

export default Order;
