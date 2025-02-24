import { useState, useCallback, useRef } from 'react';

export function useScrollProgress(initialSection = 1) {
    const [currentSection, setCurrentSection] = useState(initialSection);
    const lastUpdateRef = useRef(0);
    const THROTTLE_MS = 100; // 100ms throttle for scroll updates

    const handleSectionInView = useCallback((sectionKey) => {
        // Prevent duplicate section updates
        if (currentSection === sectionKey) return;

        const now = Date.now();
        if (now - lastUpdateRef.current >= THROTTLE_MS) {
            setCurrentSection(sectionKey);
            lastUpdateRef.current = now;
        }
    }, [currentSection]);

    return {
        currentSection,
        handleSectionInView
    };
} 