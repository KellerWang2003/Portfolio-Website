"use client"
import ProgressBar from "@/components/projectPages/progressBar";
import ScrollingImages from "@/components/projectPages/scrollingImages";
import ProjectContent from "@/components/projectPages/projectContent";
import SectionWrapper from "@/components/projectPages/sectionWrapper";
import Title from "@/components/projectPages/title";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import TabGroup from "@/components/projectPages/tabGroup";
const content = [
    {
        key: 1,
        title: "Dashboard",
        src: "/images/Elevate/Screen/Dashboard.png"
    },
    {
        key: 2,
        title: "Accessibility Score",
        src: "/images/Elevate/Screen/AccessibilityScore.png"
    },
    {
        key: 3,
        title: "Roadmap",
        src: "/images/Elevate/Screen/Roadmap2.png"
    },
    {
        key: 4,
        title: "Sprint Manager",
        src: "/images/Elevate/Screen/Sprint.png"
    },
    {
        key: 5,
        title: "Tickets",
        src: "/images/Elevate/Screen/Tickets1.png"
    },
    {
        key: 6,
        title: "Product Ambassador",
        src: "/images/Elevate/Screen/ProductAmbassador.png"
    },
    {
        key: 7,
        title: "Survey",
        src: "/images/Elevate/Screen/Survey.png"
    }
];

