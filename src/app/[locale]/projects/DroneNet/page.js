import ContentWrapper from "@/components/contentWrapper";
import ProjectLanding from "@/components/projectPages/projectLanding";
import Footer from "@/components/footer";
import Content from "./content";

import React from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function DroneNet({params}) {

    const { locale } = React.use(params);

    //enable static rendering
    setRequestLocale(locale);

    const t = useTranslations('DroneNet');
    
    return (
        <ContentWrapper>
            <main className="flex flex-col gap-10 pb-12 text-black font-oxanium">
                <ProjectLanding
                    title={t('title')}
                    tags={[t('tags.research'), t('tags.uiDesign'), t('tags.prototyping')]}
                    description={t('description')}
                    images1={"/images/DroneNet/dronenetCover.png"}
                />
                <Content />
            </main> 
            <Footer />
        </ContentWrapper>
    )
}