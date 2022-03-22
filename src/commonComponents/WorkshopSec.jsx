import * as React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import ImageGallery from "react-image-gallery";

const work = [
    {
        original: "https://i.ibb.co/ykGxNQy/work1.webp",
        thumbnail: "https://i.ibb.co/8cq2wnf/work1-thumbnail.webp",
        originalAlt: "Workshop Image 1",
        thumbnailAlt: "Workshop Image 1 Thumbnail",
    },
    {
        original: "https://i.ibb.co/QK71tnt/work2.webp",
        thumbnail: "https://i.ibb.co/P117Qc6/work2-thumbnail.webp",
        originalAlt: "Workshop Image 2",
        thumbnailAlt: "Workshop Image 2 Thumbnail",
    },
    {
        original: "https://i.ibb.co/LkXSTmq/work3.webp",
        thumbnail: "https://i.ibb.co/W3SkZVH/work3-thumbnail.webp",
        originalAlt: "Workshop Image 3",
        thumbnailAlt: "Workshop Image 3 Thumbnail",
    },
    {
        original: "https://i.ibb.co/RgjxSnp/work4.webp",
        thumbnail: "https://i.ibb.co/dkPLZGg/work4-thumbnail.webp",
        originalAlt: "Workshop Image 4",
        thumbnailAlt: "Workshop Image 4 Thumbnail",
    },
];

class WorkshopSec extends React.Component {
    render() {
        return (
            <div className="bg-yellow-500 flex p-10 py-20 gap-8 flex-col sm:flex-row">
                <ImageGallery
                    items={work}
                    showFullscreenButton={false}
                    autoPlay={true}
                />
                <section className="flex flex-col items-center gap-20 md:gap-8 md:flex-row ">
                    <div className="flex justify-center flex-col items-center gap-4 md:gap-12">
                        <h2 className="text-5xl leading-10 my-4 text-[#253526]">
                            {this.props.title}
                        </h2>
                        <p className="md:text-xl w-4/5 md:w-5/6 text-center leading-snug">
                            {this.props.content}
                        </p>
                        <AnchorLink
                            to="#contact"
                            className="p-4 px-6 bg-[#253526] text-gray-200 font-bold rounded-md  hover:bg-[#29422a] text-xl"
                        >
                            {this.props.cta}
                        </AnchorLink>
                    </div>
                </section>
            </div>
        );
    }
}

export default WorkshopSec;
