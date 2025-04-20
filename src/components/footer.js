"use client"
import AnimatedLink from "./animation/animatedLink"

export default function Footer({ color = "black" }) {
    return (
        <footer className="w-full flex justify-between md:-mb-2 pt-3 border-t" style={{ borderColor: color }}>
                {/* left */}
                <AnimatedLink 
                    href="https://github.com/KellerWang2003/Portfolio-Website"
                    color={color}
                >
                    Designed & Developed by Keller Wang
                </AnimatedLink>
                {/* right */}
                <div className="text-base font-oxanium hidden md:block">© 2025 All rights reserved.</div>
        </footer>
    )
}