"use client"
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import useMeasure from "react-use-measure";
import { animate, useMotionValue } from "framer-motion";

export default function ScrollingCarousel({
    scrollSpeed = 50,
    direction,
    images = [],
    landscape,
    orientation = 'vertical'
}) {

    if (orientation === 'vertical') {
        return <VerticalScrollingCarousel scrollSpeed={scrollSpeed} direction={direction} images={images} landscape={landscape} />;
    }

    return <HorizontalScrollingCarousel scrollSpeed={scrollSpeed} direction={direction} images={images} />;
}

function HorizontalScrollingCarousel({
    scrollSpeed = 50,
    direction = 'left',
    images = [],
}) {

    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 4;

        const positions = direction === 'left'
            ? [0, finalPosition]
            : [finalPosition, 0];

        controls = animate(xTranslation, positions, {
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
            duration: scrollSpeed,
        });

        return controls.stop;
    }, [xTranslation, width, direction]);

    return (
        <main className="w-full h-full relative overflow-hidden">
            <motion.div className="absolute h-full left-0 flex gap-2"
                ref={ref}
                style={{
                    x: xTranslation,
                    width: 'max-content'
                }}>

                {[...images, ...images].map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Rocket Engine Catalog Screenshot ${(index % images.length) + 1}`}
                        width={1920}
                        height={1080} 
                        className="object-contain h-full w-fit"
                    />
                ))}
            </motion.div>
        </main>
    )
}


function VerticalScrollingCarousel({
    scrollSpeed = 50,
    direction = 'down',
    images = [],
    landscape = true
}) {

    let [ref, { height }] = useMeasure();

    const yTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -height / 2 - 8; //16 being the gap between the images

        // Determine start and end positions based on direction
        const positions = direction === 'up'
            ? [finalPosition, 0]  // bottom to top
            : [0, finalPosition]; // top to bottom

        controls = animate(yTranslation, positions, {
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
            duration: scrollSpeed,
        });

        return () => controls.stop();
    }, [yTranslation, height, direction]);

    return (
        <main className="w-full h-full relative overflow-hidden">
            <motion.div className="absolute w-full top-0 flex flex-col gap-4" ref={ref} style={{
                    y: yTranslation,
                    height: 'max-content'
                }}>

                {[...images, ...images].map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Rocket Engine Catalog Screenshot ${(index % images.length) + 1}`}
                        width={landscape ? 1920 : 786}
                        height={landscape ? 1080 : 1650} 
                        className="object-contain w-full"
                    />
                ))}
            </motion.div>
        </main>
    );
}