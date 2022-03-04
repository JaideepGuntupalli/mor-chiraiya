import * as React from "react";
import Layout from "../hi-components/layout/Layout";
import Hero from "./../hi-components/Hero";
import CardRow from "../hi-components/CardRow";
import MainCard from "../hi-components/MainCard";
import TipSection from "../hi-components/TipSection";
import logo from "../images/gov_logo.png";
import Order from "../hi-components/Order";
import Campaign from "../commonComponents/Campaign";

const Hindi = () => {
    return (
        <Layout pageTitle="मोर चिरैया">
            <Hero />
            <CardRow />
            <MainCard />
            <Campaign
                title="मोर चिरैया क्या है?"
                content="महासमुंद वन मंडल एक जन पहल चालू करने जा रहा है जिसमें हम आने वाली पीढ़ी को चिड़ियों के प्रति संवेदनशील बनने हेतु प्रोत्साहित करेंगे | इसी तारतम्य में हमारा पहला पहल होगा - बच्चों एवं पर्यावरण प्रेमियों के हाथ से गौरैया हेतु घोसला तैयार करवाना| इस पहल के अंतर्गत, महासमुंद वनमंडल DIY किट का सामान देगा जिससे प्रतिभागी आयोजित कार्यशाला में अथवा स्वयं अपने घर में घोसला तैयार कर सकेंगे |"
                cta="आज ही किट ऑर्डर करें!"
            />
            <Order />
            <TipSection />
            <div className="bg-[#94C973] px-10 py-8 text-center flex items-center gap-4 justify-center md:py-4 md:text-xl">
                <img
                    src={logo}
                    alt="Mahasamund District Logo"
                    className="h-20"
                />
                <p>
                    गौरैया संरक्षण के लिए{" "}
                    <span className="font-semibold">महासमुंद वन मंडल</span> की
                    एक पहल|
                </p>
            </div>
        </Layout>
    );
};

export default Hindi;
