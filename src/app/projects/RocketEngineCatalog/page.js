import ContentWrapper from "@/components/contentWrapper";
import ProjectLanding from "@/components/projectPages/projectLanding";
import Footer from "@/components/footer";
import ProgressBar from "@/components/projectPages/progressBar";
import ProjectContent from "@/components/projectPages/projectContent";
import Image from "next/image";

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

const mobileImages = [
    "/images/Rocket/Mobile/HomeMobile.png",
    "/images/Rocket/Mobile/LandingMobile.png",
    "/images/Rocket/Mobile/LandingMobile1.png",
    "/images/Rocket/Mobile/LandingMobile2.png",
    "/images/Rocket/Mobile/LandingMobile3.png",
    "/images/Rocket/Mobile/LandingMobile4.png",
    "/images/Rocket/Mobile/LandingMobile5.png",
    "/images/Rocket/Mobile/LandingMobile6.png",
    "/images/Rocket/Mobile/LandingMobile7.png",
    "/images/Rocket/Mobile/DetailsMobile.png",
];

//Progress Bar Content
const content = [{
    title: "Design/Prototype",
    items: ["Engine Factory", "Fabrication Shop", "Hanger Bay", "Future Plans", "Mobile Gallery"]
}, {
    title: "Research",
    items: ["The Database", "User Archetypes", "Visual Language"]
}];


