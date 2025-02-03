"use client"
import { motion } from "framer-motion"

export default function AnimatedUnderline({ lineColor, children }) {
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

    return (
        <motion.div className="relative overflow-hidden"
            initial="initial"
            whileHover="hover"
            animate="exit">
            {children}
            <motion.div
                className="absolute bottom-px left-0 w-full h-px"
                style={{ backgroundColor: lineColor }}
                variants={underlineVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            ></motion.div>
        </motion.div>
    )
}