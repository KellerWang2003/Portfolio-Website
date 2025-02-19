"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/cursorContext';

const cursorVariants = {
    default: {
        width: 16,
        height: 16,
        x: -8,
        y: -8,
    },
    hover: {
        width: 96,
        height: 96,
        x: -48,
        y: -48,
    }
    // Add more variants as needed
};


export default function Cursor({ backgroundColor }) {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    const [hasMouseDevice, setHasMouseDevice] = useState(false);
    const { cursorVariant, cursorText } = useCursor();

    useEffect(() => {
        // Check if the device has hover capability
        const mediaQuery = window.matchMedia('(hover: hover)');
        setHasMouseDevice(mediaQuery.matches);

        const updateHasMouseDevice = (e) => {
            setHasMouseDevice(e.matches);
        };

        mediaQuery.addEventListener('change', updateHasMouseDevice);

        // Only add mousemove listener if device has mouse
        if (mediaQuery.matches) {
            const mouseMove = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                });
            };

            window.addEventListener('mousemove', mouseMove);
            return () => {
                window.removeEventListener('mousemove', mouseMove);
                mediaQuery.removeEventListener('change', updateHasMouseDevice);
            };
        }

        return () => {
            mediaQuery.removeEventListener('change', updateHasMouseDevice);
        };
    }, []);

    if (!hasMouseDevice) return null;

    return (
        <motion.div
            className="fixed rounded-full z-50 pointer-events-none
                flex items-center justify-center"
            variants={cursorVariants}
            animate={cursorVariant}
            initial={false}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 200
            }}
            style={{
                left: mousePosition.x,
                top: mousePosition.y,
                border: '1px solid rgba(0,0,0)',
                backgroundColor: 'rgba(128, 128, 128, 0.1)', // Neutral gray with transparency
                backdropFilter: 'invert(1)', // Full inversion for contrast with background
                filter: 'contrast(1)', // Slightly reduce contrast to prevent harshness
            }}
        >
            {cursorVariant === "hover" && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="font-bold font-oxanium text-xs select-none text-center text-white"
                >
                    {cursorText}
                </motion.span>
            )}
        </motion.div>
    );
} 