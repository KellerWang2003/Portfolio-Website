"use client";
import { useContext, useState, useEffect } from 'react';
import { MenuContext } from './layoutWrapper';

export default function ContentWrapper({ children, bgColor = "#F7F4EC", borderColor = "#6E6E6E" }) {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
    const [startY, setStartY] = useState(0);
    const [currentY, setCurrentY] = useState(0);

    const handleTouchStart = (event) => {
        if (!isMenuOpen) return;
        setStartY(event.targetTouches[0].clientY);
        setCurrentY(event.targetTouches[0].clientY);
    };

    const handleTouchMove = (event) => {
        if (!isMenuOpen) return;
        setCurrentY(event.targetTouches[0].clientY);
        
        // Check for swipe up while moving
        if (startY - event.targetTouches[0].clientY > 50) {
            console.log('Swipe up detected, closing menu');
            setIsMenuOpen(false);
            // Reset values
            setStartY(0);
            setCurrentY(0);
        }
    };

    // We can keep touch end for cleanup
    const handleTouchEnd = () => {
        if (!isMenuOpen) return;
        setStartY(0);
        setCurrentY(0);
    };

    return (
        <div style={{ backgroundColor: bgColor, borderColor: borderColor }} 
             className={`flex-1 w-full rounded-xl overflow-scroll hide-scrollbar
                        border p-3 md:p-8`}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}
        >
            {children}
        </div>
    );
}