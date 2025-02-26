import ContentWrapper from "@/components/contentWrapper";
import ProjectLanding from "@/components/projectPages/projectLanding";
import Footer from "@/components/footer";
import Content from "./content";

import React from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

const desktopImages = [
    "/images/Rocket/Desktop/HomeDesktop.png",
    "/images/Rocket/Desktop/LandingDesktop.png",
    "/images/Rocket/Desktop/LandingDesktop1.png",
    "/images/Rocket/Desktop/LandingDesktop2.png",
    "/images/Rocket/Desktop/LandingDesktop3.png",
    "/images/Rocket/Desktop/LandingDesktop4.png",
    "/images/Rocket/Desktop/DetailsDesktop.png",
    "/images/Rocket/Desktop/DetailsDesktop1.png",
];

const mobileImagesLanding = [
    "/images/Rocket/Mobile/HomeMobile.png",
    "/images/Rocket/Mobile/LandingMobile.png",
    "/images/Rocket/Mobile/LandingMobile2.png",
    "/images/Rocket/Mobile/LandingMobile3.png",
    "/images/Rocket/Mobile/LandingMobile6.png",
    "/images/Rocket/Mobile/DetailsMobile.png",
];

export default function RocketEngineCatalog({params}) {

    const { locale } = React.use(params);

    //enable static rendering
    setRequestLocale(locale);

    const t = useTranslations('RocketEngineCatalog');

    return (
        <ContentWrapper bgColor="#181818" borderColor="#565F68">
            <main className="relative flex flex-col gap-10">
                <ProjectLanding
                    textColor="#EAEAEA"
                    title={t('title')}
                    tags={[t('tags.visualDevelopment'), t('tags.interactionDesign')]}
                    description={t('description')}
                    images1={desktopImages}
                    images2={mobileImagesLanding}
                />
                <Content />
                <Footer color="#EAEAEA" backgroundColor="#181818" />
            </main>
        </ContentWrapper>
    )
}


