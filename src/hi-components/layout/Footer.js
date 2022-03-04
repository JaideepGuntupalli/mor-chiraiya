import * as React from "react";
import morchiraiya from "../../images/mor-chiraiya-logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#76B947]">
            <section className="md:flex">
                <div className="flex p-8 px-10 gap-2 flex-col items-start md:flex-1">
                    <img
                        src={morchiraiya}
                        alt="Logo of the initiative Mor-Chiraiya"
                        className="h-16 md:m-0"
                    />
                    <p className="pt-4 text-sm">
                        हमारा दायित्व बनता है कि हमारी दुलारी सी चिड़िया को अपने
                        जीवन का हिस्सा फिर से बनाएं!!! आने वाली पीढ़ी को पर्यावरण
                        के महत्त्व का एहसास कराने से वे पर्यावरण एवं विशेष रूप
                        से पक्षी संरक्षण के लिए संवेदनशील बनेंगे | मोर चिरैया
                        eco-friendly सामग्री का प्रयोग कर चिड़ियों के लिए घोसले
                        बनवाने की एक पहल है जिसमें नागरिक एवं विशेष रूप से
                        विद्यार्थी अपने हाथ से DO IT YOURSELF (DIY) के अनुसार
                        अपने हाथ से घोसला बनाकर अपने घर में लगा सकेंगे |
                    </p>
                </div>
                <div className="flex px-10 pb-8 gap-2 flex-col items-start text-sm md:pt-8 md:flex-1 justify-evenly">
                    <h3 className="text-base md:text-lg md:font-semibold">
                        संपर्क जानकारी
                    </h3>
                    <p>पता: 184, Main Collins Street West Victoria 8007</p>
                    <p>फ़ोन नंबर: +1800-222-3333</p>
                    <p>ईमेल: contact@example.com</p>
                </div>
            </section>
            <div className="flex flex-col gap-2 md:flex-row justify-evenly bg-[#08392B] px-10 py-4 text-sm text-zinc-300 text-center">
                <p>कॉपीराइट 2022. सर्वाधिकार सुरक्षित।</p>
                <p>
                    <a
                        href="https://jaideepguntupalli.com"
                        className="link link-underline link-underline-zinc"
                    >
                        जयदीप गुंटुपल्ली
                    </a>{" "}
                    द्वारा डिजाइन और विकसित
                </p>
            </div>
        </footer>
    );
};

export default Footer;
