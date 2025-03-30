"use client"
import ProgressBar from "@/components/projectPages/progressBar";
import ProjectContent from "@/components/projectPages/projectContent";
import SectionWrapper from "@/components/projectPages/sectionWrapper";
import Title from "@/components/projectPages/title";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Image from "next/image";
import { useTranslations } from 'next-intl';

function SubTitle({ title, className, responsive = false }) {
    return (
        <h1 className={`${responsive ? 'text-2xl md:text-4xl' : 'text-4xl'} font-light font-oxanium ${className}`}>
            {title}
        </h1>
    )
}

const VIDEO_SOURCES = {
    home: {
        src: "/images/Rocket/Content/VideoHome.mp4",
        type: "video/mp4"
    },
    landing1: {
        src: "/images/Rocket/Content/VideoLanding1.MOV",
        type: "video/mov"
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
        src: "/images/Rocket/Content/VideoDetails.MOV",
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
            t('progressBar.researchItems.visualLanguage'),
            t('progressBar.researchItems.iterations')
        ]
    }];

    return (
        <>
            <ProgressBar
                bgColor="#2E2E2E"
                content={content}
                currentStep={currentSection}
                onSectionClick={(sectionKey) => {
                    const targetSection = document.querySelector(`[data-section="${sectionKey}"]`);
                    targetSection?.scrollIntoView({ behavior: 'smooth' });
                }}
            />
            <div className="flex flex-col gap-36 md:px-12">
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
        <div className="flex flex-col gap-4">
            {/* <Title title={t('progressBar.designPrototype')} dark={true} /> */}
            <div className="flex flex-col gap-32 md:gap-48 pt-12 text-sm md:text-base text-[#EAEAEA]">
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
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={VIDEO_SOURCES.home.src} type={VIDEO_SOURCES.home.type} />
                            Your browser does not support the video tag.
                        </video>
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
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={VIDEO_SOURCES.landing1.src} type={VIDEO_SOURCES.home.type} />
                            Your browser does not support the video tag.
                        </video>
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
                        <Image src={desktopImages[4]} alt="Build Summary" width={960} height={540} priority />
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
        </div>
    )
}

