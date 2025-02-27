"use client"
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
        <motion.section
            className={`relative px-4 py-3 rounded flex backdrop-blur-sm
            ${isActive ? 'grow' : 'grow-0'}`}
            style={{ 
                backgroundColor: `${bgColor}E6`,
                border: `1px solid ${bgColor}33`
            }}
            animate={{
                flexGrow: isActive ? 1 : 0
            }}
            transition={{
                duration: 0.5,
                ease: "easeOut"
            }}
            layout
        >
            <h2 
                ref={ref}
                className="text-sm font-bold whitespace-nowrap"
            >
                {section.title}
            </h2>
            <AnimatePresence mode="wait" initial={false}>
                {isActive && (
                    <motion.ul
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeOut"
                            }
                        }}
                        className="absolute w-full text-sm flex justify-around pr-12"
                        style={{ 
                            paddingLeft: `${bounds.width + 48}px`
                        }}
                    >
                        {section.items.map((item, index) => (
                            <li key={index} className="text-center whitespace-nowrap opacity-60">
                                {item}
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default function ProgressBar({ bgColor, content, currentStep }) {
    return (
        <div className="hidden sticky -top-[33px] md:flex flex-col gap-4 font-oxanium z-20 text-current">
            <div className="w-full flex gap-2">
                {content.map((section, sectionIndex) => (
                    <ProgressItem
                        key={section.key}
                        section={section}
                        isActive={currentStep === section.key}
                        bgColor={bgColor}
                        sectionIndex={sectionIndex}
                    />
                ))}
            </div>
        </div>
    );
}