'use client';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import AnimatedLink from './animation/animatedLink';
import { MOUSE_POSITION_UPDATE } from '@/hooks/useCursorHover';
import { useTranslations } from 'next-intl';
import FadeInAnimation from './animation/fadeInAnimation';

function FramerMagnet({ children, xScale, yScale }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMousePosition = useCallback((e) => {
        if (!ref.current) return;

        const { x: mouseX, y: mouseY } = e.detail;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = (mouseX - (left + width / 2) + 300) * xScale;
        const y = (mouseY - (top + height / 2)) * yScale;

        setPosition({ x, y });
    }, [xScale, yScale]);

    useEffect(() => {
        window.addEventListener(MOUSE_POSITION_UPDATE, handleMousePosition);
        return () => {
            window.removeEventListener(MOUSE_POSITION_UPDATE, handleMousePosition);
        };
    }, [handleMousePosition]);

    return (
        <motion.div
            ref={ref}
            animate={{ x: position.x, y: position.y }}
            transition={{ stiffness: 100, damping: 15, mass: 1 }}>
            {children}
        </motion.div>
    );
}

function Eyes() {
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        const getRandomInterval = () => Math.floor(Math.random() * (20000 - 10000 + 1) + 10000);

        const blinkInterval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => {
                setIsBlinking(false);
                // 20% chance for double blink
                if (Math.random() < 0.2) {
                    setTimeout(() => {
                        setIsBlinking(true);
                        setTimeout(() => {
                            setIsBlinking(false);
                        }, 80);
                    }, 150); // 200ms pause between blinks
                }
            }, 80);
        }, getRandomInterval());

        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <div className="w-fit h-fit flex gap-[142px]">
            <div className="w-[54px] h-28 transform rotate-[35deg] flex items-center">
                <div
                    className={`w-[54px] bg-black rounded-full transition-all duration-100 ease-out`}
                    style={{ height: isBlinking ? '8px' : '112px' }}
                ></div>
            </div>
            <div className="w-[54px] h-28 transform rotate-[35deg] flex items-center">
                <div
                    className={`w-[54px] bg-black rounded-full transition-all duration-100 ease-out`}
                    style={{ height: isBlinking ? '8px' : '112px' }}
                ></div>
            </div>
        </div>
    )
}

