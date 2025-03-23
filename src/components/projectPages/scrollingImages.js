"use client"
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";



function Title({ children, onInView, margin = "-50%" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: `${margin}`
    });

    useEffect(() => {
        onInView(isInView);
    }, [isInView, onInView]);

    return (
        <h1 ref={ref} className={`w-full text-center lg:text-left text-lg md:text-2xl py-16 transition-all duration-300 ${isInView ? 'opacity-100 font-semibold' : 'opacity-30'}`}>
            {children}
        </h1>
    )
}

function Card({ children }) {
    return (
        <div className="absolute w-full rounded-md md:rounded-2xl overflow-hidden border border-gray-300">
            {children}
        </div>
    )
}

export default function ScrollingImages({ content }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const onTitleInView = (index, inView) => {
        if (inView) {
            setActiveIndex(index);
        }
    };

    return (
        <>
            {/* Desktop */}
            <div className="hidden lg:flex w-full items-start font-oxanium text-black bg-[#F2EFE7] rounded-lg border border-[#BFBFBF] p-6">
                <section className="w-2/5 flex flex-col gap-8 py-[50vh]">
                    {content.map((item, index) => (
                        <Title 
                            key={item.key}
                            onInView={(inView) => onTitleInView(index, inView)}
                            margin="-50% 0px -50% 0px"
                        >
                            {item.title}
                        </Title>
                    ))}
                </section>
                <section className="w-3/5 sticky top-[calc((100vh-84px-(100vw*0.55*2050/2880))/2)] h-[calc(100vh-84px)] flex items-start">
                    {content.map((item, index) => (
                        <Card key={item.key}>
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={2880}
                                height={2050}
                                className={`transition-opacity duration-300 ${
                                    index <= activeIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                            />
                        </Card>
                    ))}
                </section>
            </div>

            {/* Mobile */}
            <div className="relative flex flex-col lg:hidden">
                <section className="sticky top-0 md:top-8 mb-36 w-full h-[300px] z-10">
                    {content.map((item, index) => (
                        <Card key={item.key}>
                            <Image
                                src={item.src}
                                alt={item.title}
                                width={2880}
                                height={2050}
                                className={`transition-opacity duration-300 ${
                                    index <= activeIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                            />
                        </Card>
                    ))}
                </section>
                <section className="w-full h-full">
                    {content.map((item, index) => (
                        <Title 
                            key={item.key}
                            onInView={(inView) => onTitleInView(index, inView)}
                            margin="-75% 0px -25% 0px"
                        >
                            {item.title}
                        </Title>
                    ))}
                </section>
            </div>

        </>
    )
}