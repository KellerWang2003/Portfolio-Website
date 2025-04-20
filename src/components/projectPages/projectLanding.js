import Tags from "../tags"
import ScrollingCarousel from "./scrollingCarousel"
import Image from "next/image";
import AnimatedLink from "../animation/animatedLink";

export default function ProjectLanding({ textColor = "#000", title, tags, description, link, linkText, images1, images2 }) {


    const MobileLanding = (
        <div className="w-full min-h-[60dvh] flex flex-col gap-6 justify-between pt-6 pb-4 border-b border-current" style={{ color: textColor }}>
            <section className="flex h-72 flex-col gap-2">
                {Array.isArray(images1) ? (
                    <>
                        <ScrollingCarousel scrollSpeed={80} images={images1} orientation="horizontal"/>
                        <ScrollingCarousel scrollSpeed={80} images={images1} orientation="horizontal" direction="right"/>
                    </>
                ) : (
                    <Image 
                            src={images1}
                            alt={title}
                            width={1920}
                            height={1300}
                            className="w-full h-full object-cover rounded -mt-6 border border-[#BFBFBF] border-opacity-50"
                        />
                )}
            </section>
            <section className="w-full flex flex-col gap-3">
                <div className="text-4xl font-oxanium">{title}</div>

                <Tags tags={tags} />
                <div className="flex flex-col gap-2">
                    <div className="text-sm font-oxanium">{description}</div>
                    {link && (
                        <AnimatedLink href={link} color={textColor}>
                            {linkText}
                        </AnimatedLink>
                    )}
                </div>
            </section>
        </div>
    )

    const DesktopLanding = (
        <div className="w-full h-[75dvh] flex pb-8 border-b border-current" style={{ color: textColor }}>
            <section className="w-2/5 flex flex-col justify-between gap-2 pr-16">
                <div className="text-5xl font-oxanium">{title}</div>
                <div className="flex flex-col gap-4">
                    <Tags tags={tags} />
                    <div className="flex flex-col gap-2">
                        <div className="text-base font-oxanium">
                            {description}
                        </div>
                    {link && (
                          <AnimatedLink href={link} color={textColor}>
                            {linkText}
                          </AnimatedLink>
                        )}
                    </div>
                </div>
            </section>
            <section className="w-3/5 h-full flex gap-4">
                <div className="min-w-3/4 w-full">
                    {Array.isArray(images1) ? (
                        <ScrollingCarousel scrollSpeed={120} images={images1} />
                    ) : (
                        <Image 
                            src={images1}
                            alt={title}
                            width={1920}
                            height={1300}
                            className="w-full h-full object-cover rounded border border-[#BFBFBF] border-opacity-50"
                        />
                    )}
                </div>
                {images2 && (
                    <div className="w-1/4">
                        <ScrollingCarousel scrollSpeed={180} images={images2} direction="up" landscape={false} />
                    </div>
                )}
            </section>
        </div>
    )

    return (
        <>
            <div className="hidden md:block">{DesktopLanding}</div>
            <div className="block md:hidden">{MobileLanding}</div>
        </>
    )

}