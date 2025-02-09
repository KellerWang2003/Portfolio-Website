"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMeasure from 'react-use-measure';

const ProgressItem = ({ 
    section, 
    isActive, 
    bgColor,
    sectionIndex 
}) => {
    const [ref, bounds] = useMeasure();

    return (
        <section
            className={`relative px-4 py-3 rounded flex backdrop-blur-sm
            ${isActive ? 'grow' : 'grow-0'}`}
            style={{ 
                backgroundColor: `${bgColor}E6`, // Changed to E6 for 90% opacity in hex
                transition: 'flex-grow 0.7s ease-in-out',
                border: `1px solid ${bgColor}33` // Adding 33 for 20% opacity in hex
            }}
        >
            <h2 
                ref={ref}
                className="text-sm font-bold"
            >
                {section.title}
            </h2>
            <AnimatePresence mode="wait" initial={false}>
                {isActive && (
                    <motion.ul
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            type: "tween",
                            duration: 0.3,
                            ease: "easeOut",
                            delay: 0.7,
                        }}
                        exit={{
                            opacity: 0,
                            x: 0,
                            transition: {
                                type: "tween",
                                duration: 0.4,
                                ease: "easeOut",
                                delay: 0
                            }
                        }}
                        className="absolute w-full text-sm flex justify-around pr-12"
                        style={{ 
                            paddingLeft: `${bounds.width + 48}px`
                        }}
                    >
                        {section.items.map((item, index) => (
                            <li key={index} className="text-center whitespace-nowrap text-[#8C8C8C]">
                                {item}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </section>
    );
};

export default function ProgressBar({ bgColor, content }) {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div className="hidden md:block sticky top-0 flex flex-col gap-4 font-oxanium">
            <div className="w-full flex gap-2">
                {content.map((section, sectionIndex) => (
                    <ProgressItem
                        key={sectionIndex}
                        section={section}
                        isActive={currentStep === sectionIndex + 1}
                        bgColor={bgColor}
                        sectionIndex={sectionIndex}
                    />
                ))}
            </div>
            <button
                onClick={() => setCurrentStep(prev => 
                    prev === content.length ? 1 : prev + 1
                )}
                className="px-4 py-2 w-fit rounded-lg text-base font-bold hidden"
                style={{ backgroundColor: bgColor }}
            >
                Switch Section
            </button>
        </div>
    );
}