"use client"
import ContentWrapper from "@/components/contentWrapper";
import ProjectLanding from "@/components/projectPages/projectLanding";
import Footer from "@/components/footer";
import ProgressBar from "@/components/projectPages/progressBar";
import ScrollingImages from "@/components/projectPages/scrollingImages";
import ProjectContent from "@/components/projectPages/projectContent";
import SectionWrapper from "@/components/projectPages/sectionWrapper";
import Title from "@/components/projectPages/title";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import Image from "next/image";

const cover = "/images/Elevate/elevateCoverFull.png";

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

const progressBarContent = [
    {
        key: 1,
        title: "Feature Overview",
        items: []
    }, {
        key: 2,
        title: "Research",
        items: ["The Problem", "Primary Research", "Why & How"]
    }, {
        key: 3,
        title: "The Solution",
        items: ["Accessibility Score", "Feedback Loop"]
    }
];

export default function Elevate() {
    const { currentSection, handleSectionInView } = useScrollProgress(1);

    return (
        <ContentWrapper>
            <main className="flex flex-col gap-10 pb-12 text-black font-oxanium">
                <ProjectLanding
                    title="Elevate"
                    tags={["User Research", "Market Research", "User Testing"]}
                    description="Elevate is a data-driven platform that bridges the gap between product teams and users with disabilities through a dynamic accessibility scoring system, transforming traditional compliance-based testing into continuous, actionable feedback that drives both business value and meaningful inclusion."
                    images1={cover}
                />
                <ProgressBar 
                    bgColor="#EDEAE3" 
                    content={progressBarContent} 
                    currentStep={currentSection}
                />
                {/* Only render SectionWrappers on desktop */}
                <div className="hidden md:flex flex-col gap-36">
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
                {/* Always render content on mobile */}
                <div className="md:hidden flex flex-col gap-36">
                    <FeatureOverview />
                    <Research />
                    <TheSolution />
                </div>
            </main>
            <Footer />
        </ContentWrapper>
    );
}

const FeatureOverview = () => {
    return (
        <section className="flex flex-col gap-10 md:px-16">
            <div className="h-[65dvh] md:w-2/3 mx-auto text-center text-xl md:text-3xl font-oxanium grid place-items-center">
                <h1>
                    <span>Create</span>
                    <span className="text-blue-500"> a continuous feedback loop </span>
                    <span>where user experiences shape accessibility scores and drive better design.</span>
                </h1>
            </div>
            <Title title="Feature Overview" />
            <ScrollingImages content={content} />
            <div className="h-[65dvh] md:w-2/3 mx-auto text-center text-xl md:text-3xl font-oxanium grid place-items-center">
                <h1>
                    But... <br />
                    What is this accessibility score and feedback loop? <br />
                    How does it work? <br />
                    And why do we need it?
                </h1>
            </div>
        </section>
    )
}

