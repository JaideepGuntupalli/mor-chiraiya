import * as React from "react";
import TransparentCard from "./TransparentCard";

const MainCard = () => {
    return (
        <section className="maincard py-8 flex flex-col gap-8 md:flex-row md:px-8">
            <TransparentCard
                title="Why sparrow's habitat is disappearing?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    et soluta incidunt repudiandae accusantium voluptates
                    pariatur praesentium placeat ab iste nam minus quod amet
                    modi expedita magni sint vitae enim!"
                cta="ACT NOW!"
            />
            <TransparentCard
                title="How to save sparrows in summer?"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    et soluta incidunt repudiandae accusantium voluptates
                    pariatur praesentium placeat ab iste nam minus quod amet
                    modi expedita magni sint vitae enim!"
                cta="SAVE SPARROWS!"
            />
        </section>
    );
};

export default MainCard;
