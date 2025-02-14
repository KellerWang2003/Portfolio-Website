"use client"
import Image from "next/image";
import Link from "next/link";
import Tags from "./tags";
import { motion } from "framer-motion";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import FadeInAnimation from "./fadeInAnimation";

export default function ProjectCover({ number, cover, year, title, tags, description, link, isFirst }) {
    const DesktopContent = (
        <FadeInAnimation isFirst={isFirst}>
            <div className="w-full flex gap-6 cursor-pointer text-black font-oxanium">
                <div className="w-2/5 flex flex-col justify-between">
                    <section className="w-full h-full max-h-[30%] flex flex-col justify-between">
                        <div className="flex justify-between">
                            <h2 className="text-base font-bold">PROJECT 0{number + 1}</h2>
                            <div>{year}</div>
                        </div>
                        <div className="max-w-[70%]">{description}</div>
                    </section>
                    <section className="flex flex-col gap-4">
                        <Tags tags={tags} />
                        <div className="flex justify-between items-end gap-8">
                            <h1 className="text-5xl">{title.toUpperCase()}</h1>
                            <div className="w-6 h-6 mb-2">
                                <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.9039 11.7764L12 0.1875C9.09727 0.215672 3.3138 0.255443 0.410993 0.283615L0.387154 1.73443C2.99805 1.70878 6.46412 1.68749 9.51328 1.65983L0 11.1729L1.01457 12.1875L10.5278 2.67435L10.4453 11.7925L11.9039 11.7764Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                        <div className="w-full h-px bg-black"></div>
                    </section>

                </div>
                <div className="w-3/5 aspect-video">
                    <Image src={cover} alt={title} width={1920} height={1080} className="rounded object-cover aspect-video" />
                </div>
            </div>
        </FadeInAnimation>
    );

    const MobileContent = (
        <FadeInAnimation isFirst={isFirst}>
            <div className="w-full flex flex-col gap-10 cursor-pointer text-black font-oxanium text-sm">
                <section className="w-full aspect-video flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h2 className="font-bold">PROJECT 0{number + 1}</h2>
                        <div>{year}</div>
                    </div>
                    <Image src={cover} alt={title} width={960} height={540} className="rounded object-cover aspect-video" />
                </section>
                <section className="max-w-[90%]">{description}</section>
                <section className="flex flex-col gap-3">
                    <Tags tags={tags} />
                    <div className="flex justify-between items-end gap-8">
                        <h1 className="text-4xl">{title.toUpperCase()}</h1>
                        <div className="w-4 h-4 mb-2 -rotate-45">
                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9039 11.7764L12 0.1875C9.09727 0.215672 3.3138 0.255443 0.410993 0.283615L0.387154 1.73443C2.99805 1.70878 6.46412 1.68749 9.51328 1.65983L0 11.1729L1.01457 12.1875L10.5278 2.67435L10.4453 11.7925L11.9039 11.7764Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-full h-px bg-black"></div>
                </section>

            </div>
        </FadeInAnimation>
    );

    return link ? (
        <Link href={link}>
            <div className="hidden lg:block">{DesktopContent}</div>
            <div className="block lg:hidden">{MobileContent}</div>
        </Link>
    ) : (
        <>
            <div className="hidden lg:block">{DesktopContent}</div>
            <div className="block lg:hidden">{MobileContent}</div>
        </>
    );

}