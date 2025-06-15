'use client'
import ContentWrapper from "@/components/contentWrapper";
import { useState } from "react";

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
