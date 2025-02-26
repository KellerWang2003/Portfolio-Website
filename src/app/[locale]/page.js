import React from 'react';
import ContentWrapper from "@/components/contentWrapper";
import HomeLanding from "@/components/homeLanding";
import Footer from "@/components/footer";
import ProjectsList from "@/components/ProjectsList";

import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';

export default function Index({params}) {
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
        <h2 className="text-sm md:text-base font-oxanium text-[#404040] -mt-6 z-10">
          {t('selectedWorks')}
        </h2>
        <ProjectsList 
          projects={projects}
          sandboxLinkText={t('sandboxLink')}
        />
        <Footer />
      </main>
    </ContentWrapper>
  );
}

