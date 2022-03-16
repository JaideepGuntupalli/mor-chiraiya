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
                cardTitle="गौरैया के बारे में"
                imagesrc={sparrow}
                alt="Sparrow"
                content="गौरैया की कई प्रजातियां विश्व भर में पाई जाती है यह पासरिडे(Passeridae) परिवार का पक्षी है | गौरैया की लंबाई लगभग 16 सेंटीमीटर होती है और इसका वजन सिर्फ 25 से 40 ग्राम के बीच में होता है|  मादा गौरैया भूरे रंग की होती है तथा नर की पीठ पर सफेद और भूरे रंग के पंख होते हैं | "
            />

            <BrownCard
                cardTitle="गौरैया का व्यवहार"
                imagesrc={human}
                alt="human"
                content="गौरैया मनुष्य आबादी के साथ पूरी तरह से जुड़ी हुई हैं | यह मानव के आसपास ही रहना पसंद करती हैं, जिससे कि इसे खाना और आश्रय दोनों मिल जाते हैं| गौरैया मुख्य रूप से दाने और बीज खाना पसंद करती हैं | यह सर्वाहारी होती हैं तथा कीट पतंगे फल इत्यादि भी खाती हैं|"
            />

            <div className="w-5/6 bg-[#3F3221] p-6 text-center md:mx-4">
                <img
                    src={decrease}
                    alt="decrease"
                    className="invert-[.75] w-1/3 mx-auto my-4 md:my-8"
                />
                <h2 className="text-2xl mb-4 text-[#76B947]">
                    गौरैया कम होती जा रही है
                </h2>
                <p className="text-[#909090] text-sm leading-6 w-11/12 mx-auto my-4">
                    पिछले पांच वर्षों में ही गौरैया की आबादी{" "}
                    <a
                        href="https://m.timesofindia.com/city/bareilly/world-sparrow-day-scientific-study-on-sharp-decline-in-sparrow-population-urgently-needed-in-india-says-bnhs-expert/articleshow/81608021.cms#:~:text=A%20local%20estimation%20of%20sparrow,as%20against%2011%2C675%20in%202019"
                        className="underline"
                    >
                        80% से भी कम हो गई है
                    </a>{" "}
                    | इसका मुख्य कारण मनुष्य की गतिविधियां ही हैं| इसे इंटरनेशनल
                    यूनियन फॉर कंजर्वेशन ऑफ नेचर संस्था ने अपनी रेड लिस्ट में
                    शामिल किया है, जो कि संकटग्रस्त प्रजातियों की लिस्ट है|
                </p>
            </div>
        </section>
    );
};

export default CardRow;
