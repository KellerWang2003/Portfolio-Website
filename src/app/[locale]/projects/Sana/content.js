"use client"
import ProgressBar from "@/components/projectPages/progressBar";
import ProjectContent from "@/components/projectPages/projectContent";
import SectionWrapper from "@/components/projectPages/sectionWrapper";
import Title from "@/components/projectPages/title";
import { useScrollProgress } from "@/hooks/useScrollProgress";

function SubTitle({ title }) {
    return (
        <h1 className="text-lg md:text-2xl font-semibold font-oxanium">
            {title}
        </h1>
    )
}

function Box({ children, className }) {
    return (
        <div className={`w-full bg-backgroundSecondary border border-[#BFBFBF] rounded-lg p-6 ${className}`}>
            {children}
        </div>
    )
}

export default function Content() {
    const { currentSection, handleSectionInView } = useScrollProgress(1);

    const progressBarContent = [
        {
            key: 1,
            title: "Context",
            items: [
                "The Problem",
                "Early Concepts"
            ]
        }, {
            key: 2,
            title: "Features",
            items: [
                "Schedule & Tasks",
                "Patient Management",
                "Resources & AI"
            ]
        }, {
            key: 3,
            title: "Workflow",
            items: [
                "Communication Strategies"
            ]
        }, {
            key: 4,
            title: "Reflection",
            items: [
                "Reflection & Next Steps"
            ]
        }
    ];

    return (
        <>
            <ProgressBar
                bgColor="#F3F2EE"
                content={progressBarContent}
                currentStep={currentSection}
                onSectionClick={(sectionKey) => {
                    const targetSection = document.querySelector(`[data-section="${sectionKey}"]`);
                    targetSection?.scrollIntoView({ behavior: 'smooth' });
                }}
            />
            <div className="flex flex-col gap-36 md:px-12">
                <SectionWrapper sectionKey={1} onSectionInView={handleSectionInView}>
                    <ContextSection />
                </SectionWrapper>
                <SectionWrapper sectionKey={2} onSectionInView={handleSectionInView}>
                    <FeaturesSection />
                </SectionWrapper>
                <SectionWrapper sectionKey={3} onSectionInView={handleSectionInView}>
                    <WorkflowSection />
                </SectionWrapper>
                <SectionWrapper sectionKey={4} onSectionInView={handleSectionInView}>
                    <ReflectionSection />
                </SectionWrapper>
            </div>
        </>
    )
}

const ContextSection = () => {
    return (
        <section className="flex flex-col gap-36 pt-16 md:pt-48">
            <div className="flex flex-col gap-36 md:gap-48">
                <ProjectContent
                    leftChild={
                        <SubTitle title="The Insight & Problem" />
                    }
                    rightChild={
                        <h1 className="w-full text-sm md:text-lg font-oxanium leading-normal bg-backgroundSecondary rounded-lg border border-[#BFBFBF] p-6 -mt-4 lg:mt-0">
                            <span>Only 51% of navigators feel they are sufficiently trained, leaving many to learn complex communication and resource-coordination skills on the job without structured, interprofessional training. </span>
                            <span className="text-[#2590DC]">This lack of role clarity and support, combined with heavy administrative and informational burdens, leaves navigators overextended, with less capacity for patient connection and trust-building.</span>
                        </h1>
                    }
                />

                <ProjectContent
                    leftChild={
                        <SubTitle title="Early Concepts" />
                    }
                    rightChild={
                        <div className="w-full flex flex-col gap-4">
                            <Box>
                                <h3 className="font-bold mb-2">AI Knowledge Assistant</h3>
                                <p>Accurate, patient-appropriate cancer information.</p>
                            </Box>
                            <Box>
                                <h3 className="font-bold mb-2">AI Cultural Companion</h3>
                                <p>Culturally sensitive tone and framing.</p>
                            </Box>
                            <Box>
                                <h3 className="font-bold mb-2">Workflow & Admin Support</h3>
                                <p>Reduced documentation and follow-up burden.</p>
                            </Box>
                        </div>
                    }
                />
            </div>
        </section>
    )
}

