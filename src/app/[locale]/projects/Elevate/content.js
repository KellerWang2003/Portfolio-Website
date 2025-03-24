"use client"
import ProgressBar from "@/components/projectPages/progressBar";
import ScrollingImages from "@/components/projectPages/scrollingImages";
import ProjectContent from "@/components/projectPages/projectContent";
import SectionWrapper from "@/components/projectPages/sectionWrapper";
import Title from "@/components/projectPages/title";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useTranslations } from 'next-intl';
import TabGroup from "@/components/projectPages/tabGroup";

function SubTitle({ title }) {
    return (
        <h1 className="text-lg md:text-2xl font-semibold font-oxanium">
            {title}
        </h1>
    )
}

function Box({ children, className }) {
    return (
        <div className={`w-full bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg p-6 ${className}`}>
            {children}
        </div>
    )
}

export default function Content() {
    const { currentSection, handleSectionInView } = useScrollProgress(1);
    const t = useTranslations('Elevate');

    const content = t.raw('context.features').map((feature, index) => ({
        key: index + 1,
        title: feature.title,
        src: feature.src
    }));

    const progressBarContent = [
        {
            key: 1,
            title: t('progressBar.context'),
            items: [
                t('progressBar.contextItems.problemStatement'),
                t('progressBar.contextItems.ourSolution'),
                t('progressBar.contextItems.featureOverview')
            ]
        }, {
            key: 2,
            title: t('progressBar.research'),
            items: [
                t('progressBar.researchItems.earlyResearch'),
                t('progressBar.researchItems.primaryResearch'),
                t('progressBar.researchItems.painPoints'),
                t('progressBar.researchItems.userTypesAndUserStory'),
                t('progressBar.researchItems.designThinking')
            ]
        }, {
            key: 3,
            title: t('progressBar.finalDesign'),
            items: [
                t('progressBar.finalDesignItems.accessibilityScore'),
                t('progressBar.finalDesignItems.feedbackLoop')
            ]
        }
    ];

    return (
        <>
            <ProgressBar
                bgColor="#EDEAE3"
                content={progressBarContent}
                currentStep={currentSection}
                onSectionClick={(sectionKey) => {
                    const targetSection = document.querySelector(`[data-section="${sectionKey}"]`);
                    targetSection?.scrollIntoView({ behavior: 'smooth' });
                }}
            />
            <div className="flex flex-col gap-36 md:px-12">
                <SectionWrapper sectionKey={1} onSectionInView={handleSectionInView}>
                    <Context content={content} />
                </SectionWrapper>
                <SectionWrapper sectionKey={2} onSectionInView={handleSectionInView}>
                    <Research />
                </SectionWrapper>
                <SectionWrapper sectionKey={3} onSectionInView={handleSectionInView}>
                    <FinalDesign content={content} />
                </SectionWrapper>
            </div>
        </>
    )
}

const Context = ({ content }) => {
    const t = useTranslations('Elevate');

    return (
        <section className="flex flex-col gap-36 pt-16 md:pt-48">
            {/* <Title title="Context" /> */}
            <div className="flex flex-col gap-36 md:gap-48">
                <ProjectContent
                    leftChild={
                        <SubTitle title={t('context.problem.title')} />
                    }
                    rightChild={
                        <h1 className="w-full text-sm md:text-lg font-oxanium leading-normal bg-[#F2EFE7] rounded-lg border border-[#BFBFBF] p-6 -mt-4 lg:mt-0">
                            <span>{t('context.problem.description.part1')}</span>
                            <span className="text-[#2590DC]"> {t('context.problem.description.highlight')} </span>
                            <span>{t('context.problem.description.part2')}</span>
                        </h1>
                    }
                />

                <ProjectContent
                    leftChild={
                        <SubTitle title={t('context.solution.title')} />
                    }
                    rightChild={
                        <h1 className="w-full text-sm md:text-lg font-oxanium leading-normal bg-[#F2EFE7] rounded-lg border border-[#BFBFBF] p-6 -mt-4 lg:mt-0">
                            <span>{t('context.solution.description.part1')}</span>
                            <span className="text-[#2590DC]"> {t('context.solution.description.highlight')} </span>
                            <span>{t('context.solution.description.part2')}</span>
                        </h1>
                    }
                />

                <div className="w-full flex flex-col gap-4 md:gap-8">
                    <SubTitle title={t('context.featureOverview.title')} />
                    <ScrollingImages content={content} />
                </div>
                
            </div>
        </section>
    )
}

