import Tags from "../tags"
import ScrollingCarousel from "./scrollingCarousel"

export default function ProjectLanding({ textColor, title, tags, description, images1, images2 }) {
    return (
        <div className="w-full h-[75vh] flex pb-8 border-b border-current" style={{ color: textColor }}>
            <section className="w-2/5 flex flex-col justify-between gap-2 pr-24">
                <div className="text-6xl font-oxanium">{title}</div>
                <div className="flex flex-col gap-4">
                    <Tags tags={tags} />
                    <div className="text-base font-oxanium">{description}</div>
                </div>
            </section>
            <section className="w-3/5 h-full flex gap-4">
                <div className="min-w-3/4 w-full">
                    <ScrollingCarousel scrollSpeed={120} images={images1}/>
                </div>
                {images2 && (
                    <div className="w-1/4">
                        <ScrollingCarousel scrollSpeed={180} images={images2} direction="up"/>
                    </div>
                )}
            </section>
        </div>
    )
}