export default function Content() {
    const { currentSection, handleSectionInView } = useScrollProgress(1);
    const t = useTranslations('Elevate');

    const progressBarContent = [
        {
            key: 1,
            title: t('progressBar.featureOverview'),
            items: []
        }, {
            key: 2,
            title: t('progressBar.research'),
            items: [
                t('progressBar.researchItems.theProblem'),
                t('progressBar.researchItems.primaryResearch'),
                t('progressBar.researchItems.whyAndHow')
            ]
        }, {
            key: 3,
            title: t('progressBar.theSolution'),
            items: [
                t('progressBar.solutionItems.accessibilityScore'),
                t('progressBar.solutionItems.feedbackLoop')
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
            <div className="flex flex-col gap-36">
                <SectionWrapper sectionKey={1} onSectionInView={handleSectionInView}>
                    <FeatureOverview />
                </SectionWrapper>
                <SectionWrapper sectionKey={2} onSectionInView={handleSectionInView}>
                    <Research />
                </SectionWrapper>
                <SectionWrapper sectionKey={3} onSectionInView={handleSectionInView}>
                    <TheSolution />
                </SectionWrapper>
            </div>
        </>
    )
}

const FeatureOverview = () => {
    const t = useTranslations('Elevate');

    return (
        <section className="flex flex-col gap-10 md:px-12">
            <div className="h-[65dvh] md:w-2/3 mx-auto text-center text-xl md:text-3xl font-oxanium grid place-items-center">
                <h1>
                    <span>{t('featureOverview.intro.part1')}</span>
                    <span className="text-blue-500"> {t('featureOverview.intro.part2')} </span>
                    <span>{t('featureOverview.intro.part3')}</span>
                </h1>
            </div>
            <Title title={t('featureOverview.title')} />
            <ScrollingImages content={content} />
            <div className="h-[65dvh] md:w-2/3 mx-auto text-center text-xl md:text-3xl font-oxanium grid place-items-center">
                <h1>
                    {t('featureOverview.questions.intro')} <br />
                    {t('featureOverview.questions.question1')} <br />
                    {t('featureOverview.questions.question2')} <br />
                    {t('featureOverview.questions.question3')}
                </h1>
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
        <section className="flex flex-col gap-36 md:px-12 text-sm md:text-base">
            <Title title={t('research.title')} />

            {/* The Problem */}
            <section className="w-full flex flex-col gap-10 -mt-24">
                <h1 className="text-3xl font-oxanium">{t('research.theProblem.title')}</h1>
                <div className="flex flex-col gap-4">
                    <p className="w-full lg:w-1/2">
                        {t('research.theProblem.description')}
                    </p>
                    <div className="w-full h-[750px] md:h-[400px] flex flex-col md:flex-row p-6
                     bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
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
            </section>

            {/* Primary Research */}
            <section className="w-full flex flex-col gap-10">
                <h1 className="text-3xl font-oxanium">{t('research.primaryResearch.title')}</h1>
                <div className="flex flex-col gap-24 lg:gap-36">
                    <p className="w-full lg:w-1/2">
                        {t('research.primaryResearch.description')}
                    </p>
                    {/* insight1 */}
                    <div className="w-full sm:w-4/5 h-fit mx-auto flex flex-col gap-8 justify-center items-center">
                        <h2 className="font-bold">{t('research.primaryResearch.insight1.title')}</h2>
                        <p className="w-5/6 lg:w-2/3">
                            {t.rich('research.primaryResearch.insight1.description', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </p>
                        <div className="flex flex-col lg:flex-row gap-4 pt-4 border-t border-[#BFBFBF]">
                            <div className="w-full h-full p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                "{t('research.primaryResearch.insight1.quote1')}"
                            </div>
                            <div className="w-full grow-1 p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                "{t('research.primaryResearch.insight1.quote2')}"
                            </div>
                        </div>
                    </div>
                    {/* insight 2 */}
                    <div className="w-full sm:w-4/5 h-fit mx-auto flex flex-col gap-8 justify-center items-center">
                        <h2 className="font-bold">{t('research.primaryResearch.insight2.title')}</h2>
                        <p className="w-5/6 lg:w-2/3">
                            {t.rich('research.primaryResearch.insight2.description', {
                                strong: (chunks) => <strong>{chunks}</strong>
                            })}
                        </p>
                        <div className="flex flex-col lg:flex-row gap-4 pt-4 border-t border-[#BFBFBF]">
                            <div className="w-full h-full p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                "{t('research.primaryResearch.insight2.quote1')}"
                            </div>
                            <div className="w-full grow-1 p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                "{t('research.primaryResearch.insight2.quote2')}"
                            </div>
                            <div className="w-full grow-1 p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                "{t('research.primaryResearch.insight2.quote3')}"
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why & How */}
            <section className="w-full flex flex-col gap-10">
                <h1 className="text-3xl font-oxanium">{t('research.whyAndHow.title')}</h1>
                <div className="flex flex-col gap-4">
                    <p className="w-full lg:w-1/2 hidden md:block">
                        {t('research.whyAndHow.intro')}
                    </p>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-4">

                        {/* Issue 1 */}
                        <h2 className="font-bold md:hidden">Issue 1</h2>
                        <section className="w-full h-fit p-6 -mt-6 md:mt-0 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
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
                                <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-2xl">
                                    {t('research.whyAndHow.issue1.solution')}
                                </p>
                            </div>
                        </section>

                        {/* Issue 2 */}
                        <h2 className="font-bold md:hidden mt-20 md:mt-0">Issue 2</h2>
                        <section className="w-full grow-1 p-6 -mt-6 md:mt-0 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
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
                                <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-2xl">
                                    {t('research.whyAndHow.issue2.solution')}
                                </p>
                            </div>
                        </section>
                    </div>
                    {/* desktop excess */}
                    <div className="hidden md:flex gap-4 mt-10">
                        <section className="w-full grow-1 flex flex-col gap-4 justify-between">
                            <p className="px-6"><strong>HMW</strong> {t('research.whyAndHow.issue1.hmw')}</p>
                            <div className="w-full pt-4 border-t border-[#BFBFBF]">
                                <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-2xl">
                                    {t('research.whyAndHow.issue1.solution')}
                                </p>
                            </div>
                        </section>
                        <section className="w-full flex flex-col gap-4">
                            <p className="px-6"><strong>HMW</strong> {t('research.whyAndHow.issue2.hmw')}</p>
                            <div className="w-full pt-4 border-t border-[#BFBFBF]">
                                <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-2xl">
                                    {t('research.whyAndHow.issue2.solution')}
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </section>
    )
}

const TheSolution = () => {
    const t = useTranslations('Elevate');

    const accessibilityScore = [
        {
            key: 1,
            title: "Score Dashboard",
            image: content[1].src,
            description: (
                <div className="flex flex-col gap-4">
                    <p>{t('theSolution.accessibilityScore.scoreDashboard.description')}</p>
                    <ul className="list-disc pl-4 font-bold">
                        {t.raw('theSolution.accessibilityScore.scoreDashboard.metrics').map((metric, index) => (
                            <li key={index}>
                                <p>{metric}</p>
                            </li>
                        ))}
                    </ul>
                    <p>{t('theSolution.accessibilityScore.scoreDashboard.conclusion')}</p>
                </div>
            )
        },
        {
            key: 2,
            title: "Main Dashboard",
            image: content[0].src,
            description: (
                <div className="flex flex-col gap-4">
                    <p>{t.rich('theSolution.accessibilityScore.mainDashboard.description', {
                        strong: (chunks) => <strong>{chunks}</strong>
                    })}</p>
                </div>
            )
        }
    ];

    const feedbackLoop = [
        {
            key: 1,
            title: "Product Ambassador",
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
            title: "Tickets",
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
            title: "Sprint Manager",
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
            title: "Roadmap",
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

                    <p>{t.rich('theSolution.feedbackLoop.roadmap.conclusion', {
                        strong: (chunks) => <strong>{chunks}</strong>
                    })}</p>
                </div>
            )
        },
        {
            key: 5,
            title: "Survey",
            image: content[6].src,
            description: (
                <div className="flex flex-col gap-4">
                    <p>{t('theSolution.feedbackLoop.survey.description1')}</p>
                    <p>{t('theSolution.feedbackLoop.survey.description2')}</p>
                </div>
            )
        },

    ]

    const Arrow = ({ className, orientation = "vertical" }) => {
        return (
            <div className={`w-full flex ${orientation === 'horizontal' ? 'flex-row' : 'flex-col h-full'} justify-center items-center ${className}`}>
                <div className={`w-4 h-4 border-t-2 border-l-2 border-[#BFBFBF] ${orientation === 'horizontal' ? '-rotate-45' : 'rotate-45'}`}></div>
                <div className={`${orientation === 'horizontal' ? 'w-full h-[2px]' : 'h-full w-[2px]'} bg-[#BFBFBF] ${orientation === 'horizontal' ? '-ml-4' : '-mt-4'}`}></div>
            </div>
        )
    }

    return (
        <section className="flex flex-col gap-36 lg:px-12 pb-36 text-sm md:text-base">
            <Title title={t('theSolution.title')} />

            {/* Accessibility Score */}
            <section className="w-full flex flex-col gap-4 -mt-24">
                <h1 className="text-2xl lg:text-3xl font-oxanium">{t('theSolution.accessibilityScore.title')}</h1>
                <TabGroup content={accessibilityScore} />
            </section>

            {/* Feedback Loop */}
            <section className="w-full flex flex-col gap-4 ">
                <h1 className="text-2xl lg:text-3xl font-oxanium">{t('theSolution.feedbackLoop.title')}</h1>
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
                                        <li key={index}>
                                            <p>{benefit}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                        rightChild={
                            <div className="w-full h-[250px] md:h-[330px] lg:h-[400px] flex text-xs md:text-base">
                                <section className="relative w-1/4 h-full flex flex-col gap-4 md:gap-8">
                                    <div className="py-3 md:py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">{t('theSolution.feedbackLoop.loop.flowItems.tickets')}</div>
                                    <Arrow />
                                    <Arrow orientation="horizontal" className={"w-[58%] sm:w-[80%] absolute top-1/2 -translate-y-1/2 left-1/2 rotate-180"} />
                                    <div className="py-3 md:py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">{t('theSolution.feedbackLoop.loop.flowItems.surveyResult')}</div>
                                </section>

                                <section className="relative w-1/2 h-full flex flex-col justify-between items-center py-5 px-4 md:px-8">
                                    <Arrow orientation="horizontal" className={"rotate-180"} />
                                    <div className="absolute top-1/2 -translate-y-1/2 p-3 md:p-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl whitespace-nowrap">{t('theSolution.feedbackLoop.loop.flowItems.accessibilityScore')}</div>
                                    <Arrow orientation="horizontal" />
                                </section>

                                <section className="w-1/4 h-full flex flex-col justify-between gap-4 md:gap-8">
                                    <div className="py-3 md:py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">{t('theSolution.feedbackLoop.loop.flowItems.tasks')}</div>
                                    <Arrow className={"rotate-180"} />
                                    <div className="py-3 md:py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">{t('theSolution.feedbackLoop.loop.flowItems.sprints')}</div>
                                    <Arrow className={"rotate-180"} />
                                    <div className="py-3 md:py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">{t('theSolution.feedbackLoop.loop.flowItems.improvement')}</div>
                                </section>
                            </div>
                        }
                    />
                </div>
            </section>
        </section>
    )
}