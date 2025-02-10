"use client"
import AnimatedUnderline from "./animatedUnderline"
import { motion } from "framer-motion"

const slideVariants = {
    initial: {
        x: "-100%",
        y: "100%"
    },
    hover: {
        x: 0,
        y: 0,
    },
}

const underlineVariants = {
        initial: { 
            scaleX: 0,
            transformOrigin: "left" 
        },
        hover: { 
            scaleX: 1,
            transformOrigin: "left"
        },
        exit: {
            scaleX: 0,
            transformOrigin: "right"
        }
    }

export default function Footer({ color = "black", backgroundColor = "#F7F4EC" }) {
    return (
        <footer className="w-full flex flex-col gap-3 md:-mb-2" style={{ color: color }}>
            {/* line */}
            <div className="w-full h-px" style={{ backgroundColor: color }}></div>
            {/* text */}
            <div className="w-full flex justify-between">
                {/* left */}
                <motion.a href="https://github.com/KellerWang2003/Portfolio-Website" target="_blank" rel="noopener noreferrer"
                    className="group flex gap-2 items-center cursor-pointer"
                    initial="initial"
                    whileHover="hover"
                    animate="exit">
                    {/* text */}
                    <section className="relative text-sm md:text-base font-oxanium">
                        <div>Designed & Developed  by Keller Wang</div>
                        <motion.div
                            className="absolute bottom-[2px] left-0 w-full h-[1px]"
                            style={{ backgroundColor: color }}
                            variants={underlineVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                        >
                        </motion.div>
                    </section>
                    {/* svg */}
                    <section className="w-5 h-5 border rounded flex items-center justify-center relative overflow-hidden"
                        style={{ borderColor: color }}>
                        <motion.div
                            className="absolute inset-0"
                            variants={slideVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                                delay: 0.2
                            }}
                            style={{ backgroundColor: color }}
                        ></motion.div>
                        <svg className="group-hover:[filter:invert(100%)] relative z-10 transition-all duration-300 delay-300"
                            width="10" height="10" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9039 11.7764L12 0.1875C9.09727 0.215672 3.3138 0.255443 0.410993 0.283615L0.387154 1.73443C2.99805 1.70878 6.46412 1.68749 9.51328 1.65983L0 11.1729L1.01457 12.1875L10.5278 2.67435L10.4453 11.7925L11.9039 11.7764Z" />
                        </svg>
                    </section>
                </motion.a>
                {/* right */}
                <div className="text-base font-oxanium hidden md:block">© 2025 All rights reserved.</div>
            </div >
        </footer >
    )
}