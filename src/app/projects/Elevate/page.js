import ContentWrapper from "@/components/contentWrapper";
import ProjectLanding from "@/components/projectPages/projectLanding";
import Footer from "@/components/footer";
import ProgressBar from "@/components/projectPages/progressBar";
import ScrollingImages from "@/components/projectPages/scrollingImages";
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
        title: "Feature Overview",
        items: []
    }, {
        title: "Research",
        items: ["The Problem", "Primary Research", "Why & How"]
    }, {
        title: "The Solution",
        items: ["Accessibility Score", "Feedback Loop"]
    }
];

function Title({ title }) {
    return (
        <h1 className="w-full text-3xl font-oxanium border-b border-current pb-2">
            {title}
        </h1>
    )
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
                            More than 2/3 of the people we interviewed stress the importance of ongoing accessibility collaboration and feedback, but resource constraints and sensitivity concerns frequently limit this process to just the initial interactions.
                        </p>
                        <div className="flex flex-col lg:flex-row gap-4 pt-4 border-t border-[#BFBFBF]">
                            <div className="w-full h-full p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                “It's a missed opportunity, really, that we don't get to do more of that type of stuff (accessibility audits). Because I think in general we would learn a lot more by doing it regularly.”
                            </div>
                            <div className="w-full grow-1 p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                “To better understand and accommodate my needs, ongoing dialogue is essential. “
                            </div>

                        </div>
                    </div>
                    {/* insight 2 */}
                    <div className="w-full sm:w-4/5 h-fit mx-auto flex flex-col gap-8 justify-center items-center">
                        <h2 className="font-bold">Insight 2</h2>
                        <p className="w-5/6 lg:w-2/3">
                            While experts emphasize leadership-driven accessibility and team-wide disability awareness, only 36% of companies have secured genuine top-down commitment to digital accessibility.
                        </p>
                        <div className="flex flex-col lg:flex-row  gap-4 pt-4 border-t border-[#BFBFBF]">
                            <div className="w-full h-full p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                “When leadership is involved, it empowers everyone to be more considerate and proactive, making sure accessibility isn't just an afterthought.”
                            </div>
                            <div className="w-full grow-1 p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                “When leadership prioritizes accessibility, it sets the tone for the entire organization.”
                            </div>
                            <div className="w-full grow-1 p-6 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                “It's empowering when professionals view me as a partner in the process of enhancing accessibility, acknowledging the expertise.”
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
                        <section className="w-full grow-1 p-6 -mt-6 md:mt-0 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                            <h2 className="w-full mx-auto text-center font-bold border-b border-[#BFBFBF] pb-4">Lack of ongoing collaboration</h2>
                            <ul className="list-disc pl-4 pt-6">
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
                                <p className="w-full p-6 font-oxanium font-bold text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                    A CONTINUOUS FEEDBACK LOOP
                                </p>
                            </div>
                        </section>

                        {/* Issue 2 */}
                        <h2 className="font-bold md:hidden mt-20 md:mt-0">Issue 2</h2>
                        <section className="w-full h-fit p-6 -mt-6 md:mt-0 bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                            <h2 className="w-full mx-auto text-center font-bold border-b border-[#BFBFBF] pb-4">Accessibility is never the priority</h2>
                            <ul className="list-disc pl-4 pt-6">
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
                                <p className="w-full p-6 font-oxanium font-bold text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                    ACCESSIBILITY SCORE
                                </p>
                            </div>
                        </section>
                    </div>
                    {/* desktop excess */}
                    <div className="hidden md:flex gap-4 mt-10">
                        <section className="w-full flex flex-col gap-4">
                            <p className="px-6"><strong>HMW</strong> support design teams and individuals with disabilities in building sustainable, strengthening relationships throughout the product lifecycle?</p>
                            <div className="w-full pt-4 border-t border-[#BFBFBF]">
                                <p className="w-full p-6 font-oxanium font-bold text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                    A CONTINUOUS FEEDBACK LOOP
                                </p>
                            </div>
                        </section>
                        <section className="w-full grow-1 flex flex-col gap-4 justify-between">
                            <p className="px-6"><strong>HMW</strong> make accessibility impact measurable and visible to both product teams and the public to drive awareness of its importance?</p>
                            <div className="w-full pt-4 border-t border-[#BFBFBF]">
                                <p className="w-full p-6 font-oxanium font-bold text-center bg-[#F2EFE7] border border-[#BFBFBF] rounded-2xl">
                                    ACCESSIBILITY SCORE
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
    return (
        <section className="flex flex-col gap-36 md:px-16">
            <Title title="The Solution" />
        </section>
    )
}

export default function Elevate() {
    return (
        <ContentWrapper>
            <main className="flex flex-col gap-10 pb-12 text-black font-oxanium">
                <ProjectLanding
                    title="Elevate"
                    tags={["User Research", "Market Research", "User Testing"]}
                    description="Elevate is a data-driven platform that bridges the gap between product teams and users with disabilities through a dynamic accessibility scoring system, transforming traditional compliance-based testing into continuous, actionable feedback that drives both business value and meaningful inclusion."
                    images1={cover}
                />
                <ProgressBar bgColor="#EDEAE3" content={progressBarContent} />
                <div className="flex flex-col gap-36">
                    {/* Feature Overview */}
                    <FeatureOverview />
                    {/* Research */}
                    <Research />
                    {/* The Solution */}
                    <TheSolution />
                </div>
            </main>
            <Footer />
        </ContentWrapper>
    );
}
