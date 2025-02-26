"use client"
import ProgressBar from "@/components/projectPages/progressBar";
import ProjectContent from "@/components/projectPages/projectContent";
import SectionWrapper from "@/components/projectPages/sectionWrapper";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Title from "@/components/projectPages/title";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Content() {
    const t = useTranslations('DroneNet');
    const { currentSection, handleSectionInView } = useScrollProgress(1);

    //Progress Bar Content
    const progressBarContent = [{
        key: 1,
        title: t('progressBar.design'),
        items: [
            t('progressBar.designItems.homePage'),
            t('progressBar.designItems.community'),
            t('progressBar.designItems.profile'),
        ]
    }, {
        key: 2,
        title: t('progressBar.research'),
        items: []
    }];

    return (
        <>
            <ProgressBar
                bgColor="#EDEAE3"
                content={progressBarContent}
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
    const t = useTranslations('DroneNet');
    
    return (
        <main className="flex flex-col gap-36 md:px-16 text-sm md:text-base mt-16">
            {/* Home page */}
            <section className="w-full flex flex-col gap-10">
                <h1 className="text-3xl font-oxanium">{t('design.homePage.title')}</h1>
                <div className="flex flex-col gap-32">
                    <ProjectContent
                        order=""
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-between gap-4">
                                <h2 className="font-bold ">{t('design.homePage.homePageSection.title')}</h2>
                                <div className="flex flex-col gap-4">
                                    <p>{t('design.homePage.homePageSection.description1')}</p>
                                    <p>{t('design.homePage.homePageSection.description2')}</p>
                                </div>
                            </div>
                        }
                        rightChild={
                            <section className="flex gap-4 text-sm">
                                <div className="flex-1">
                                    <Image src="/images/DroneNet/Screen/Map.png"
                                        alt="Map"
                                        width={585}
                                        height={1266}
                                        className="object-contain w-full" />
                                </div>
                                <div className="flex-1">
                                    <Image src="/images/DroneNet/Screen/MapPOISelected.png"
                                        alt="Map POI Selected"
                                        width={585}
                                        height={1266}
                                        className="object-contain w-full" />
                                </div>
                                <div className="flex-1">
                                    <Image src="/images/DroneNet/Screen/MapPOIExpanded.png"
                                        alt="Map POI Expanded"
                                        width={585}
                                        height={1266}
                                        className="object-contain w-full" />
                                </div>
                            </section>
                        }
                    />
                    <ProjectContent
                        order=""
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-between gap-4">
                                <h2 className="font-bold ">{t('design.homePage.createPost.title')}</h2>
                                <div className="flex flex-col gap-4">
                                    <p>{t('design.homePage.createPost.description')}</p>
                                </div>
                            </div>
                        }
                        rightChild={
                            <section className="flex gap-4 text-sm">
                                <div className="flex-1">
                                    <Image src="/images/DroneNet/Screen/CreatingPost1.png"
                                        alt="Creating Post 1"
                                        width={585}
                                        height={1266}
                                        className="object-contain w-full" />
                                </div>
                                <div className="flex-1">
                                    <Image src="/images/DroneNet/Screen/CreatingPost2.png"
                                        alt="Creating Post 2"
                                        width={585}
                                        height={1266}
                                        className="object-contain w-full" />
                                </div>
                                <div className="flex-1">
                                </div>
                            </section>
                        }
                    />
                </div>
            </section>

            {/* Community page */}
            <section className="w-full flex flex-col gap-10">
                <h1 className="text-3xl font-oxanium">{t('design.community.title')}</h1>
                <div className="flex flex-col gap-32">
                    <ProjectContent
                        order=""
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-between gap-4">
                                <h2 className="font-bold ">{t('design.community.communityPostsAndPeople.title')}</h2>
                                <div className="flex flex-col gap-4">
                                    <p>{t('design.community.communityPostsAndPeople.description')}</p>
                                </div>
                            </div>
                        }
                        rightChild={
                            <section className="flex gap-4 text-sm">
                                <div className="flex-1">
                                    <Image src="/images/DroneNet/Screen/CommunityPosts.png"
                                        alt="Community Posts"
                                        width={585}
                                        height={1266}
                                        className="object-contain w-full" />
                                </div>
                                <div className="flex-1">
                                    <Image src="/images/DroneNet/Screen/CommunityProfile.png"
                                        alt="Profile"
                                        width={585}
                                        height={1266}
                                        className="object-contain w-full" />
                                </div>
                                <div className="flex-1">
                                    <Image src="/images/DroneNet/Screen/CommunityProfileGear.png"
                                        alt="Profile Profile Gear"
                                        width={585}
                                        height={1266}
                                        className="object-contain w-full" />
                                </div>
                            </section>
                        }
                    />
                    <ProjectContent
                        order=""
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-between gap-4">
                                <h2 className="font-bold ">{t('design.community.itemSales.title')}</h2>
                                <div className="flex flex-col gap-4">
                                    <p>{t('design.community.itemSales.description')}</p>
                                </div>
                            </div>
                        }
                        rightChild={
                            <section className="flex gap-4 text-sm">
                                <div className="flex-1">
                                    <Image src="/images/DroneNet/Screen/CommunitySales.png"
                                        alt="Community Posts"
                                        width={585}
                                        height={1266}
                                        className="object-contain w-full" />
                                </div>
                                <div className="flex-1">
                                </div>
                                <div className="flex-1">
                                </div>
                            </section>
                        }
                    />
                </div>
            </section>

            {/* Profile page */}
            <section className="w-full flex flex-col gap-10">
                <h1 className="text-3xl font-oxanium">{t('design.profile.title')}</h1>
                <div className="flex flex-col gap-32">
                    <ProjectContent
                        order=""
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-between gap-4">
                                <h2 className="font-bold ">{t('design.profile.userProfile.title')}</h2>
                                <div className="flex flex-col gap-4">
                                    <p>{t('design.profile.userProfile.description')}</p>
                                </div>
                            </div>
                        }
                        rightChild={
                            <section className="flex gap-4 text-sm">
                                <div className="flex-1">
                                    <Image src="/images/DroneNet/Screen/Profile.png"
                                        alt="Profile"
                                        width={585}
                                        height={1266}
                                        className="object-contain w-full" />
                                </div>
                                <div className="flex-1">
                                    <Image src="/images/DroneNet/Screen/ProfileGear.png"
                                        alt="Profile Gear"
                                        width={585}
                                        height={1266}
                                        className="object-contain w-full" />
                                </div>
                                <div className="flex-1">
                                    <Image src="/images/DroneNet/Screen/ProfilePlan.png"
                                        alt="Profile Plan"
                                        width={585}
                                        height={1266}
                                        className="object-contain w-full" />
                                </div>
                            </section>
                        }
                    />
                </div>
            </section>
        </main>
    )
}

const Research = () => {
    const t = useTranslations('DroneNet');
    
    return (
        <div className="flex flex-col gap-48 h-[20vh]">
            <Title title={t('research.comingSoon')} />
        </div>
    )
}