function EyeFrame() {
    return (
        <div className="z-10 h-[550px] w-[430px]">
            <svg width="100%" height="100%" viewBox="0 0 452 580" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5138 318.769C0.552524 309.694 -2.59745 291.829 6.47813 278.868L192.717 12.8919C201.792 -0.0694264 219.656 -3.2194 232.618 5.85618C245.579 14.9318 248.729 32.7962 239.653 45.7575L53.4151 311.733C44.3395 324.695 26.4751 327.845 13.5138 318.769ZM220.394 318.769C207.433 309.694 204.283 291.829 213.358 278.868L399.597 12.8919C408.672 -0.0694262 426.537 -3.2194 439.498 5.85618C452.459 14.9318 455.609 32.7962 446.534 45.7575L260.295 311.733C251.22 324.695 233.355 327.845 220.394 318.769ZM1.29455 442.78C1.29455 426.957 14.1215 414.13 29.9443 414.13H229.289C230.801 414.13 232.285 414.247 233.733 414.473C240.996 415.138 248.008 418.559 253.067 424.587L445.229 653.598C455.4 665.719 453.819 683.79 441.698 693.96C429.577 704.131 411.506 702.55 401.335 690.429L217.573 471.43H29.9443C14.1215 471.43 1.29455 458.603 1.29455 442.78Z" fill="#ECEAE6" />
                <path d="M6.47813 278.868L6.88771 279.155L6.88771 279.155L6.47813 278.868ZM13.5138 318.769L13.227 319.179L13.227 319.179L13.5138 318.769ZM192.717 12.8919L193.126 13.1786L193.126 13.1786L192.717 12.8919ZM232.618 5.85618L232.905 5.44661L232.905 5.44661L232.618 5.85618ZM239.653 45.7575L239.244 45.4707L239.244 45.4707L239.653 45.7575ZM53.4151 311.733L53.8246 312.02L53.8246 312.02L53.4151 311.733ZM213.358 278.868L213.768 279.155L213.768 279.155L213.358 278.868ZM220.394 318.769L220.107 319.179L220.107 319.179L220.394 318.769ZM399.597 12.8919L399.187 12.6051L399.187 12.6051L399.597 12.8919ZM439.498 5.85618L439.785 5.44661L439.785 5.44661L439.498 5.85618ZM446.534 45.7575L446.943 46.0442L446.943 46.0442L446.534 45.7575ZM260.295 311.733L259.886 311.447L259.886 311.447L260.295 311.733ZM233.733 414.473L233.656 414.967L233.671 414.969L233.687 414.971L233.733 414.473ZM253.067 424.587L253.45 424.266L253.45 424.266L253.067 424.587ZM445.229 653.598L444.846 653.919L444.846 653.919L445.229 653.598ZM441.698 693.96L442.019 694.343L442.019 694.343L441.698 693.96ZM401.335 690.429L400.952 690.75L400.952 690.75L401.335 690.429ZM217.573 471.43L217.956 471.108L217.806 470.93H217.573V471.43ZM6.06856 278.581C-3.16542 291.769 0.0395337 309.945 13.227 319.179L13.8006 318.36C1.06552 309.442 -2.02949 291.89 6.88771 279.155L6.06856 278.581ZM192.307 12.6051L6.06856 278.581L6.88771 279.155L193.126 13.1786L192.307 12.6051ZM232.905 5.44661C219.717 -3.78736 201.541 -0.582417 192.307 12.6051L193.126 13.1786C202.043 0.443565 219.596 -2.65143 232.331 6.26576L232.905 5.44661ZM240.063 46.0442C249.297 32.8568 246.092 14.6806 232.905 5.44661L232.331 6.26576C245.066 15.183 248.161 32.7356 239.244 45.4707L240.063 46.0442ZM53.8246 312.02L240.063 46.0442L239.244 45.4707L53.0055 311.447L53.8246 312.02ZM13.227 319.179C26.4145 328.413 44.5907 325.208 53.8246 312.02L53.0055 311.447C44.0883 324.182 26.5357 327.277 13.8006 318.36L13.227 319.179ZM212.949 278.581C203.715 291.769 206.92 309.945 220.107 319.179L220.681 318.36C207.946 309.442 204.851 291.89 213.768 279.155L212.949 278.581ZM399.187 12.6051L212.949 278.581L213.768 279.155L400.006 13.1786L399.187 12.6051ZM439.785 5.44661C426.597 -3.78736 408.421 -0.582417 399.187 12.6051L400.006 13.1786C408.923 0.443565 426.476 -2.65143 439.211 6.26576L439.785 5.44661ZM446.943 46.0442C456.177 32.8568 452.972 14.6806 439.785 5.44661L439.211 6.26576C451.946 15.183 455.041 32.7356 446.124 45.4707L446.943 46.0442ZM260.705 312.02L446.943 46.0442L446.124 45.4707L259.886 311.447L260.705 312.02ZM220.107 319.179C233.295 328.413 251.471 325.208 260.705 312.02L259.886 311.447C250.968 324.182 233.416 327.277 220.681 318.36L220.107 319.179ZM29.9443 413.63C13.8453 413.63 0.794547 426.681 0.794547 442.78H1.79455C1.79455 427.233 14.3976 414.63 29.9443 414.63V413.63ZM229.289 413.63H29.9443V414.63H229.289V413.63ZM233.81 413.979C232.336 413.749 230.826 413.63 229.289 413.63V414.63C230.775 414.63 232.233 414.745 233.656 414.967L233.81 413.979ZM253.45 424.266C248.303 418.132 241.167 414.651 233.778 413.975L233.687 414.971C240.824 415.624 247.714 418.985 252.684 424.909L253.45 424.266ZM445.612 653.276L253.45 424.266L252.684 424.909L444.846 653.919L445.612 653.276ZM442.019 694.343C454.352 683.995 455.961 665.609 445.612 653.276L444.846 653.919C454.84 665.828 453.286 683.584 441.377 693.577L442.019 694.343ZM400.952 690.75C411.301 703.083 429.687 704.692 442.019 694.343L441.377 693.577C429.467 703.57 411.712 702.017 401.718 690.108L400.952 690.75ZM217.19 471.751L400.952 690.75L401.718 690.108L217.956 471.108L217.19 471.751ZM29.9443 471.93H217.573V470.93H29.9443V471.93ZM0.794547 442.78C0.794547 458.879 13.8453 471.93 29.9443 471.93V470.93C14.3976 470.93 1.79455 458.327 1.79455 442.78H0.794547Z" fill="#6E6E6E" />
            </svg>
        </div>
    )
}

