import { useState, useEffect, useRef } from "react";
import ProjectContent from "@/components/projectPages/projectContent";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function TabGroup({ content }) {
    const t = useTranslations('Elevate');

    return (
        <>
            <div className="hidden lg:block">
                <DesktopTabs content={content} />
            </div>
            <div className="block lg:hidden">
                <MobileTabs content={content} />
            </div>
        </>
    )
}

function DesktopTabs({ content }) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [bgStyle, setBgStyle] = useState({});
    const tabsRef = useRef({});

    useEffect(() => {
        const activeElement = tabsRef.current[content[activeIndex].key];
        if (activeElement) {
            setBgStyle({
                left: `${activeElement.offsetLeft}px`,
                width: `${activeElement.offsetWidth}px`,
                height: `${activeElement.offsetHeight}px`,
                top: `${activeElement.offsetTop}px`,
            });
        }
    }, [activeIndex, content]);

    const activeItem = content[activeIndex];

    const handlePrevious = () => {
        setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setActiveIndex(prev => (prev < content.length - 1 ? prev + 1 : prev));
    };

    return (
        <div className="w-full flex flex-col gap-4 bg-[#F2EFE7] p-3 lg:p-4 rounded-md md:rounded-2xl">
            <section className="w-full flex border-b border-[#BFBFBF] relative">
                <div
                    className="absolute transition-all duration-300 ease-in-out border border-b-0 border-[#BFBFBF] bg-[#f7f4ec] rounded-t-md"
                    style={bgStyle}
                />
                {content.map((item, index) => (
                    <h2
                        key={item.key}
                        ref={(el) => (tabsRef.current[item.key] = el)}
                        className={`px-5 py-2 whitespace-nowrap rounded-t-md relative transition-all duration-300 ease-in-out font-bold ${activeIndex === index ? 'text-[#000000]' : 'text-[#666666]'}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item.title}
                    </h2>
                ))}
            </section>
            <section className="flex flex-col gap-4">
                <ProjectContent
                    order="mobileReverse"
                    leftChild={
                        <>
                            <div className="w-full h-full flex flex-col gap-4 justify-between">
                                <h2 className="font-bold">{activeItem.title}</h2>
                                <div className="flex flex-col gap-4">
                                {activeItem.description}
                                <div className="flex items-center gap-4 w-full">
                                    <button
                                        onClick={handlePrevious}
                                        disabled={activeIndex === 0}
                                        className={`w-full px-4 py-2 rounded-md border border-[#BFBFBF] cursor-none ${activeIndex === 0
                                            ? 'opacity-50'
                                            : 'hover:bg-[#e9e6de] transition-colors'
                                            }`}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        disabled={activeIndex === content.length - 1}
                                        className={`w-full px-5 py-2 rounded-md bg-[#383838] text-white cursor-none ${activeIndex === content.length - 1
                                            ? 'opacity-50 '
                                            : 'hover:bg-[#1b1b1b] transition-colors'
                                            }`}
                                    >
                                        Next
                                    </button>
                                </div>
                                </div>
                            </div>
                        </>
                    }
                    rightChild={
                        <Image
                            src={activeItem.image}
                            alt={activeItem.title}
                            width={1440}
                            height={1024}
                            className="border border-[#BFBFBF] rounded-md"
                        />
                    }
                />
            </section>
        </div>
    )
}

function MobileTabs({ content }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const tabRefs = useRef([]);
    const containerRef = useRef(null);
    const lastUpdateTimeRef = useRef(0);
    const isManualScrollRef = useRef(false);

    useEffect(() => {
        // Initialize refs array
        tabRefs.current = tabRefs.current.slice(0, content.length);
        
        // Create an observer to track which tab has the most visibility
        const options = {
            root: null, // Use the viewport
            rootMargin: '0px',
            threshold: [0.5, 0.6, 0.7, 0.8, 0.9, 1.0] // Fewer thresholds, focused on higher visibility
        };

        const observer = new IntersectionObserver((entries) => {
            // Don't update during manual scrolling
            if (isManualScrollRef.current) return;
            
            // Debounce updates (only update every 100ms)
            const now = Date.now();
            if (now - lastUpdateTimeRef.current < 100) return;
            
            // Find the entry with the highest intersection ratio
            let maxRatio = 0.5; // Minimum threshold to consider a change
            let maxIndex = activeIndex;

            entries.forEach(entry => {
                const index = parseInt(entry.target.dataset.index);
                if (entry.intersectionRatio > maxRatio) {
                    maxRatio = entry.intersectionRatio;
                    maxIndex = index;
                }
            });

            if (maxIndex !== activeIndex) {
                lastUpdateTimeRef.current = now;
                setActiveIndex(maxIndex);
            }
        }, options);

        // Observe all tab elements
        tabRefs.current.forEach(tab => {
            if (tab) observer.observe(tab);
        });

        return () => {
            // Cleanup observer
            tabRefs.current.forEach(tab => {
                if (tab) observer.unobserve(tab);
            });
        };
    }, [content.length, activeIndex]);

    const handlePrevious = () => {
        if (activeIndex > 0) {
            isManualScrollRef.current = true;
            setActiveIndex(activeIndex - 1);
            
            // Scroll to the previous tab
            tabRefs.current[activeIndex - 1]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            
            // Reset manual scroll flag after animation completes
            setTimeout(() => {
                isManualScrollRef.current = false;
            }, 500);
        }
    };

    const handleNext = () => {
        if (activeIndex < content.length - 1) {
            isManualScrollRef.current = true;
            setActiveIndex(activeIndex + 1);
            
            // Scroll to the next tab
            tabRefs.current[activeIndex + 1]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            
            // Reset manual scroll flag after animation completes
            setTimeout(() => {
                isManualScrollRef.current = false;
            }, 500);
        }
    };

    const handleDotClick = (index) => {
        isManualScrollRef.current = true;
        setActiveIndex(index);
        
        tabRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
        
        // Reset manual scroll flag after animation completes
        setTimeout(() => {
            isManualScrollRef.current = false;
        }, 500);
    };

    return (
        <div className="w-full max-h-[85vh] flex flex-col bg-[#F2EFE7] border border-[#BFBFBF] border-opacity-50 rounded-2xl">
            <div 
                ref={containerRef}
                className="w-full h-full flex p-2 md:p-4 gap-2 md:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide" 
            >
                {content.map((item, index) => (
                    <section
                        key={item.key}
                        ref={el => tabRefs.current[index] = el}
                        data-index={index}
                        className="min-w-[100%] md:min-w-[70%] flex-1 p-2 md:p-3 flex flex-col gap-2 border border-[#BFBFBF] bg-[#F7F4EC] rounded-lg md:rounded-md snap-center scroll-mt-5 md:scroll-mt-16"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={1440}
                            height={1024}
                            className="object-cover border border-[#BFBFBF] border-opacity-50 rounded"
                        />
                        <h2 className="font-bold mt-2">
                            {item.title}
                        </h2>
                        <div className="overflow-y-auto">
                            {item.description}
                        </div>
                    </section>
                ))}
            </div>
            {/* dots */}
            <div className="w-full flex justify-center gap-2 py-1 mb-1 md:mb-0">
                {content.map((_, index) => (
                    <div 
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                            activeIndex === index 
                            ? 'bg-[#383838]' 
                            : 'bg-[#BFBFBF]'
                        }`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
            {/* buttons */}
            <div className="w-full h-full p-2 md:p-4 pt-0 flex gap-2 md:gap-4 items-center justify-center">
                <button 
                    className={`w-full px-4 py-2 rounded-lg md:rounded-md border border-[#BFBFBF] ${
                        activeIndex === 0 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-[#e9e6de] cursor-none'
                    }`}
                    onClick={handlePrevious}
                    disabled={activeIndex === 0}
                >
                    Previous
                </button>
                <button 
                    className={`w-full px-4 py-2 rounded-lg md:rounded-md bg-[#383838] text-white ${
                        activeIndex === content.length - 1 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:bg-[#1b1b1b] cursor-none'
                    }`}
                    onClick={handleNext}
                    disabled={activeIndex === content.length - 1}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
