import * as React from "react";
import TransparentCard from "./../commonComponents/TransparentCard";

const MainCard = () => {
    return (
        <section className="maincard py-8 flex flex-col gap-8 md:flex-row md:px-8">
            <TransparentCard
                title="Why sparrow's habitat is disappearing?"
                content="Sparrow likes to be around humans. It builds its nest in and around man's house. Earlier our houses were made of mud, wood, etc., in which sparrows could easily build their nests. At present houses are made of cement. It has become very difficult for sparrows to nest in cement walls, and cement does not protect sparrows from heat and cold. Along with cities, pucca and multi-story buildings have started being built in villages, due to which the sparrow's habitat is ending."
                cta="ACT NOW!"
                link="/#form"
            />
            <TransparentCard
                title="How to save sparrows in summer?"
                content="When we humans crave water in this scorching heat, what about these birds that fly in the sky all day! On the occasion of this World Sparrow Day(20th March, 2022), participate in the Mor-Chiraya campaign and make people aware by distributing pots and grains for water for birds in the localities. Saving the sparrow is not a very difficult task. If you want, you can also help with this work, for this only you have to set up some birdhouses, wooden boxes in which the bird can make its nest near your house."
                cta="SAVE SPARROWS!"
                link="/#tips"
            />
        </section>
    );
};

export default MainCard;
