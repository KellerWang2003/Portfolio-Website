"use client";

import { motion } from "framer-motion";

export default function FadeInAnimation({ children, isFirst }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFirst ? { opacity: 1, y: 0 } : undefined}
            whileInView={!isFirst ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
}