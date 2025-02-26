"use client"
import ProgressBar from "@/components/projectPages/progressBar";
import ProjectContent from "@/components/projectPages/projectContent";
import SectionWrapper from "@/components/projectPages/sectionWrapper";
import Title from "@/components/projectPages/title";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const VIDEO_SOURCES = {
    home: {
        src: "/images/Rocket/Content/VideoHome.mp4",
        type: "video/mp4"
    },
    landing1: {
        src: "/images/Rocket/Content/VideoLanding1.mp4",
        type: "video/mp4"
    },

    landing2: {
        src: "/images/Rocket/Content/VideoLanding2.mp4",
        type: "video/mp4"
    },

    landing3: {
        src: "/images/Rocket/Content/VideoLanding3.mp4",
        type: "video/mp4"
    },

    landing4: {
        src: "/images/Rocket/Content/VideoLanding4.mp4",
        type: "video/mp4"
    },

    details: {
        src: "/images/Rocket/Content/VideoDetails.mp4",
        type: "video/mov"
    }
};

const desktopImages = [
    "/images/Rocket/Desktop/HomeDesktop.png",
    "/images/Rocket/Desktop/LandingDesktop.png",
    "/images/Rocket/Desktop/LandingDesktop1.png",
    "/images/Rocket/Desktop/LandingDesktop2.png",
    "/images/Rocket/Desktop/LandingDesktop3.png",
    "/images/Rocket/Desktop/LandingDesktop4.png",
    "/images/Rocket/Desktop/DetailsDesktop.png",
    "/images/Rocket/Desktop/DetailsDesktop1.png",
];

export default function Content() {
    const { currentSection, handleSectionInView } = useScrollProgress(1);
    const t = useTranslations('RocketEngineCatalog');

    //Progress Bar Content
    const content = [{
        key: 1,
        title: t('progressBar.designPrototype'),
        items: [
            t('progressBar.designItems.engineFactory'), 
            t('progressBar.designItems.fabricationShop'), 
            t('progressBar.designItems.hangerBay'), 
            t('progressBar.designItems.futurePlans'), 
            t('progressBar.designItems.mobileGallery')
        ]
    }, {
        key: 2,
        title: t('progressBar.research'),
        items: [
            t('progressBar.researchItems.database'), 
            t('progressBar.researchItems.userArchetypes'), 
            t('progressBar.researchItems.visualLanguage')
        ]
    }];

    return (
        <>
            <ProgressBar
                bgColor="#2E2E2E"
                content={content}
                currentStep={currentSection}
            />
            <div className="flex flex-col gap-36">
                <SectionWrapper sectionKey={1} onSectionInView={handleSectionInView}>
                    <Design />
                </SectionWrapper>
                <SectionWrapper sectionKey={2} onSectionInView={handleSectionInView}>
                    <Research />
                </SectionWrapper>
            </div>
        </>
    )
}


