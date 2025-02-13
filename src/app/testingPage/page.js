'use client'
import AnimatedLogo from "@/components/animatedLogo";
import ContentWrapper from "@/components/contentWrapper";
import ProjectCover from "@/components/projectCover";
import Footer from "@/components/footer";
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from "react";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";

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

    const [isOpen, setOpen] = useState(false)
    return (
        <ContentWrapper>
            <header className="flex flex-col gap-4 mb-8">
                <div className="text-6xl font-oxanium text-black">Testing</div>
                <div className="w-full h-[2px] bg-gray-700"></div>
            </header>
            {/* Testing Area */}
            <TiltedCard
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={30}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                    <p className="text-black px-8 pt-8">
                        Kendrick Lamar - GNX
                    </p>
                }
            />
        </ContentWrapper>







    )
}