const Research = () => {
    const t = useTranslations('Elevate');

    const Pill = ({ content, className }) => {
        return (
            <div
                className={`absolute w-fit h-fit text-center text-sm px-2 py-1 bg-[#F7F4EC] border border-[#BFBFBF] rounded ${className}`}
            >
                {content}
            </div>
        )
    }

    return (
        <section className="flex flex-col gap-48 text-sm md:text-base">
            <Title title={t('research.title')} />

            {/* Early Research */}
            <section className="w-full lg:w-4/5 flex flex-col gap-16 md:gap-36 mx-auto items-center -mt-24 md:mt-0">
                <div className="flex flex-col gap-8 items-center">
                    <div className="w-8 md:w-12 aspect-square">
                        <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M32 0.102051C14.3388 0.102051 0 14.4409 0 32.1021C0 49.7632 14.3388 64.1021 32 64.1021C49.6612 64.1021 64 49.7632 64 32.1021C64 14.4409 49.6612 0.102051 32 0.102051ZM32 5.76463C46.5365 5.76463 58.3381 17.5655 58.3381 32.1021C58.3381 46.6386 46.5365 58.4395 32 58.4395C17.4642 58.4395 5.66258 46.6386 5.66258 32.1021C5.66258 17.5655 17.4642 5.76463 32 5.76463Z" fill="#2590DC" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M27.325 30.5097C26.7725 36.8563 25.3168 43.0117 23.0477 48.9964C22.4937 50.4578 23.2304 52.0933 24.6911 52.6473C26.1524 53.2012 27.788 52.4652 28.3419 51.0039C29.9483 46.7671 31.1764 42.4514 32.0006 38.051C32.8248 42.4514 34.0528 46.7671 35.6592 51.0039C36.2132 52.4652 37.8488 53.2012 39.3101 52.6473C40.7714 52.0933 41.5074 50.4578 40.9535 48.9964C38.6857 43.0153 37.2308 36.8627 36.6776 30.5218C40.0688 30.3554 43.4616 29.9998 46.8543 29.4487C48.3967 29.1977 49.4456 27.742 49.1945 26.1996C48.9442 24.6579 47.4886 23.609 45.9462 23.8594C36.6434 25.3712 27.3414 25.3114 18.0386 23.8565C16.4948 23.6154 15.0456 24.6729 14.8038 26.2167C14.5627 27.7605 15.6201 29.2098 17.164 29.4508C20.5503 29.9806 23.9373 30.3362 27.325 30.5097Z" fill="#2590DC" />
                            <path d="M32.0007 22.6156C34.8229 22.6156 37.1107 20.3278 37.1107 17.5056C37.1107 14.6834 34.8229 12.3955 32.0007 12.3955C29.1785 12.3955 26.8906 14.6834 26.8906 17.5056C26.8906 20.3278 29.1785 22.6156 32.0007 22.6156Z" fill="#2590DC" />
                        </svg>
                    </div>
                    <h2 className="w-full xl:w-2/3 text-center text-2xl md:text-4xl font-oxanium">{t('research.earlyResearch.heading')}</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-4">
                    {t.raw('research.earlyResearch.statistics').map((stat, index) => (
                        <Box key={index} className="flex flex-1 flex-col md:gap-2">
                            {stat.prefix ? (
                                <div className="flex gap-2 justify-center items-baseline">
                                    <p className="text-center text-sm md:text-base font-oxanium">{stat.prefix}</p>
                                    <h3 className="text-center text-2xl md:text-4xl font-oxanium text-[#2590DC]">{stat.value}</h3>
                                </div>
                            ) : (
                                <h3 className="text-center text-2xl md:text-4xl font-oxanium text-[#2590DC]">{stat.value}</h3>
                            )}
                            <p className="text-center text-sm md:text-base font-oxanium">{stat.description}</p>
                        </Box>
                    ))}
                </div>
            </section>

            {/* Primary Research */}
            <section className="w-full flex flex-col gap-4">
                <SubTitle title={t('research.primaryResearch.title')} />
                <div className="flex flex-col gap-24 lg:gap-36">
                    <p className="w-full lg:w-1/2">
                        {t('research.primaryResearch.description')}
                    </p>
                    {/* insight1 */}
                    <div className="w-full sm:w-4/5 h-fit mx-auto flex flex-col gap-8 justify-center items-center">
                        <div className="flex flex-row gap-2 items-center">
                            <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5453 0.176758C6.82614 0.176758 2.98828 4.01592 2.98828 8.73511C2.98828 11.5831 4.39005 14.2179 6.74768 15.8159C6.94905 16.1349 7.09289 16.5573 7.17527 17.0712C7.2485 17.5301 7.68001 17.8427 8.14029 17.7694C8.59927 17.6962 8.91179 17.2634 8.83856 16.8044C8.70388 15.9597 8.43058 15.2549 8.02914 14.707C7.96899 14.6246 7.89446 14.554 7.80816 14.4991C5.84412 13.2229 4.67118 11.0692 4.67118 8.73511C4.67118 4.94433 7.75454 1.86097 11.544 1.86097C15.3335 1.86097 18.4169 4.94433 18.4169 8.73511C18.4169 10.8116 17.1262 13.2255 15.2786 14.605C15.204 14.6612 15.14 14.7279 15.0864 14.8051C14.5437 15.6001 14.2822 16.1493 14.1527 16.7652C14.0573 17.2202 14.3489 17.6674 14.8039 17.7629C14.8627 17.776 14.9203 17.7812 14.9778 17.7812C15.3675 17.7812 15.7179 17.5079 15.8016 17.1117C15.8657 16.8044 15.9925 16.4827 16.4031 15.8669C18.2626 14.4232 20.1011 11.6929 20.1011 8.73642C20.1024 4.01723 16.2645 0.176758 11.5453 0.176758Z" fill="black" />
                                <path d="M7.22266 20.2484C7.22266 20.7139 7.59925 21.0905 8.06476 21.0905H11.5103L11.6267 21.084C11.6973 21.08 11.764 21.0787 11.8346 21.084L15.3351 21.0905C15.8006 21.0905 16.1772 20.7139 16.1772 20.2484C16.1772 19.7829 15.8006 19.4063 15.3351 19.4063H12.0164L11.9366 19.4024C11.798 19.3945 11.6633 19.3945 11.526 19.4024L8.06476 19.4063C7.59925 19.4063 7.22266 19.7829 7.22266 20.2484Z" fill="black" />
                                <path d="M15.1503 23.334C15.1503 22.8685 14.7737 22.4919 14.3082 22.4919H11.931L11.8996 22.4893C11.7793 22.4788 11.6629 22.4788 11.5426 22.4893L9.0882 22.4919C8.62269 22.4919 8.24609 22.8685 8.24609 23.334C8.24609 23.7995 8.62269 24.1761 9.0882 24.1761H11.54C11.5531 24.1761 11.5661 24.1761 11.5792 24.1748C11.6132 24.1735 11.6485 24.1709 11.6838 24.167L11.7178 24.1643L11.757 24.167C11.7937 24.1696 11.829 24.1735 11.8656 24.1748C11.8787 24.1748 11.8917 24.1761 11.9035 24.1761H14.3082C14.7737 24.1761 15.1503 23.7982 15.1503 23.334Z" fill="black" />
                            </svg>

                            <h2 className="">{t('research.primaryResearch.insight1.title')}</h2>
                        </div>
                        <p className="w-5/6 lg:w-2/3">
                            {t.rich('research.primaryResearch.insight1.description', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </p>
                        <div className="flex flex-col lg:flex-row gap-4 pt-4 border-t border-[#BFBFBF]">
                            <div className="w-full h-full p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">
                                "{t('research.primaryResearch.insight1.quote1')}"
                            </div>
                            <div className="w-full grow-1 p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">
                                "{t('research.primaryResearch.insight1.quote2')}"
                            </div>
                        </div>
                    </div>
                    {/* insight 2 */}
                    <div className="w-full sm:w-4/5 h-fit mx-auto flex flex-col gap-8 justify-center items-center">
                        <div className="flex flex-row gap-2 items-center">
                            <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5453 0.176758C6.82614 0.176758 2.98828 4.01592 2.98828 8.73511C2.98828 11.5831 4.39005 14.2179 6.74768 15.8159C6.94905 16.1349 7.09289 16.5573 7.17527 17.0712C7.2485 17.5301 7.68001 17.8427 8.14029 17.7694C8.59927 17.6962 8.91179 17.2634 8.83856 16.8044C8.70388 15.9597 8.43058 15.2549 8.02914 14.707C7.96899 14.6246 7.89446 14.554 7.80816 14.4991C5.84412 13.2229 4.67118 11.0692 4.67118 8.73511C4.67118 4.94433 7.75454 1.86097 11.544 1.86097C15.3335 1.86097 18.4169 4.94433 18.4169 8.73511C18.4169 10.8116 17.1262 13.2255 15.2786 14.605C15.204 14.6612 15.14 14.7279 15.0864 14.8051C14.5437 15.6001 14.2822 16.1493 14.1527 16.7652C14.0573 17.2202 14.3489 17.6674 14.8039 17.7629C14.8627 17.776 14.9203 17.7812 14.9778 17.7812C15.3675 17.7812 15.7179 17.5079 15.8016 17.1117C15.8657 16.8044 15.9925 16.4827 16.4031 15.8669C18.2626 14.4232 20.1011 11.6929 20.1011 8.73642C20.1024 4.01723 16.2645 0.176758 11.5453 0.176758Z" fill="black" />
                                <path d="M7.22266 20.2484C7.22266 20.7139 7.59925 21.0905 8.06476 21.0905H11.5103L11.6267 21.084C11.6973 21.08 11.764 21.0787 11.8346 21.084L15.3351 21.0905C15.8006 21.0905 16.1772 20.7139 16.1772 20.2484C16.1772 19.7829 15.8006 19.4063 15.3351 19.4063H12.0164L11.9366 19.4024C11.798 19.3945 11.6633 19.3945 11.526 19.4024L8.06476 19.4063C7.59925 19.4063 7.22266 19.7829 7.22266 20.2484Z" fill="black" />
                                <path d="M15.1503 23.334C15.1503 22.8685 14.7737 22.4919 14.3082 22.4919H11.931L11.8996 22.4893C11.7793 22.4788 11.6629 22.4788 11.5426 22.4893L9.0882 22.4919C8.62269 22.4919 8.24609 22.8685 8.24609 23.334C8.24609 23.7995 8.62269 24.1761 9.0882 24.1761H11.54C11.5531 24.1761 11.5661 24.1761 11.5792 24.1748C11.6132 24.1735 11.6485 24.1709 11.6838 24.167L11.7178 24.1643L11.757 24.167C11.7937 24.1696 11.829 24.1735 11.8656 24.1748C11.8787 24.1748 11.8917 24.1761 11.9035 24.1761H14.3082C14.7737 24.1761 15.1503 23.7982 15.1503 23.334Z" fill="black" />
                            </svg>

                            <h2 className="">{t('research.primaryResearch.insight2.title')}</h2>
                        </div>
                        <p className="w-5/6 lg:w-2/3">
                            {t.rich('research.primaryResearch.insight2.description', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </p>
                        <div className="flex flex-col lg:flex-row gap-4 pt-4 border-t border-[#BFBFBF]">
                            <div className="w-full h-full p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">
                                "{t('research.primaryResearch.insight2.quote1')}"
                            </div>
                            <div className="w-full grow-1 p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">
                                "{t('research.primaryResearch.insight2.quote2')}"
                            </div>
                            <div className="w-full grow-1 p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">
                                "{t('research.primaryResearch.insight2.quote3')}"
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points */}
            <section className="w-full flex flex-col gap-4">
                <SubTitle title={t('research.painPoints.title')} />
                <Box className="w-full flex flex-col md:flex-row">
                    <section className="w-full flex flex-col gap-8 pr-0 md:pr-6">
                        <h2 className="md:text-center text-sm md:text-base font-oxanium border-b border-[#BFBFBF] pb-6">{t('research.painPoints.productDesignTeam.title')}</h2>
                        <div className="flex flex-col gap-6">
                            <h3 className="font-bold">{t('research.painPoints.productDesignTeam.lackOfCollaboration.title')}</h3>
                            <ul className="list-disc pl-4 flex flex-col">
                                {t.raw('research.painPoints.productDesignTeam.lackOfCollaboration.points').map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>

                            <h3 className="font-bold mt-6">{t('research.painPoints.productDesignTeam.neverPriority.title')}</h3>
                            <ul className="list-disc pl-4 flex flex-col">
                                {t.raw('research.painPoints.productDesignTeam.neverPriority.points').map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    <div className="hidden md:block w-px bg-[#BFBFBF]"></div>
                    <section className="w-full flex flex-col gap-8 pl-0 mt-16 md:mt-0 md:pl-6">
                        <h2 className="md:text-center text-sm md:text-base font-oxanium border-b border-[#BFBFBF] pb-6">{t('research.painPoints.usersWithDisabilities.title')}</h2>
                        <div className="flex flex-col gap-6">
                            <h3 className="font-bold">{t('research.painPoints.usersWithDisabilities.communicationBarriers.title')}</h3>
                            <ul className="list-disc pl-6 flex flex-col">
                                {t.raw('research.painPoints.usersWithDisabilities.communicationBarriers.points').map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>

                            <h3 className="font-bold mt-6">{t('research.painPoints.usersWithDisabilities.evolvingNeeds.title')}</h3>
                            <ul className="list-disc pl-6 flex flex-col">
                                {t.raw('research.painPoints.usersWithDisabilities.evolvingNeeds.points').map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </Box>
            </section>

            {/* User Type and User Story*/}
            <section className="w-full flex flex-col gap-4">
                <SubTitle title={t('research.userTypeAndStory.title')} />
                <div className="flex flex-col gap-4">
                    {/* User Type */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <Box className="w-full flex flex-col gap-6">
                            <h2 className="text-center text-sm md:text-base font-oxanium border-b border-[#BFBFBF] pb-6">{t('research.userTypeAndStory.userType.elevate.title')}</h2>
                            <ul className="list-disc pl-4 grid grid-cols-2">
                                {t.raw('research.userTypeAndStory.userType.elevate.users').map((user, index) => (
                                    <li key={index}>{user}</li>
                                ))}
                            </ul>
                        </Box>
                        <Box className="w-full flex flex-col gap-6">
                            <h2 className="text-center text-sm md:text-base font-oxanium border-b border-[#BFBFBF] pb-6">{t('research.userTypeAndStory.userType.b2c.title')}</h2>
                            <ul className="list-disc pl-4 flex flex-col">
                                {t.raw('research.userTypeAndStory.userType.b2c.users').map((user, index) => (
                                    <li key={index}>{user}</li>
                                ))}
                            </ul>
                        </Box>
                    </div>
                    {/* User Story */}
                    <Box className="flex flex-col gap-6">
                        <section className="flex flex-col gap-4 lg:gap-6 pb-6 border-b border-[#BFBFBF]">
                            <h2 className="text-lg md:text-2xl font-semibold md:font-normal font-oxanium">
                                {t('research.userTypeAndStory.userStory.title')}
                            </h2>
                            <div className="flex flex-col lg:flex-row gap-8">
                                <p className="text-sm md:text-base">{t('research.userTypeAndStory.userStory.experience.design')} <br /> {t('research.userTypeAndStory.userStory.experience.leadership')}</p>
                                <div className="hidden lg:block w-px bg-[#BFBFBF]"></div>
                                <p className="hidden lg:block text-sm md:text-base">{t('research.userTypeAndStory.userStory.skills.understanding')} <br /> {t('research.userTypeAndStory.userStory.skills.analysis')}</p>
                                <div className="hidden lg:block w-px bg-[#BFBFBF]"></div>
                                <p className="hidden lg:block text-sm md:text-base">{t('research.userTypeAndStory.userStory.capabilities.empathy')} <br /> {t('research.userTypeAndStory.userStory.capabilities.management')}</p>
                            </div>
                        </section>
                        <section className="flex flex-col lg:flex-row">
                            <div className="w-full lg:w-2/3 flex flex-col gap-12">
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-bold">{t('research.userTypeAndStory.userStory.stories.story1.title')}</h3>
                                    <p>{t('research.userTypeAndStory.userStory.stories.story1.content')}</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-bold">{t('research.userTypeAndStory.userStory.stories.story2.title')}</h3>
                                    <p>{t('research.userTypeAndStory.userStory.stories.story2.content')}</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-bold">{t('research.userTypeAndStory.userStory.stories.story3.title')}</h3>
                                    <p>{t('research.userTypeAndStory.userStory.stories.story3.content')}</p>
                                </div>
                            </div>
                            <div className="h-px lg:h-auto lg:w-px bg-[#BFBFBF] my-6 lg:my-0 lg:mx-6"></div>
                            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                                <h3 className="font-bold">{t('research.userTypeAndStory.userStory.keyTakeaways.title')}</h3>
                                <ul className="list-disc pl-4 flex flex-col">
                                    {t.raw('research.userTypeAndStory.userStory.keyTakeaways.points').slice(0, 3).map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                                <ul className="list-disc pl-4 flex flex-col">
                                    {t.raw('research.userTypeAndStory.userStory.keyTakeaways.points').slice(3).map((point, index) => (
                                        <li key={index + 3}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </Box>
                </div>
            </section>

            {/* Design Thinking */}
            <section className="w-full flex flex-col gap-4">
                <SubTitle title={t('research.designThinking.title')} />
                <div className="flex flex-col lg:flex-row gap-4">
                    <Box className="grow-1 flex flex-col gap-4 justify-between">
                            <p className="md:px-12 py-2 md:py-6"><strong>{t('research.designThinking.accessibilityScore.hmwPrefix')}</strong> {t('research.designThinking.accessibilityScore.hmw')}</p>
                            <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-lg">
                                {t('research.designThinking.accessibilityScore.solution')}
                            </p>
                    </Box>
                    <Box className="grow-1 flex flex-col gap-4 justify-between">
                            <p className="md:px-12 py-2 md:py-6"><strong>{t('research.designThinking.feedbackLoop.hmwPrefix')}</strong> {t('research.designThinking.feedbackLoop.hmw')}</p>
                            <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-lg">
                                {t('research.designThinking.feedbackLoop.solution')}
                            </p>
                    </Box>
                </div>
            </section>

            {/* The Problem */}
            {/* <section className="w-full flex flex-col gap-10 -mt-24">
                <h1 className="text-2xl font-oxanium">{t('research.theProblem.title')}</h1>
                <div className="flex flex-col gap-4">
                    <p className="w-full lg:w-1/2">
                        {t('research.theProblem.description')}
                    </p>
                    <div className="w-full h-[750px] md:h-[400px] flex flex-col md:flex-row p-6
                     bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">
                        <section className="relative w-full h-full">
                            <h1 className="mx-auto w-fit font-oxanium font-bold">{t('research.theProblem.theGood')}</h1>
                            <Pill className=" sm:right-[18%] top-[60px] sm:top-[80px]" content={t('research.theProblem.pills.wcag')} />
                            <Pill className="left-[8%] top-[120px] sm:top-[140px]" content={t('research.theProblem.pills.training')} />
                            <Pill className="right-[5%] sm:right-[10%] top-[180px] sm:top-[190px]" content={t('research.theProblem.pills.audits')} />
                            <Pill className="left-[18%] top-[240px]" content={t('research.theProblem.pills.assistive')} />
                        </section>
                        <div className="w-full md:w-px h-px md:h-full bg-[#BFBFBF]"></div>
                        <section className="relative w-full h-full flex pt-6 md:pt-0">
                            <h1 className="mx-auto w-fit font-oxanium font-bold">{t('research.theProblem.theNotSoGood')}</h1>
                            <Pill className="sm:left-[15%] top-[70px]" content={t('research.theProblem.pills.awareness')} />
                            <Pill className="right-0 sm:right-[25%] top-[130px]" content={t('research.theProblem.pills.collaboration')} />
                            <Pill className="left-[10%] top-[250px]" content={t('research.theProblem.pills.leadership')} />
                            <Pill className="right-[8%] top-[190px]" content={t('research.theProblem.pills.sensitivity')} />
                            <Pill className="right-[25%] top-[310px]" content={t('research.theProblem.pills.barriers')} />
                        </section>
                    </div>
                </div>
            </section> */}

            {/* Why & How */}
            {/* <section className="w-full flex flex-col gap-10">
                <h1 className="text-3xl font-oxanium">{t('research.whyAndHow.title')}</h1>
                <div className="flex flex-col gap-4">
                    <p className="w-full lg:w-1/2 hidden md:block">
                        {t('research.whyAndHow.intro')}
                    </p>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-4">


                        <h2 className="font-bold md:hidden">Issue 1</h2>
                        <section className="w-full h-fit p-6 -mt-6 md:mt-0 bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">
                            <h2 className="w-full mx-auto text-center font-bold border-b border-[#BFBFBF] pb-4">{t('research.whyAndHow.issue1.title')}</h2>
                            <ul className="list-disc pl-4 pt-6 flex flex-col gap-2">
                                {t.raw('research.whyAndHow.issue1.points').map((point, index) => (
                                    <li key={index}>
                                        <p>{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section className="md:hidden w-full flex flex-col gap-4 justify-between">
                            <p className="px-6"><strong>HMW</strong> {t('research.whyAndHow.issue1.hmw')}</p>
                            <div className="w-full pt-4 border-t border-[#BFBFBF]">
                                <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-lg">
                                    {t('research.whyAndHow.issue1.solution')}
                                </p>
                            </div>
                        </section>


                        <h2 className="font-bold md:hidden mt-20 md:mt-0">Issue 2</h2>
                        <section className="w-full grow-1 p-6 -mt-6 md:mt-0 bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">
                            <h2 className="w-full mx-auto text-center font-bold border-b border-[#BFBFBF] pb-4">{t('research.whyAndHow.issue2.title')}</h2>
                            <ul className="list-disc pl-4 pt-6 flex flex-col gap-2">
                                {t.raw('research.whyAndHow.issue2.points').map((point, index) => (
                                    <li key={index}>
                                        <p>{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section className="md:hidden w-full flex flex-col gap-4">
                            <p className="px-6"><strong>HMW</strong> {t('research.whyAndHow.issue2.hmw')}</p>
                            <div className="w-full pt-4 border-t border-[#BFBFBF]">
                                <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-lg">
                                    {t('research.whyAndHow.issue2.solution')}
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="hidden md:flex gap-4 mt-10">
                        <section className="w-full grow-1 flex flex-col gap-4 justify-between">
                            <p className="px-6"><strong>HMW</strong> {t('research.whyAndHow.issue1.hmw')}</p>
                            <div className="w-full pt-4 border-t border-[#BFBFBF]">
                                <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-lg">
                                    {t('research.whyAndHow.issue1.solution')}
                                </p>
                            </div>
                        </section>
                        <section className="w-full flex flex-col gap-4">
                            <p className="px-6"><strong>HMW</strong> {t('research.whyAndHow.issue2.hmw')}</p>
                            <div className="w-full pt-4 border-t border-[#BFBFBF]">
                                <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-lg">
                                    {t('research.whyAndHow.issue2.solution')}
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </section> */}
        </section>
    )
}

const FinalDesign = ({ content }) => {
    const t = useTranslations('Elevate');
    
    const accessibilityScore = [
        {
            key: 1,
            title: t('theSolution.accessibilityScore.scoreDashboard.title'),
            image: content[1].src,
            description: (
                <div className="flex flex-col gap-4">
                    <p>{t('theSolution.accessibilityScore.scoreDashboard.description')}</p>
                    <ul className="list-disc pl-4 font-bold">
                        {t.raw('theSolution.accessibilityScore.scoreDashboard.metrics').map((metric, index) => (
                            <li key={index}><p>{metric}</p></li>
                        ))}
                    </ul>
                    <p>{t('theSolution.accessibilityScore.scoreDashboard.conclusion')}</p>
                </div>
            )
        },
        {
            key: 2,
            title: t('theSolution.accessibilityScore.mainDashboard.title'),
            image: content[0].src,
            description: (
                <div className="flex flex-col gap-4">
                    <p>{t('theSolution.accessibilityScore.mainDashboard.description')}</p>
                </div>
            )
        }
    ];

    const feedbackLoop = [
        {
            key: 1,
            title: t('theSolution.feedbackLoop.productAmbassador.title'),
            image: content[5].src,
            description: (
                <div className="flex flex-col gap-4">
                    <p>{t('theSolution.feedbackLoop.productAmbassador.description1')}</p>
                    <p>{t('theSolution.feedbackLoop.productAmbassador.description2')}</p>
                </div>
            )
        },
        {
            key: 2,
            title: t('theSolution.feedbackLoop.tickets.title'),
            image: content[4].src,
            description: (
                <div className="flex flex-col gap-4">
                    <p>{t('theSolution.feedbackLoop.tickets.description1')}</p>
                    <p>{t('theSolution.feedbackLoop.tickets.description2')}</p>
                </div>
            )
        },
        {
            key: 3,
            title: t('theSolution.feedbackLoop.sprintManager.title'),
            image: content[3].src,
            description: (
                <div className="flex flex-col gap-4">
                    <p>{t('theSolution.feedbackLoop.sprintManager.description1')}</p>
                    <p>{t('theSolution.feedbackLoop.sprintManager.description2')}</p>
                </div>
            )
        },
        {
            key: 4,
            title: t('theSolution.feedbackLoop.roadmap.title'),
            image: content[2].src,
            description: (
                <div className="flex flex-col gap-4">
                    <p>{t('theSolution.feedbackLoop.roadmap.description')}</p>

                    <div className="flex gap-2 text-sm">
                        <section className="w-full flex flex-col gap-2 items-center">
                            <div className="w-full h-4 bg-[#faea8f] rounded-full"></div>
                            <p>{t('theSolution.feedbackLoop.roadmap.stages.ongoing')}</p>
                        </section>
                        <section className="w-full flex flex-col gap-2 items-center">
                            <div className="w-full h-4 bg-[#FECC76] rounded-full"></div>
                            <p>{t('theSolution.feedbackLoop.roadmap.stages.fixed')}</p>
                        </section>
                        <section className="w-full flex flex-col gap-2 items-center">
                            <div className="w-full h-4 bg-[#6691f4] rounded-full"></div>
                            <p>{t('theSolution.feedbackLoop.roadmap.stages.surveySent')}</p>
                        </section>
                        <section className="w-full flex flex-col gap-2 items-center">
                            <div className="w-full h-4 bg-[#a499ec] rounded-full"></div>
                            <p>{t('theSolution.feedbackLoop.roadmap.stages.evaluation')}</p>
                        </section>
                        <section className="w-full flex flex-col gap-2 items-center">
                            <div className="w-full h-4 bg-[#87DEA8] rounded-full"></div>
                            <p>{t('theSolution.feedbackLoop.roadmap.stages.completed')}</p>
                        </section>
                    </div>

                    <p>{t('theSolution.feedbackLoop.roadmap.conclusion')}</p>
                </div>
            )
        },
        {
            key: 5,
            title: t('theSolution.feedbackLoop.survey.title'),
            image: content[6].src,
            description: (
                <div className="flex flex-col gap-4">
                    <p>{t('theSolution.feedbackLoop.survey.description1')}</p>
                    <p>{t('theSolution.feedbackLoop.survey.description2')}</p>
                </div>
            )
        },
    ];

    const Arrow = ({ className, orientation = "vertical" }) => {
        return (
            <div className={`w-full flex ${orientation === 'horizontal' ? 'flex-row' : 'flex-col h-full'} justify-center items-center ${className}`}>
                <div className={`w-4 h-4 border-t-2 border-l-2 border-[#BFBFBF] ${orientation === 'horizontal' ? '-rotate-45' : 'rotate-45'}`}></div>
                <div className={`${orientation === 'horizontal' ? 'w-full h-[2px]' : 'h-full w-[2px]'} bg-[#BFBFBF] ${orientation === 'horizontal' ? '-ml-4' : '-mt-4'}`}></div>
            </div>
        )
    }

    return (
        <section className="flex flex-col gap-24 pb-36 text-sm md:text-base">
            <Title title={t('progressBar.finalDesign')} />

            {/* Accessibility Score */}
            <section className="w-full flex flex-col gap-4 -mt-8">
                <h1 className="text-lg md:text-2xl font-semibold font-oxanium">{t('theSolution.accessibilityScore.title')}</h1>
                <TabGroup content={accessibilityScore} />
            </section>

            {/* Feedback Loop */}
            <section className="w-full flex flex-col gap-4">
                <h1 className="text-lg md:text-2xl font-semibold font-oxanium">{t('theSolution.feedbackLoop.title')}</h1>
                <div className="flex flex-col gap-24">
                    <TabGroup content={feedbackLoop} />
                    {/* Feedback Loop */}
                    <ProjectContent
                        order="reverse"
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-end gap-4">
                                <p>{t('theSolution.feedbackLoop.loop.intro')}</p>
                                <ul className="list-disc pl-4 flex flex-col gap-2">
                                    {t.raw('theSolution.feedbackLoop.loop.benefits').map((benefit, index) => (
                                        <li key={index}><p>{benefit}</p></li>
                                    ))}
                                </ul>
                            </div>
                        }
                        rightChild={
                            <div className="w-full h-[250px] md:h-[330px] lg:h-[400px] flex text-xs md:text-base">
                                <section className="relative w-1/4 h-full flex flex-col gap-4 md:gap-8">
                                    <div className="py-3 md:py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">{t('theSolution.feedbackLoop.loop.flowItems.tickets')}</div>
                                    <Arrow />
                                    <Arrow orientation="horizontal" className={"w-[58%] sm:w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 rotate-180"} />
                                    <div className="py-3 md:py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">{t('theSolution.feedbackLoop.loop.flowItems.surveyResult')}</div>
                                </section>

                                <section className="relative w-1/2 h-full flex flex-col justify-between items-center py-5 px-4 md:px-8">
                                    <Arrow orientation="horizontal" className={"rotate-180"} />
                                    <div className="absolute top-1/2 -translate-y-1/2 p-3 md:p-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg whitespace-nowrap">{t('theSolution.feedbackLoop.loop.flowItems.accessibilityScore')}</div>
                                    <Arrow orientation="horizontal" />
                                </section>

                                <section className="w-1/4 h-full flex flex-col justify-between gap-4 md:gap-8">
                                    <div className="py-3 md:py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">{t('theSolution.feedbackLoop.loop.flowItems.tasks')}</div>
                                    <Arrow className={"rotate-180"} />
                                    <div className="py-3 md:py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">{t('theSolution.feedbackLoop.loop.flowItems.sprints')}</div>
                                    <Arrow className={"rotate-180"} />
                                    <div className="py-3 md:py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-lg">{t('theSolution.feedbackLoop.loop.flowItems.improvement')}</div>
                                </section>
                            </div>
                        }
                    />
                </div>
            </section>
        </section>
    )
}