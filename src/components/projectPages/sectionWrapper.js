"use client"
import { useRef, useEffect, memo } from 'react';
import { useInView } from 'framer-motion';

function SectionWrapper({ sectionKey, children, onSectionInView }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "-25% 0px -75% 0px",
        once: false
    });

    useEffect(() => {
        if (isInView) {
            onSectionInView(sectionKey);
        }
    }, [isInView, sectionKey, onSectionInView]);

    return (
        <div ref={ref} data-section={sectionKey} className="scroll-mt-20">
            {children}
        </div>
    );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(SectionWrapper); 