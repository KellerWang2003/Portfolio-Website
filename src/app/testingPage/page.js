import AnimatedLogo from "@/components/animatedLogo";
import ContentWrapper from "@/components/contentWrapper";
import ProjectCover from "@/components/projectCover";
import Footer from "@/components/footer";
import ScrollingCarousel from "@/components/projectPages/scrollingCarousel";

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


export default function TestingPage() {
    return (
        <ContentWrapper>
            <header className="flex flex-col gap-4 mb-8">
                <div className="text-6xl font-oxanium text-black">Testing</div>
                <div className="w-full h-[2px] bg-gray-700"></div>
            </header>
            {/* Testing Area */}
        </ContentWrapper>







    )
}
