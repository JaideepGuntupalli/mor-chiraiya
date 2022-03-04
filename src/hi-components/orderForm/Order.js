import * as React from "react";
import Form from "./Form";
import Ingredient from "./Ingredient";
import bamboo from "../../images/ingredients/bamboo.png";
import bangles from "../../images/ingredients/bangles.png";
import gum from "../../images/ingredients/gum.png";
import yarn from "../../images/ingredients/yarn.png";
import jute from "../../images/ingredients/jute.png";
import coir from "../../images/ingredients/coir.png";

const Order = () => {
    return (
        <section
            className="flex flex-col md:flex-row justify-between py-16 md:mx-8"
            id="form"
        >
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
            <Form />
        </section>
    );
};

export default Order;
