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
                {/* Feature Overview */}
                <FeatureOverview />

            </main>
            <Footer />
        </ContentWrapper>
    );
}
