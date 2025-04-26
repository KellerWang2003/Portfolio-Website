import React from 'react';
import ContentWrapper from "@/components/contentWrapper";
import HomeLanding from "@/components/homeLanding";
import Footer from "@/components/footer";
import ProjectsList from "@/components/ProjectsList";
import FadeInAnimation from "@/components/animation/fadeInAnimation";

import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function Index({ params }) {
  // Unwrap params using React.use()
  const { locale } = React.use(params);

  //enable static rendering
  setRequestLocale(locale);
  const t = useTranslations('Index');

  const projects = [
    {
      cover: "/images/Elevate/elevateCover.png",
      title: t('projects.elevate.title'),
      year: "2024",
      tags: ["User Research", "Market Research", "User Testing"],
      description: t('projects.elevate.description'),
      link: "/projects/Elevate"
    },
    {
      cover: "/images/Rocket/rocketEngineCatalogCover.png",
      title: t('projects.rocketEngine.title'),
      year: "2024",
      tags: ["Visual Development", "Interaction Design"],
      description: t('projects.rocketEngine.description'),
      link: "/projects/RocketEngineCatalog"
    },
    {
      cover: "/images/DroneNet/dronenetCover.png",
      title: t('projects.droneNet.title'),
      year: "2023",
      tags: ["Research", "UI Design", "Prototyping"],
      description: t('projects.droneNet.description'),
      link: "/projects/DroneNet"
    },
  ];

  return (
    <ContentWrapper bgColor="#F7F4EC">
      <main className="flex flex-col">
        <HomeLanding />
        <FadeInAnimation delay={1.25} isFirst={true} className="z-10">
          <div className='w-full flex gap-3 items-center -mt-6'>
            <div className="-mt-[2px] w-[10px] aspect-square rotate-[135deg]">
              <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9039 11.7764L12 0.1875C9.09727 0.215672 3.3138 0.255443 0.410993 0.283615L0.387154 1.73443C2.99805 1.70878 6.46412 1.68749 9.51328 1.65983L0 11.1729L1.01457 12.1875L10.5278 2.67435L10.4453 11.7925L11.9039 11.7764Z" fill="#404040" />
              </svg>
            </div>
            <h2 className="text-sm md:text-base font-oxanium text-[#404040]">
              {t('selectedWorks')}
            </h2>
          </div>
        </FadeInAnimation>
        <ProjectsList
          projects={projects}
          sandboxLinkText={t('sandboxLink')}
        />
        <Footer />
      </main>
    </ContentWrapper>
  );
}

