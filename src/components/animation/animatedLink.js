"use client"
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

export default function AnimatedLink({ href, children, color = "black" }) {
    return (
        <motion.a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex gap-2 items-center"
            initial="initial"
            whileHover="hover"
            animate="exit"
            data-cursor="hoverSmall"
        >
            {/* text */}
            <section className="relative text-sm md:text-base font-oxanium">
                {children}
            </section>
            {/* svg */}
            <section className="w-5 h-5 border rounded flex items-center justify-center relative overflow-hidden"
                style={{ borderColor: color }}>
                {/* <motion.div
                    className="absolute inset-0"
                    variants={slideVariants}
                    transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    style={{ backgroundColor: color }}
                ></motion.div> */}
                <svg className="relative z-10"
                    width="10" height="10" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9039 11.7764L12 0.1875C9.09727 0.215672 3.3138 0.255443 0.410993 0.283615L0.387154 1.73443C2.99805 1.70878 6.46412 1.68749 9.51328 1.65983L0 11.1729L1.01457 12.1875L10.5278 2.67435L10.4453 11.7925L11.9039 11.7764Z" />
                </svg>
            </section>
        </motion.a>
    )
} 