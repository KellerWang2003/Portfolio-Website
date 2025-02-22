'use client'
import AnimatedLogo from "@/components/homeLanding";
import ContentWrapper from "@/components/contentWrapper";
import ProjectCover from "@/components/projectCover";
import Footer from "@/components/footer";
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from "react";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import Image from "next/image";
import ScrollingImages from "@/components/projectPages/scrollingImages";


export default function TestingPage() {

    const [isOpen, setOpen] = useState(false)
    return (
        <ContentWrapper>
            <header className="flex flex-col gap-4 mb-8">
                <div className="text-6xl font-oxanium text-black">Testing</div>
                <div className="w-full h-[2px] bg-gray-700"></div>
            </header>
            {/* Testing Area */}
            <div className="h-[65dvh] w-2/3 mx-auto text-center text-3xl font-oxanium grid place-items-center text-black">
                <h1>
                    <span>Create</span>
                    <span className="text-blue-500"> a continuous feedback loop </span>
                    <span>where user experiences shape accessibility scores and drive better design.</span>
                </h1>
            </div>
            <ScrollingImages />
            <div className="h-[65dvh] w-2/3 mx-auto text-center text-3xl font-oxanium grid place-items-center">
                <h1>
                    But... <br />
                    What is this feedback loop and accessibility score? <br />
                    How does it work? <br />
                    And why do we need it?
                </h1>
            </div>
            <Footer />
        </ContentWrapper>

    )
}
