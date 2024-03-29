import * as React from "react";
import TransparentCard from "../commonComponents/TransparentCard";

const MainCard = () => {
    return (
        <section className="maincard py-8 flex flex-col gap-8 md:flex-row md:px-8">
            <TransparentCard
                title="क्यों लुप्त हो रहा है गौरैया का वास?"
                content="गौरैया मनुष्य के आस पास ही रहना पसंद करती है| यह मनुष्य के घर और उसके आसपास ही अपना घोंसला बनाती है| पहले हमारे घर मिट्टी, लकड़ी आदि के बनाए जाते थे, जिसमें गौरैया आसानी से अपना  घोंसला बना लेती थी| वर्तमान समय में मकान सीमेंट के बनने लगे हैं| सीमेंट की दीवारों में घोसला बनाना गौरैया के लिए बहुत कठीन हो गया है, तथा सीमेंट गौरैया को गर्मी और ठंड से भी नहीं बचाता है| शहरों के साथ-साथ गांव में भी पक्के और कई मंजिला भवन बनने लगे हैं, जिससे गौरैया का आवास खत्म होता जा रहा है|"
                cta="अभी करो!"
                link="/hi/#diy-kit"
            />
            <TransparentCard
                title="गर्मियों में कैसे बचाएं गौरैयों को?"
                content="इस चिलचिलाती गर्मी में जब हम इंसान पानी को तरस जाते हैं तो इन पक्षियों का क्या जो सारा दिन आसमान में उड़ते हैं! इस विश्व गौरेया दिवस(20th March, 2022) के मौके पर मोर चिरैया अभियान में सहभागी बनें एवं मोहल्लों में चिड़ियों के पानी के लिए बर्तन और दाना बांटकर लोगों को जागरुक करें। गौरैया को बचाना कोई बहुत बड़ा मुश्किल काम नहीं है, अगर आप चाहे तो आप भी इस काम में मदद कर सकते हैं, इसके लिए सिर्फ आपको अपने घर के पास कुछ बर्ड हाउस, लकड़ी के बने हुए डिब्बे जिनमें चिड़िया अपना घोंसला बना सके स्थापित करना होगा|"
                cta="गौरैयों को बचाओ!"
                link="/hi/#diy-kit"
            />
        </section>
    );
};

export default MainCard;
