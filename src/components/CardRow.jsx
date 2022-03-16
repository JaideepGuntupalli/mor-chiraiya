import * as React from "react";
import BrownCard from "../commonComponents/BrownCard";
import sparrow from "./../images/cards/sparrow.webp";
import human from "./../images/cards/human.webp";
import decrease from "./../images/cards/decrease.webp";

const CardRow = () => {
    return (
        <section
            className="flex flex-col py-10 items-center gap-8 md:flex-row md:gap-0 md:px-4 md:items-stretch bg-[#2D2418]"
            id="sparrow"
        >
            <BrownCard
                cardTitle="About House Sparrow"
                imagesrc={sparrow}
                alt="Sparrow"
                content="Many species of sparrow are found around the world, it is a bird of the Passeridae family. The length of the sparrow is about 16 cm and its weight is only between 25 and 40 grams. The female sparrow is brown in color and the male has white and brown feathers on its back."
            />

            <BrownCard
                cardTitle="Behaviour of House Sparrow"
                imagesrc={human}
                alt="human"
                content="Sparrows are closely related to the human population. It prefers to be around humans so that it gets both food and shelter. Sparrows mainly like to eat grains and seeds. They are omnivores and also eat insects, fruits, etc."
            />

            <div className="w-5/6 bg-[#3F3221] p-6 text-center md:mx-4">
                <img
                    src={decrease}
                    alt="decrease"
                    className="invert-[.75] w-1/3 mx-auto my-4 md:my-8"
                />
                <h2 className="text-2xl mb-4 text-[#76B947]">
                    Sparrows are fading away
                </h2>
                <p className="text-[#909090] text-sm leading-6 w-11/12 mx-auto my-4">
                    In the last five years alone, the sparrow population has
                    decreased by{" "}
                    <a
                        href="https://m.timesofindia.com/city/bareilly/world-sparrow-day-scientific-study-on-sharp-decline-in-sparrow-population-urgently-needed-in-india-says-bnhs-expert/articleshow/81608021.cms#:~:text=A%20local%20estimation%20of%20sparrow,as%20against%2011%2C675%20in%202019"
                        className="underline"
                    >
                        more than 80%.
                    </a>{" "}
                    The main reason for this is human activities. It has been
                    included in its Red List by the International Union for
                    Conservation of Nature, which is a list of threatened
                    species.
                </p>
            </div>
        </section>
    );
};

export default CardRow;
