"use client"
import FadeInAnimation from "@/components/animation/fadeInAnimation";
import AnimatedLink from "@/components/animation/animatedLink";

export default function Content() {

    return (
        <>
            <h1 className="text-base font-oxanium text-[#7E7E7E] pt-12 md:pt-20 pb-[30dvh] md:pb-[50dvh]">
                Glad you are here!
            </h1>
            <main className="w-full flex flex-col gap-16 md:gap-36 pb-12 md:pb-16 font-oxanium text-black overflow-x-hidden">
                <FadeInAnimation isFirst={true} delay={0}>
                    <div className="w-full flex flex-col gap-10 md:gap-12 items-end">
                        {/* About Keller */}
                        <section className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 items-start border-b border-black pb-5 md:pb-8">
                            <h2 className="text-3xl md:col-start-1 md:col-span-2">About Keller</h2>
                            <div className="flex flex-col gap-1 text-sm md:text-base min-w-0 md:col-span-3 md:col-start-3">
                                <p>
                                    Keller is an interaction designer specializing in simplifying complex systems into scalable, intuitive, and human-centered experiences.
                                </p>
                            </div>
                        </section>

                        {/* Experience */}
                        <section className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 gap-y-2 md:gap-y-2">
                            <h3 className="text-base font-normal text-[#7E7E7E] md:col-start-2 md:col-span-1">Experience</h3>
                            <div className="flex flex-col gap-6 md:gap-9 text-sm md:text-base min-w-0 md:col-span-3 md:col-start-3">
                                <div className="flex flex-col gap-1 text-[#7E7E7E] min-w-0">
                                    <div className="flex flex-row flex-wrap items-baseline justify-between gap-1 text-xs md:text-sm">
                                        <p className="font-bold text-black text-base md:text-xl min-w-0 shrink-0">
                                            Tencent
                                        </p>
                                        <span className="shrink-0 text-right">May - August 2025 · 4 mos</span>
                                    </div>
                                    <span className="min-w-0 text-xs md:text-sm">Shenzhen, Guangdong, China · On-site</span>
                                    <p className="text-black min-w-0 pt-2">
                                        User Experience Designer - Internship
                                    </p>
                                    {/* <p className="text-black text-sm md:text-base text-[#7E7E7E] min-w-0 opacity-60">
                                        Description - Lorum
                                    </p> */}
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 gap-y-2 md:gap-y-2 border-t border-[#9E9E9E] pt-10 md:border-t-0 md:pt-0">
                            <div className="hidden md:block md:col-start-2 md:col-span-4 border-t border-[#9E9E9E] pt-10" aria-hidden />
                            <h3 className="text-base font-normal text-[#7E7E7E] md:col-start-2 md:col-span-1">Education</h3>
                            <div className="flex flex-col gap-6 md:gap-9 text-sm md:text-base min-w-0 md:col-span-3 md:col-start-3">
                                <div className="flex flex-col gap-1 text-[#7E7E7E] min-w-0">
                                    <div className="flex flex-row flex-wrap items-baseline justify-between gap-1 text-xs md:text-sm">
                                        <p className="font-bold text-black text-base md:text-xl min-w-0 shrink-0">
                                            ArtCenter College of Design
                                        </p>
                                        <span className="shrink-0 text-right">September 2023 · Present</span>
                                    </div>
                                    <span className="min-w-0 text-xs md:text-sm">Pasadena, CA</span>
                                    <p className="text-black min-w-0 pt-2">
                                        Bachelor of Science in Interaction Design
                                    </p>
                                    {/* <p className="text-black text-sm md:text-base text-[#7E7E7E] min-w-0 opacity-60">
                                        Description - Lorum
                                    </p> */}
                                </div>

                                <div className="flex flex-col gap-1 text-[#7E7E7E] min-w-0">
                                    <div className="flex flex-row flex-wrap items-baseline justify-between gap-1 text-xs md:text-sm">
                                        <p className="font-bold text-black text-base md:text-xl min-w-0 shrink-0">
                                            California Institute of Technology
                                        </p>
                                        <span className="shrink-0 text-right">September - December 2024</span>
                                    </div>
                                    <span className="min-w-0 text-xs md:text-sm">Pasadena, CA</span>
                                    <p className="text-black min-w-0 pt-2">
                                        Exchange student in Computer Science
                                    </p>
                                    {/* <p className="text-black text-sm md:text-base text-[#7E7E7E] min-w-0 opacity-60">
                                        Description - Lorum
                                    </p> */}
                                </div>
                            </div>
                        </section>

                        {/* Skills */}
                        <section className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 gap-y-2 md:gap-y-2 border-t border-[#9E9E9E] pt-10 md:border-t-0 md:pt-0">
                            <div className="hidden md:block md:col-start-2 md:col-span-4 border-t border-[#9E9E9E] pt-10" aria-hidden />
                            <h3 className="text-base font-normal text-[#7E7E7E] md:col-start-2 md:col-span-1">Skills</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4 md:col-span-3 md:col-start-3">
                                <div className="flex flex-col gap-2 min-w-0">
                                    <h4 className="font-bold text-black text-base">Expertise</h4>
                                    <ul className="flex flex-col gap-1 text-sm md:text-base text-[#7E7E7E]">
                                        <li>Product design</li>
                                        <li>Interaction design</li>
                                        <li>UI design</li>
                                        <li>UX research</li>
                                        <li>Rapid prototyping</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-2 min-w-0">
                                    <h4 className="font-bold text-black text-base">Software</h4>
                                    <ul className="flex flex-col gap-1 text-sm md:text-base text-[#7E7E7E]">
                                        <li>Figma</li>
                                        <li>Adobe Design Suite</li>
                                        <li>Keyshot</li>
                                        <li>Solidworks</li>
                                        <li>Cursor</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Contact */}
                        <section className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 gap-y-2 md:gap-y-2 border-t border-[#9E9E9E] pt-10 md:border-t-0 md:pt-0">
                            <div className="hidden md:block md:col-start-2 md:col-span-4 border-t border-[#9E9E9E] pt-10" aria-hidden />
                            <h3 className="text-base font-normal text-[#7E7E7E] md:col-start-2 md:col-span-1">Contact</h3>
                            <div className="flex flex-col gap-2 items-start text-black md:col-span-3 md:col-start-3">
                                <span className="min-h-[44px] md:min-h-0 flex items-center -ml-1 pl-1 pr-2 py-2 md:py-0 touch-manipulation">
                                    <AnimatedLink href="mailto:yuntianwang2003@gmail.com" color="#000000">
                                        Email
                                    </AnimatedLink>
                                </span>
                                <span className="min-h-[44px] md:min-h-0 flex items-center -ml-1 pl-1 pr-2 py-2 md:py-0 touch-manipulation">
                                    <AnimatedLink href="https://www.linkedin.com/in/keller-wang-996474227" color="#000000">
                                        LinkedIn
                                    </AnimatedLink>
                                </span>
                                <span className="min-h-[44px] md:min-h-0 flex items-center -ml-1 pl-1 pr-2 py-2 md:py-0 touch-manipulation">
                                    <AnimatedLink href="/resume.pdf" color="#000000">
                                        Resume
                                    </AnimatedLink>
                                </span>
                            </div>
                        </section>
                    </div>
                </FadeInAnimation>
            </main>
        </>
    )
}