export default function RocketEngineCatalog() {

    return (
        <ContentWrapper bgColor="#181818" borderColor="#565F68">
            <main className="relative flex flex-col gap-10">
                <ProjectLanding
                    textColor="#EAEAEA"
                    title="Rocket Engine Catalog"
                    tags={["Visual Development", "Interaction Design"]}
                    description="This project focuses on designing a user-friendly interface for a rocket engine database, making complex technical information engaging and digestible for the general public.
                The interface features a clear visual style and intuitive flow, inviting users to play, explore, and discover different engine types, specifications, and components."
                    images1={desktopImages}
                    images2={mobileImages}
                />
                <ProgressBar bgColor="#2E2E2E" content={content} />
                {/* Design */}
                <div className="flex flex-col gap-48 pt-16 text-sm md:text-base">
                    {/* Engine Factory */}
                    <ProjectContent
                        leftChild={
                            <div className="h-full flex flex-col gap-10 justify-between">
                                <section className="flex flex-col gap-2">
                                    <h2 className="text-4xl">ENGINE FACTORY</h2>
                                    <div className="border-l px-4">Home Page</div>

                                </section>
                                <section className="flex flex-col gap-4">
                                    <div className="font-bold">PAGE HIERARCHY</div>
                                    <div>
                                        <div className="w-80 flex gap-2 items-baseline">
                                            <p>Home Page</p>
                                            <div className="flex-1 border-b border-dashed"></div>
                                            <p>Engine Factory</p>
                                        </div>
                                        <div className="w-80 flex gap-2 items-baseline">
                                            <p>Landing Page</p>
                                            <div className="flex-1 border-b border-dashed"></div>
                                            <p>Fabrication Shop</p>
                                        </div>
                                        <div className="w-80 flex gap-2 items-baseline">
                                            <p>Details Page</p>
                                            <div className="flex-1 border-b border-dashed"></div>
                                            <p>Hanger Bay</p>
                                        </div>
                                        <p>(For training, refer to future plans)</p>
                                    </div>
                                    <p>Home page is the central hub that leads to other levels</p>
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
                                    <h2 className="text-4xl">FABRICATION SHOP</h2>
                                    <div className="border-l px-4">Landing Page</div>
                                </section>
                                <section className="flex flex-col gap-4">
                                    <p>This is the start of where users can “build their own engine”, and then select existing engines based on their decisions.</p>
                                    <div className="border-l px-4">Why “Build your engine”<br />
                                        Why not just an organized table, or filters?</div>
                                    <p>Throughout ideation and testing, users struggled to grasp the website's purpose at first glance. By presenting it as an interactive engine factory where users can customize builds, the concept becomes more intuitive and allows natural exploration of of these complicated concepts.</p>
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
                                    <h2 className="">Part 1 - Building the engine</h2>
                                </section>
                                <section className="flex flex-col gap-4">
                                    <p>Users can start from either one of the three main options that makes up a rocket engine.</p>
                                    <p>The interface will then guide the user to complete all three before continuing to further customizations.</p>
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
                                    <p>After all three has been selected, the user will be shown a summary of all their selections and further configure their engine.</p>
                                    <p>After they are happy with their build, they can proceed to the selection area.</p>
                                    <p>The user can also select "Reconfigure" option to return to summary page and modify configuration.</p>
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
                                <source src={VIDEO_SOURCES.landing3.src} type={VIDEO_SOURCES.home.type} />
                                Your browser does not support the video tag.
                            </video>
                        }
                    />
                    {/* Part 2 - Selecting your engine */}
                    <ProjectContent
                        order="reverse"
                        leftChild={
                            <div className="h-full flex flex-col gap-10 justify-between">
                                <section className="flex flex-col gap-2">
                                    <h2 className="">Part 2 - Selecting your engine</h2>
                                </section>

                                <section className="flex flex-col gap-4">
                                    <p>Based on the user's selected configuration, the system will display a list of existing engines that match their requirements.</p>
                                    <p>Once the user has identified an engine they are interested in, they can proceed to the Hangar Bay (Details Page) to view more information about that specific engine.</p>

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
                                    <h2 className="text-4xl">HANGER BAY</h2>
                                    <div className="border-l px-4">Details Page</div>
                                </section>

                                <section className="flex flex-col gap-4">
                                    <p>Selections the user have made that lead to this result</p>
                                    <p>More detailed information about the engine, as well as the rocket it serves</p>
                                    <p>Upcoming launches of this engine</p>
                                    <p>Featured engines that leads you to other parts of the Hanger Bay.</p>
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
                                    <h2 className="text-4xl">FUTURE PLANS</h2>
                                    <div className="border-l px-4">Hanger Bay</div>
                                </section>

                                <section className="flex flex-col gap-4">
                                    <p>In my plan, Hanger Bay is like a library, but for rocket engines. That is why all the details of any engine leads you to this page.</p>
                                    <div>
                                        <p>But it does not have to be just a boring library. It could include - </p>
                                        <ul className="list-disc pl-4">
                                            <li>Engine I built</li>
                                            <li>Featured engines</li>
                                            <li>Community</li>
                                            <li>And more!</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>}
                        rightChild={
                            <Image src="/images/Rocket/Content/FuturePlan1.png" alt="Future Plans" width={960} height={540} />
                        }
                    />
                    {/* Future Plans */}
                    <ProjectContent
                        order="reverse"
                        leftChild={
                            <div className="h-full flex flex-col gap-10 justify-between">
                                <section className="flex flex-col gap-2">
                                    <div className="border-l px-4">Training</div>
                                </section>

                                <section className="flex flex-col gap-4">
                                    <p>Training is an area on the map that provides users with additional information on more complicated concepts when they become interested in these topics after using the site.</p>
                                    <div className="w-52 -mb-3 -ml-px">
                                        <Image src="/images/Rocket/Content/FuturePlan2-1.png" alt="Future Plans" width={960} height={540} />
                                    </div>
                                    <p>Progression system that incentivize users to do these trainings and be more educated on rocket engines and how they work</p>

                                </section>

                            </div>}
                        rightChild={
                            <Image src="/images/Rocket/Content/FuturePlan2.png" alt="Future Plans" width={960} height={540} />

                        }
                    />
                    {/* Mobile Gallery */}
                    <ProjectContent
                        leftChild={
                            <div className="h-full flex flex-col gap-[350px]">
                                <section className="flex flex-col gap-2">
                                    <h2 className="text-4xl">MOBILE GALLERY</h2>
                                </section>

                                <section className="flex flex-col gap-4">
                                    <div>
                                        <p>Special considerations for mobile - </p>
                                        <ul className="list-disc pl-4">
                                            <li>Horizontal {'--->'} Vertical</li>
                                            <li>Hamburger for basic navigation</li>
                                            <li>Swipe support for switching between parts of the build</li>
                                            <li>And more!</li>
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
                                        Home
                                    </div>
                                    <div className="flex-1">
                                        <Image src="/images/Rocket/Mobile/LandingMobile.png"
                                            alt="Mobile Home"
                                            width={250}
                                            height={520}
                                            className="object-contain w-full" />
                                        Landing
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
                                        Configuring your engine ---{'>'}
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
                                            Summary
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
                                            Selecting your engine
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
                                            Details
                                    </div>
                                </section>
                            </div>
                        }
                    />
                </div>
                {/* Research */}
                <div className="flex flex-col gap-48"></div>
                <Footer color="#EAEAEA" backgroundColor="#181818" />
            </main>
        </ContentWrapper>
    )
}