const Research = () => {
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
        <section className="flex flex-col gap-36 md:px-16 text-sm md:text-base">
            <Title title="Research" />

            {/* The Problem */}
            <section className="w-full flex flex-col gap-10 -mt-24">
                <h1 className="text-3xl font-oxanium">The Problem</h1>
                <div className="flex flex-col gap-4">
                    <p className="w-full lg:w-1/2">
                        Despite our best effort in trying to improve accessibility practices, users with disabilities continue to face barriers that compliance alone fails to address.
                    </p>
                    <div className="w-full h-[750px] md:h-[400px] flex flex-col md:flex-row p-6
                     bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                        <section className="relative w-full h-full">
                            <h1 className="mx-auto w-fit font-oxanium font-bold">The good</h1>
                            <Pill className=" sm:right-[18%] top-[60px] sm:top-[80px]" content="guidelines & technical standards (WCAG)" />
                            <Pill className="left-[8%] top-[120px] sm:top-[140px]" content="accessibility training" />
                            <Pill className="right-[5%] sm:right-[10%] top-[180px] sm:top-[190px]" content="accessibility audits" />
                            <Pill className="left-[18%] top-[240px]" content="assistive technologies" />
                        </section>
                        <div className="w-full md:w-px h-px md:h-full bg-[#BFBFBF]"></div>
                        <section className="relative w-full h-full flex pt-6 md:pt-0">
                            <h1 className="mx-auto w-fit font-oxanium font-bold">The not so good</h1>
                            <Pill className="sm:left-[15%] top-[70px]" content="disability awareness" />
                            <Pill className="right-0 sm:right-[25%] top-[130px]" content="lack of ongoing collaboration" />
                            <Pill className="left-[10%] top-[250px]" content="leadership prioritization" />
                            <Pill className="right-[8%] top-[190px]" content="subject sensitivety" />
                            <Pill className="right-[25%] top-[310px]" content="unintentional barriers" />
                        </section>
                    </div>
                </div>
            </section>

            {/* Primary Research */}
            <section className="w-full flex flex-col gap-10">
                <h1 className="text-3xl font-oxanium">Primary Research</h1>
                <div className="flex flex-col gap-24 lg:gap-64">
                    <p className="w-full lg:w-1/2">
                        We interviewed 4 industry professionals, 2 caretakers, and 3 from the users perspective using synthetic users, and here is what we have learned.
                    </p>
                    {/* insight1 */}
                    <div className="w-full sm:w-4/5 h-fit mx-auto flex flex-col gap-8 justify-center items-center">
                        <h2 className="font-bold">Insight 1</h2>
                        <p className="w-5/6 lg:w-2/3">
                            More than 2/3 of the people we interviewed stress the importance of <strong> ongoing accessibility collaboration and feedback </strong>, but resource constraints and sensitivity concerns frequently limit this process to <strong> just the initial interactions </strong>.
                        </p>
                        <div className="flex flex-col lg:flex-row gap-4 pt-4 border-t border-[#BFBFBF]">
                            <div className="w-full h-full p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                "It's a missed opportunity, really, that we don't get to do more of that type of stuff (accessibility audits). Because I think in general we would learn a lot more by doing it regularly."
                            </div>
                            <div className="w-full grow-1 p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                "To better understand and accommodate my needs, ongoing dialogue is essential."
                            </div>

                        </div>
                    </div>
                    {/* insight 2 */}
                    <div className="w-full sm:w-4/5 h-fit mx-auto flex flex-col gap-8 justify-center items-center">
                        <h2 className="font-bold">Insight 2</h2>
                        <p className="w-5/6 lg:w-2/3">
                            While experts emphasize <strong> leadership-driven accessibility </strong> and <strong> team-wide disability awareness </strong>, only 36% of companies have secured genuine top-down commitment to digital accessibility.
                        </p>
                        <div className="flex flex-col lg:flex-row  gap-4 pt-4 border-t border-[#BFBFBF]">
                            <div className="w-full h-full p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                "When leadership is involved, it empowers everyone to be more considerate and proactive, making sure accessibility isn't just an afterthought."
                            </div>
                            <div className="w-full grow-1 p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                "When leadership prioritizes accessibility, it sets the tone for the entire organization."
                            </div>
                            <div className="w-full grow-1 p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                "It's empowering when professionals view me as a partner in the process of enhancing accessibility, acknowledging the expertise."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why & How */}
            <section className="w-full flex flex-col gap-10">
                <h1 className="text-3xl font-oxanium">Why & How</h1>
                <div className="flex flex-col gap-4">
                    <p className="w-full lg:w-1/2 hidden md:block">
                        Basically it comes down to these two issues:
                    </p>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-4">

                        {/* Issue 1 */}
                        <h2 className="font-bold md:hidden">Issue 1</h2>
                        <section className="w-full h-fit p-6 -mt-6 md:mt-0 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                            <h2 className="w-full mx-auto text-center font-bold border-b border-[#BFBFBF] pb-4">Lack of accessibility awareness</h2>
                            <ul className="list-disc pl-4 pt-6 flex flex-col gap-2">
                                <li>
                                    <p>
                                        Functionality of a product always comes first
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Low accessibility awareness from both product leaders and the design team
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Misconception that accessibility features only benefit a small percentage of users
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        False belief that accessibility can be "added later" rather than built from the start
                                    </p>
                                </li>
                            </ul>
                        </section>
                        <section className="md:hidden w-full flex flex-col gap-4 justify-between">
                            <p className="px-6"><strong>HMW</strong> make accessibility impact measurable and visible to both product teams and the public to drive awareness of its importance?</p>
                            <div className="w-full pt-4 border-t border-[#BFBFBF]">
                                <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-2xl">
                                    ACCESSIBILITY SCORE
                                </p>
                            </div>
                        </section>

                        {/* Issue 2 */}
                        <h2 className="font-bold md:hidden mt-20 md:mt-0">Issue 2</h2>
                        <section className="w-full grow-1 p-6 -mt-6 md:mt-0 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                            <h2 className="w-full mx-auto text-center font-bold border-b border-[#BFBFBF] pb-4">Lack of ongoing collaboration</h2>
                            <ul className="list-disc pl-4 pt-6 flex flex-col gap-2">
                                <li>
                                    <p>
                                        Difficult to find the means and resources
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Subject sensitivity
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Unintentional barriers between the design team and individuals with disabilities
                                    </p>
                                </li>
                            </ul>
                        </section>
                        <section className="md:hidden w-full flex flex-col gap-4">
                            <p className="px-6"><strong>HMW</strong> support design teams and individuals with disabilities in building sustainable, strengthening relationships throughout the product lifecycle?</p>
                            <div className="w-full pt-4 border-t border-[#BFBFBF]">
                                <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-2xl">
                                    A CONTINUOUS FEEDBACK LOOP
                                </p>
                            </div>
                        </section>


                    </div>
                    {/* desktop excess */}
                    <div className="hidden md:flex gap-4 mt-10">
                        <section className="w-full grow-1 flex flex-col gap-4 justify-between">
                            <p className="px-6"><strong>HMW</strong> make accessibility impact measurable and visible to both product teams and the public to drive awareness of its importance?</p>
                            <div className="w-full pt-4 border-t border-[#BFBFBF]">
                                <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-2xl">
                                    ACCESSIBILITY SCORE
                                </p>
                            </div>
                        </section>
                        <section className="w-full flex flex-col gap-4">
                            <p className="px-6"><strong>HMW</strong> support design teams and individuals with disabilities in building sustainable, strengthening relationships throughout the product lifecycle?</p>
                            <div className="w-full pt-4 border-t border-[#BFBFBF]">
                                <p className="w-full p-6 font-oxanium text-center bg-[#383838] text-white rounded-2xl">
                                    A CONTINUOUS FEEDBACK LOOP
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

    const Arrow = ({ className, orientation = "vertical" }) => {
        return (
            <div className={`w-full flex ${orientation === 'horizontal' ? 'flex-row' : 'flex-col h-full'} justify-center items-center ${className}`}>
                <div className={`w-4 h-4 border-t-2 border-l-2 border-[#BFBFBF] ${orientation === 'horizontal' ? '-rotate-45' : 'rotate-45'}`}></div>
                <div className={`${orientation === 'horizontal' ? 'w-full h-[2px]' : 'h-full w-[2px]'} bg-[#BFBFBF] ${orientation === 'horizontal' ? '-ml-4' : '-mt-4'}`}></div>
            </div>
        )
    }

    return (
        <section className="flex flex-col gap-36 md:px-16 pb-36 text-sm md:text-base">
            <Title title="The Solution" />

            {/* Accessibility Score */}
            <section className="w-full flex flex-col gap-10 -mt-24">
                <h1 className="text-3xl font-oxanium">Accessibility Score</h1>
                <div className="flex flex-col gap-32">
                    <ProjectContent
                        order=""
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-between gap-4">
                                <h2 className="font-bold ">Score Dashboard</h2>
                                <div className="flex flex-col gap-4">
                                    <p>The accessibility score dashboard displays a comprehensive score derived from three preliminary metrics:</p>
                                    <ul className="list-disc pl-4 font-bold">
                                        <li>
                                            <p>
                                                Active Improvements
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                User Feedback
                                            </p>
                                        </li>
                                        <li>
                                            <p>User Engagement</p>
                                        </li>

                                    </ul>
                                    <p >( Measuring methods will be explained in the next section )</p>
                                    <p>The combination of these metrics provides a holistic measure of a product's accessibility performance.</p>
                                </div>
                            </div>
                        }
                        rightChild={
                            <Image src="/images/Elevate/Screen/AccessibilityScore.png" alt="Accessibility Score" width={1440} height={1024} className="border border-[#BFBFBF] rounded-md md:rounded-2xl" />
                        }
                    />
                    <ProjectContent
                        order=""
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-between gap-4">
                                <h2 className="font-bold ">Main Dashboard</h2>
                                <div className="flex flex-col gap-4">
                                    <p>The <strong>"Embed Score"</strong> feature allows teams to showcase their accessibility commitment across platforms, raising public awareness while celebrating inclusive design.</p>
                                </div>
                            </div>
                        }
                        rightChild={
                            <Image src="/images/Elevate/Screen/Dashboard.png" alt="Accessibility Score" width={1440} height={1024} className="border border-[#BFBFBF] rounded-md md:rounded-2xl" />
                        }
                    />
                </div>
            </section>

            {/* Feedback Loop */}
            <section className="w-full flex flex-col gap-10">
                <h1 className="text-3xl font-oxanium">The Feedback Loop</h1>
                <div className="flex flex-col gap-32">
                    {/* Product Ambassador */}
                    <ProjectContent
                        order="reverse"
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-between gap-4">
                                <h2 className="font-bold ">Product Ambassador</h2>
                                <div className="flex flex-col gap-4">
                                    <p>The platform maintains a network of Product Ambassadors - primarily users with disabilities, but open to all users who can provide valuable accessibility feedback</p>
                                    <p>The method of becoming a product ambassador will be a separate design initiative.</p>
                                </div>

                            </div>
                        }
                        rightChild={
                            <Image src="/images/Elevate/Screen/ProductAmbassador.png" alt="Accessibility Score" width={1440} height={1024} className="border border-[#BFBFBF] rounded-md md:rounded-2xl" />
                        }
                    />

                    {/* Tickets */}
                    <ProjectContent
                        order="reverse"
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-between gap-4">
                                <h2 className="font-bold ">Tickets</h2>
                                <div className="flex flex-col gap-4">
                                    <p>The Tickets Dashboard tracks all incoming accessibility improvement requests. </p>
                                    <p>While Product Ambassadors form our core testing network providing regular, consistent feedback, any user can submit tickets to enhance product accessibility.</p>
                                </div>

                            </div>
                        }
                        rightChild={
                            <Image src="/images/Elevate/Screen/Tickets1.png" alt="Accessibility Score" width={1440} height={1024} className="border border-[#BFBFBF] rounded-md md:rounded-2xl" />
                        }
                    />

                    {/* Sprint Manager */}
                    <ProjectContent
                        order="reverse"
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-between gap-4">
                                <h2 className="font-bold ">Sprint Manager</h2>
                                <div className="flex flex-col gap-4">
                                    <p>Tickets transform into tasks, and fall under a sprint, with potential Jira API integration to streamline workflow.  </p>
                                    <p>
                                        However, these specialized sprints uniquely measure both task completion and user-verified accessibility impact.</p>
                                </div>

                            </div>
                        }
                        rightChild={
                            <Image src="/images/Elevate/Screen/Sprint.png" alt="Accessibility Score" width={1440} height={1024} className="border border-[#BFBFBF] rounded-md md:rounded-2xl" />
                        }
                    />

                    {/* Roadmap */}
                    <ProjectContent
                        order="reverse"
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-between gap-4">
                                <h2 className="font-bold ">Roadmap</h2>
                                <div className="flex flex-col gap-8">
                                    <p>Elavate sprints extend beyond traditional completion through five key stages:</p>

                                    <div className="flex gap-2 text-sm">
                                        <section className="w-full flex flex-col gap-2 items-center">
                                            <div className="w-full h-4 bg-[#faea8f] rounded-full"></div>
                                            <p>Ongoing</p>
                                        </section>
                                        <section className="w-full flex flex-col gap-2 items-center">
                                            <div className="w-full h-4 bg-[#FECC76] rounded-full"></div>
                                            <p>Fixed</p>
                                        </section>
                                        <section className="w-full flex flex-col gap-2 items-center">
                                            <div className="w-full h-4 bg-[#6691f4] rounded-full"></div>
                                            <p>Survey Sent</p>
                                        </section>
                                        <section className="w-full flex flex-col gap-2 items-center">
                                            <div className="w-full h-4 bg-[#a499ec] rounded-full"></div>
                                            <p>Evaluation</p>
                                        </section>
                                        <section className="w-full flex flex-col gap-2 items-center">
                                            <div className="w-full h-4 bg-[#87DEA8] rounded-full"></div>
                                            <p>Completed</p>
                                        </section>
                                    </div>

                                    <p>After changes are implemented, affected users receive surveys to assess the improvements. Their feedback not only updates the product's accessibility score but can also generate new improvement tickets - <strong>creating a continuous cycle where each solution's effectiveness is verified and refined by actual user experience.</strong></p>
                                </div>

                            </div>
                        }
                        rightChild={
                            <Image src="/images/Elevate/Screen/Roadmap2.png" alt="Accessibility Score" width={1440} height={1024} className="border border-[#BFBFBF] rounded-md md:rounded-2xl" />
                        }
                    />

                    {/* Survey */}
                    <ProjectContent
                        order="reverse"
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-between gap-4">
                                <h2 className="font-bold ">Survey</h2>
                                <div className="flex flex-col gap-4">
                                    <p>The Survey Dashboard displays active sprints and prompts available actions.</p>
                                    <p>Positive responses enhance the product's accessibility score, while all feedback contributes to continuous improvement through potential new tickets.</p>
                                </div>

                            </div>
                        }
                        rightChild={
                            <Image src="/images/Elevate/Screen/Survey.png" alt="Accessibility Score" width={1440} height={1024} className="border border-[#BFBFBF] rounded-md md:rounded-2xl" />
                        }
                    />

                    {/* Feedback Loop */}
                    <ProjectContent
                        order="reverse"
                        leftChild={
                            <div className="w-full h-full flex flex-col justify-end gap-4">
                                <p>In this way, a feedback loop is created</p>
                                <ul className="list-disc pl-4 flex flex-col gap-2">
                                    <li>
                                        <p>
                                            Forms sustainable connections between product teams and users, breaking down communication barriers
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Enables teams to adapt to evolving user needs through continuous validation
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Bridges the gap between technical compliance and real user experience
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Transforms sporadic accessibility testing into continuous improvement
                                        </p>
                                    </li>
                                </ul>

                            </div>
                        }
                        rightChild={
                            <div className="w-full h-[330px] lg:h-[400px] flex text-xs md:text-base">

                                <section className="w-1/4 h-full flex flex-col gap-8">
                                    <div className=" py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">Tickets</div>
                                    <Arrow />
                                    <div className=" py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">Survey Result</div>
                                </section>

                                <section className="relative w-1/2 h-full flex flex-col justify-between items-center py-5 px-8">
                                    <Arrow orientation="horizontal" />
                                    <div className="absolute top-1/2 -translate-y-1/2 p-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl whitespace-nowrap">Accessibility Score</div>
                                    <Arrow orientation="horizontal" />
                                </section>

                                <section className="w-1/4 h-full flex flex-col justify-between gap-8">
                                    <div className=" py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">Tasks</div>
                                    <Arrow className={ "rotate-180" } />
                                    <div className=" py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">Sprints</div>
                                    <Arrow className={ "rotate-180" } />
                                    <div className=" py-4 text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">Improvement</div>
                                </section>
                            </div>
                        }
                    />
                </div>
            </section>
        </section>
    )
}


