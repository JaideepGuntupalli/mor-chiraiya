import * as React from "react";
import sparrow3 from "./../images/sparrow3.jpg";
import water from "./../images/tips/wash.png";
import leaf from "./../images/tips/leaf.png";
import grains from "./../images/tips/grain.png";
import pesticide from "./../images/tips/pesticide.png";
import car from "./../images/tips/electric-car.png";
import Tip from "./Tip";

const TipSection = () => {
    return (
        <section>
            <div className="flex gap-12">
                <img
                    src={sparrow3}
                    alt=""
                    className="hidden md:block w-1/2 object-cover"
                />
                <ul className="md:flex flex-col gap-4 md:w-1/3 mx-auto p-12 md:px-0 md:py-20">
                    <h2 className="font-bold text-4xl">
                        Tips to Save Sparrows
                    </h2>
                    <Tip
                        imgsrc={water}
                        altText="A vessel filled with water"
                        content="During summer, keep a vessel filled with water on the
                        roof of your house."
                    />
                    <Tip
                        imgsrc={grains}
                        altText="Food Grains for birds"
                        content="Keep some grains on terraces and parks for sparrows to
                        eat."
                    />
                    <Tip
                        imgsrc={pesticide}
                        altText="No pesticide"
                        content="Reduce the use of pesticides."
                    />
                    <Tip
                        imgsrc={car}
                        altText="No Pollution"
                        content="Keep your vehicle pollution free."
                    />
                    <Tip
                        imgsrc={leaf}
                        altText="Increase Grenery"
                        content="Increase greenery, leave some space for nesting on roofs and don't destroy their nests."
                    />
                </ul>
            </div>
        </section>
    );
};

export default TipSection;
