import ContentWrapper from "@/components/contentWrapper";
import Image from "next/image";
import Footer from "@/components/footer";
import FadeInAnimation from "@/components/animation/fadeInAnimation";
import { useTranslations } from 'next-intl';
import {setRequestLocale} from 'next-intl/server';

export default function Sandbox() {

    const t = useTranslations('Sandbox');

    return (
        <ContentWrapper>
            <h1 className="text-base font-oxanium text-[#7E7E7E] pt-20 pb-[50dvh]">{t('header')}</h1>
            <main className="w-full flex flex-col gap-36 pb-36 font-oxanium text-black">
                <ProjectSection title={t('sections.graphicDesign.title')} isFirst={true}>
                    <ProjectCard title={t('sections.graphicDesign.posters.title')}>
                        <div className="w-full flex gap-2 md:gap-4">
                            <div className="w-1/4 h-full flex flex-col gap-2">
                                <Image
                                    src="/images/Sandbox/Graphics/LostInTranslation.png"
                                    alt="Lost In Translation"
                                    width="863"
                                    height="1293"
                                    className="h-full object-contain"
                                />
                                [{t('sections.graphicDesign.posters.lostInTranslation')}]
                            </div>
                            <div className="w-3/4 h-full flex flex-col gap-2">
                                <Image
                                    src="/images/Sandbox/Graphics/TDCPoster.png"
                                    alt="TDC Poster"
                                    width="1620"
                                    height="1080"
                                    className="w-full object-contain"
                                />
                                [{t('sections.graphicDesign.posters.tdc')}]
                            </div>
                        </div>
                    </ProjectCard>
                    <ProjectCard title={t('sections.graphicDesign.specimenBook.title')}>
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
                                    [{t('sections.graphicDesign.specimenBook.coverSmallWrap')}]
                                </div>
                                <div className="w-full h-full flex flex-col gap-2">
                                    <Image
                                        src="/images/Sandbox/Graphics/Specimen Book/Cover1.png"
                                        alt="Lost In Translation"
                                        width="1620"
                                        height="1080"
                                        className="h-full object-contain"
                                    />
                                    [{t('sections.graphicDesign.specimenBook.smallWrapOpened')}]
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
                                [{t('sections.graphicDesign.specimenBook.mockup')}]
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
                <ProjectSection title={t('sections.motionDesign.title')}>
                    <ProjectCard title={t('sections.motionDesign.logoAnimation.title')}>
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
                    <ProjectCard title={t('sections.motionDesign.duneTeaser.title')}>
                        <video
                            src="/images/Sandbox/Animations/DuneTeaser.mp4"
                            preload="metadata"
                            controls
                            loop
                            autoPlay
                            muted
                            playsInline
                            className="w-full h-auto"
                        ></video>
                    </ProjectCard>
                </ProjectSection>
                <ProjectSection title={t('sections.productDesign.title')}>
                    <ProjectCard title={t('sections.productDesign.nothingProducts.title')}>
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
