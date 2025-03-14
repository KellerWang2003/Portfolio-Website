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


        </ContentWrapper>

    )
}