const FeaturesSection = () => {
    return (
        <section className="flex flex-col gap-36 text-sm md:text-base">
            <Title title="Platform Features" />

            <section className="w-full flex flex-col gap-4">
                <SubTitle title="Schedule & Tasks" />
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-1/2">
                        <img src="/images/Sana/media/image-16-1.png" alt="Schedule" className="w-full h-auto rounded-lg border border-[#BFBFBF]" />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                        <p><strong>A clear, at-a-glance view of appointments, follow-ups, and daily priorities,</strong> so navigators can stay organized and focused on care, not coordination.</p>
                        <p><strong>Sana suggested:</strong> Context-aware task suggestions based on navigator calendar and patient activity.</p>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col gap-4">
                <SubTitle title="Patient Management" />
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col lg:flex-row-reverse gap-8">
                        <div className="w-full lg:w-1/2">
                            <img src="/images/Sana/media/image-19-1.png" alt="Population" className="w-full h-auto rounded-lg border border-[#BFBFBF]" />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                            <h3 className="font-bold text-lg">Population Overview</h3>
                            <p>A high-level view of the entire patient population, grouped by status. Helps navigators quickly understand screening progress across all patients.</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-1/2">
                            <img src="/images/Sana/media/image-20-1.png" alt="Patients" className="w-full h-auto rounded-lg border border-[#BFBFBF]" />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                            <h3 className="font-bold text-lg">Patients who need attention</h3>
                            <p>Navigators often manage large patient lists, making it difficult to quickly spot who needs urgent follow-up. This view surfaces high-priority patients at a glance, so attention goes where it's needed most.</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row-reverse gap-8">
                        <div className="w-full lg:w-1/2">
                            <img src="/images/Sana/media/image-21-1.png" alt="Profile" className="w-full h-auto rounded-lg border border-[#BFBFBF]" />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                            <h3 className="font-bold text-lg">Patient Profile</h3>
                            <ul className="list-disc pl-4 space-y-2">
                                <li>Record of patient "preference" and context based on past interactions and navigator notes.</li>
                                <li>Sana suggested tasks based on patient context.</li>
                                <li>Patient context persists across navigator handoffs.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col gap-4">
                <SubTitle title="Resources & Sana AI" />
                <div className="flex flex-col gap-12">
                    <ProjectContent
                        leftChild={
                            <div className="flex flex-col gap-4">
                                <h3 className="font-bold text-lg">This week in cancer information</h3>
                                <p>Weekly, AI-curated highlights of key cancer-related updates. Helps navigators stay current while minimizing cognitive load.</p>
                                <p><strong>Sana assisted:</strong> Highlight any text → Ask Sana for clarification, context, or plain-language explanation.</p>
                            </div>
                        }
                        rightChild={
                            <img src="/images/Sana/media/image-23-1.png" alt="News" className="w-full rounded-lg border border-[#BFBFBF]" />
                        }
                    />

                    <ProjectContent
                        order="reverse"
                        leftChild={
                            <div className="flex flex-col gap-4">
                                <h3 className="font-bold text-lg">Chatbot & Patient Context</h3>
                                <p>Navigators can ask in natural language to search any cancer information or questions.</p>
                                <p>Navigators need guidance that reflects a patient's situation, but sharing full records can compromise privacy and trust. By allowing limited, optional context, Sana improves relevance while keeping sensitive information controlled by the navigator.</p>
                                <p><strong>Patient ID unlinked:</strong> By removing patient identifiers by default, it protects privacy (HIPAA compliant) and reinforces trust in AI-assisted workflows.</p>
                            </div>
                        }
                        rightChild={
                            <img src="/images/Sana/media/image-26-1.png" alt="AI Chat" className="w-full rounded-lg border border-[#BFBFBF]" />
                        }
                    />
                </div>
            </section>
        </section>
    )
}

const WorkflowSection = () => {
    return (
        <section className="flex flex-col gap-24 pb-12 text-sm md:text-base">
            <Title title="Communication Strategies" />

            <section className="w-full flex flex-col gap-4 -mt-8">
                <SubTitle title="The Workflow Problem" />
                <div className="flex flex-col gap-4">
                    <p className="font-bold px-6 py-4 bg-backgroundSecondary border border-[#BFBFBF] rounded-lg">
                        How might we support navigator outreach so that patients feel remembered, supported, and confident about next steps — while navigators feel prepared, organized, and able to follow through consistently?
                    </p>
                    <div className="w-full bg-backgroundSecondary border border-[#BFBFBF] rounded-lg p-6">
                        <ul className="list-disc pl-4 space-y-2">
                            <li>Navigators move quickly from one conversation to the next.</li>
                            <li>Critical details live in memory or scattered notes.</li>
                            <li>Human memory doesn't scale across many patients.</li>
                            <li>Important context can be lost between interactions.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col gap-4">
                <SubTitle title="AI Assisted Call Workflow" />
                <img src="/images/Sana/media/image-31-1.png" alt="Call Flow" className="w-full object-contain max-h-[600px] border border-[#BFBFBF] rounded-lg" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <Box>
                        <h3 className="font-bold mb-2">Before the call</h3>
                        <p>Basic Patient data + Contextual data. Preparing with AI Assist.</p>
                    </Box>
                    <Box>
                        <h3 className="font-bold mb-2">During the call</h3>
                        <p>Call Context + Patient Context + Supporting information = Tailored support for patient.</p>
                    </Box>
                    <Box>
                        <h3 className="font-bold mb-2">Staying present</h3>
                        <p>Navigators can stay fully present instead of multitasking.</p>
                    </Box>
                    <Box>
                        <h3 className="font-bold mb-2">After the call</h3>
                        <p>Outreach insights + Semi-automated workflow + Adding patient context = Reducing administrative burden.</p>
                    </Box>
                </div>
            </section>
        </section>
    )
}

const ReflectionSection = () => {
    return (
        <section className="flex flex-col gap-24 pb-36 text-sm md:text-base">
            <Title title="Reflection & Next Steps" />

            <div className="flex flex-col md:flex-row gap-8 w-full -mt-8">
                <div className="w-full bg-backgroundSecondary border border-[#BFBFBF] rounded-lg p-6 flex-1">
                    <h2 className="text-xl font-oxanium font-bold mb-4">Reflection</h2>
                    <ul className="list-disc pl-4 space-y-4">
                        <li>Positioning AI as a tool that augments, rather than replaces, navigator expertise.</li>
                        <li>People build confidence in AI when it reflects their lived experience and community context.</li>
                    </ul>
                </div>

                <div className="w-full bg-backgroundSecondary border border-[#2590DC] rounded-lg p-6 flex-1">
                    <h2 className="text-xl font-oxanium font-bold mb-4 text-[#2590DC]">Next Steps</h2>
                    <ol className="list-decimal pl-4 space-y-2">
                        <li>Test usefulness of Sana's responses in real scenarios.</li>
                        <li>Develop our AI persona and brand identity further.</li>
                        <li>Validate the design through workflow-based testing with navigators.</li>
                    </ol>
                </div>
            </div>

            <img src="/images/Sana/media/image-40-1.png" alt="Overall Platform" className="w-full h-auto rounded-lg border border-[#BFBFBF] shadow-sm" />
        </section>
    )
}
