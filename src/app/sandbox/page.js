import ContentWrapper from "@/components/contentWrapper";
import Image from "next/image";
import Footer from "@/components/footer";
import FadeInAnimation from "@/components/fadeInAnimation";

function ProjectCard({ title, children }) {
    return (
        <div className="w-full h-full flex flex-col gap-4">
            <h2 className="font-bold">{title}</h2>
            <div className="w-full h-full flex flex-col gap-2 md:gap-4 text-sm">
                {children}
            </div>
        </div>
    )
}


function ProjectSection({ title, children, isFirst = false }) {
    return (
        <FadeInAnimation isFirst={isFirst}>
            <div className="w-full flex flex-col items-end gap-12">
                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-3xl">{title}</h2>
                    <div className="w-full h-px bg-black"></div>
                </div>
                <div className="flex flex-col gap-12 w-full md:w-4/5">
                    {children}
                </div>
            </div>
        </FadeInAnimation>
    )
}

export default function Sandbox() {

    return (

        <ContentWrapper>
            <h1 className="text-base font-oxanium text-[#7E7E7E] pt-20 pb-[50dvh]">THIS IS WHERE I EXPLORE A BIT......</h1>
            <main className="w-full flex flex-col gap-36 pb-36 font-oxanium text-black">
                <ProjectSection title="Graphic Design" isFirst={true}>
                    <ProjectCard title="Posters">
                        <div className="w-full flex gap-2 md:gap-4">
                            <div className="w-1/4 h-full flex flex-col gap-2">
                                <Image
                                    src="/images/Sandbox/Graphics/LostInTranslation.png"
                                    alt="Lost In Translation"
                                    width="863"
                                    height="1293"
                                    className="h-full object-contain"
                                />
                                [Lost In Translation Poster]
                            </div>
                            <div className="w-3/4 h-full flex flex-col gap-2">
                                <Image

                                    src="/images/Sandbox/Graphics/TDCPoster.png"
                                    alt="TDC Poster"
                                    width="1620"
                                    height="1080"
                                    className="w-full object-contain"
                                />
                                [TDC Poster]
                            </div>
                        </div>
                    </ProjectCard>
                    <ProjectCard title="Specimen Book">
                        {/* top */}
                        <div className="w-full h-full flex gap-2 md:gap-4">
                            <div className="w-1/4 h-full flex flex-col gap-2">
                                <div className="w-full h-full flex flex-col gap-2">
                                    <Image
                                        src="/images/Sandbox/Graphics/Specimen Book/Cover.png"
                                        alt="Lost In Translation"
                                        width="1620"
                                        height="1080"
                                        className="h-full object-contain"
                                    />
                                    [Cover with Small Wrap]
                                </div>
                                <div className="w-full h-full flex flex-col gap-2">
                                    <Image
                                        src="/images/Sandbox/Graphics/Specimen Book/Cover1.png"
                                        alt="Lost In Translation"
                                        width="1620"
                                        height="1080"
                                        className="h-full object-contain"
                                    />
                                    [Small Wrap Opened]
                                </div>
                            </div>
                            <div className="w-3/4 h-full flex flex-col gap-2">
                                <Image

                                    src="/images/Sandbox/Graphics/Specimen Book/Mockup.png"
                                    alt="TDC Poster"
                                    width="1620"
                                    height="1080"
                                    className="w-full object-contain"
                                />
                                [Mockup]
                            </div>
                        </div>
                        {/* bottom */}
                        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                            <Image
                                src="/images/Sandbox/Graphics/Specimen Book/Content1.png"
                                alt="Specimen Book Page 1"
                                width="1620"
                                height="1080"
                                className="w-full h-auto object-cover"
                            />
                            <Image
                                src="/images/Sandbox/Graphics/Specimen Book/Content2.png"
                                alt="Specimen Book Page 2"
                                width="1620"
                                height="1080"
                                className="w-full h-auto object-cover"
                            />
                            <Image
                                src="/images/Sandbox/Graphics/Specimen Book/Content3.png"
                                alt="Specimen Book Page 3"
                                width="1620"
                                height="1080"
                                className="w-full h-auto object-cover"
                            />
                            <Image
                                src="/images/Sandbox/Graphics/Specimen Book/Content4.png"
                                alt="Specimen Book Page 4"
                                width="1620"
                                height="1080"
                                className="w-full h-auto object-cover"
                            />
                            <Image
                                src="/images/Sandbox/Graphics/Specimen Book/Content5.png"
                                alt="Specimen Book Page 5"
                                width="1620"
                                height="1080"
                                className="w-full h-auto object-cover"
                            />
                            <Image
                                src="/images/Sandbox/Graphics/Specimen Book/Content6.png"
                                alt="Specimen Book Page 6"
                                width="1620"
                                height="1080"
                                className="w-full h-auto object-cover"
                            />
                            <Image
                                src="/images/Sandbox/Graphics/Specimen Book/Content7.png"
                                alt="Specimen Book Page 7"
                                width="1620"
                                height="1080"
                                className="w-full h-auto object-cover"
                            />
                            <div></div>
                        </div>
                    </ProjectCard>
                </ProjectSection>
                <ProjectSection title="Motion Design">
                    <ProjectCard title="Logo Animation">
                        <video
                            src="/images/Sandbox/Animations/Logo.mp4"
                            controls
                            loop
                            autoPlay
                            muted
                            playsInline
                            className="w-full h-auto"
                        ></video>
                    </ProjectCard>
                    <ProjectCard title="Dune Teaser">
                        <video
                            src="/images/Sandbox/Animations/DuneTeaser.mp4"
                            controls
                            loop
                            autoPlay
                            muted
                            playsInline
                            className="w-full h-auto"
                        ></video>
                    </ProjectCard>
                </ProjectSection>
                <ProjectSection title="Product Design">
                    <ProjectCard title="Nothing Products">
                        <div className="w-full grid grid-cols-2 gap-2 md:gap-4">
                            <Image
                                src="/images/Sandbox/Render/Nothing1.png"
                                alt="Specimen Book Page 1"
                                width="1670"
                                height="1080"
                                className="w-full h-auto object-cover"
                            />
                            <Image
                                src="/images/Sandbox/Render/Nothing2.png"
                                alt="Specimen Book Page 2"
                                width="1670"
                                height="1080"
                                className="w-full h-auto object-cover"
                            />

                            <Image
                                src="/images/Sandbox/Render/Nothing3.png"
                                alt="Specimen Book Page 3"
                                width="1670"
                                height="1080"
                                className="w-full h-auto object-cover"
                            />
                            <Image
                                src="/images/Sandbox/Render/Nothing4.png"
                                alt="Specimen Book Page 4"
                                width="1670"
                                height="1080"
                                className="w-full h-auto object-cover"
                            />
                            <div></div>
                        </div>
                    </ProjectCard>
                </ProjectSection>
            </main>
            <Footer />
        </ContentWrapper>
    );
}
