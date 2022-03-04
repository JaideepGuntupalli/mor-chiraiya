import * as React from "react";
import BrownCard from "./BrownCard";
import sparrow from "./../../images/cards/sparrow.png";
import human from "./../../images/cards/human.png";
import decrease from "./../../images/cards/decrease.png";

const CardRow = () => {
    return (
        <section className="flex flex-col py-10 items-center gap-8 md:flex-row md:gap-0 md:px-4 md:items-stretch bg-[#2D2418]">
            <BrownCard
                cardTitle="About House Sparrow"
                imagesrc={sparrow}
                alt="Sparrow"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae delectus repellendus illum praesentium voluptates
                    quidem eius ipsa porro, quaerat similique, dolorem
                    architecto officiis assumenda doloribus provident tenetur
                    sequi expedita non."
            />

            <BrownCard
                cardTitle="Behaviour of House Sparrow"
                imagesrc={human}
                alt="human"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae delectus repellendus illum praesentium voluptates
                    quidem eius ipsa porro, quaerat similique, dolorem
                    architecto officiis assumenda doloribus provident tenetur
                    sequi expedita non."
            />

            <BrownCard
                cardTitle="Sparrows are getting less"
                imagesrc={decrease}
                alt="decrease"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestiae delectus repellendus illum praesentium voluptates
                    quidem eius ipsa porro, quaerat similique, dolorem
                    architecto officiis assumenda doloribus provident tenetur
                    sequi expedita non."
            />
        </section>
    );
};

export default CardRow;
