import * as React from "react";
import logo from "../../images/mor-chiraiya-logo.png";

const Campaign = () => {
    return (
        <section className="flex flex-col items-center gap-8 p-8 md:flex-row bg-[#F7E2C7]">
            <img
                src={logo}
                alt="Mor-Chiraya logo"
                className=" w-1/2 md:w-3/5 md:m-8 md:ml-16"
            />
            <div className="flex flex-col gap-4  md:m-8">
                <h2 className="font-semibold text-2xl md:text-4xl">
                    मोर चिरैया क्या है?
                </h2>
                <p className="md:text-lg">
                    महासमुंद वन मंडल एक जन पहल चालू करने जा रहा है जिसमें हम आने
                    वाली पीढ़ी को चिड़ियों के प्रति संवेदनशील बनने हेतु
                    प्रोत्साहित करेंगे | इसी तारतम्य में हमारा पहला पहल होगा -
                    बच्चों एवं पर्यावरण प्रेमियों के हाथ से गौरैया हेतु घोसला
                    तैयार करवाना| इस पहल के अंतर्गत, महासमुंद वनमंडल DIY किट का
                    सामान देगा जिससे प्रतिभागी आयोजित कार्यशाला में अथवा स्वयं
                    अपने घर में घोसला तैयार कर सकेंगे |
                </p>
                {/* <a href="#">Order a Kit!</a> */}
                <button className="self-start mt-4 p-4 bg-black text-white rounded-md">
                    आज ही किट ऑर्डर करें!
                </button>
            </div>
        </section>
    );
};

export default Campaign;
