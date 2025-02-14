"use client"
import AnimatedLink from "./animatedLink"

export default function Footer({ color = "black" }) {
    return (
        <footer className="w-full flex flex-col gap-3 md:-mb-2" style={{ color: color }}>
            {/* line */}
            <div className="w-full h-px" style={{ backgroundColor: color }}></div>
            {/* text */}
            <div className="w-full flex justify-between">
                {/* left */}
                <AnimatedLink 
                    href="https://github.com/KellerWang2003/Portfolio-Website"
                    color={color}
                >
                    Designed & Developed by Keller Wang
                </AnimatedLink>
                {/* right */}
                <div className="text-base font-oxanium hidden md:block">© 2025 All rights reserved.</div>
            </div>
        </footer>
    )
}