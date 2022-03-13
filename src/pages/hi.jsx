import * as React from "react";
import Layout from "../hi-components/layout/Layout";
import Hero from "../hi-components/Hero";
import CardRow from "../hi-components/CardRow";
import MainCard from "../hi-components/MainCard";
import TipSection from "../hi-components/TipSection";
import logo from "../images/gov_logo.webp";
import Order from "../hi-components/Order";
import Campaign from "../commonComponents/Campaign";
import Video from "../commonComponents/Video";
import Workshop from "../hi-components/Workshop";
import Social from "../commonComponents/Social";

const Hindi = () => {
    return (
        <Layout pageTitle="मोर चिरैया">
            <Hero />
            <Campaign
                title="मोर चिरैया क्या है?"
                content="महासमुंद वन मंडल(CG) एक महान जन पहल शुरू किया है जिसमें हम आने वाली पीढ़ी को चिड़ियों के प्रति संवेदनशील बनने हेतु प्रोत्साहित करेंगे | इसी तारतम्य में हमारा पहला पहल होगा - बच्चों एवं पर्यावरण प्रेमियों के हाथ से गौरैया हेतु घोसला तैयार करवाना| इस पहल के अंतर्गत, महासमुंद वनमंडल DIY किट का सामान देगा जिससे प्रतिभागी आयोजित कार्यशाला में अथवा स्वयं अपने घर में घोसला तैयार कर सकेंगे |"
                cta="आज ही किट ऑर्डर करें!"
                learn="अभियान के बारे में अधिक जानें"
            />
            <CardRow />
            <MainCard />
            <Video
                heading="आसानी से घोंसले बनाना सीखें"
                content="गौरैया को बचाना कोई बहुत बड़ा मुश्किल काम नहीं है, अगर आप चाहे तो आप भी इस काम में मदद कर सकते हैं, इसके लिए सिर्फ आपको अपने घर के पास कुछ बर्ड हाउस, लकड़ी के बने हुए डिब्बे जिनमें चिड़िया अपना घोंसला बना सके स्थापित करना होगा|"
            />
            <Order />
            <Workshop />
            <Social />
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
