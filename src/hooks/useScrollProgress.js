import { useState, useCallback } from 'react';

export function useScrollProgress(initialSection = 1) {
    const [currentSection, setCurrentSection] = useState(initialSection);

    const handleSectionInView = useCallback((sectionKey) => {
        // Prevent duplicate section updates
        if (currentSection === sectionKey) return;
        setCurrentSection(sectionKey);
    }, [currentSection]);

    return {
        currentSection,
        handleSectionInView
    };
} 