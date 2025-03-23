"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/cursorContext';
import { useCursorHover } from '@/hooks/useCursorHover';

const cursorVariants = {
    default: {
        width: 16,
        height: 16,
        x: -8,
        y: -8,
    },
    hover: {
        width: 120,
        height: 120,
        x: -60,
        y: -60,
    },
    hoverSmall: {
        width: 40,
        height: 40,
        x: -20,
        y: -20,
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
    const rafId = useRef(null);
    const lastMousePosition = useRef({ x: 0, y: 0 });
    
    useCursorHover();

    const updateMousePosition = useCallback(() => {
        if (rafId.current) {
            cancelAnimationFrame(rafId.current);
        }

        rafId.current = requestAnimationFrame(() => {
            setMousePosition(lastMousePosition.current);
            rafId.current = null;
        });
    }, []);

    const handleMouseMove = useCallback((e) => {
        lastMousePosition.current = {
            x: e.clientX,
            y: e.clientY
        };
        window.mouseX = e.clientX;
        window.mouseY = e.clientY;
        updateMousePosition();
    }, [updateMousePosition]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(hover: hover)');
        setHasMouseDevice(mediaQuery.matches);

        const updateHasMouseDevice = (e) => {
            setHasMouseDevice(e.matches);
        };

        mediaQuery.addEventListener('change', updateHasMouseDevice);

        if (mediaQuery.matches) {
            window.addEventListener('mousemove', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                mediaQuery.removeEventListener('change', updateHasMouseDevice);
                if (rafId.current) {
                    cancelAnimationFrame(rafId.current);
                }
            };
        }

        return () => {
            mediaQuery.removeEventListener('change', updateHasMouseDevice);
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, [handleMouseMove]);

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
                stiffness: 200,
                mass: 0.5 // Added for smoother movement
            }}
            style={{
                left: mousePosition.x,
                top: mousePosition.y,
                border: '1px solid rgba(0,0,0)',
                backgroundColor: 'rgba(128, 128, 128, 0.1)', // Neutral gray with transparency
                backdropFilter: 'invert(1)', // Full inversion for contrast with background
                filter: 'contrast(1)', // Slightly reduce contrast to prevent harshness
                willChange: 'transform' // Optimize for animations
            }}
        >
            {(cursorVariant === "hover" || cursorVariant === "hoverSmall") && (
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