import * as React from "react";
import sparrow3 from "./../images/sparrow3.jpg";
import water from "./../images/tips/wash.png";
import leaf from "./../images/tips/leaf.png";
import grains from "./../images/tips/grain.png";
import pesticide from "./../images/tips/pesticide.png";
import car from "./../images/tips/electric-car.png";
import Tip from "./../commonComponents/Tip";

const TipSection = () => {
    return (
        <section id="tips">
            <div className="flex gap-12">
                <img
                    src={sparrow3}
                    alt=""
                    className="hidden md:block w-1/2 object-cover"
                />
                <ul className="md:flex flex-col gap-4 md:w-1/3 mx-auto p-12 md:px-0 md:py-20">
                    <h2 className="font-bold text-4xl">
                        गौरैयों को इस तरह बचा सकते हैं
                    </h2>
                    <Tip
                        imgsrc={water}
                        altText="A vessel filled with water"
                        content="गर्मी के दिनों में अपने घर की छत पर एक बर्तन में पानी भरकर रखें।"
                    />
                    <Tip
                        imgsrc={grains}
                        altText="Food Grains for birds"
                        content="गौरैया को खाने के लिए कुछ अनाज छतों और पार्कों में रखें।"
                    />
                    <Tip
                        imgsrc={pesticide}
                        altText="No pesticide"
                        content="कीटनाशक का प्रयोग कम करें।"
                    />
                    <Tip
                        imgsrc={car}
                        altText="No Pollution"
                        content="अपने वाहन को प्रदूषण मुक्त रखें।"
                    />
                    <Tip
                        imgsrc={leaf}
                        altText="Increase Grenery"
                        content="हरियाली बढ़ाएं, छतों पर घोंसला बनाने के लिए कुछ जगह छोड़ें और उनके घोंसलों को नष्ट न करें।"
                    />
                </ul>
            </div>
        </section>
    );
};

export default TipSection;