function AnimatedLogo() {
    return (
        <div className='flex justify-end scale-[65%] md:scale-100
            origin-bottom-right -mt-36 md:mt-0
        '>
            <section>
                <div className="hidden md:block">
                    <FramerMagnet xScale={0.005} yScale={0.015}>
                        <EyeFrame />
                    </FramerMagnet>
                </div>
                <div className="block md:hidden">
                    <EyeFrame />
                </div>
            </section>
            <section className="absolute z-20 pr-[162px] pt-[202px]">
                <div className="hidden md:block">
                    <FramerMagnet xScale={0.02} yScale={0.06}>
                        <Eyes />
                    </FramerMagnet>
                </div>
                <div className="block md:hidden">
                    <Eyes />
                </div>
            </section>
        </div>
    )
}

function Introduction() {
    const t = useTranslations('Index.landing');

    return (
        <section className='w-full md:w-3/5
            flex flex-col gap-4 justify-between mt-4 md:mt-0 md:pb-24
            font-oxanium text-black'>
            <FadeInAnimation delay={0}>
                <h1 className='text-4xl md:text-5xl flex flex-col gap-2'>
                    <span>{t('greeting')}</span>
                    <span className='whitespace-nowrap'>{t('name')}</span>
                </h1>
            </FadeInAnimation>
            <FadeInAnimation delay={0.25}>
                <div className='flex flex-col gap-4 text-sm md:text-base'>
                    <section className='flex flex-col text-[#404040]'>
                        <p>{t('description.line1')}</p>
                        <p>{t('description.line2')}</p>
                    </section>
                    <section className='flex gap-8'>
                        <AnimatedLink href='https://www.linkedin.com/in/keller-wang-996474227' color='black'>
                            {t('links.linkedin')}
                        </AnimatedLink>
                        <AnimatedLink href='mailto:kellerwang2003@gmail.com' color='black'>
                            {t('links.email')}
                        </AnimatedLink>
                    </section>
                </div>
            </FadeInAnimation>
        </section>
    )
}

export default function HomeLanding() {
    return (
        <>
            <div className="w-full relative 
                flex flex-col md:flex-row md:justify-between 
                md:pt-[10vh] lg:pt-[15vh] overflow-y-clip
            ">
                <Introduction />
                <FadeInAnimation delay={0.5}>
                    <AnimatedLogo />
                </FadeInAnimation>
                    {/* the text */}
                    <section className="md:absolute w-full bottom-0 left-0 flex flex-col">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.5 }}
                            className="h-[1px] bg-black z-10"
                        ></motion.div>
                        <div className="w-full h-8 flex gap-2 z-10">
                            <div className='w-full h-full bg-[#F7F4EC]'></div>
                        </div>
                    </section>

            </div>
        </>
    )
}