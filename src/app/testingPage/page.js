import AnimatedLogo from "@/components/animatedLogo";
import ContentWrapper from "@/components/contentWrapper";
import ProjectCover from "@/components/projectCover";
import Footer from "@/components/footer";
import ScrollingCarousel from "@/components/projectPages/scrollingCarousel";

export default function TestingPage() {
    return (
        <ContentWrapper>
            <header className="flex flex-col gap-4 mb-8">
                <div className="text-6xl font-oxanium text-black">Testing</div>
                <div className="w-full h-[2px] bg-gray-700"></div>
            </header>
            {/* Testing Area */}
            <div className="relative group text-black">
                hello
                <div className='absolute bg-black bottom-[1px] left-0 w-full h-[2px]
                      transform scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100'></div>
            </div>
        </ContentWrapper>
    )
}
