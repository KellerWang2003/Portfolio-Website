'use client'
import ContentWrapper from "@/components/contentWrapper";
import HomeLanding from "@/components/homeLanding";
import ProjectCover from "@/components/projectCover";
import Footer from "@/components/footer";
import Link from "next/link";
import { useCursorHover } from "@/hooks/useCursorHover";

const projects = [
  {
    cover: "/images/Rocket/rocketEngineCatalogCover.png",
    title: "Rocket Engine Catalog",
    year: "2024",
    tags: ["Visual Development", "Interaction Design"],
    description: "An interface that eliminates the barrier between everyday people and the complex world of rocket engines.",
    link: "/projects/RocketEngineCatalog"
  },
  {
    cover: "/images/Rocket/rocketEngineCatalogCover.png",
    title: "Elevate",
    year: "2024",
    tags: ["User Research", "Market Research", "User Testing"],
    description: "Bridging the gap between product design teams and users with disabilities",
    link: "/projects/Elevate"
  },
];


export default function Home() {

  const cursorEvents = useCursorHover("");
  return (
    <ContentWrapper bgColor="#F7F4EC">
      <main className="flex flex-col">
        <HomeLanding />
        <h2 className="text-sm md:text-base font-oxanium text-[#404040] -mt-6 z-10">SELECTED WORKS</h2>
        <div className="flex flex-col gap-24 md:gap-40 py-16">
          {projects.map((project, index) => (
            <ProjectCover
              key={index}
              number={index}
              cover={project.cover}
              year={project.year}
              title={project.title}
              tags={project.tags}
              description={project.description}
              link={project.link}
              isFirst={index === 0}
            />
          ))}
        </div>
        <Link
          href="/sandbox"
          data-cursor="true"
          className="group w-fit flex gap-4 items-end mt-60 mb-8 text-4xl lg:text-5xl text-black font-oxanium"
        >
          <h2 className="w-fit">Check out my sandbox</h2>
          <div className="w-4 h-4 lg:w-6 lg:h-6 rotate-45 lg:rotate-0
          mb-2 lg:mb-3 
          lg:group-hover:rotate-45 transition-transform duration-300 ease-in-out">
            <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9039 11.7764L12 0.1875C9.09727 0.215672 3.3138 0.255443 0.410993 0.283615L0.387154 1.73443C2.99805 1.70878 6.46412 1.68749 9.51328 1.65983L0 11.1729L1.01457 12.1875L10.5278 2.67435L10.4453 11.7925L11.9039 11.7764Z" fill="black" />
            </svg>
          </div>
        </Link>
        <Footer />
      </main>
    </ContentWrapper>
  );
}

