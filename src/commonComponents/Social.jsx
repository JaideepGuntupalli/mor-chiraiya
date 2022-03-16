import * as React from "react";
import SocialApp from "./SocialApp";
import facebook from "../images/facebook.webp";
import insta from "../images/instagram.webp";
import youtube from "../images/youtube.webp";
import twitter from "../images/twitter.webp";

const Social = ({ phrase }) => {
    return (
        <div className="m-10">
            <h3 className="font-bold text-3xl md:text-5xl text-center my-10">
                {phrase}
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-14 w-3/5 mx-auto md:w-auto">
                <SocialApp
                    url="https://www.instagram.com/morchiraiya/"
                    img={insta}
                    name="Instagram"
                />
                <SocialApp
                    url="https://www.twitter.com/morchiraiya/"
                    img={twitter}
                    name="Twitter"
                />
                <SocialApp
                    url="https://www.facebook.com/Mor-Chiraiya-111263674847031/"
                    img={facebook}
                    name="Facebook"
                />
                <SocialApp
                    url="https://www.youtube.com/channel/UCdlRIN4o5icbwhMBy1seVnw"
                    img={youtube}
                    name="Youtube"
                />
            </div>
        </div>
    );
};

export default Social;
