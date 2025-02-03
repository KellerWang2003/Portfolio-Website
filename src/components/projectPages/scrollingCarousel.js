"use client"
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import useMeasure from "react-use-measure";
import { animate, useMotionValue } from "framer-motion";

export default function ScrollingCarousel({ 
    scrollSpeed = 50, 
    direction = 'down',
    images = []
}) {

    let [ref, {height}] = useMeasure();

    const yTranslation = useMotionValue(0);

    useEffect(() => {
        let controls;
        let finalPosition = -height / 2 - 16; //16 being the gap between the images
        
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
            <motion.div className="absolute top-0 flex flex-col gap-4" ref={ref} style={{y: yTranslation}}>
                {[...images, ...images].map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt={`Rocket Engine Catalog Screenshot ${(index % images.length) + 1}`}
                        width={800}
                        height={400}
                        className="object-contain w-full"
                    />
                ))}
            </motion.div>
        </main>
    );
}