"use client";

import { motion } from "framer-motion";

export default function FadeInAnimation({ children, isFirst, delay, className = "" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFirst ? { opacity: 1, y: 0 } : undefined}
            whileInView={!isFirst ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
                duration: 0.6, 
                ease: [0.4, 0, 0.2, 1],
                delay: delay !== undefined ? delay : (isFirst ? 1.25 : delay) 
            }}
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    );
}