const Research = () => {
    const t = useTranslations('RocketEngineCatalog');

    return (
        <div className="flex flex-col gap-32 md:gap-48 font-oxanium text-sm md:text-base">
            <Title title="Research & Design Process" dark={true} />
            {/* The Database */}
            <section className="flex flex-col gap-8 md:gap-16 -mt-16 md:-mt-24">
                <SubTitle title="THE DATABASE" />
                <div className="flex flex-col gap-4 lg:gap-0">
                    <div className="w-full flex justify-center items-center gap-12 lg:gap-[10vw] border-b border-[#5B5B5B] py-8 lg:py-6">
                        <Image
                            src="/images/Rocket/Content/Research/Merlin.png"
                            alt="Merlin Engine"
                            width={291}
                            height={484}
                            className="object-contain h-32 lg:h-24 w-fit"
                        />
                        <div className="w-48 md:w-64 lg:w-full flex flex-col lg:flex-row justify-between lg:items-center">
                            <SubTitle title="Merlin 1-D" responsive className="lg:w-64" />
                            <div className="lg:w-24 font-thin">SpaceX</div>
                            <div className="lg:w-72 mt-4 lg:mt-0">
                                Falcon 9 / Heavy <br />
                                Active <br />
                                Gas-generator <br />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center gap-12 lg:gap-[10vw] border-b border-[#5B5B5B] py-8 lg:py-6">
                        <Image
                            src="/images/Rocket/Content/Research/MerlinVaccum.png"
                            alt="Raptor Vacuum"
                            width={291}
                            height={484}
                            className="object-contain h-32 lg:h-24 w-fit"
                        />
                        <div className="w-48 md:w-64 lg:w-full flex flex-col lg:flex-row justify-between lg:items-center">
                            <SubTitle title="Raptor Vacuum" responsive className="lg:w-64" />
                            <div className="lg:w-24 font-thin">SpaceX</div>
                            <div className="lg:w-72 mt-4 lg:mt-0">
                                Starship <br />
                                In-development <br />
                                Full-flow staged combustion <br />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center gap-12 lg:gap-[10vw] border-b border-[#5B5B5B] py-8 lg:py-6">
                        <Image
                            src="/images/Rocket/Content/Research/Rutherford.png"
                            alt="Rutherford Engine"
                            width={291}
                            height={484}
                            className="object-contain h-32 lg:h-24 w-fit"
                        />
                        <div className="w-48 md:w-64 lg:w-full flex flex-col lg:flex-row justify-between lg:items-center">
                            <SubTitle title="Rutherford" responsive className="lg:w-64" />
                            <div className="lg:w-24 font-thin">Rocket Lab</div>
                            <div className="lg:w-72 mt-4 lg:mt-0">
                                Electron <br />
                                Active <br />
                                Electric-pump-fed <br />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center text-center pt-6">
                        ...<br /><br />
                        and much more
                    </div>
                </div>
            </section>

            {/*User Archetypes */}
            <section className="flex flex-col gap-8 md:gap-16">
                <SubTitle title="USER ARCHETYPES" />
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                    {/* Students */}
                    <div className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-8 items-center py-8 lg:px-8 lg:border-r border-[#5B5B5B]">
                        <div className="w-12 lg:w-16 aspect-square">
                            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.464844" width="75" height="75" rx="37.5" fill="#2C6FB6" />
                                <rect x="31.4834" y="31.9482" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="52.6123" y="31.9482" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="73.7422" y="31.9482" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="94.8711" y="31.9482" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="31.4834" y="53.0771" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="52.6123" y="53.0771" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="73.7422" y="53.0771" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="94.8711" y="53.0771" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="31.4834" y="74.207" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="52.6123" y="74.207" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="73.7422" y="74.207" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="94.8711" y="74.207" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="31.4834" y="95.3359" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="52.6123" y="95.3359" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="73.7422" y="95.3359" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                                <rect x="94.8711" y="95.3359" width="5.12921" height="5.12921" rx="2.5646" fill="#5FA5DE" />
                            </svg>

                        </div>
                        <SubTitle title="Students" responsive className="text-center" />
                        <p className="w-full text-center border-b border-[#5B5B5B] pb-4 md:pb-6 lg:pb-8">
                            For educational purposes<br />
                            ie. school, museums
                        </p>
                        <ul className="w-full list-disc pl-4">
                            <li>
                                Simple at-a-glance information for low cognitive load
                            </li>
                            <li>
                                Simple navigation and consistent layouts
                            </li>
                            <li>
                                Playful elements and engaging graphics
                            </li>
                        </ul>
                    </div>
                    {/* Enthusiasts */}
                    <div className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-8 items-center py-8 lg:px-8 lg:border-r border-[#5B5B5B]">
                        <div className="w-12 lg:w-16 aspect-square">
                            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="62.5" cy="37.9648" r="36.25" fill="#2C6FB6" stroke="#5FA5DE" strokeWidth="2.5" />
                                <circle cx="37.5" cy="62.9648" r="36.25" stroke="#5FA5DE" strokeWidth="2.5" />
                                <line x1="37.2686" y1="11.9464" x2="11.3998" y2="37.8152" stroke="#5FA5DE" strokeWidth="2.5" />
                                <line x1="87.7931" y1="63.8487" x2="64.6219" y2="87.0199" stroke="#5FA5DE" strokeWidth="2.5" />
                                <line x1="31.7843" y1="56.5948" x2="6.73514" y2="81.644" stroke="#5FA5DE" strokeWidth="2.5" />
                            </svg>

                        </div>
                        <SubTitle title="Enthusiasts" responsive className="text-center" />
                        <p className="w-full text-center border-b border-[#5B5B5B] pb-4 md:pb-6 lg:pb-8">
                            People already interested in this topic who wants to learn more
                        </p>
                        <ul className="w-full list-disc pl-4">
                            <li>
                                Explanation of more advanced concepts
                            </li>
                            <li>
                                Links that leads to other sites like official websites - the learning continues
                            </li>
                            <li>
                                Progression system to keep them engaged
                            </li>

                        </ul>
                    </div>
                    {/* Casual Visitors */}
                    <div className="flex-1 flex flex-col gap-4 md:gap-6 lg:gap-8 items-center py-8 lg:px-8">
                        <div className="w-12 lg:w-16 aspect-square">
                            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="69.2308" height="69.2308" transform="translate(0 0.464844)" fill="#2C6FB6" />
                                <g clipPath="url(#clip0_4910_148)">
                                    <circle cx="61.3291" cy="61.7939" r="37.1334" stroke="#5FA5DE" strokeWidth="3.07692" />
                                    <circle cx="61.3291" cy="61.7939" r="27.4654" stroke="#5FA5DE" strokeWidth="3.07692" />
                                    <circle cx="61.3279" cy="61.7928" r="17.7973" stroke="#5FA5DE" strokeWidth="3.07692" />
                                    <circle cx="61.3294" cy="61.7942" r="8.12978" stroke="#5FA5DE" strokeWidth="3.07692" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4910_148">
                                        <rect width="77.3438" height="77.3438" fill="white" transform="translate(22.6572 23.1221)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <SubTitle title="Casual Visitors" responsive className="text-center" />
                        <p className="w-full text-center border-b border-[#5B5B5B] pb-4 md:pb-6 lg:pb-8">
                            They likely does not know a lot about rockets and rocket engines
                        </p>
                        <ul className="w-full list-disc pl-4">
                            <li>
                                Ease to understand (similar to children), but also have access to more detailed information
                            </li>
                            <li>
                                Intriguing home/landing to raise interest
                            </li>

                        </ul>
                    </div>
                </div>
            </section>

            {/* Visual Langauge */}
            <section className="flex flex-col gap-8 md:gap-16">
                <SubTitle title="VISUAL LANGUAGE" />
                <main className="flex flex-col gap-32 md:gap-48 mt-0 md:-mt-6">
                    {/* General Inspiration */}
                    <ProjectContent
                        leftChild={
                            <div className="h-full flex flex-col gap-10 justify-between">
                                <section className="flex flex-col gap-2">
                                    <div className="border-l px-4">General Inspiration</div>
                                </section>
                                <section className="flex flex-col gap-4">
                                    <div className="font-bold">Keywords</div>
                                    <ul className="list-disc pl-4">
                                        <li>Precision</li>
                                        <li>Diagram</li>
                                        <li>Blueprint</li>
                                        <li>Sihouette</li>
                                    </ul>
                                </section>
                            </div>}
                        rightChild={
                            <Image src="/images/Rocket/Content/Research/GeneralInspiration.png" alt="General Inpisration" width={1448} height={702} />
                        }
                    />

                    {/* Early Experiments */}
                    <ProjectContent
                        leftChild={
                            <div className="h-full flex flex-col gap-10 justify-between">
                                <section className="flex flex-col gap-2">
                                    <div className="border-l px-4">Early Experiments</div>
                                </section>
                            </div>}
                        rightChild={
                            <Image src="/images/Rocket/Content/Research/EarlyExperiments.png" alt="s" width={1448} height={702} />
                        }
                    />

                    {/* The Map */}
                    <ProjectContent
                        leftChild={
                            <div className="h-full flex flex-col gap-10 justify-between">
                                <section className="flex flex-col gap-2">
                                    <div className="border-l px-4">The Map</div>
                                </section>
                                <section>
                                    The map design underwent a lot of experimentations, and eventually I landed on the concept of a rocket engine factory as intricate mechanical parts inside the body of a rocket.
                                </section>
                            </div>}
                        rightChild={
                            <div className="grid grid-cols-2 gap-2 md:gap-4">
                                <div className="flex flex-col gap-2">
                                    <Image src="/images/Rocket/Content/Research/Map1.png" alt="Map 1" width={1000} height={600} className="w-full border border-[#5B5B5B]" />
                                    <p>Initial Concept</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Image src="/images/Rocket/Content/Research/Map2.png" alt="Map 2" width={1000} height={600} className="w-full" />
                                    <p>Sketch</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Image src="/images/Rocket/Content/Research/Map3.png" alt="Map 3" width={1000} height={600} className="w-full" />
                                    <p>Digital Attempt</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Image src="/images/Rocket/Content/Research/Map4.png" alt="Map 4" width={1000} height={600} className="w-full" />
                                    Final Design
                                </div>
                            </div>
                        }
                    />

                    {/* Design System */}
                    <ProjectContent
                        leftChild={
                            <div className="h-full flex flex-col gap-10 justify-between">
                                <section className="flex flex-col gap-2">
                                    <div className="border-l px-4">Design System - Typography & Colors</div>
                                </section>
                            </div>}
                        rightChild={
                            <div className="flex flex-col gap-12 mt-8 lg:mt-0">
                                <div className="flex gap-4 justify-between border-b border-[#5B5B5B] pb-12">
                                    <div className="flex flex-col gap-4">
                                        <div className="font-mono font-bold text-[32px] leading-[32px]">IBM Plex Mono Bold 32px</div>
                                        <div className="font-mono text-[20px] leading-[20px]">IBM Plex Mono Regular 20px</div>
                                        <div className="font-mono text-[16px] leading-[16px]">IBM Plex Mono Regular 16px</div>
                                        <div className="font-mono font-medium text-[12px] leading-[12px]">IBM Plex Mono Medium 12px</div>
                                    </div>
                                    <ul className="hidden list-none sm:flex flex-col gap-2 font-mono text-[20px] leading-[20px]">
                                        <li>• Industrial</li>
                                        <li>• Engineer</li>
                                        <li>• Tech</li>
                                    </ul>
                                </div>
                                <div className="flex gap-4 justify-between">
                                    <div className="flex flex-col gap-4">
                                        <div className="font-greycliff font-medium text-[32px] leading-[32px]">Greycliff Medium 32px</div>
                                        <div className="font-greycliff font-medium text-[24px] leading-[24px]">Greycliff Medium 24px</div>
                                        <div className="font-greycliff text-[16px] leading-[16px]">Greycliff Regular 16px</div>
                                        <div className="font-greycliff font-semibold text-[12px] leading-[12px]">Greycliff DemiBold 12px</div>
                                        <div className="font-greycliff text-[12px] leading-[12px]">Greycliff Regular 12px</div>
                                    </div>
                                    <ul className="hidden list-none sm:flex flex-col gap-2 font-greycliff text-[20px] leading-[20px]">
                                        <li>• Sans-Serif</li>
                                        <li>• Approachable</li>
                                        <li>• Geometric</li>
                                    </ul>
                                </div>
                                <Image src="/images/Rocket/Content/Research/Color.png" alt="Colors" width={1984} height={706} />
                            </div>
                        }
                    />
                </main>
            </section>

            {/* Iterations */}
            <section className="flex flex-col gap-8 md:gap-16">
                <SubTitle title="ITERATIONS" />
                <main className="flex flex-col gap-32 md:gap-48 mt-0 md:-mt-6">

                {/* Homepage */}
                <ProjectContent
                        leftChild={
                            <div className="h-full flex flex-col gap-10 justify-between">
                                <section className="flex flex-col gap-2">
                                    <div className="border-l px-4">Homepage Iterations ( Engine Factory )</div>
                                </section>
                            </div>}
                        rightChild={
                            <div className="">
                                <Image 
                                    src="/images/Rocket/Content/Research/HomeIterations.gif" 
                                    alt="Homepage Iterations" 
                                    width={1200} 
                                    height={800} 
                                    className="w-full h-auto"
                                />
                            </div>
                        }
                    />

                    {/* Landing Page */}
                    <ProjectContent
                        leftChild={
                            <div className="h-full flex flex-col gap-10 justify-between">
                                <section className="flex flex-col gap-2">
                                    <div className="border-l px-4">Landing Page Iterations ( Fabrication Shop )</div>
                                </section>
                            </div>}
                        rightChild={
                            <div className="">
                                <Image 
                                    src="/images/Rocket/Content/Research/LandingIterations.gif" 
                                    alt="Landing Page Iterations" 
                                    width={1200} 
                                    height={800} 
                                    className="w-full h-auto"
                                />
                            </div>
                        }
                    />
                </main>
            </section>
        </div>
    )
}
