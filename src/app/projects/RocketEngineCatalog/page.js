import ContentWrapper from "@/components/contentWrapper";
import ProjectLanding from "@/components/projectPages/projectLanding";
import Footer from "@/components/footer";
import ProgressBar from "@/components/projectPages/progressBar";
import ProjectContent from "@/components/projectPages/projectContent";

export default function RocketEngineCatalog() {
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

    const content = [{
        title: "Design/Prototype",
        items: ["Engine Factory", "Fabrication Shop", "Hanger Bay"]
    }, {
        title: "Research",
        items: ["The Database", "User Archetypes", "Visual Language"]
    }, {
        title: "Design/Prototype",
        items: ["Engine Factory", "Fabrication Shop", "Hanger Bay"]
    }, {
        title: "Research",
        items: ["The Database", "User Archetypes", "Visual Language"]
    }];

    return (
        <ContentWrapper bgColor="#181818" borderColor="#565F68">
            <main className="relative flex flex-col gap-8">
                <ProjectLanding
                    textColor="#EAEAEA"
                    title="Rocket Engine Catalog"
                    tags={["Visual Development", "Interaction Design"]}
                    description="This project focuses on designing a user-friendly interface for a rocket engine database, making complex technical information engaging and digestible for the general public.
                The interface features a clear visual style and intuitive flow, inviting users to play, explore, and discover different engine types, specifications, and components."
                    images1={desktopImages}
                    images2={mobileImages}
                />
                <div className="flex flex-col gap-12">
                    <ProgressBar bgColor="#262626" content={content} />
                    <ProjectContent />
                    <ProjectContent />
                </div>
                <Footer color="#EAEAEA" backgroundColor="#181818" />
            </main>
        </ContentWrapper>
    )
}
