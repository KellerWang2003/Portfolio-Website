"use client"
import { motion, AnimatePresence } from 'framer-motion';
import useMeasure from 'react-use-measure';

const ProgressItem = ({ 
    section, 
    isActive, 
    bgColor,
    sectionIndex,
    onSectionClick = () => {}
}) => {
    const [ref, bounds] = useMeasure();

    return (
        <motion.section
            className={`relative rounded backdrop-blur-sm flex items-center
            ${isActive ? 'grow' : 'grow-0'}`}
            style={{ 
                backgroundColor: `${bgColor}E6`,
                border: `1px solid ${bgColor}33`
            }}
            animate={{
                flexGrow: isActive ? 1 : 0
            }}
            transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
            }}
            layout
        >
            <h2 
                ref={ref}
                className="text-sm font-bold whitespace-nowrap h-full py-3 px-4"
                onClick={() => onSectionClick(section.key)}
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
                            ease: [0.4, 0, 0.2, 1],
                            delay: 0.3,
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: [0.4, 0, 0.2, 1]
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

export default function ProgressBar({ bgColor, content, currentStep, onSectionClick }) {
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
                        onSectionClick={onSectionClick}
                    />
                ))}
            </div>
        </div>
    );
}