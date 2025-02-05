import ContentWrapper from "@/components/contentWrapper";
import ProjectLanding from "@/components/projectPages/projectLanding";
import Footer from "@/components/footer";
import ProgressBar from "@/components/projectPages/progressBar";
import ProjectContent from "@/components/projectPages/projectContent";
import Image from "next/image";

const VIDEO_SOURCES = {
    home: {
        src: "/images/Rocket/Videos/VideoHome.mp4",
        type: "video/mp4"
    },
    landing1: {
        src: "/images/Rocket/Videos/VideoLanding1.mp4",
        type: "video/mp4"
    },
    landing2: {
        src: "/images/Rocket/Videos/VideoLanding2.mp4",
        type: "video/mp4"
    },
    landing3: {
        src: "/images/Rocket/Videos/VideoLanding3.mp4",
        type: "video/mp4"
    },
    landing4: {
        src: "/images/Rocket/Videos/VideoLanding4.mp4",
        type: "video/mp4"
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
    "/images/Rocket/Mobile/DetailsMobile.png",
];

//Progress Bar Content
const content = [{
    title: "Design/Prototype",
    items: ["Engine Factory", "Fabrication Shop", "Hanger Bay", "Future Plan"]
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
                <ProgressBar bgColor="#262626" content={content} />
                <div className="flex flex-col gap-48 pt-16">
                    {/* Engine Factory */}
                    <ProjectContent
                        leftChild={
                            <div className="h-full flex flex-col justify-between">
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
                        leftChild={
                            <div className="h-full flex flex-col justify-between">
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
                        leftChild={
                            <div className="h-full flex flex-col justify-between">
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
                        leftChild={
                            <div className="h-full flex flex-col justify-between">
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
                        leftChild={
                            <div className="h-full flex flex-col justify-between">
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
                </div>
                <Footer color="#EAEAEA" backgroundColor="#181818" />
            </main>
        </ContentWrapper>
    )
}