const Design = () => {
    const t = useTranslations('RocketEngineCatalog');
    
    return (
        <div className="flex flex-col gap-56 pt-12 md:px-16 text-sm md:text-base text-[#EAEAEA]">
            {/* Engine Factory */}
            <ProjectContent
                leftChild={
                    <div className="h-full flex flex-col gap-10 justify-between">
                        <section className="flex flex-col gap-2">
                            <h2 className="text-4xl">{t('design.engineFactory.title')}</h2>
                            <div className="border-l px-4">{t('design.engineFactory.subtitle')}</div>

                        </section>
                        <section className="flex flex-col gap-4">
                            <div className="font-bold">{t('design.engineFactory.pageHierarchy')}</div>
                            <div>
                                <div className="w-80 flex gap-2 items-baseline">
                                    <p>{t('design.engineFactory.homePage')}</p>
                                    <div className="flex-1 border-b border-dashed"></div>
                                    <p>{t('design.engineFactory.engineFactoryLabel')}</p>
                                </div>
                                <div className="w-80 flex gap-2 items-baseline">
                                    <p>{t('design.engineFactory.landingPage')}</p>
                                    <div className="flex-1 border-b border-dashed"></div>
                                    <p>{t('design.engineFactory.fabricationShopLabel')}</p>
                                </div>
                                <div className="w-80 flex gap-2 items-baseline">
                                    <p>{t('design.engineFactory.detailsPage')}</p>
                                    <div className="flex-1 border-b border-dashed"></div>
                                    <p>{t('design.engineFactory.hangerBayLabel')}</p>
                                </div>
                                <p>{t('design.engineFactory.trainingNote')}</p>
                            </div>
                            <p>{t('design.engineFactory.centralHub')}</p>
                        </section>
                    </div>}
                rightChild={
                    <Image src={desktopImages[0]} alt="Future Plans" width={960} height={540} />
                }
            />
            {/* Fabrication Shop */}
            <ProjectContent
                order="reverse"
                leftChild={
                    <div className="h-full flex flex-col gap-10 justify-between">
                        <section className="flex flex-col gap-2">
                            <h2 className="text-4xl">{t('design.fabricationShop.title')}</h2>
                            <div className="border-l px-4">{t('design.fabricationShop.subtitle')}</div>
                        </section>
                        <section className="flex flex-col gap-4">
                            <p>{t('design.fabricationShop.description')}</p>
                            {/* <div className="border-l px-4">Why "Build your engine"<br />
                                        Why not just an organized table, or filters?</div>
                                    <p>Throughout ideation and testing, users struggled to grasp the website's purpose at first glance. By presenting it as an interactive engine factory where users can customize builds, the concept becomes more intuitive and allows natural exploration of of these complicated concepts.</p> */}
                        </section>
                    </div>}
                rightChild={
                    <Image src={desktopImages[1]} alt="Fabrication Shop" width={960} height={540} />
                }
            />
            {/* Part 1 - Building the engine */}
            <ProjectContent
                order="reverse"
                leftChild={
                    <div className="h-full flex flex-col gap-10 justify-between">
                        <section className="flex flex-col gap-2">
                            <h2 className="">{t('design.buildingEngine.title')}</h2>
                        </section>
                        <section className="flex flex-col gap-4">
                            <p>{t('design.buildingEngine.description1')}</p>
                            <p>{t('design.buildingEngine.description2')}</p>
                        </section>
                    </div>}
                rightChild={
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={VIDEO_SOURCES.landing2.src} type={VIDEO_SOURCES.home.type} />
                        Your browser does not support the video tag.
                    </video>
                }
            />
            <ProjectContent
                order="reverse"
                leftChild={
                    <div className="h-full flex flex-col gap-10 justify-between">
                        <section className="flex flex-col gap-2">

                        </section>
                        <section className="flex flex-col gap-4">
                            <p>{t('design.buildSummary.description1')}</p>
                            <p>{t('design.buildSummary.description2')}</p>
                        </section>
                    </div>}
                rightChild={
                    <Image src={desktopImages[4]} alt="Build Summary" width={960} height={540} />
                }
            />
            {/* Part 2 - Selecting your engine */}
            <ProjectContent
                order="reverse"
                leftChild={
                    <div className="h-full flex flex-col gap-10 justify-between">
                        <section className="flex flex-col gap-2">
                            <h2 className="">{t('design.selectingEngine.title')}</h2>
                        </section>

                        <section className="flex flex-col gap-4">
                            <p>{t('design.selectingEngine.description1')}</p>
                            <p>{t('design.selectingEngine.description2')}</p>
                        </section>
                    </div>}
                rightChild={
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={VIDEO_SOURCES.landing4.src} type={VIDEO_SOURCES.home.type} />
                        Your browser does not support the video tag.
                    </video>
                }
            />
            {/* Hanger Bay */}
            <ProjectContent
                leftChild={
                    <div className="h-full flex flex-col gap-10 justify-between">
                        <section className="flex flex-col gap-2">
                            <h2 className="text-4xl">{t('design.hangerBay.title')}</h2>
                            <div className="border-l px-4">{t('design.hangerBay.subtitle')}</div>
                        </section>

                        <section className="flex flex-col gap-4">
                            <p>{t('design.hangerBay.description1')}</p>
                            <p>{t('design.hangerBay.description2')}</p>
                            <p>{t('design.hangerBay.description3')}</p>
                            <p>{t('design.hangerBay.description4')}</p>
                        </section>
                    </div>}
                rightChild={
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={VIDEO_SOURCES.details.src} type={VIDEO_SOURCES.home.type} />
                        Your browser does not support the video tag.
                    </video>
                }
            />
            {/* Future Plans */}
            <ProjectContent
                order="reverse"
                leftChild={
                    <div className="h-full flex flex-col gap-10 justify-between">
                        <section className="flex flex-col gap-2">
                            <h2 className="text-4xl">{t('design.futurePlans.title')}</h2>
                            <div className="border-l px-4">{t('design.futurePlans.subtitle')}</div>
                        </section>

                        <section className="flex flex-col gap-4">
                            <p>{t('design.futurePlans.description1')}</p>
                            <div>
                                <p>{t('design.futurePlans.description2')}</p>
                                <ul className="list-disc pl-4">
                                    <li>{t('design.futurePlans.features.item1')}</li>
                                    <li>{t('design.futurePlans.features.item2')}</li>
                                    <li>{t('design.futurePlans.features.item3')}</li>
                                    <li>{t('design.futurePlans.features.item4')}</li>
                                </ul>
                            </div>
                        </section>
                    </div>}
                rightChild={
                    <Image src="/images/Rocket/Content/FuturePlan1.png" alt="Future Plans" width={960} height={540} />
                }
            />
            {/* Future Plans - Training */}
            <ProjectContent
                order="reverse"
                leftChild={
                    <div className="h-full flex flex-col gap-10 justify-between">
                        <section className="flex flex-col gap-2">
                            <div className="border-l px-4">{t('design.futurePlans.training')}</div>
                        </section>

                        <section className="flex flex-col gap-4">
                            <p>{t('design.futurePlans.trainingDescription1')}</p>
                            <div className="w-52 -mb-3 -ml-px">
                                <Image src="/images/Rocket/Content/FuturePlan2-1.png" alt="Future Plans" width={960} height={540} />
                            </div>
                            <p>{t('design.futurePlans.trainingDescription2')}</p>
                        </section>
                    </div>}
                rightChild={
                    <Image src="/images/Rocket/Content/FuturePlan2.png" alt="Future Plans" width={960} height={540} />
                }
            />
            {/* Mobile Gallery */}
            <ProjectContent
                leftChild={
                    <div className="h-full flex flex-col gap-4 lg:gap-[350px]">
                        <section className="flex flex-col gap-2">
                            <h2 className="text-4xl">{t('design.mobileGallery.title')}</h2>
                        </section>

                        <section className="flex flex-col gap-4">
                            <div>
                                <p>{t('design.mobileGallery.considerations')}</p>
                                <ul className="list-disc pl-4">
                                    <li>{t('design.mobileGallery.features.item1')}</li>
                                    <li>{t('design.mobileGallery.features.item2')}</li>
                                    <li>{t('design.mobileGallery.features.item3')}</li>
                                    <li>{t('design.mobileGallery.features.item4')}</li>
                                </ul>
                            </div>
                        </section>
                    </div>}
                rightChild={
                    <div className="w-full flex flex-col gap-8">
                        <section className="flex gap-4 text-sm">
                            <div className="flex-1">
                                <Image src="/images/Rocket/Mobile/HomeMobile.png"
                                    alt="Mobile Home"
                                    width={250}
                                    height={520}
                                    className="object-contain w-full" />
                                {t('design.mobileGallery.labels.home')}
                            </div>
                            <div className="flex-1">
                                <Image src="/images/Rocket/Mobile/LandingMobile.png"
                                    alt="Mobile Home"
                                    width={250}
                                    height={520}
                                    className="object-contain w-full" />
                                {t('design.mobileGallery.labels.landing')}
                            </div>
                            <div className="flex-1"></div>
                        </section>
                        <section className="flex gap-4 text-sm">
                            <div className="flex-1">
                                <Image src="/images/Rocket/Mobile/LandingMobile1.png"
                                    alt="Mobile Home"
                                    width={250}
                                    height={520}
                                    className="object-contain w-full" />
                                {t('design.mobileGallery.labels.configuring')}
                            </div>
                            <div className="flex-1">
                                <Image src="/images/Rocket/Mobile/LandingMobile2.png"
                                    alt="Mobile Home"
                                    width={250}
                                    height={520}
                                    className="object-contain w-full" />
                            </div>
                            <div className="flex-1">
                                <Image src="/images/Rocket/Mobile/LandingMobile3.png"
                                    alt="Mobile Home"
                                    width={250}
                                    height={520}
                                    className="object-contain w-full" />
                            </div>
                        </section>
                        <section className="flex gap-4 text-sm">
                            <div className="flex-1">
                                <Image src="/images/Rocket/Mobile/LandingMobile4.png"
                                    alt="Mobile Home"
                                    width={250}
                                    height={520}
                                    className="object-contain w-full" />
                            </div>
                            <div className="flex-1">
                                <Image src="/images/Rocket/Mobile/LandingMobile5.png"
                                    alt="Mobile Home"
                                    width={250}
                                    height={520}
                                    className="object-contain w-full" />
                                {t('design.mobileGallery.labels.summary')}
                            </div>
                            <div className="flex-1">
                            </div>
                        </section>
                        <section className="flex gap-4 text-sm">
                            <div className="flex-1">
                                <Image src="/images/Rocket/Mobile/LandingMobile6.png"
                                    alt="Mobile Home"
                                    width={250}
                                    height={520}
                                    className="object-contain w-full" />
                                {t('design.mobileGallery.labels.selecting')}
                            </div>
                            <div className="flex-1">
                                <Image src="/images/Rocket/Mobile/LandingMobile7.png"
                                    alt="Mobile Home"
                                    width={250}
                                    height={520}
                                    className="object-contain w-full" />
                            </div>
                            <div className="flex-1">
                                <Image src="/images/Rocket/Mobile/DetailsMobile.png"
                                    alt="Mobile Home"
                                    width={250}
                                    height={520}
                                    className="object-contain w-full" />
                                {t('design.mobileGallery.labels.details')}
                            </div>
                        </section>
                    </div>
                }
            />
        </div>
    )
}

const Research = () => {
    const t = useTranslations('RocketEngineCatalog');
    
    return (
        <div className="flex flex-col gap-48 h-[20vh]">
            <Title title={t('research.comingSoon')} />
        </div>
    )
}
