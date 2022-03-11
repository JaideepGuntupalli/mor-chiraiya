import * as React from "react";
import BrownCard from "./../commonComponents/BrownCard";
import sparrow from "./../images/cards/sparrow.png";
import human from "./../images/cards/human.png";
import decrease from "./../images/cards/decrease.png";

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
                content="Many species of sparrow are found around the world, it is a bird of the Passeridae family. The length of the sparrow is about 16 cm and its weight is only between 25 and 40 grams. The female sparrow is brown in color and the male has white and brown feathers on his back."
            />

            <BrownCard
                cardTitle="Behaviour of House Sparrow"
                imagesrc={human}
                alt="human"
                content="Sparrows are closely related to the human population. It prefers to be around humans so that it gets both food and shelter. Sparrows mainly like to eat grains and seeds. They are omnivores and also eat insects, fruits, etc."
            />

            <BrownCard
                cardTitle="Sparrows are fading away"
                imagesrc={decrease}
                alt="decrease"
                content="In the last five years alone, the sparrow population has decreased by more than 60%. The main reason for this is human activities. It has been included in its Red List by the International Union for Conservation of Nature, which is a list of threatened species."
            />
        </section>
    );
};

export default CardRow;
